#pragma once

#include <variant>

#include <ant/detail/component/component_construct.hpp>
#include <ant/entity.hpp>

namespace ant {

struct component_meta;

namespace detail {

struct destroy_change
{
    ant::entity entity;
};

struct attach_change
{
    ant::entity entity;
    component_construct ctor;
};

struct detach_change
{
    ant::entity entity;
    const component_meta* meta{nullptr};
};

struct set_change
{
    component_construct ctor;
};

struct unset_change
{
    const component_meta* meta{nullptr};
};

using change = std::variant<
    destroy_change,
    attach_change,
    detach_change,
    set_change,
    unset_change>;

} // namespace detail
} // namespace ant
