#include <ant/detail/changeset/change_executor.hpp>

#include <ant/detail/changeset/coalesced_change.hpp>
#include <ant/detail/changeset/lifecycle_registry.hpp>
#include <ant/detail/store/entity_location.hpp>
#include <ant/detail/store/store.hpp>

namespace ant::detail {

change_executor::change_executor(store& store, lifecycle_registry& lifecycle) noexcept
    : _store(store)
    , _lifecycle(lifecycle)
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
        if (_store.entities.contains(change.entity))
        {
            const entity_location location = _store.entities.locate(change.entity);

            if (location != entity_location::invalid)
            {
                invoke_detach(change.logical_detach_components, change.entity, location, lifecycle_accumulator);
                erase_entity(change.entity, location);
            }

            _store.entities.destroy(change.entity);
        }
    }

    changes.destroy_entities.clear();
}

auto change_executor::execute_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void
{
    for (auto& change : changes.entities)
    {
        const entity_location location = _store.entities.locate(change.entity);

        if (location != entity_location::invalid)
        {
            invoke_detach(change.logical_detach_components, change.entity, location, lifecycle_accumulator);
        }
    }

    for (auto& change : changes.entities)
    {
        const entity_location location = _store.entities.locate(change.entity);
        entity_location new_location = entity_location::invalid;

        if (location == entity_location::invalid)
        {
            new_location.row = insert_entity(change.entity, change.new_table_index, std::span(change.ctors));
            new_location.table = change.new_table_index;
        }
        else if (change.new_table_index == entity_location::invalid.table)
        {
            erase_entity(change.entity, location);
        }
        else
        {
            new_location.row = move_entity(change.entity, location, change.new_table_index, change.ctors);
            new_location.table = change.new_table_index;
        }

        _store.entities.relocate(change.entity, new_location);
    }

    for (auto& change : changes.entities)
    {
        if (change.new_table_index != entity_location::invalid.table)
        {
            // entity is new or have relocated, do not use location from change
            invoke_attach(change.logical_attach_components, change.entity, _store.entities.locate(change.entity), lifecycle_accumulator);
        }
    }

    changes.entities.clear();
}

auto change_executor::insert_entity(entity e, std::size_t table, std::span<component_construct> ctors) -> std::size_t
{
    return table_at(table).insert(e, std::span(ctors));
}

auto change_executor::move_entity(entity e, entity_location location, std::size_t new_table, std::span<component_construct> ctors) -> std::size_t
{
    auto&& [row, replacement] = _store.catalog.at(new_table).splice_swap_back(e, _store.catalog.at(location.table), ctors);
    if (replacement != entity_traits::invalid())
    {
        _store.entities.relocate(replacement, _store.entities.locate(e));
    }
    return row;
}

auto change_executor::erase_entity(entity e, entity_location location) -> void
{
    erase_entity(e, location, table_at(location.table));
}

auto change_executor::erase_entity(entity e, entity_location location, table& t) -> void
{
    const auto replacement = t.erase_swap_back(e);

    if (replacement != entity_traits::invalid())
    {
        _store.entities.relocate(replacement, location);
    }
}

auto change_executor::invoke_attach(const component_bitset& components, entity e, entity_location location, change_accumulator& lifecycle_accumulator) -> void
{
    auto& table = _store.catalog.at(location.table);
    components.for_each_set(
        [this, e, row = location.row, &table, &lifecycle_accumulator](component_bitset::size_type index) {
            _lifecycle.invoke_attach({lifecycle_accumulator, e, table, row, static_cast<component_index>(index)});
        });
}

auto change_executor::invoke_detach(const component_bitset& components, entity e, entity_location location, change_accumulator& lifecycle_accumulator) -> void
{
    auto& table = _store.catalog.at(location.table);
    components.for_each_set(
        [this, e, row = location.row, &table, &lifecycle_accumulator](component_bitset::size_type index) {
            _lifecycle.invoke_detach({lifecycle_accumulator, e, table, row, static_cast<component_index>(index)});
        });
}

auto change_executor::table_at(std::size_t index) noexcept -> table&
{
    return _store.catalog.at(index);
}

} // namespace ant::detail
