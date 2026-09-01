#pragma once

#include <ant.testing/component.hpp>
#include <ant/schema.hpp>

#include <cstddef>
#include <utility>

namespace ant::testing {

template<typename... T>
constexpr auto make_schema() -> schema
{
    schema::builder builder;
    (builder.define<T>(), ...);
    return builder.build();
}

template<std::size_t... I>
constexpr auto make_indexed_schema(std::index_sequence<I...>) -> schema
{
    schema::builder builder;
    (builder.define<component<I>>(), ...);
    return builder.build();
}

template<std::size_t Size>
constexpr auto make_indexed_schema() -> schema
{
    return make_indexed_schema(std::make_index_sequence<Size>{});
}

} // namespace ant::testing
