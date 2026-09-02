#include <ant/detail/lifecycle/lifecycle_registry.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/changeset.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/store.hpp>

#include "../entity_creator.hpp"

namespace ant::detail { namespace {

struct fixture
{
    store _store{testing::make_indexed_schema<2>()};
    lifecycle_registry _registry{_store.schema.range()};
    change_accumulator _accumulator{_store.schema};
    entity_creator _creator{_store.schema, _store.entities, _store.catalog};
};

TEST_CASE_FIXTURE(fixture, "lifecycle_registry::invoke_attach: invokes callbacks in registration order")
{
    const entity e = _creator.create_entity<0>();
    const entity_location location = _store.entities.locate(e);
    vector<int> calls;

    _registry.on_attach<testing::component<0>>(basic_binding<entity, testing::component<0>&>(_store, [&calls](entity, testing::component<0>& value) {
        calls.push_back(0);
        value.value = 42;
    }));
    _registry.on_attach<testing::component<0>>(basic_binding<entity, testing::component<0>&>(_store, [&calls](entity, testing::component<0>& value) {
        calls.push_back(1);
        CHECK_EQ(value.value, 42u);
    }));

    _registry.invoke_attach<testing::component<0>>(_accumulator, e, _store.catalog.at(location.table), location.row);

    CHECK_EQ(calls, vector<int>{0, 1});
}

TEST_CASE_FIXTURE(fixture, "lifecycle_registry: keeps attach and detach callbacks separate")
{
    const entity e = _creator.create_entity<0>();
    const entity_location location = _store.entities.locate(e);
    int attaches = 0;
    int detaches = 0;

    _registry.on_attach<testing::component<0>>(basic_binding<entity, testing::component<0>&>(_store, [&attaches](entity, testing::component<0>&) { ++attaches; }));
    _registry.on_detach<testing::component<0>>(basic_binding<entity, const testing::component<0>&>(_store, [&detaches](entity, const testing::component<0>&) { ++detaches; }));

    table& storage = _store.catalog.at(location.table);
    _registry.invoke_attach<testing::component<0>>(_accumulator, e, storage, location.row);
    _registry.invoke_detach<testing::component<0>>(_accumulator, e, storage, location.row);

    CHECK_EQ(attaches, 1);
    CHECK_EQ(detaches, 1);
}

TEST_CASE_FIXTURE(fixture, "lifecycle_registry: injects binding arguments")
{
    const entity e = _creator.create_entity<0>();
    const entity_location location = _store.entities.locate(e);

    _registry.on_detach<testing::component<0>>(basic_binding<entity, const testing::component<0>&>(
        _store,
        [e](entity actual, const testing::component<0>& value, changeset_of<set_env<testing::component<1>>> changes) {
            CHECK_EQ(actual, e);
            changes.set_env<testing::component<1>>(value.value);
        }));

    _registry.invoke_detach<testing::component<0>>(_accumulator, e, _store.catalog.at(location.table), location.row);

    CHECK_EQ(_accumulator.size(), 1u);
}

}} // namespace ant::detail
