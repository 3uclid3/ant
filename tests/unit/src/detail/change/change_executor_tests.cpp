#include <ant/detail/change/change_executor.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/change/change_accumulator.hpp>
#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/change/change_coalescer.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/detail/env/env_registry.hpp>

#include "../entity_creator.hpp"

namespace ant::detail { namespace {

struct fixture
{
    auto emplace_destroy(entity e)
    {
        _accumulator.emplace_destroy(e);
    }

    template<std::size_t... I, typename... V>
    auto emplace_attach(entity e, V... values) -> void
    {
        static_assert(sizeof...(I) == sizeof...(V), "number of components must match number of values");
        (_accumulator.emplace_attach<testing::component<I>>(e, values), ...);
    }

    template<std::size_t... I>
    auto emplace_detach(entity e) -> void
    {
        (_accumulator.emplace_detach<testing::component<I>>(e), ...);
    }

    template<std::size_t... I, typename... V>
    auto emplace_set(V... values) -> void
    {
        static_assert(sizeof...(I) == sizeof...(V), "number of components must match number of values");
        (_accumulator.emplace_set<testing::component<I>>(values), ...);
    }

    template<std::size_t... I>
    auto emplace_unset() -> void
    {
        (_accumulator.emplace_unset<testing::component<I>>(), ...);
    }

    auto execute() -> void
    {
        _coalescer.consume(_accumulator);
        coalesced_changes changes = _coalescer.coalesce();
        _executor.execute(changes);
    }

    template<std::size_t I>
    auto check_component(entity_location loc, std::size_t val) -> void
    {
        const table& t = _catalog.at(loc.table);
        const std::size_t col = t.column_of(component_index_of<testing::component<I>>());

        CHECK_EQ(t.at<testing::component<I>>(loc.row, col).value, val);
    }

    template<std::size_t... I, typename... V>
    auto check_entity(entity e, V... values) -> void
    {
        static_assert(sizeof...(I) == sizeof...(V), "number of components must match number of values");

        const entity_location loc = _entity_registry.locate(e);

        CHECK_EQ(loc.table, _catalog.index_of(component_bitset_of<testing::component<I>...>()));

        REQUIRE_NE(loc.table, entity_location::invalid.table);
        REQUIRE_NE(loc.row, entity_location::invalid.row);

        const table& t = _catalog.at(loc.table);

        REQUIRE(t.contains(e));
        REQUIRE_EQ(t.entity_at(loc.row), e);

        (check_component<I>(loc, static_cast<std::size_t>(values)), ...);
    }

    auto check_entity_not_at(entity e, entity_location loc) -> void
    {
        REQUIRE_LT(loc.table, _catalog.size());
        CHECK_FALSE(_catalog.at(loc.table).contains(e));
    }

    schema _schema{testing::make_indexed_schema<8>()};
    entity_registry _entity_registry;
    catalog _catalog{_schema};
    entity_creator _creator{_schema, _entity_registry, _catalog};
    env_registry _env_registry{_schema};
    change_accumulator _accumulator{_schema};
    change_coalescer _coalescer{_schema, _entity_registry, _catalog};
    change_executor _executor{_entity_registry, _env_registry, _catalog};
};

TEST_CASE_FIXTURE(fixture, "change_executor::execute: destroy entities erase entity from catalog")
{
    const entity e0 = _creator.create_entity<0>(42);
    const entity_location prev_loc = _entity_registry.locate(e0);

    emplace_destroy(e0);

    execute();

    CHECK_FALSE(_entity_registry.contains(e0));
    check_entity_not_at(e0, prev_loc);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: destroy entities without components")
{
    const entity e0 = _entity_registry.create();

    emplace_destroy(e0);

    execute();

    CHECK_FALSE(_entity_registry.contains(e0));
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: attach insert new entity")
{
    const entity e0 = _entity_registry.create();

    emplace_attach<0, 1>(e0, 42, 24);

    execute();

    check_entity<0, 1>(e0, 42, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: attach move existing entity")
{
    const entity e0 = _creator.create_entity<0>(42);

    emplace_attach<1>(e0, 24);

    execute();

    check_entity<0, 1>(e0, 42, 24);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach all erase entity from catalog")
{
    const entity e0 = _creator.create_entity<0, 1>();
    const entity_location prev_loc = _entity_registry.locate(e0);

    emplace_detach<0, 1>(e0);

    execute();

    CHECK_EQ(_entity_registry.locate(e0), entity_location::invalid);
    check_entity_not_at(e0, prev_loc);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach moves entity to new table")
{
    const entity e0 = _creator.create_entity<0, 1>(42, 24);
    const entity_location prev_loc = _entity_registry.locate(e0);

    emplace_detach<0>(e0);

    execute();

    check_entity<1>(e0, 24);
    check_entity_not_at(e0, prev_loc);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: set")
{
    emplace_set<0>(42);

    execute();

    const testing::component<0>* c = _env_registry.get<testing::component<0>>();

    REQUIRE_NE(c, nullptr);
    CHECK_EQ(c->value, 42);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: unset")
{
    _env_registry.set<testing::component<0>>();

    emplace_unset<0>();

    execute();

    CHECK_FALSE(_env_registry.has<testing::component<0>>());
}

}} // namespace ant::detail
