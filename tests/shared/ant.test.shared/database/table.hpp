#pragma once

#include <cstddef>
#include <utility>

#include <ant.test.shared/database/schema.hpp>
#include <ant/core/dynamic_bitset.hpp>
#include <ant/database/detail/table.hpp>
#include <ant/database/schema.hpp>

namespace ant::test {

template<std::size_t Size>
struct table_fixture : schema_fixture<Size>
{
};

template<std::size_t... I>
constexpr auto make_table(const schema& schema, std::index_sequence<I...>) -> detail::table
{
    dynamic_bitset components;
    components.resize(schema.size());
    (components.set(I), ...);

    return detail::table{components, schema};
}

template<std::size_t Size>
constexpr auto make_table(const schema& schema) -> detail::table
{
    return make_table(schema, std::make_index_sequence<Size>{});
}

} // namespace ant::test
