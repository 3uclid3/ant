#pragma once

#include <ant/detail/changeset/coalesced_change.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/schema/component_bitset.hpp>

namespace ant::detail {

class catalog;
class change_accumulator;
class entity_registry;

class change_coalescer
{
public:
    change_coalescer(const schema& schema, entity_registry& entity_registry, catalog& catalog);

    auto consume(change_accumulator& accumulator) -> void;
    auto coalesce() -> coalesced_changes;

private:
    struct coalescing_entity
    {
        component_bitset detach_components;
        component_bitset attach_components;
        vector<component_construct> attach_component_ctors;
    };

    auto consume_change(change_accumulator::destroy_change& change) -> void;
    auto consume_change(change_accumulator::attach_change& change) -> void;
    auto consume_change(change_accumulator::detach_change& change) -> void;
    auto consume_change(change_accumulator::set_change& change) -> void;
    auto consume_change(change_accumulator::unset_change& change) -> void;

    auto ensure_entity(entity entity) -> coalescing_entity&;

private:
    const schema& _schema;
    entity_registry& _entity_registry;
    catalog& _catalog;

    coalesced_changes _changes;
    unordered_map<entity, coalescing_entity> _changing_entities;
};

} // namespace ant::detail
