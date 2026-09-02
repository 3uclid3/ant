#include <ant/detail/lifecycle/lifecycle_registry.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/changeset.hpp>
#include <ant/detail/store.hpp>

namespace ant::detail { namespace {

struct fixture
{
    store _store{testing::make_indexed_schema<2>()};
    lifecycle_registry _registry{_store};
    change_accumulator _accumulator{_store.schema};
};

TEST_CASE_FIXTURE(fixture, "lifecycle_registry::invoke_attach: invokes callbacks in registration order")
{
    testing::component<0> component;
    vector<int> calls;

    _registry.on_attach<testing::component<0>>([&calls](entity, testing::component<0>& value) {
        calls.push_back(0);
        value.value = 42;
    });
    _registry.on_attach<testing::component<0>>([&calls](entity, testing::component<0>& value) {
        calls.push_back(1);
        CHECK_EQ(value.value, 42u);
    });

    _registry.invoke_attach(_accumulator, entity{1}, component);

    CHECK_EQ(calls, vector<int>{0, 1});
}

TEST_CASE_FIXTURE(fixture, "lifecycle_registry: keeps attach and detach callbacks separate")
{
    testing::component<0> component;
    int attaches = 0;
    int detaches = 0;

    _registry.on_attach<testing::component<0>>([&attaches](entity, testing::component<0>&) { ++attaches; });
    _registry.on_detach<testing::component<0>>([&detaches](entity, const testing::component<0>&) { ++detaches; });

    _registry.invoke_attach(_accumulator, entity{1}, component);
    _registry.invoke_detach(_accumulator, entity{1}, component);

    CHECK_EQ(attaches, 1);
    CHECK_EQ(detaches, 1);
}

TEST_CASE_FIXTURE(fixture, "lifecycle_registry: injects binding arguments")
{
    testing::component<0> component;

    _registry.on_detach<testing::component<0>>(
        [](entity e, const testing::component<0>& value, changeset_of<set_env<testing::component<1>>> changes) {
            CHECK_EQ(e, entity{1});
            changes.set_env<testing::component<1>>(value.value);
        });

    _registry.invoke_detach(_accumulator, entity{1}, component);

    CHECK_EQ(_accumulator.size(), 1u);
}

}} // namespace ant::detail
