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

    template<std::size_t I>
    auto check_component(entity_location loc, std::size_t val) -> void
    {
        const table& t = catalog.at(loc.table);
        const std::size_t col = t.column_of(component_index_of<component<I>>());

        CHECK_EQ(t.at<component<I>>(col, loc.row).value, val);
    }

    template<std::size_t... I, typename... V>
    auto check_entity(entity e, V... values) -> void
    {
        static_assert(sizeof...(I) == sizeof...(V), "number of components must match number of values");

        const entity_location loc = entity_registry.locate(e);

        CHECK_EQ(loc.table, catalog.index_of(component_bitset_of<component<I>...>()));

        REQUIRE_NE(loc.table, entity_location::invalid.table);
        REQUIRE_NE(loc.row, entity_location::invalid.row);

        const table& t = catalog.at(loc.table);

        REQUIRE(t.contains(e));
        REQUIRE_EQ(t.entity_at(loc.row), e);

        (check_component<I>(loc, static_cast<std::size_t>(values)), ...);
    }

    auto check_entity_not_at(entity e, entity_location loc) -> void
    {
        REQUIRE_LT(loc.table, catalog.size());
        CHECK_FALSE(catalog.at(loc.table).contains(e));
    }

    detail::env_registry env_registry{schema};
    change_accumulator accumulator{schema};
    change_coalescer coalescer{schema, entity_registry, catalog};
    change_executor executor{entity_registry, env_registry, catalog};
};

TEST_CASE_FIXTURE(fixture, "change_executor::execute: destroy entities erase entity from catalog")
{
    const entity e0 = create_entity<0>(42);
    const entity_location prev_loc = entity_registry.locate(e0);

    accumulator.emplace_destroy(e0);

    consume_and_execute();

    CHECK_FALSE(entity_registry.contains(e0));
    check_entity_not_at(e0, prev_loc);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: attach insert new entity")
{
    const entity e0 = entity_registry.create();

    accumulator.emplace_attach<component<0>>(e0, 42);
    accumulator.emplace_attach<component<1>>(e0, 24);

    consume_and_execute();

    check_entity<0, 1>(e0, 42, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: attach move existing entity")
{
    const entity e0 = create_entity<0>(42);

    accumulator.emplace_attach<component<1>>(e0, 24);

    consume_and_execute();

    check_entity<0, 1>(e0, 42, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach all erase entity from catalog")
{
    const entity e0 = create_entity<0, 1>();
    const entity_location prev_loc = entity_registry.locate(e0);

    accumulator.emplace_detach<component<0>>(e0);
    accumulator.emplace_detach<component<1>>(e0);

    consume_and_execute();

    CHECK_EQ(entity_registry.locate(e0), entity_location::invalid);
    check_entity_not_at(e0, prev_loc);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach moves entity to new table")
{
    const entity e0 = create_entity<0, 1>(42, 24);
    const entity_location prev_loc = entity_registry.locate(e0);

    accumulator.emplace_detach<component<0>>(e0);

    consume_and_execute();

    check_entity<1>(e0, 24);
    check_entity_not_at(e0, prev_loc);
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
