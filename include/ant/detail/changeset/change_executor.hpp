#pragma once

#include <ant/detail/schema/component_bitset.hpp>
#include <ant/entity.hpp>

namespace ant::detail {

class catalog;
class entity_registry;
class env_registry;
struct coalesced_changes;

class change_executor
{
public:
    change_executor(entity_registry& entity_registry, env_registry& env_registry, catalog& catalog);

    auto execute(coalesced_changes&& changes) -> void;

private:
    auto execute_envs(coalesced_changes& changes) -> void;
    auto execute_destroy_entities(coalesced_changes& changes) -> void;
    auto execute_entities(coalesced_changes& changes) -> void;

    entity_registry& _entity_registry;
    env_registry& _env_registry;
    catalog& _catalog;
};

} // namespace ant::detail
