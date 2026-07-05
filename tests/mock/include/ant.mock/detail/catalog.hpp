#pragma once

#include <cstddef>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>
#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_registry.hpp>

namespace ant::detail {

template<std::size_t Size>
struct catalog_fixture : schema_fixture<Size>
{
    template<std::size_t... Cs>
    requires(sizeof...(Cs) > 0)
    [[nodiscard]] auto create_entity() -> entity
    {
        const entity e = entity_registry.create();

        const std::size_t table = catalog.ensure_of(component_bitset_of<component<Cs>...>());
        const std::size_t row = catalog.at(table).insert(e);
        entity_registry.relocate(e, {.table = table, .row = row});

        return e;
    }

    template<std::size_t... Cs, typename... Args>
    requires(sizeof...(Cs) > 0 && sizeof...(Cs) == sizeof...(Args))
    [[nodiscard]] auto create_entity(Args... values) -> entity
    {
        vector<component_construct> components;
        components.reserve(sizeof...(Cs));
        (components.emplace_back(make_component_construct<component<Cs>>(this->schema, static_cast<std::size_t>(values))), ...);

        const entity e = entity_registry.create();

        const std::size_t table = catalog.ensure_of(component_bitset_of<component<Cs>...>());
        const std::size_t row = catalog.at(table).insert(e, std::span(components));
        entity_registry.relocate(e, {.table = table, .row = row});

        return e;
    }

    template<std::size_t... Cs>
    requires(sizeof...(Cs) > 1)
    [[nodiscard]] auto create_entity(std::size_t value) -> entity
    {
        vector<component_construct> components;
        components.reserve(sizeof...(Cs));
        (components.emplace_back(make_component_construct<component<Cs>>(this->schema, value)), ...);

        const entity e = entity_registry.create();

        const std::size_t table = catalog.ensure_of(component_bitset_of<component<Cs>...>());
        const std::size_t row = catalog.at(table).insert(e, std::span(components));
        entity_registry.relocate(e, {.table = table, .row = row});

        return e;
    }

    detail::catalog catalog{schema_fixture<Size>::schema};
    detail::entity_registry entity_registry;
};

} // namespace ant::detail
