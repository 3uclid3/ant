#pragma once

#include <memory_resource>

#include <ant/detail/changeset/change_accumulator.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/schema/component_construct.hpp>
#include <ant/entity.hpp>

namespace ant::detail {

struct coalesced_entity_change
{
    ant::entity entity;
    std::size_t table_index;
    std::size_t new_table_index;
    std::pmr::vector<component_construct> ctors;
};

using coalesced_set_change = change_accumulator::set_change;
using coalesced_unset_change = change_accumulator::unset_change;

struct coalesced_changes
{
    coalesced_changes(std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource())
        : destroy_entities(memory_resource)
        , entities(memory_resource)
        , set_envs(memory_resource)
        , unset_envs(memory_resource)
    {
    }

    std::pmr::vector<entity> destroy_entities;
    std::pmr::vector<coalesced_entity_change> entities;
    std::pmr::vector<coalesced_set_change> set_envs;
    std::pmr::vector<coalesced_unset_change> unset_envs;
};

} // namespace ant::detail
