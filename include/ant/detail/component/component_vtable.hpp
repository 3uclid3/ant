#pragma once

#include <memory>
#include <new>
#include <type_traits>

#include <ant/component/component_vtable.hpp>

namespace ant::detail {

template<typename T>
[[nodiscard]] consteval auto make_component_vtable() noexcept -> component_vtable
{
    static_assert(std::is_nothrow_destructible_v<T>);
    static_assert(std::is_nothrow_move_constructible_v<T>);

    struct invoker
    {
        static constexpr auto invoke_default_construct(void* ptr) -> void
        {
            std::construct_at(std::launder(reinterpret_cast<T*>(ptr)));
        }

        static constexpr auto invoke_relocate(void* dst, void* src) noexcept -> void
        {
            T* src_v = std::launder(reinterpret_cast<T*>(src));
            new (dst) T(std::move(*src_v));

            std::destroy_at(src_v);
        }

        static constexpr auto invoke_clone(void* dst, const void* src) -> void
        {
            const T* src_v = std::launder(reinterpret_cast<const T*>(src));
            new (dst) T(*src_v);
        }

        static constexpr auto invoke_destroy(void* storage) noexcept -> void
        {
            std::destroy_at(std::launder(reinterpret_cast<T*>(storage)));
        }
    };

    component_vtable vtable{};
    if constexpr (!std::is_trivially_default_constructible_v<T>)
    {
        vtable.default_construct = &invoker::invoke_default_construct;
    }

    if constexpr (!std::is_trivially_copyable_v<T>)
    {
        vtable.clone = &invoker::invoke_clone;
        vtable.relocate = &invoker::invoke_relocate;

        if constexpr (!std::is_trivially_destructible_v<T>)
        {
            vtable.destroy = &invoker::invoke_destroy;
        }
    }
    return vtable;
}

} // namespace ant::detail
