#pragma once

#include <memory>
#include <new>
#include <type_traits>
#include <utility>
#include <vector>

#include <ant/core/allocator.hpp>
#include <ant/core/assert.hpp>
#include <ant/core/index.hpp>
#include <ant/database/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/schema.hpp>

namespace ant {

template<typename Database>
class basic_env
{
public:
    using allocator_type = Database::allocator_type;
    using schema_type = basic_schema<Database>;

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
    struct slot
    {
        using deleter_fn = void (*)(allocator_type&, void*) noexcept;

        component_index index{component_index::npos()};
        void* ptr{nullptr};
        deleter_fn deleter{nullptr};
    };

    using slot_index = basic_index<struct slot_index_tag, component_index::value_type>;

    using slots_type = std::vector<slot, rebind_allocator_t<slot, allocator_type>>;
    using slot_indexes_type = std::vector<slot_index, rebind_allocator_t<slot_index, allocator_type>>;

    // clang-format off
    static constexpr bool is_nothrow_move_constructible = std::is_nothrow_move_constructible_v<slots_type> && 
                                                          std::is_nothrow_move_constructible_v<slot_indexes_type> && 
                                                          std::is_nothrow_move_constructible_v<allocator_type>;

    static constexpr bool is_nothrow_move_assignable = std::is_nothrow_move_assignable_v<slots_type> &&
                                                       std::is_nothrow_move_assignable_v<slot_indexes_type> &&
                                                       std::is_nothrow_move_assignable_v<allocator_type>;
    // clang-format on  

    template<typename T>
    auto index_of() const noexcept -> component_index;

    template<typename T>
    auto slot_index_of() const noexcept -> slot_index;

private:
    allocator_type _allocator;

    // dense storage of component slots
    slots_type _slots{typename slots_type::allocator_type{_allocator}};

    // sparse mapping from component index to slot index
    slot_indexes_type _slot_indexes{typename slot_indexes_type::allocator_type{_allocator}};

    // schema reference
    const schema_type* _schema{nullptr};
};

template<typename Database>
basic_env<Database>::basic_env(const schema_type& schema, const allocator_type& allocator) noexcept
    : _allocator{allocator}, _schema{&schema}
{
    // Pre-size sparse mapping to the full schema size to eliminate per-set resize branches
    _slot_indexes.resize(_schema->size(), slot_index{slot_index::npos()});
}

template<typename Database>
basic_env<Database>::~basic_env()
{
    for (auto& slot : _slots)
    {
        slot.deleter(_allocator, slot.ptr);
    }
}

template<typename Database>
template<typename T>
auto basic_env<Database>::has() const noexcept -> bool
{
    return get<T>() != nullptr;
}

template<typename Database>
template<typename T>
auto basic_env<Database>::get() const noexcept -> const T*
{
    ANT_ASSERT(index_of<T>() != component_index::npos(), "component type is not registered in schema");
    const auto index = slot_index_of<T>();
    return index < _slots.size() ? static_cast<const T*>(_slots[index].ptr) : nullptr;
}

template<typename Database>
template<typename T>
auto basic_env<Database>::get() noexcept -> T*
{
    ANT_ASSERT(index_of<T>() != component_index::npos(), "component type is not registered in schema");
    const auto index = slot_index_of<T>();
    return index < _slots.size() ? (static_cast<T*>(_slots[index].ptr)) : nullptr;
}

template<typename Database>
template<typename T, typename... Args>
auto basic_env<Database>::set(Args&&... args) -> T&
{
    const auto idx = index_of<T>();
    ANT_ASSERT(idx != component_index::npos(), "component type is not registered in schema");

    if (_slot_indexes[idx] == slot_index::npos())
    {
        // Prevent vector reallocation after constructing T to avoid leaks on throw
        _slots.reserve(_slots.size() + 1);

        auto allocator = rebind_allocator<T>(_allocator);
        T* ptr = allocator.allocate(1);

        std::construct_at(ptr, std::forward<Args>(args)...);

        auto& new_slot = _slots.emplace_back();
        new_slot.index = idx;
        new_slot.ptr = ptr;
        new_slot.deleter = [](allocator_type& raw_allocator, void* ptr) noexcept {
            std::destroy_at(static_cast<T*>(ptr));

            auto allocator = rebind_allocator<T>(raw_allocator);
            allocator.deallocate(static_cast<T*>(ptr), 1);
        };

        _slot_indexes[idx] = slot_index(static_cast<slot_index::value_type>(_slots.size() - 1));
    }
    else
    {
        auto& slot = _slots[_slot_indexes[idx]];
        auto* p = static_cast<T*>(slot.ptr);
        std::destroy_at(p);
        std::construct_at(p, std::forward<Args>(args)...);
    }

    return *std::launder(static_cast<T*>(_slots[_slot_indexes[idx]].ptr));
}

template<typename Database>
template<typename T>
auto basic_env<Database>::unset() -> void
{
    const auto idx = index_of<T>();
    ANT_ASSERT(idx != component_index::npos(), "component type is not registered in schema");

    const auto slot_idx = _slot_indexes[idx];
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
        _slot_indexes[slot.index] = slot_idx;
    }

    _slots.pop_back();
    _slot_indexes[idx] = slot_index::npos();
}

template<typename Database>
auto basic_env<Database>::empty() const noexcept -> bool
{
    return _slots.empty();
}

template<typename Database>
template<typename T>
auto basic_env<Database>::index_of() const noexcept -> component_index
{
    return _schema->template index_of<T>();
}

template<typename Database>
template<typename T>
auto basic_env<Database>::slot_index_of() const noexcept -> slot_index
{
    const auto index = index_of<T>();
    ANT_ASSERT(index < _slot_indexes.size(), "component index out of bounds for slot indexes");
    return _slot_indexes[index];
}

} // namespace ant