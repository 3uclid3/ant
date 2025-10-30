#pragma once

#include <cstddef>
#include <cstdint>
#include <memory>
#include <new>
#include <string_view>

#include <ant/core/type_info.hpp>
#include <ant/database/component_index.hpp>

namespace ant::detail {

enum class component_id : std::uint32_t
{
};

using component_version = std::uint32_t;

struct component_vtable
{
    using default_construct_fn = void (*)(void*);
    using relocate_fn = void (*)(void*, void*) noexcept;
    using clone_fn = void (*)(void*, const void*);
    using destroy_fn = void (*)(void*) noexcept;

    template<typename T>
    static consteval auto of() noexcept -> component_vtable;

    template<typename T>
    static constexpr auto invoke_default_construct(void* storage) -> void;

    template<typename T>
    static constexpr auto invoke_relocate(void* dst, void* src) noexcept -> void;

    template<typename T>
    static constexpr auto invoke_clone(void* dst, const void* src) -> void;

    template<typename T>
    static constexpr auto invoke_destroy(void* storage) noexcept -> void;

    constexpr auto operator==(const component_vtable& other) const noexcept -> bool = default;

    default_construct_fn default_construct{nullptr};
    relocate_fn relocate{nullptr};
    clone_fn clone{nullptr};
    destroy_fn destroy{nullptr};
};

struct component_meta
{
    template<typename T>
    static constexpr auto make(std::string_view name, component_version version = 0) noexcept -> component_meta;

    component_id id{};
    component_index index{component_index::npos()};
    component_version version{0};
    component_vtable vtable{};
    std::size_t size{0};
    std::size_t alignment{0};
    std::size_t block_size{32}; // T components per block
    std::string_view name{};
};

template<typename T>
consteval auto component_vtable::of() noexcept -> component_vtable
{
    static_assert(std::is_nothrow_destructible_v<T>);
    static_assert(std::is_nothrow_move_constructible_v<T>);

    component_vtable vtable{};

    if constexpr (!std::is_trivially_default_constructible_v<T>)
    {
        vtable.default_construct = &invoke_default_construct<T>;
    }

    if constexpr (!std::is_trivially_copyable_v<T>)
    {
        vtable.clone = &invoke_clone<T>;
        vtable.relocate = &invoke_relocate<T>;

        if constexpr (!std::is_trivially_destructible_v<T>)
        {
            vtable.destroy = &invoke_destroy<T>;
        }
    }

    return vtable;
}

template<typename T>
constexpr auto component_vtable::invoke_default_construct(void* storage) -> void
{
    std::construct_at(std::launder(reinterpret_cast<T*>(storage)));
}

template<typename T>
constexpr auto component_vtable::invoke_relocate(void* dst, void* src) noexcept -> void
{
    T* src_v = std::launder(reinterpret_cast<T*>(src));
    new (dst) T(std::move(*src_v));

    std::destroy_at(src_v);
}

template<typename T>
constexpr auto component_vtable::invoke_clone(void* dst, const void* src) -> void
{
    const T* src_v = std::launder(reinterpret_cast<const T*>(src));
    new (dst) T(*src_v);
}

template<typename T>
constexpr auto component_vtable::invoke_destroy(void* storage) noexcept -> void
{
    std::destroy_at(std::launder(reinterpret_cast<T*>(storage)));
}

template<typename T>
constexpr auto component_meta::make(std::string_view name, component_version version) noexcept -> component_meta
{
    component_meta meta{};

    meta.id = static_cast<component_id>(type_hash<T>::value());
    meta.name = name;
    meta.size = sizeof(T);
    meta.alignment = alignof(T);
    meta.version = version;
    meta.vtable = component_vtable::of<T>();

    return meta;
}

} // namespace ant::detail