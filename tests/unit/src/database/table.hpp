#pragma once

#include <cstddef>
#include <utility>

#include <ant/core/bitset.hpp>
#include <ant/database/detail/catalog/table.hpp>
#include <ant/database/schema.hpp>

#include "schema.hpp"

namespace ant::detail {

template<std::size_t... Ids>
constexpr auto make_table(const schema& schema, std::index_sequence<Ids...>) -> table
{
    return table{component_bitset_of<component<Ids>...>(schema.range()), schema};
}

template<std::size_t Size>
constexpr auto make_table(const schema& schema) -> table
{
    return make_table(schema, std::make_index_sequence<Size>{});
}

template<std::size_t Size, std::size_t SchemaSize = Size * 2>
struct table_fixture : schema_fixture<SchemaSize>
{
    static auto make_entities(std::size_t size, bool shuffled = false) -> std::vector<entity>
    {
        std::vector<entity> entities{};
        entities.reserve(size);

        for (std::size_t i = 0; i < size; ++i)
        {
            entities.push_back(detail::entity_traits::construct(i));
        }

        if (shuffled)
        {
            // just split odd and even indices for determinism and simplicity
            for (std::size_t i = 1; i < entities.size(); i += 2)
            {
                std::swap(entities[i], entities[i / 2]);
            }
        }

        return entities;
    }

    template<typename F, std::size_t... Ids>
    static auto for_each_components(const table& table, entity e, F&& f, std::index_sequence<Ids...>) -> void
    {
        const std::size_t row_index = table.row_of(e);

        (f(Ids, table.at<component<Ids>>(table.column_of<component<Ids>>(), row_index)), ...);
    }

    template<typename F>
    static auto for_each_components(const table& table, entity e, F&& f) -> void
    {
        for_each_components(table, e, std::forward<F>(f), std::make_index_sequence<Size>{});
    }

    detail::table table{make_table<Size>(this->schema)};
};

} // namespace ant::detail
