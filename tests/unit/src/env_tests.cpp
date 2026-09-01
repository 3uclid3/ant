#include <ant/env.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

struct fixture
{
    fixture()
    {
        _registry.set<testing::component<0>>();
        _registry.set<testing::component<1>>();
        _registry.set<testing::component<2>>();
        _registry.set<testing::component<3>>();
    }

    const schema _schema{testing::make_indexed_schema<5>()};
    detail::env_registry _registry{_schema};
};

TEST_CASE_FIXTURE(fixture, "env::get: readonly component")
{
    env_of<const testing::component<0>, const testing::component<1>> env{_registry};

    CHECK_EQ(env.get<testing::component<0>>().value, 0);
    CHECK_EQ(env.get<testing::component<1>>().value, 1);
}

TEST_CASE_FIXTURE(fixture, "env::get: write component")
{
    env_of<testing::component<2>, testing::component<3>> env{_registry};

    env.get<testing::component<2>>().value = 42;
    env.get<testing::component<3>>().value = 24;

    CHECK_EQ(_registry.get<testing::component<2>>()->value, 42);
    CHECK_EQ(_registry.get<testing::component<3>>()->value, 24);
}

TEST_CASE_FIXTURE(fixture, "env::get: optional readonly component")
{
    env_of<const testing::component<2>*, const testing::component<3>*, const testing::component<4>*> env{_registry};

    CHECK_NE(env.get<testing::component<2>>(), nullptr);
    CHECK_NE(env.get<testing::component<3>>(), nullptr);
    CHECK_EQ(env.get<testing::component<4>>(), nullptr);

    CHECK_EQ(env.get<testing::component<2>>()->value, 2);
    CHECK_EQ(env.get<testing::component<3>>()->value, 3);
}

TEST_CASE_FIXTURE(fixture, "env::get: optional write component")
{
    env_of<testing::component<2>*, testing::component<3>*, testing::component<4>*> env{_registry};

    CHECK_NE(env.get<testing::component<2>>(), nullptr);
    CHECK_NE(env.get<testing::component<3>>(), nullptr);
    CHECK_EQ(env.get<testing::component<4>>(), nullptr);

    env.get<testing::component<2>>()->value = 42;
    env.get<testing::component<3>>()->value = 24;

    CHECK_EQ(_registry.get<testing::component<2>>()->value, 42);
    CHECK_EQ(_registry.get<testing::component<3>>()->value, 24);
}

TEST_CASE_FIXTURE(fixture, "env::has: returns true for set optional component")
{
    env_of<testing::component<3>*, testing::component<4>*> env{_registry};

    CHECK(env.has<testing::component<3>>());
    CHECK_FALSE(env.has<testing::component<4>>());
}

}} // namespace ant
