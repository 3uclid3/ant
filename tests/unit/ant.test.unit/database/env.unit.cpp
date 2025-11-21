
#include <ant/database/env.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/database/schema.hpp>
#include <ant.test.shared/doctest.hpp>

namespace ant { namespace {

struct fixture : test::schema_fixture<5>
{
    fixture()
    {
        registry.set<test::component<0>>();
        registry.set<test::component<1>>();
        registry.set<test::component<2>>();
        registry.set<test::component<3>>();
    }

    detail::env_registry registry{schema};
};

TEST_CASE_FIXTURE(fixture, "env: readonly component")
{
    env_of<const test::component<0>, const test::component<1>> env{registry};

    CHECK_EQ(env.get<test::component<0>>().value, 0);
    CHECK_EQ(env.get<test::component<1>>().value, 1);
}

TEST_CASE_FIXTURE(fixture, "env: write component")
{
    env_of<test::component<2>, test::component<3>> env{registry};

    env.get<test::component<2>>().value = 42;
    env.get<test::component<3>>().value = 24;

    CHECK_EQ(registry.get<test::component<2>>()->value, 42);
    CHECK_EQ(registry.get<test::component<3>>()->value, 24);
}

TEST_CASE_FIXTURE(fixture, "env: readonly optional component")
{
    env_of<const test::component<2>*, const test::component<3>*, const test::component<4>*> env{registry};

    CHECK_NE(env.try_get<test::component<2>>(), nullptr);
    CHECK_NE(env.try_get<test::component<3>>(), nullptr);
    CHECK_EQ(env.try_get<test::component<4>>(), nullptr);

    CHECK_EQ(env.try_get<test::component<2>>()->value, 2);
    CHECK_EQ(env.try_get<test::component<3>>()->value, 3);
}

TEST_CASE_FIXTURE(fixture, "env: write optional component")
{
    env_of<test::component<2>*, test::component<3>*, test::component<4>*> env{registry};

    CHECK_NE(env.try_get<test::component<2>>(), nullptr);
    CHECK_NE(env.try_get<test::component<3>>(), nullptr);
    CHECK_EQ(env.try_get<test::component<4>>(), nullptr);

    env.try_get<test::component<2>>()->value = 42;
    env.try_get<test::component<3>>()->value = 24;

    CHECK_EQ(registry.get<test::component<2>>()->value, 42);
    CHECK_EQ(registry.get<test::component<3>>()->value, 24);
}

}} // namespace ant