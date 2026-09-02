#pragma once

#include <ant/component/component_bitset.hpp>
#include <ant/detail/change/change.hpp>
#include <ant/detail/component/component_construct.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/entity.hpp>

namespace ant::detail {

struct coalesced_destroy_entity_change
{
    ant::entity entity;
    component_bitset logical_detach_components;
};

struct coalesced_entity_change
{
    ant::entity entity;
    std::size_t table_index;
    std::size_t new_table_index;
    vector<component_construct> ctors;
    component_bitset logical_attach_components;
    component_bitset logical_detach_components;
};

using coalesced_set_change = set_change;
using coalesced_unset_change = unset_change;

struct coalesced_changes
{
    constexpr auto empty() const noexcept -> bool
    {
        return destroy_entities.empty() && entities.empty() && set_envs.empty() && unset_envs.empty();
    }

    vector<coalesced_destroy_entity_change> destroy_entities;
    vector<coalesced_entity_change> entities;
    vector<coalesced_set_change> set_envs;
    vector<coalesced_unset_change> unset_envs;
};

} // namespace ant::detail
