
#include <ant/database/detail/env/env_registry.hpp>
#include <doctest/doctest.h>

#include <ant/database/schema.hpp>

#include <ant.mock/database/schema.hpp>

namespace ant::detail { namespace {

struct fixture : schema_fixture<4>
{
    env_registry registry{schema};
};

TEST_CASE_FIXTURE(fixture, "env_registry::ctor: initially no components are set")
{
    CHECK_EQ(registry.get<component<0>>(), nullptr);
    CHECK_EQ(registry.get<component<1>>(), nullptr);
    CHECK_EQ(registry.get<component<2>>(), nullptr);
    CHECK_EQ(registry.get<component<3>>(), nullptr);

    CHECK_FALSE(registry.has<component<0>>());
    CHECK_FALSE(registry.has<component<1>>());
    CHECK_FALSE(registry.has<component<2>>());
    CHECK_FALSE(registry.has<component<3>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: stores and retrieves bool")
{
    registry.set<component<0>>();

    REQUIRE(registry.has<component<0>>());
    CHECK_EQ(registry.get<component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: second assignment overwrites value")
{
    registry.set<component<0>>(42);
    registry.set<component<0>>();

    REQUIRE(registry.has<component<0>>());
    CHECK_EQ(registry.get<component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: removes component")
{
    registry.set<component<0>>();

    registry.unset<component<0>>();

    CHECK_FALSE(registry.has<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: preserves other components")
{
    registry.set<component<0>>();
    registry.set<component<1>>();

    // Unset the first-inserted; the second should remain valid
    registry.unset<component<0>>();

    CHECK_FALSE(registry.has<component<0>>());
    REQUIRE(registry.has<component<1>>());
    CHECK_EQ(registry.get<component<1>>()->value, 1);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: idempotent when not present")
{
    // Not set yet
    registry.unset<component<0>>();
    CHECK_FALSE(registry.has<component<0>>());
}

}} // namespace ant::detail
