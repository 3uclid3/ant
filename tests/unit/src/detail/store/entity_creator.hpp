#pragma once

#include <cstddef>
#include <span>

#include <ant.testing/component.hpp>
#include <ant/component/component_bitset.hpp>
#include <ant/detail/component/component_construct.hpp>
#include <ant/detail/core/containers.hpp>
#include <ant/detail/store/catalog.hpp>
#include <ant/detail/store/entity_registry.hpp>
#include <ant/schema.hpp>

namespace ant::detail {

class entity_creator
{
public:
    entity_creator(const schema& schema, entity_registry& entity_registry, catalog& catalog)
        : _schema(schema)
        , _entity_registry(entity_registry)
        , _catalog(catalog)
    {
    }

    template<std::size_t... Cs>
    requires(sizeof...(Cs) > 0)
    [[nodiscard]] auto create_entity() -> entity;

    template<std::size_t... Cs, typename... Args>
    requires(sizeof...(Cs) > 0 && sizeof...(Cs) == sizeof...(Args))
    [[nodiscard]] auto create_entity(Args... values) -> entity;

    template<std::size_t... Cs>
    requires(sizeof...(Cs) > 1)
    [[nodiscard]] auto create_entity(std::size_t value) -> entity;

private:
    const schema& _schema;
    entity_registry& _entity_registry;
    catalog& _catalog;
};

template<std::size_t... Cs>
requires(sizeof...(Cs) > 0)
[[nodiscard]] auto entity_creator::create_entity() -> entity
{
    const entity e = _entity_registry.create();

    const std::size_t table = _catalog.ensure_of(component_bitset_of<testing::component<Cs>...>());
    const std::size_t row = _catalog.at(table).insert(e);
    _entity_registry.relocate(e, {.table = table, .row = row});

    return e;
}

template<std::size_t... Cs, typename... Args>
requires(sizeof...(Cs) > 0 && sizeof...(Cs) == sizeof...(Args))
[[nodiscard]] auto entity_creator::create_entity(Args... values) -> entity
{
    vector<component_construct> components;
    components.reserve(sizeof...(Cs));
    (components.emplace_back(make_component_construct<testing::component<Cs>>(_schema, static_cast<std::size_t>(values))), ...);

    const entity e = _entity_registry.create();

    const std::size_t table = _catalog.ensure_of(component_bitset_of<testing::component<Cs>...>());
    const std::size_t row = _catalog.at(table).insert(e, std::span(components));
    _entity_registry.relocate(e, {.table = table, .row = row});

    return e;
}

template<std::size_t... Cs>
requires(sizeof...(Cs) > 1)
[[nodiscard]] auto entity_creator::create_entity(std::size_t value) -> entity
{
    vector<component_construct> components;
    components.reserve(sizeof...(Cs));
    (components.emplace_back(make_component_construct<testing::component<Cs>>(_schema, value)), ...);

    const entity e = _entity_registry.create();

    const std::size_t table = _catalog.ensure_of(component_bitset_of<testing::component<Cs>...>());
    const std::size_t row = _catalog.at(table).insert(e, std::span(components));
    _entity_registry.relocate(e, {.table = table, .row = row});

    return e;
}
} // namespace ant::detail
