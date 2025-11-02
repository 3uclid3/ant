#pragma once

#include <memory>
#include <new>
#include <type_traits>
#include <utility>

#include <ant/core/assert.hpp>
#include <ant/core/container.hpp>
#include <ant/core/index.hpp>
#include <ant/database/detail/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/schema.hpp>

namespace ant {

template<typename Allocator>
class basic_env
{
public:
    using allocator_type = Allocator;
    using schema_type = basic_schema<rebind_alloc_t<std::byte, allocator_type>>;

public:
    explicit basic_env(const schema_type& schema, const allocator_type& allocator = {}) noexcept;

    basic_env(const basic_env&) = delete;
    auto operator=(const basic_env&) -> basic_env& = delete;

    basic_env(basic_env&&) noexcept(is_nothrow_move_constructible) = default;
    auto operator=(basic_env&&) noexcept(is_nothrow_move_assignable) -> basic_env& = default;

    ~basic_env();

    template<typename T>
    auto has() const noexcept -> bool;

    template<typename T>
    auto get() const noexcept -> const T*;

    template<typename T>
    auto get() noexcept -> T*;

    template<typename T, typename... Args>
    auto set(Args&&... args) -> T&;

    template<typename T>
    auto unset() -> void;

    auto empty() const noexcept -> bool;

private:
    struct component_slot
    {
        using deleter_fn = void (*)(allocator_type&, void*) noexcept;

        detail::component_index index{detail::component_index::npos()};

        void* ptr{nullptr};
        deleter_fn deleter{nullptr};
    };

    using slot_index = basic_index<struct slot_index_tag, detail::component_index::value_type, detail::component_index::npos()>;

private:
    template<typename T>
    auto index_of() const noexcept -> detail::component_index;

    template<typename T>
    auto slot_index_of() const noexcept -> slot_index;

private:
    allocator_type _allocator;

    // dense storage of component slots
    std::vector<component_slot, rebind_alloc_t<component_slot, allocator_type>> _slots{rebind_alloc(_allocator)};

    // sparse mapping from component index to slot index
    std::vector<slot_index, rebind_alloc_t<slot_index, allocator_type>> _component_to_slot{rebind_alloc(_allocator)};

    const schema_type* _schema{nullptr};

    // clang-format off
    static constexpr bool is_nothrow_move_constructible = std::is_nothrow_move_constructible_v<decltype(_slots)> && 
                                                          std::is_nothrow_move_constructible_v<decltype(_component_to_slot)> && 
                                                          std::is_nothrow_move_constructible_v<allocator_type>;

    static constexpr bool is_nothrow_move_assignable = std::is_nothrow_move_assignable_v<decltype(_slots)> &&
                                                       std::is_nothrow_move_assignable_v<decltype(_component_to_slot)> &&
                                                       std::is_nothrow_move_assignable_v<allocator_type>;
    // clang-format on  
};

template<typename Allocator>
basic_env<Allocator>::basic_env(const schema_type& schema, const allocator_type& allocator) noexcept
    : _allocator{allocator}
    , _schema{&schema}
{
    // Pre-size sparse mapping to the full schema size to eliminate per-set resize branches
    _component_to_slot.resize(_schema->size(), slot_index{slot_index::npos()});
}

template<typename Allocator>
basic_env<Allocator>::~basic_env()
{
    for (auto& slot : _slots)
    {
        if (slot.deleter)
        {
            slot.deleter(_allocator, slot.ptr);
        }
    }
}

template<typename Allocator>
template<typename T>
auto basic_env<Allocator>::has() const noexcept -> bool
{
    return get<T>() != nullptr;
}

template<typename Allocator>
template<typename T>
auto basic_env<Allocator>::get() const noexcept -> const T*
{
    ANT_ASSERT(index_of<T>() != detail::component_index::npos(), "component type is not registered in schema");
    const auto index = slot_index_of<T>();
    return index < _slots.size() ? static_cast<const T*>(_slots[index].ptr) : nullptr;
}

template<typename Allocator>
template<typename T>
auto basic_env<Allocator>::get() noexcept -> T*
{
    ANT_ASSERT(index_of<T>() != detail::component_index::npos(), "component type is not registered in schema");
    const auto index = slot_index_of<T>();
    return index < _slots.size() ? (static_cast<T*>(_slots[index].ptr)) : nullptr;
}

template<typename Allocator>
template<typename T, typename... Args>
auto basic_env<Allocator>::set(Args&&... args) -> T&
{
    const auto idx = index_of<T>();
    ANT_ASSERT(idx != detail::component_index::npos(), "component type is not registered in schema");

    if (_component_to_slot[idx] == slot_index::npos())
    {
        // Prevent vector reallocation after constructing T to avoid leaks on throw
        _slots.reserve(_slots.size() + 1);

        auto allocator = rebind_alloc_t<T, allocator_type>(_allocator);
        T* ptr = allocator.allocate(1);

        std::construct_at(ptr, std::forward<Args>(args)...);

        auto& new_slot = _slots.emplace_back();
        new_slot.index = idx;
        new_slot.ptr = ptr;
        new_slot.deleter = [](allocator_type& raw_allocator, void* ptr) noexcept {
            std::destroy_at(static_cast<T*>(ptr));

            auto allocator = rebind_alloc_t<T, allocator_type>(raw_allocator);
            allocator.deallocate(static_cast<T*>(ptr), 1);
        };

        _component_to_slot[idx] = slot_index::cast(_slots.size() - 1);
    }
    else
    {
        auto& slot = _slots[_component_to_slot[idx]];
        auto* p = static_cast<T*>(slot.ptr);
        std::destroy_at(p);
        std::construct_at(p, std::forward<Args>(args)...);
    }

    return *std::launder(static_cast<T*>(_slots[_component_to_slot[idx]].ptr));
}

template<typename Allocator>
template<typename T>
auto basic_env<Allocator>::unset() -> void
{
    const auto idx = index_of<T>();
    ANT_ASSERT(idx != detail::component_index::npos(), "component type is not registered in schema");

    const auto slot_idx = _component_to_slot[idx];
    if (slot_idx == slot_index::npos())
    {
        return;
    }

    auto& slot = _slots[slot_idx];
    slot.deleter(_allocator, slot.ptr);

    // if not last, move last to freed slot
    const bool is_last = slot_idx + 1 == _slots.size();
    if (!is_last)
    {
        auto& last_slot = _slots.back();

        slot = std::move(last_slot);
        _component_to_slot[slot.index] = slot_idx;
    }

    _slots.pop_back();
    _component_to_slot[idx] = slot_index::npos();
}

template<typename Allocator>
auto basic_env<Allocator>::empty() const noexcept -> bool
{
    return _slots.empty();
}

template<typename Allocator>
template<typename T>
auto basic_env<Allocator>::index_of() const noexcept -> detail::component_index
{
    return detail::component_index::cast(_schema->template index_of<T>());
}

template<typename Allocator>
template<typename T>
auto basic_env<Allocator>::slot_index_of() const noexcept -> slot_index
{
    const auto index = index_of<T>();
    ANT_ASSERT(index < _component_to_slot.size(), "component index out of bounds for slot indexes");
    return _component_to_slot[index];
}

} // namespace ant
