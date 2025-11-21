
#include <ant/database/detail/env_registry.hpp>

#include <ant.test.shared/database/schema.hpp>
#include <ant.test.shared/doctest.hpp>
#include <ant/database/schema_builder.hpp>

namespace ant::detail { namespace {

struct fixture : test::schema_fixture<4>
{
    env_registry registry{schema};
};

TEST_CASE_FIXTURE(fixture, "env_registry::ctor: initially no components are set")
{
    CHECK_EQ(registry.get<test::component<0>>(), nullptr);
    CHECK_EQ(registry.get<test::component<1>>(), nullptr);
    CHECK_EQ(registry.get<test::component<2>>(), nullptr);
    CHECK_EQ(registry.get<test::component<3>>(), nullptr);

    CHECK_FALSE(registry.has<test::component<0>>());
    CHECK_FALSE(registry.has<test::component<1>>());
    CHECK_FALSE(registry.has<test::component<2>>());
    CHECK_FALSE(registry.has<test::component<3>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: stores and retrieves bool")
{
    registry.set<test::component<0>>();

    REQUIRE(registry.has<test::component<0>>());
    CHECK_EQ(registry.get<test::component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: second assignment overwrites value")
{
    registry.set<test::component<0>>(42);
    registry.set<test::component<0>>();

    REQUIRE(registry.has<test::component<0>>());
    CHECK_EQ(registry.get<test::component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: removes component")
{
    registry.set<test::component<0>>();

    registry.unset<test::component<0>>();

    CHECK_FALSE(registry.has<test::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: preserves other components")
{
    registry.set<test::component<0>>();
    registry.set<test::component<1>>();

    // Unset the first-inserted; the second should remain valid
    registry.unset<test::component<0>>();

    CHECK_FALSE(registry.has<test::component<0>>());
    REQUIRE(registry.has<test::component<1>>());
    CHECK_EQ(registry.get<test::component<1>>()->value, 1);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: idempotent when not present")
{
    // Not set yet
    registry.unset<test::component<0>>();
    CHECK_FALSE(registry.has<test::component<0>>());
}

}} // namespace ant::detail