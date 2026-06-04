#pragma once

#include <cstddef>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>
#include <ant/detail/catalog/catalog.hpp>
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

    detail::catalog catalog{schema_fixture<Size>::schema};
    detail::entity_registry entity_registry;
};

} // namespace ant::detail
