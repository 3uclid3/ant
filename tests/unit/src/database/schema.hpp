#pragma once

#include <cstddef>
#include <utility>

#include <ant/database/schema.hpp>

#include "component.hpp"

namespace ant {

// make a schema with component<I> where I is from 0 to Size - 1
template<std::size_t Size>
constexpr auto make_schema() -> schema;

template<std::size_t Size>
struct schema_fixture : component_fixture
{
    schema_fixture();

    ant::schema schema;
};

template<std::size_t Size>
schema_fixture<Size>::schema_fixture()
    : schema(make_schema<Size>())
{
}

template<std::size_t... I>
constexpr auto make_schema(std::index_sequence<I...>) -> schema
{
    schema::builder builder;
    (builder.define<component<I>>(), ...);
    return builder.build();
}

template<std::size_t Size>
constexpr auto make_schema() -> schema
{
    return make_schema(std::make_index_sequence<Size>{});
}

} // namespace ant
