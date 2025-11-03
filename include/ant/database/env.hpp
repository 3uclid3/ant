#pragma once

#include <memory>
#include <new>
#include <type_traits>
#include <utility>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/database/detail/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/schema.hpp>

namespace ant {

class env
{
public:
    explicit env(const schema& schema) noexcept;

    env(const env&) = delete;
    auto operator=(const env&) -> env& = delete;

    env(env&&) noexcept = default;
    auto operator=(env&&) noexcept -> env& = default;

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

private:
    struct component_slot
    {
        detail::component_index index{detail::component_index::npos()};

        std::unique_ptr<void, void (*)(void*)> ptr;
    };

    using slot_index = basic_index<struct slot_index_tag, detail::component_index::value_type, detail::component_index::npos()>;

private:
    auto get_impl(std::size_t idx) const -> const void*;
    auto get_impl(std::size_t idx) -> void*;

    auto unset_impl(std::size_t idx) -> void;

private:
    // dense storage of component slots
    std::vector<component_slot> _slots{};

    // sparse mapping from component index to slot index
    std::vector<slot_index> _component_to_slot{};

    const schema* _schema{nullptr};
};

template<typename T>
auto env::has() const noexcept -> bool
{
    return get<T>() != nullptr;
}

template<typename T>
auto env::get() const noexcept -> const T*
{
    return static_cast<const T*>(get_impl(_schema->template index_of<T>()));
}

template<typename T>
auto env::get() noexcept -> T*
{
    return static_cast<T*>(get_impl(_schema->template index_of<T>()));
}

template<typename T, typename... Args>
auto env::set(Args&&... args) -> T&
{
    const auto idx = _schema->template index_of<T>();
    ANT_ASSERT(idx != detail::component_index::npos(), "Component type not in schema");

    const auto deleter = [](void* p) { delete static_cast<T*>(p); };

    if (_component_to_slot[idx] == slot_index::npos())
    {
        // Prevent vector reallocation after constructing T to avoid leaks on throw
        _slots.reserve(_slots.size() + 1);

        T* ptr = new T(std::forward<Args>(args)...);

        _slots.emplace_back(component_slot{.index = detail::component_index(idx),
                                           .ptr = std::unique_ptr<void, void (*)(void*)>(ptr, deleter)});

        _component_to_slot[idx] = slot_index::cast(_slots.size() - 1);
    }
    else
    {
        auto& slot = _slots[_component_to_slot[idx]];
        slot.ptr = std::unique_ptr<void, void (*)(void*)>(new T(std::forward<Args>(args)...), deleter);
    }

    return *static_cast<T*>(_slots[_component_to_slot[idx]].ptr.get());
}

template<typename T>
auto env::unset() -> void
{
    unset_impl(_schema->template index_of<T>());
}

} // namespace ant
