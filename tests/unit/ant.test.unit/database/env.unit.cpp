
#include <doctest/doctest.h>

#include <ant/database/env.hpp>

#include <ant.test.shared/database/component_types.hpp>

namespace ant { namespace {

struct shim_database
{
    using allocator_type = std::allocator<std::byte>;
};

using env = basic_env<shim_database>;

struct fixture
{
    fixture()
        : schema(basic_schema_builder<shim_database>()
                     .define<bool>("bool")
                     .define<int>("int")
                     .define<test::empty>("empty")
                     .define<test::trivial>("trivial")
                     .define<test::non_trivial>("non_trivial")
                     .build())
        , env(schema)
    {
    }

    basic_schema<shim_database> schema;
    env env;
};

TEST_CASE_FIXTURE(fixture, "env: initially no components are set")
{
    CHECK(env.get<bool>() == nullptr);
    CHECK(env.get<int>() == nullptr);
    CHECK(env.get<test::empty>() == nullptr);
    CHECK(env.get<test::trivial>() == nullptr);
    CHECK(env.get<test::non_trivial>() == nullptr);
    CHECK_FALSE(env.has<bool>());
    CHECK_FALSE(env.has<int>());
    CHECK_FALSE(env.has<test::empty>());
    CHECK_FALSE(env.has<test::trivial>());
    CHECK_FALSE(env.has<test::non_trivial>());
}

TEST_CASE_FIXTURE(fixture, "env: set + get bool")
{
    env.set<bool>(true);
    CHECK(env.has<bool>());
    CHECK(env.get<bool>() != nullptr);
    CHECK(*env.get<bool>());
}

TEST_CASE_FIXTURE(fixture, "env: set twice overwrites value")
{
    env.set<int>(1);
    env.set<int>(42);
    CHECK(env.has<int>());
    REQUIRE(env.get<int>() != nullptr);
    CHECK(*env.get<int>() == 42);
}

TEST_CASE_FIXTURE(fixture, "env: unset removes component")
{
    env.set<test::trivial>(test::trivial{7});
    CHECK(env.has<test::trivial>());
    env.unset<test::trivial>();
    CHECK_FALSE(env.has<test::trivial>());
    CHECK(env.get<test::trivial>() == nullptr);
}

TEST_CASE_FIXTURE(fixture, "env: swap-and-pop integrity after unset")
{
    env.set<bool>(false);
    env.set<int>(7);

    // Unset the first-inserted; the second should remain valid
    env.unset<bool>();

    CHECK_FALSE(env.has<bool>());
    CHECK(env.has<int>());
    REQUIRE(env.get<int>() != nullptr);
    CHECK(*env.get<int>() == 7);
}

TEST_CASE_FIXTURE(fixture, "env: multiple types coexist")
{
    test::non_trivial n{};
    n.value = 9;

    env.set<bool>(true);
    env.set<test::non_trivial>(n);

    CHECK(env.has<bool>());
    CHECK(env.has<test::non_trivial>());
    REQUIRE(env.get<test::non_trivial>() != nullptr);
    CHECK(env.get<test::non_trivial>()->value == 9);
}

TEST_CASE_FIXTURE(fixture, "env: const get returns const pointer")
{
    env.set<int>(5);
    const auto& cenv = env;
    const int* ptr = cenv.get<int>();
    REQUIRE(ptr != nullptr);
    CHECK(*ptr == 5);
}

TEST_CASE_FIXTURE(fixture, "env: unset is idempotent when not present")
{
    // Not set yet
    env.unset<test::empty>();
    CHECK(env.get<test::empty>() == nullptr);
    CHECK_FALSE(env.has<test::empty>());
}

}} // namespace ant
