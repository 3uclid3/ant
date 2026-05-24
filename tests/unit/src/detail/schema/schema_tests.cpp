#include <ant/detail/schema/schema.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>

namespace ant::detail { namespace {

TEST_CASE_TEMPLATE("schema::builder::define: store component metadata correctly", T, trivial_component<24>, component<42>)
{
    schema::builder builder;
    builder.define<T>();

    schema built_schema = builder.build();

    REQUIRE(built_schema.is_defined<T>());
    const auto& meta = built_schema.meta_of<T>();

    CHECK_EQ(meta.index, component_index_of<T>());
    CHECK_EQ(meta.size, sizeof(T));
    CHECK_EQ(meta.alignment, alignof(T));
    CHECK_EQ(meta.stride, component_meta::default_stride<T>);
    CHECK_EQ(meta.stride_per_block, component_meta::default_stride_per_block<T>);
    CHECK_EQ(meta.name, component_name_of<T>());
}

TEST_CASE("schema::builder::define: override component options")
{
    using T = component<42>;

    schema::builder builder;
    builder.define<T>({.stride_per_block = 8});

    schema built_schema = builder.build();

    REQUIRE(built_schema.is_defined<T>());
    const auto& meta = built_schema.meta_of<T>();

    CHECK_EQ(meta.stride_per_block, 8);
    CHECK_EQ(meta.name, component_name_of<T>());
}

TEST_CASE("schema::builder::build: empty ")
{
    schema::builder builder;
    schema built_schema = builder.build();
    CHECK(built_schema.empty());
}

}} // namespace ant::detail
