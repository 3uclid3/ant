#pragma once

#include <span>

#include <ant/component/component_bitset.hpp>
#include <ant/entity.hpp>

namespace ant {
class change_accumulator;
} // namespace ant

namespace ant::detail {

class lifecycle_registry;
class table;

struct coalesced_changes;
struct component_construct;
struct entity_location;
struct store;

class change_executor
{
public:
    change_executor(store& store, lifecycle_registry& lifecycle) noexcept;

    auto execute(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void;

private:
    auto execute_envs(coalesced_changes& changes) -> void;
    auto execute_destroy_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void;
    auto execute_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void;

    // insert/erase from table and relocate if necessary with entity_registry
    auto insert_entity(entity e, std::size_t table, std::span<component_construct> ctors) -> std::size_t;
    auto move_entity(entity e, entity_location location, std::size_t new_table, std::span<component_construct> ctors) -> std::size_t;
    auto erase_entity(entity e, entity_location location) -> void;
    auto erase_entity(entity e, entity_location location, table& t) -> void;

    auto invoke_attach(const component_bitset& components, entity e, entity_location location, change_accumulator& lifecycle_accumulator) -> void;
    auto invoke_detach(const component_bitset& components, entity e, entity_location location, change_accumulator& lifecycle_accumulator) -> void;

    auto table_at(std::size_t index) noexcept -> table&;

    store& _store;
    lifecycle_registry& _lifecycle;
};

} // namespace ant::detail
