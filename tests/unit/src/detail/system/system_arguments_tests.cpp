#include <ant/detail/system/system_arguments.hpp>
#include <doctest/doctest.h>

#include <memory>
#include <type_traits>
#include <utility>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/detail/changeset/change_accumulator_consumer.hpp>

#include "../store/entity_creator.hpp"

namespace ant::detail { namespace {

using component0 = testing::component<0>;
using component1 = testing::component<1>;
using environment = env_of<const component0>;
using optional_environment = env_of<const component0*>;
using query0 = query_of<const component0>;
using query1 = query_of<const component1>;
using changes = changeset_of<set_env<component1>>;

struct fixture
{
    detail::store store{testing::make_indexed_schema<2>()};
    entity_creator entities{store.schema, store.entities, store.catalog};
    change_accumulator accumulator{store.schema};
};

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: returns an environment value")
{
    store.envs.set<component0>(42);

    system_arguments<type_list<environment>> arguments;
    const auto result = arguments.invoke(store, [](environment env) {
        return env.get<component0>().value;
    });

    CHECK_EQ(result, 42u);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: invokes a void callable")
{
    int calls = 0;

    system_arguments<type_list<optional_environment>> arguments;
    arguments.invoke(store, [&calls](optional_environment) { ++calls; });

    CHECK_EQ(calls, 1);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: preserves a reference return")
{
    store.envs.set<component0>(42);

    system_arguments<type_list<environment>> arguments;
    auto read = [](environment env) -> const component0& { return env.get<component0>(); };

    CHECK_EQ(&arguments.invoke(store, read), store.envs.get<component0>());
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: returns a move-only value")
{
    system_arguments<type_list<optional_environment>> arguments;

    auto result = arguments.invoke(store, [](optional_environment) { return std::make_unique<int>(42); });

    REQUIRE(result);
    CHECK_EQ(*result, 42);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: supplies a missing optional environment component")
{
    system_arguments<type_list<optional_environment>> arguments;

    CHECK_FALSE(arguments.invoke(store, [](optional_environment env) { return env.has<component0>(); }));
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: writes through the supplied environment")
{
    store.envs.set<component0>(1);

    system_arguments<type_list<env_of<component0>>> arguments;
    arguments.invoke(store, [](env_of<component0> env) { env.get<component0>().value = 42; });

    CHECK_EQ(store.envs.get<component0>()->value, 42u);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: forwards supplied arguments before injected arguments")
{
    store.envs.set<component0>(3);
    system_arguments<type_list<environment>> arguments;
    int result = 0;
    auto value = std::make_unique<int>(7);

    arguments.invoke(store, [](int& output, std::unique_ptr<int> input, environment env) { output = *input + static_cast<int>(env.get<component0>().value); }, result, std::move(value));

    CHECK_EQ(result, 10);
    CHECK_FALSE(value);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: compiles a query on first invocation")
{
    const entity e = entities.create_entity<0>(42);
    system_arguments<type_list<query0>> arguments;

    arguments.invoke(store, [e](query0 query) {
        const auto row = query.row(e);
        REQUIRE(row.has_value());
        CHECK_EQ(row->get<component0>().value, 42u);
    });
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: refreshes a query when a matching table is added")
{
    auto count = [](query0 query) { return query.count_rows(); };

    system_arguments<type_list<query0>> arguments;
    CHECK_EQ(arguments.invoke(store, count), 0u);

    [[maybe_unused]] auto _ = entities.create_entity<0, 1>();
    CHECK_EQ(arguments.invoke(store, count), 1u);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: supplies distinct queries in declared order")
{
    [[maybe_unused]] const entity first = entities.create_entity<0>();
    [[maybe_unused]] const entity second = entities.create_entity<1>();
    [[maybe_unused]] const entity third = entities.create_entity<1>();

    system_arguments<type_list<query1, query0>> arguments;
    arguments.invoke(store, [](query1 first_query, query0 second_query) {
        CHECK_EQ(first_query.count_rows(), 2u);
        CHECK_EQ(second_query.count_rows(), 1u);
    });
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: records changes in the provided accumulator without applying them")
{
    system_arguments<type_list<changes>> arguments;
    arguments.invoke(store, [](changes change) { change.set_env<component1>(42); }, accumulator);

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<set_change>(change_accumulator_consumer::changes(accumulator)[0]));
    CHECK_FALSE(store.envs.has<component1>());
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: injects mixed argument kinds in declared order")
{
    store.envs.set<component0>(42);
    [[maybe_unused]] auto _ = entities.create_entity<0>();

    system_arguments<type_list<query0, changes, environment>> arguments;

    const auto result = arguments.invoke(store, [](query0 query, changes change, environment env) {
        change.set_env<component1>(env.get<component0>().value);
        return query.count_rows() + env.get<component0>().value; }, accumulator);

    CHECK_EQ(result, 43u);
    CHECK_EQ(accumulator.size(), 1u);
}

TEST_CASE_FIXTURE(fixture, "system_arguments::invoke: preserves move-only callable state between invocations")
{
    system_arguments<type_list<optional_environment>> arguments;
    auto callable = [state = std::make_unique<int>(0)](optional_environment) mutable { return ++*state; };

    CHECK_EQ(arguments.invoke(store, callable), 1);
    CHECK_EQ(arguments.invoke(store, callable), 2);
}

}} // namespace ant::detail
