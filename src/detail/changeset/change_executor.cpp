#include <ant/detail/changeset/change_executor.hpp>

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/catalog/table.hpp>
#include <ant/detail/changeset/coalesced_change.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/detail/env/env_registry.hpp>

namespace ant::detail {

change_executor::change_executor(entity_registry& entity_registry, env_registry& env_registry, catalog& catalog)
    : _entity_registry(entity_registry)
    , _env_registry(env_registry)
    , _catalog(catalog)
{
}

auto change_executor::execute(coalesced_changes&& changes) -> void
{
    execute_envs(changes);
    execute_destroy_entities(changes);
    execute_entities(changes);
}

auto change_executor::execute_envs(coalesced_changes& changes) -> void
{
    for (const auto& change : changes.unset_envs)
    {
        _env_registry.unset(*change.meta);
    }

    for (auto& change : changes.set_envs)
    {
        _env_registry.set(std::move(change.ctor));
    }
}

auto change_executor::execute_destroy_entities(coalesced_changes& changes) -> void
{
    for (const auto& entity : changes.destroy_entities)
    {
        _entity_registry.destroy(entity);
    }
}

auto change_executor::execute_entities(coalesced_changes& changes) -> void
{
    for (auto& change : changes.entities)
    {
        // new entry
        if (change.table_index == entity_location::invalid.table)
        {
            _catalog.at(change.new_table_index).insert(change.entity, std::span(change.ctors));
        }
        else // splice
        {
            _catalog.at(change.new_table_index).splice(change.entity, _catalog.at(change.table_index), std::span(change.ctors));
        }
    }
}

} // namespace ant::detail
