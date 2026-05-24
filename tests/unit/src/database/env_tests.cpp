
#include <ant/database/env.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/database/schema.hpp>

namespace ant { namespace {

struct fixture : schema_fixture<5>
{
    fixture()
    {
        registry.set<component<0>>();
        registry.set<component<1>>();
        registry.set<component<2>>();
        registry.set<component<3>>();
    }

    detail::env_registry registry{schema};
};

TEST_CASE_FIXTURE(fixture, "env::get: readonly component")
{
    env_of<const component<0>, const component<1>> env{registry};

    CHECK_EQ(env.get<component<0>>().value, 0);
    CHECK_EQ(env.get<component<1>>().value, 1);
}

TEST_CASE_FIXTURE(fixture, "env::get: write component")
{
    env_of<component<2>, component<3>> env{registry};

    env.get<component<2>>().value = 42;
    env.get<component<3>>().value = 24;

    CHECK_EQ(registry.get<component<2>>()->value, 42);
    CHECK_EQ(registry.get<component<3>>()->value, 24);
}

TEST_CASE_FIXTURE(fixture, "env::get: optional readonly component")
{
    env_of<const component<2>*, const component<3>*, const component<4>*> env{registry};

    CHECK_NE(env.get<component<2>>(), nullptr);
    CHECK_NE(env.get<component<3>>(), nullptr);
    CHECK_EQ(env.get<component<4>>(), nullptr);

    CHECK_EQ(env.get<component<2>>()->value, 2);
    CHECK_EQ(env.get<component<3>>()->value, 3);
}

TEST_CASE_FIXTURE(fixture, "env::get: optional write component")
{
    env_of<component<2>*, component<3>*, component<4>*> env{registry};

    CHECK_NE(env.get<component<2>>(), nullptr);
    CHECK_NE(env.get<component<3>>(), nullptr);
    CHECK_EQ(env.get<component<4>>(), nullptr);

    env.get<component<2>>()->value = 42;
    env.get<component<3>>()->value = 24;

    CHECK_EQ(registry.get<component<2>>()->value, 42);
    CHECK_EQ(registry.get<component<3>>()->value, 24);
}

TEST_CASE_FIXTURE(fixture, "env::has: returns true for set optional component")
{
    env_of<component<3>*, component<4>*> env{registry};

    CHECK(env.has<component<3>>());
    CHECK_FALSE(env.has<component<4>>());
}

}} // namespace ant
