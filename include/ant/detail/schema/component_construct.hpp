#pragma once

#include <functional>

#include <ant/detail/schema/component_meta.hpp>

namespace ant::detail {

using component_construct_fn = std::move_only_function<void(void*)>;

struct component_construct
{
    component_construct_fn fn{};
    std::reference_wrapper<const component_meta> meta;
};

} // namespace ant::detail
