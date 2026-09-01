
#include <ant/detail/env/env_registry.hpp>
#include <doctest/doctest.h>

#include <ant.testing/schema.hpp>

namespace ant::detail { namespace {

struct fixture
{
    ant::schema schema{testing::make_indexed_schema<4>()};
    env_registry registry{schema};
};

TEST_CASE_FIXTURE(fixture, "env_registry::ctor: initially no components are set")
{
    CHECK_EQ(registry.get<testing::component<0>>(), nullptr);
    CHECK_EQ(registry.get<testing::component<1>>(), nullptr);
    CHECK_EQ(registry.get<testing::component<2>>(), nullptr);
    CHECK_EQ(registry.get<testing::component<3>>(), nullptr);

    CHECK_FALSE(registry.has<testing::component<0>>());
    CHECK_FALSE(registry.has<testing::component<1>>());
    CHECK_FALSE(registry.has<testing::component<2>>());
    CHECK_FALSE(registry.has<testing::component<3>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: empty requirement is satisfied")
{
    CHECK(registry.contains(component_bitset{}));
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: missing required component is not satisfied")
{
    CHECK_FALSE(registry.contains(component_bitset_of<testing::component<0>>()));
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: all required components must be set")
{
    registry.set<testing::component<0>>();

    CHECK(registry.contains(component_bitset_of<testing::component<0>>()));
    CHECK_FALSE(registry.contains(component_bitset_of<testing::component<0>, testing::component<1>>()));

    registry.set<testing::component<1>>();

    CHECK(registry.contains(component_bitset_of<testing::component<0>, testing::component<1>>()));
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: unset required component is not satisfied")
{
    registry.set<testing::component<0>>();
    registry.unset<testing::component<0>>();

    CHECK_FALSE(registry.contains(component_bitset_of<testing::component<0>>()));
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: stores and retrieves bool")
{
    registry.set<testing::component<0>>();

    REQUIRE(registry.has<testing::component<0>>());
    CHECK_EQ(registry.get<testing::component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: second assignment overwrites value")
{
    registry.set<testing::component<0>>(42);
    registry.set<testing::component<0>>();

    REQUIRE(registry.has<testing::component<0>>());
    CHECK_EQ(registry.get<testing::component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: removes component")
{
    registry.set<testing::component<0>>();

    registry.unset<testing::component<0>>();

    CHECK_FALSE(registry.has<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: preserves other components")
{
    registry.set<testing::component<0>>();
    registry.set<testing::component<1>>();

    // Unset the first-inserted; the second should remain valid
    registry.unset<testing::component<0>>();

    CHECK_FALSE(registry.has<testing::component<0>>());
    REQUIRE(registry.has<testing::component<1>>());
    CHECK_EQ(registry.get<testing::component<1>>()->value, 1);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: idempotent when not present")
{
    // Not set yet
    registry.unset<testing::component<0>>();
    CHECK_FALSE(registry.has<testing::component<0>>());
}

}} // namespace ant::detail
