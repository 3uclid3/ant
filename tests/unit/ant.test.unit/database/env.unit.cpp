
#include <doctest/doctest.h>

#include <ant/database/env.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant.test.shared/database/shim_database.hpp>

namespace ant { namespace {

using env = basic_env<test::shim_naked_database>;

struct fixture
{
    fixture()
        : schema(basic_schema_builder<std::allocator<std::byte>>()
                     .define<bool>("bool")
                     .define<int>("int")
                     .define<test::empty>("empty")
                     .define<test::trivial>("trivial")
                     .define<test::non_trivial>("non_trivial")
                     .build())
        , env(schema)
    {
    }

    basic_schema<std::allocator<std::byte>> schema;
    env env;
};

TEST_CASE_FIXTURE(fixture, "env::ctor: initially no components are set")
{
    CHECK_EQ(env.get<bool>(), nullptr);
    CHECK_EQ(env.get<int>(), nullptr);
    CHECK_EQ(env.get<test::empty>(), nullptr);
    CHECK_EQ(env.get<test::trivial>(), nullptr);
    CHECK_EQ(env.get<test::non_trivial>(), nullptr);
    CHECK_FALSE(env.has<bool>());
    CHECK_FALSE(env.has<int>());
    CHECK_FALSE(env.has<test::empty>());
    CHECK_FALSE(env.has<test::trivial>());
    CHECK_FALSE(env.has<test::non_trivial>());
}

TEST_CASE_FIXTURE(fixture, "env::set: stores and retrieves bool")
{
    env.set<bool>(true);
    CHECK(env.has<bool>());
    CHECK_NE(env.get<bool>(), nullptr);
    CHECK(*env.get<bool>());
}

TEST_CASE_FIXTURE(fixture, "env::set: second assignment overwrites value")
{
    env.set<int>(1);
    env.set<int>(42);
    CHECK(env.has<int>());
    REQUIRE_NE(env.get<int>(), nullptr);
    CHECK_EQ(*env.get<int>(), 42);
}

TEST_CASE_FIXTURE(fixture, "env::unset: removes component")
{
    env.set<test::trivial>(test::trivial{7});
    CHECK(env.has<test::trivial>());
    env.unset<test::trivial>();
    CHECK_FALSE(env.has<test::trivial>());
    CHECK_EQ(env.get<test::trivial>(), nullptr);
}

TEST_CASE_FIXTURE(fixture, "env::unset: preserves other components")
{
    env.set<bool>(false);
    env.set<int>(7);

    // Unset the first-inserted; the second should remain valid
    env.unset<bool>();

    CHECK_FALSE(env.has<bool>());
    CHECK(env.has<int>());
    REQUIRE_NE(env.get<int>(), nullptr);
    CHECK_EQ(*env.get<int>(), 7);
}

TEST_CASE_FIXTURE(fixture, "env::set: multiple types coexist")
{
    test::non_trivial n{};
    n.value = 9;

    env.set<bool>(true);
    env.set<test::non_trivial>(n);

    CHECK(env.has<bool>());
    CHECK(env.has<test::non_trivial>());
    REQUIRE_NE(env.get<test::non_trivial>(), nullptr);
    CHECK_EQ(env.get<test::non_trivial>()->value, 9);
}

TEST_CASE_FIXTURE(fixture, "env::get: returns const pointer")
{
    env.set<int>(5);
    const auto& cenv = env;
    const int* ptr = cenv.get<int>();
    REQUIRE_NE(ptr, nullptr);
    CHECK_EQ(*ptr, 5);
}

TEST_CASE_FIXTURE(fixture, "env::unset: idempotent when not present")
{
    // Not set yet
    env.unset<test::empty>();
    CHECK_EQ(env.get<test::empty>(), nullptr);
    CHECK_FALSE(env.has<test::empty>());
}

}} // namespace ant