#pragma once

#include <string_view>

#include <ant/database/detail/component/component_index.hpp>
#include <ant/database/detail/component/component_name.hpp>
#include <ant/database/detail/component/component_vtable.hpp>

namespace ant::detail {

struct component_meta
{
    template<typename T>
    static constexpr std::size_t default_stride{((sizeof(T) + alignof(T) - 1) / alignof(T)) * alignof(T)};

    template<typename T>
    static constexpr std::size_t default_stride_per_block{[]() {
        if constexpr (sizeof(T) <= 64)
            return 64;
        else if constexpr (sizeof(T) <= 256)
            return 16;
        else
            return 4;
    }()};

    component_vtable vtable{};
    component_index index{0};
    std::size_t size{0};
    std::size_t alignment{0};
    std::size_t stride{0};
    std::size_t stride_per_block{0};
    std::string_view name{};
};

template<typename T>
[[nodiscard]] auto component_meta_of() noexcept -> component_meta
{
    return component_meta{
        .vtable = component_vtable_of<T>(),
        .index = component_index_of<T>(),
        .size = sizeof(T),
        .alignment = alignof(T),
        .stride = component_meta::default_stride<T>,
        .stride_per_block = component_meta::default_stride_per_block<T>,
        .name = component_name_of<T>(),
    };
}

} // namespace ant::detail
