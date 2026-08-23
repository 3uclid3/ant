#pragma once

#include <ant/component/component_index.hpp>
#include <ant/component/component_meta.hpp>
#include <ant/detail/component/component_vtable.hpp>

namespace ant::detail {

template<typename T>
[[nodiscard]] auto make_component_meta() noexcept -> component_meta
{
    return component_meta{
        .vtable = make_component_vtable<T>(),
        .index = component_index_of<T>(),
        .size = sizeof(T),
        .alignment = alignof(T),
        .stride = component_meta::default_stride<T>,
        .stride_per_block = component_meta::default_stride_per_block<T>,
#if ANT_COMPONENT_NAME_ENABLED
        .name = component_name_of<T>(),
#endif
    };
}

} // namespace ant::detail
