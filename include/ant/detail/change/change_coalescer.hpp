#pragma once

#include <ant/component/component_bitset.hpp>
#include <ant/detail/change/change.hpp>
#include <ant/detail/change/coalesced_change.hpp>
#include <ant/detail/containers.hpp>

namespace ant {

class schema;
class change_accumulator;

namespace detail {

class catalog;
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

    auto consume_change(destroy_change& change) -> void;
    auto consume_change(attach_change& change) -> void;
    auto consume_change(detach_change& change) -> void;
    auto consume_change(set_change& change) -> void;
    auto consume_change(unset_change& change) -> void;

    auto ensure_entity(entity entity) -> coalescing_entity&;

private:
    const schema& _schema;
    entity_registry& _entity_registry;
    catalog& _catalog;

    coalesced_changes _changes;
    unordered_map<entity, coalescing_entity> _changing_entities;
};

} // namespace detail
} // namespace ant
