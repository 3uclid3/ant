#include <ant/detail/changeset/change_coalescer.hpp>

#include <ant/detail/algorithm.hpp>
#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/changeset/change_accumulator.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/entity/entity_registry.hpp>

namespace ant::detail {

change_coalescer::coalescing_entity::coalescing_entity(std::pmr::memory_resource* memory_resource)
    : detach_components(memory_resource)
    , attach_components(memory_resource)
    , attach_component_ctors(memory_resource)
{
}

change_coalescer::change_coalescer(const schema& schema, entity_registry& entity_registry, catalog& catalog, std::pmr::memory_resource* memory_resource)
    : _schema(schema)
    , _entity_registry(entity_registry)
    , _catalog(catalog)
    , _changes(memory_resource)
    , _changing_entities(memory_resource)
    , _memory_resource(memory_resource)
{
}

auto change_coalescer::consume(change_accumulator& accumulator) -> void
{
    for (change_accumulator::change& c : accumulator)
    {
        std::visit([this](auto&& c) { consume_change(c); }, c);
    }

    accumulator.clear();
}

auto change_coalescer::coalesce() -> coalesced_changes
{
    for (auto&& [e, coalesce_e] : _changing_entities)
    {
        const auto loc = _entity_registry.locate(e);

        component_bitset bitset = loc == entity_location::invalid ? component_bitset{_memory_resource} : _catalog.at(loc.table).components();
        bitset |= coalesce_e.attach_components;

        if (coalesce_e.detach_components.any())
        {
            const std::size_t size = std::max(bitset.size(), coalesce_e.attach_components.size());

            if (coalesce_e.detach_components.size() < size)
            {
                coalesce_e.detach_components.resize(size);
            }

            bitset &= ~coalesce_e.detach_components;
        }

        std::pmr::vector<component_construct> ctors{std::move(coalesce_e.attach_component_ctors)};
        ctors.reserve(bitset.count());
        bitset.for_each_set([this, &coalesce_e, &ctors](std::size_t component_index) {
            if (!coalesce_e.attach_components.test(component_index))
            {
                ctors.emplace_back(component_construct{.meta = &_schema.meta_of(component_index)});
            }
        });
        ANT_ASSERT(ctors.size() == bitset.count(), "ctors size ({}) does not match bitset count ({})", ctors.size(), bitset.count());

        std::ranges::sort(ctors, [](const auto& a, const auto& b) { return a.meta->index < b.meta->index; });

        _changes.entities.push_back(
            {.entity = e,
             .table_index = loc.table,
             .new_table_index = _catalog.ensure_of(bitset),
             .ctors = std::move(ctors)});
    }

    return std::move(_changes);
}

auto change_coalescer::consume_change(change_accumulator::destroy_change& change) -> void
{
    if (std::ranges::none_of(_changes.destroy_entities, [&change](entity e) { return e == change.entity; }))
    {
        _changes.destroy_entities.emplace_back(change.entity);
        _changing_entities.erase(change.entity); // destroy has priority, make sure we dont insert afterward
    }
}

auto change_coalescer::consume_change(change_accumulator::attach_change& change) -> void
{
    if (std::ranges::any_of(_changes.destroy_entities, [&change](entity e) { return e == change.entity; }))
    {
        return;
    }

    coalescing_entity& entity = ensure_entity(change.entity);

    // detach has priority, ignore the attach
    if (entity.detach_components.test(change.ctor.meta->index))
    {
        return;
    }

    if (!entity.attach_components.test(change.ctor.meta->index))
    {
        entity.attach_component_ctors.emplace_back(std::move(change.ctor));
        entity.attach_components.set_safe(change.ctor.meta->index);
    }
}

auto change_coalescer::consume_change(change_accumulator::detach_change& change) -> void
{
    if (std::ranges::any_of(_changes.destroy_entities, [&change](entity e) { return e == change.entity; }))
    {
        return;
    }

    coalescing_entity& entity = ensure_entity(change.entity);

    // detach has priority, remove attach
    if (entity.attach_components.test(change.meta->index))
    {
        ranges::remove_one_if(entity.attach_component_ctors, [&change](const auto& ctor) { return change.meta == ctor.meta; });
        entity.attach_components.reset_safe(change.meta->index);
    }

    entity.detach_components.set_safe(change.meta->index);
}

auto change_coalescer::consume_change(change_accumulator::set_change& change) -> void
{
    const component_meta* meta = change.ctor.meta;

    if (std::ranges::none_of(_changes.unset_envs, [meta](const auto& c) { return c.meta == meta; }) && std::ranges::none_of(_changes.set_envs, [meta](const auto& c) { return c.ctor.meta == meta; }))
    {
        _changes.set_envs.emplace_back(std::move(change));
    }
}

auto change_coalescer::consume_change(change_accumulator::unset_change& change) -> void
{
    const component_meta* meta = change.meta;

    if (const auto it = std::ranges::find_if(_changes.set_envs, [meta](auto&& c) { return c.ctor.meta == meta; }); it != _changes.set_envs.end())
    {
        _changes.set_envs.erase(it);
    }

    if (std::ranges::none_of(_changes.unset_envs, [meta](auto&& c) { return c.meta == meta; }))
    {
        _changes.unset_envs.emplace_back(std::move(change));
    }
}

auto change_coalescer::ensure_entity(entity entity) -> coalescing_entity&
{
    auto it = _changing_entities.find(entity);

    if (it == _changing_entities.end())
    {
        auto result = _changing_entities.insert(std::make_pair(entity, coalescing_entity{_memory_resource}));
        ANT_ASSERT(result.second, "failed to insert new coalescing_entity");
        it = result.first;
    }

    return it->second;
}

} // namespace ant::detail
