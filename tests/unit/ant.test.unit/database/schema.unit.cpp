#include <ant/database/schema.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/database/schema.hpp>
#include <ant.test.shared/doctest.hpp>

namespace ant { namespace {

TEST_CASE("schema::bitset_for: create bitset from component types")
{
    schema schema = test::make_schema<4>();

    dynamic_bitset bitset = schema.bitset_for<test::component<1>, test::component<2>>();

    CHECK_EQ(bitset.count(), 2);
    CHECK(bitset.test(schema.index_of<test::component<1>>()));
    CHECK(bitset.test(schema.index_of<test::component<2>>()));
}

TEST_CASE("schema::bitset_for: create bitset from empty component types")
{
    schema schema = test::make_schema<4>();

    dynamic_bitset bitset = schema.bitset_for<>();

    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE("schema::index_of: returns npos for unknown component type")
{
    schema schema = test::make_schema<2>();

    CHECK_EQ(schema.index_of<test::component<42>>(), schema.npos);
}

}} // namespace ant
