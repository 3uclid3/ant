#include <ant/detail/change/change_executor.hpp>

#include <ant/detail/change/coalesced_change.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/lifecycle/lifecycle_registry.hpp>
#include <ant/detail/store.hpp>

namespace ant::detail {

change_executor::change_executor(store& store, lifecycle_registry& lifecycle_registry) noexcept
    : _store(store)
    , _lifecycle_registry(lifecycle_registry)
{
}

auto change_executor::execute(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void
{
    execute_envs(changes);
    execute_destroy_entities(changes, lifecycle_accumulator);
    execute_entities(changes, lifecycle_accumulator);
}

auto change_executor::execute_envs(coalesced_changes& changes) -> void
{
    for (const auto& change : changes.unset_envs)
    {
        _store.envs.unset(*change.meta);
    }

    for (auto& change : changes.set_envs)
    {
        _store.envs.set(std::move(change.ctor));
    }

    changes.unset_envs.clear();
    changes.set_envs.clear();
}

auto change_executor::execute_destroy_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void
{
    for (const auto& change : changes.destroy_entities)
    {
        const entity entity = change.entity;
        if (_store.entities.contains(entity))
        {
            if (const entity_location loc = _store.entities.locate(entity); loc != entity_location::invalid)
            {
                table& storage = _store.catalog.at(loc.table);
                change.logical_detach_components.for_each_set([this, entity, loc, &storage, &lifecycle_accumulator](component_bitset::size_type index) {
                    _lifecycle_registry.invoke_detach({lifecycle_accumulator, entity, storage, loc.row, static_cast<component_index>(index)});
                });

                storage.erase(entity);
            }

            _store.entities.destroy(entity);
        }
    }

    changes.destroy_entities.clear();
}

auto change_executor::execute_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void
{
    for (auto& change : changes.entities)
    {
        if (change.table_index != entity_location::invalid.table)
        {
            const entity_location loc = _store.entities.locate(change.entity);
            table& storage = _store.catalog.at(loc.table);
            change.logical_detach_components.for_each_set([this, &change, loc, &storage, &lifecycle_accumulator](component_bitset::size_type index) {
                _lifecycle_registry.invoke_detach({lifecycle_accumulator, change.entity, storage, loc.row, static_cast<component_index>(index)});
            });
        }
    }

    for (auto& change : changes.entities)
    {
        std::size_t row = entity_location::invalid.row;

        if (change.table_index == entity_location::invalid.table)
        {
            row = _store.catalog.at(change.new_table_index).insert(change.entity, std::span(change.ctors));
        }
        else if (change.new_table_index == entity_location::invalid.table)
        {
            _store.catalog.at(change.table_index).erase(change.entity);
        }
        else
        {
            row = _store.catalog.at(change.new_table_index).splice(change.entity, _store.catalog.at(change.table_index), std::span(change.ctors));
        }

        _store.entities.relocate(change.entity, {.table = change.new_table_index, .row = row});
    }

    for (auto& change : changes.entities)
    {
        if (change.new_table_index != entity_location::invalid.table)
        {
            const entity_location loc = _store.entities.locate(change.entity);
            table& storage = _store.catalog.at(loc.table);
            change.logical_attach_components.for_each_set([this, &change, loc, &storage, &lifecycle_accumulator](component_bitset::size_type index) {
                _lifecycle_registry.invoke_attach({lifecycle_accumulator, change.entity, storage, loc.row, static_cast<component_index>(index)});
            });
        }
    }

    changes.entities.clear();
}

} // namespace ant::detail
