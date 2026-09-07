#include <ant/schema.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>

namespace ant { namespace {

TEST_CASE("schema::builder::define: store relation metadata correctly")
{
    struct role_first;
    struct role_second;
    struct relation : rel<one<struct role_first>, many<struct role_second>>
    {};

    schema built_schema = schema::builder()
                              .define<relation>()
                              .build();

    CHECK_EQ(built_schema.count(), 2);
    CHECK(built_schema.is_defined<relation>());
    CHECK(built_schema.is_defined<detail::rel_member<relation, struct role_first>>());
    CHECK(built_schema.is_defined<detail::rel_member<relation, struct role_second>>());
}

TEST_CASE_TEMPLATE("schema::builder::define: store component metadata correctly", T, testing::component<24>, testing::component<42>)
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
#if ANT_COMPONENT_NAME_ENABLED
    CHECK_EQ(meta.name, component_name_of<T>());
#endif
}

TEST_CASE("schema::builder::define: override component options")
{
    using T = testing::component<42>;

    schema::builder builder;
    builder.define<T>({.stride_per_block = 8});

    schema built_schema = builder.build();

    REQUIRE(built_schema.is_defined<T>());
    const auto& meta = built_schema.meta_of<T>();

    CHECK_EQ(meta.stride_per_block, 8);
}

TEST_CASE("schema::builder::build: empty ")
{
    schema::builder builder;
    schema built_schema = builder.build();
    CHECK(built_schema.empty());
}

}} // namespace ant
