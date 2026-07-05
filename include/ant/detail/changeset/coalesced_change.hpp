#pragma once

#include <ant/detail/changeset/change_accumulator.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/schema/component_construct.hpp>
#include <ant/entity.hpp>

namespace ant::detail {

struct coalesced_entity_change
{
    ant::entity entity;
    std::size_t table_index;
    std::size_t new_table_index;
    vector<component_construct> ctors;
};

using coalesced_set_change = change_accumulator::set_change;
using coalesced_unset_change = change_accumulator::unset_change;

struct coalesced_changes
{
    vector<entity> destroy_entities;
    vector<coalesced_entity_change> entities;
    vector<coalesced_set_change> set_envs;
    vector<coalesced_unset_change> unset_envs;
};

} // namespace ant::detail
