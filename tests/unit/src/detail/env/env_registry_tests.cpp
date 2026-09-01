
#include <ant/detail/env/env_registry.hpp>
#include <doctest/doctest.h>

#include <ant.testing/schema.hpp>

namespace ant::detail { namespace {

struct fixture
{
    schema _schema{testing::make_indexed_schema<4>()};
    env_registry _registry{_schema};
};

TEST_CASE_FIXTURE(fixture, "env_registry::ctor: initially no components are set")
{
    CHECK_EQ(_registry.get<testing::component<0>>(), nullptr);
    CHECK_EQ(_registry.get<testing::component<1>>(), nullptr);
    CHECK_EQ(_registry.get<testing::component<2>>(), nullptr);
    CHECK_EQ(_registry.get<testing::component<3>>(), nullptr);

    CHECK_FALSE(_registry.has<testing::component<0>>());
    CHECK_FALSE(_registry.has<testing::component<1>>());
    CHECK_FALSE(_registry.has<testing::component<2>>());
    CHECK_FALSE(_registry.has<testing::component<3>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: empty requirement is satisfied")
{
    CHECK(_registry.contains(component_bitset{}));
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: missing required component is not satisfied")
{
    CHECK_FALSE(_registry.contains(component_bitset_of<testing::component<0>>()));
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: all required components must be set")
{
    _registry.set<testing::component<0>>();

    CHECK(_registry.contains(component_bitset_of<testing::component<0>>()));
    CHECK_FALSE(_registry.contains(component_bitset_of<testing::component<0>, testing::component<1>>()));

    _registry.set<testing::component<1>>();

    CHECK(_registry.contains(component_bitset_of<testing::component<0>, testing::component<1>>()));
}

TEST_CASE_FIXTURE(fixture, "env_registry::contains: unset required component is not satisfied")
{
    _registry.set<testing::component<0>>();
    _registry.unset<testing::component<0>>();

    CHECK_FALSE(_registry.contains(component_bitset_of<testing::component<0>>()));
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: stores and retrieves bool")
{
    _registry.set<testing::component<0>>();

    REQUIRE(_registry.has<testing::component<0>>());
    CHECK_EQ(_registry.get<testing::component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::set: second assignment overwrites value")
{
    _registry.set<testing::component<0>>(42);
    _registry.set<testing::component<0>>();

    REQUIRE(_registry.has<testing::component<0>>());
    CHECK_EQ(_registry.get<testing::component<0>>()->value, 0);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: removes component")
{
    _registry.set<testing::component<0>>();

    _registry.unset<testing::component<0>>();

    CHECK_FALSE(_registry.has<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: preserves other components")
{
    _registry.set<testing::component<0>>();
    _registry.set<testing::component<1>>();

    // Unset the first-inserted; the second should remain valid
    _registry.unset<testing::component<0>>();

    CHECK_FALSE(_registry.has<testing::component<0>>());
    REQUIRE(_registry.has<testing::component<1>>());
    CHECK_EQ(_registry.get<testing::component<1>>()->value, 1);
}

TEST_CASE_FIXTURE(fixture, "env_registry::unset: idempotent when not present")
{
    // Not set yet
    _registry.unset<testing::component<0>>();
    CHECK_FALSE(_registry.has<testing::component<0>>());
}

}} // namespace ant::detail
