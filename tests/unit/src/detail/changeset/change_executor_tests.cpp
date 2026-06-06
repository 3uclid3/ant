#include <ant/detail/changeset/change_executor.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>
#include <ant.mock/equivalent.hpp>
#include <ant/detail/changeset/change_accumulator.hpp>
#include <ant/detail/changeset/change_coalescer.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/detail/env/env_registry.hpp>

namespace ant::detail { namespace {

struct fixture : public catalog_fixture<8>
{
    auto consume_and_execute() -> void
    {
        coalescer.consume(accumulator);
        coalesced_changes changes = coalescer.coalesce();
        executor.execute(changes);
    }

    detail::env_registry env_registry{schema};
    change_accumulator accumulator{schema};
    change_coalescer coalescer{schema, entity_registry, catalog};
    change_executor executor{entity_registry, env_registry, catalog};
};

TEST_CASE_FIXTURE(fixture, "change_executor::execute: destroy entities")
{
    const entity e0 = entity_registry.create();
    const entity e1 = entity_registry.create();

    accumulator.emplace_destroy(e0);
    accumulator.emplace_destroy(e1);

    consume_and_execute();

    CHECK_FALSE(entity_registry.contains(e0));
    CHECK_FALSE(entity_registry.contains(e1));
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: attach insert new entity")
{
    const entity e0 = entity_registry.create();

    accumulator.emplace_attach<component<0>>(e0, 42);
    accumulator.emplace_attach<component<1>>(e0, 24);

    consume_and_execute();

    const entity_location loc = entity_registry.locate(e0);

    CHECK_EQ(loc.table, catalog.index_of(component_bitset_of<component<0>, component<1>>()));

    const table& t = catalog.at(loc.table);
    CHECK(t.contains(e0));
    CHECK_EQ(t.entity_at(loc.row), e0);

    const std::size_t c0_col = t.column_of(component_index_of<component<0>>());
    const std::size_t c1_col = t.column_of(component_index_of<component<1>>());

    CHECK_EQ(t.at<component<0>>(c0_col, loc.row).value, 42);
    CHECK_EQ(t.at<component<1>>(c1_col, loc.row).value, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: attach move existing entity")
{
    const entity e0 = create_entity<0>(42);

    accumulator.emplace_attach<component<1>>(e0, 24);

    consume_and_execute();

    const entity_location loc = entity_registry.locate(e0);

    CHECK_EQ(loc.table, catalog.index_of(component_bitset_of<component<0>, component<1>>()));

    const table& t = catalog.at(loc.table);
    CHECK(t.contains(e0));
    CHECK_EQ(t.entity_at(loc.row), e0);

    const std::size_t c0_col = t.column_of(component_index_of<component<0>>());
    const std::size_t c1_col = t.column_of(component_index_of<component<1>>());

    CHECK_EQ(t.at<component<0>>(c0_col, loc.row).value, 42);
    CHECK_EQ(t.at<component<1>>(c1_col, loc.row).value, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach all erase entity from catalog")
{
    const entity e0 = create_entity<0, 1>();

    accumulator.emplace_detach<component<0>>(e0);
    accumulator.emplace_detach<component<1>>(e0);

    consume_and_execute();

    const entity_location loc = entity_registry.locate(e0);

    CHECK_EQ(loc, entity_location::invalid);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach moves entity to new table")
{
    const entity e0 = create_entity<0, 1>(42, 24);

    accumulator.emplace_detach<component<0>>(e0);

    consume_and_execute();

    const entity_location loc = entity_registry.locate(e0);

    CHECK_EQ(loc.table, catalog.index_of(component_bitset_of<component<1>>()));

    const table& t = catalog.at(loc.table);
    CHECK(t.contains(e0));
    CHECK_EQ(t.entity_at(loc.row), e0);

    const std::size_t c1_col = t.column_of(component_index_of<component<1>>());
    CHECK_EQ(t.at<component<1>>(c1_col, loc.row).value, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: set")
{
    accumulator.emplace_set<component<0>>(42);

    consume_and_execute();

    const component<0>* c = env_registry.get<component<0>>();

    REQUIRE_NE(c, nullptr);
    CHECK_EQ(c->value, 42);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: unset")
{
    env_registry.set<component<0>>();

    accumulator.emplace_unset<component<0>>();

    consume_and_execute();

    CHECK_FALSE(env_registry.has<component<0>>());
}

}} // namespace ant::detail
