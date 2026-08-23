#pragma once

#include <ant/component/component_index.hpp>
#include <ant/component/component_name.hpp>
#include <ant/component/component_vtable.hpp>

namespace ant {

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
#if ANT_COMPONENT_NAME_ENABLED
    std::string_view name{};
#endif
};

} // namespace ant
