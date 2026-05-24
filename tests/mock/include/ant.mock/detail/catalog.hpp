#pragma once

#include <cstddef>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>
#include <ant/detail/catalog/catalog.hpp>

namespace ant::detail {

template<std::size_t Size>
struct catalog_fixture : schema_fixture<Size>
{
    template<std::size_t... Cs>
    auto insert_entity_with_components(entity e) -> void
    {
        const std::size_t i = catalog.ensure_of(component_bitset_of<component<Cs>...>());
        catalog.at(i).insert(e);
    }

    detail::catalog catalog{schema_fixture<Size>::schema};
};

} // namespace ant::detail
