#include <ant/detail/changeset/change_executor.hpp>
#include <doctest/doctest.h>

#include <algorithm>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/change_accumulator.hpp>
#include <ant/detail/changeset/change_coalescer.hpp>
#include <ant/detail/changeset/lifecycle_registry.hpp>
#include <ant/detail/store/catalog.hpp>
#include <ant/detail/store/entity_registry.hpp>
#include <ant/detail/store/env_registry.hpp>
#include <ant/detail/store/store.hpp>

#include "../store/entity_creator.hpp"

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
        _executor.execute(changes, _accumulator);
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

    store _store{testing::make_indexed_schema<8>()};
    schema& _schema{_store.schema};
    entity_registry& _entity_registry{_store.entities};
    catalog& _catalog{_store.catalog};
    env_registry& _env_registry{_store.envs};
    entity_creator _creator{_schema, _entity_registry, _catalog};
    change_accumulator _accumulator{_schema};
    change_coalescer _coalescer{_schema, _entity_registry, _catalog};
    lifecycle_registry _lifecycle_registry{_store.schema.range()};
    change_executor _executor{_store, _lifecycle_registry};
};

struct single_component_scenario_fixture : fixture
{
    const entity first{_creator.create_entity<0>(10)};
    const entity survivor{_creator.create_entity<0>(20)};
    const entity last{_creator.create_entity<0>(30)};
    const std::size_t source{_entity_registry.locate(first).table};
};

struct attachment_scenario_fixture : single_component_scenario_fixture
{
    attachment_scenario_fixture();

    int attaches{0};
};

struct detachment_scenario_fixture : fixture
{
    detachment_scenario_fixture();

    const entity first{_creator.create_entity<0, 1>(10, 11)};
    const entity survivor{_creator.create_entity<0, 1>(20, 21)};
    const entity last{_creator.create_entity<0, 1>(30, 31)};
    const std::size_t source{_entity_registry.locate(first).table};
    int first_detaches{0};
    int last_detaches{0};
};

struct single_component_conflict_scenario_fixture : fixture
{
    single_component_conflict_scenario_fixture();

    const entity target{_creator.create_entity<0>(10)};
    const entity survivor{_creator.create_entity<0>(20)};
    const std::size_t source{_entity_registry.locate(target).table};
    int attaches{0};
    int detaches{0};
};

struct two_component_conflict_scenario_fixture : fixture
{
    two_component_conflict_scenario_fixture();

    const entity target{_creator.create_entity<0, 1>(10, 11)};
    const entity survivor{_creator.create_entity<0, 1>(20, 21)};
    const std::size_t source{_entity_registry.locate(target).table};
    int attaches{0};
    int detaches{0};
};

struct swap_scenario_fixture : fixture
{
    swap_scenario_fixture();

    const entity target{_creator.create_entity<0>(10)};
    const entity survivor{_creator.create_entity<0>(20)};
    const entity_location vacated{_entity_registry.locate(target)};
};

attachment_scenario_fixture::attachment_scenario_fixture()
{
    _lifecycle_registry.on_attach<testing::component<1>>(basic_binding<entity, testing::component<1>&>(
        _store,
        [this](entity actual, testing::component<1>& value) {
            ++attaches;
            CHECK_EQ(actual, last);
            CHECK_EQ(value.value, 40);
            check_entity<0, 1>(actual, 30, 40);
        }));
}

detachment_scenario_fixture::detachment_scenario_fixture()
{
    _lifecycle_registry.on_detach<testing::component<0>>(basic_binding<entity, const testing::component<0>&>(
        _store,
        [this](entity actual, const testing::component<0>& value) {
            REQUIRE((actual == first || actual == last));
            if (actual == first)
            {
                ++first_detaches;
                CHECK_EQ(value.value, 10);
            }
            else
            {
                ++last_detaches;
                CHECK_EQ(value.value, 30);
            }
        }));
}

single_component_conflict_scenario_fixture::single_component_conflict_scenario_fixture()
{
    _lifecycle_registry.on_attach<testing::component<1>>(basic_binding<entity, testing::component<1>&>(
        _store,
        [this](entity, testing::component<1>&) { ++attaches; }));
    _lifecycle_registry.on_detach<testing::component<0>>(basic_binding<entity, const testing::component<0>&>(
        _store,
        [this](entity actual, const testing::component<0>& value) {
            ++detaches;
            CHECK_EQ(actual, target);
            CHECK_EQ(value.value, 10);
        }));
}

two_component_conflict_scenario_fixture::two_component_conflict_scenario_fixture()
{
    _lifecycle_registry.on_attach<testing::component<0>>(basic_binding<entity, testing::component<0>&>(
        _store,
        [this](entity, testing::component<0>&) { ++attaches; }));
    _lifecycle_registry.on_detach<testing::component<0>>(basic_binding<entity, const testing::component<0>&>(
        _store,
        [this](entity actual, const testing::component<0>& value) {
            ++detaches;
            CHECK_EQ(actual, target);
            CHECK_EQ(value.value, 10);
        }));
}

swap_scenario_fixture::swap_scenario_fixture()
{
    const entity_location previous = _entity_registry.locate(survivor);
    REQUIRE_EQ(previous.table, vacated.table);
    REQUIRE_NE(previous.row, vacated.row);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: destroy entities erase entity from catalog")
{
    const entity e0 = _creator.create_entity<0>(42);
    const entity_location prev_loc = _entity_registry.locate(e0);

    emplace_destroy(e0);

    execute();

    CHECK_FALSE(_entity_registry.contains(e0));
    CHECK_FALSE(_catalog.at(prev_loc.table).contains(e0));
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: destroy entities without components")
{
    const entity e0 = _entity_registry.create();

    emplace_destroy(e0);

    execute();

    CHECK_FALSE(_entity_registry.contains(e0));
}

TEST_CASE_FIXTURE(swap_scenario_fixture, "change_executor::execute: destruction relocates the swapped entity")
{
    emplace_destroy(target);
    execute();

    CHECK_FALSE(_entity_registry.contains(target));
    REQUIRE_EQ(_entity_registry.locate(survivor), vacated);
    CHECK_EQ(_catalog.at(vacated.table).row_of(survivor), vacated.row);
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched destruction relocates the survivor using the current row")
{
    const entity_location vacated = _entity_registry.locate(first);

    // Destroying first moves last into its row before last is destroyed in the same batch.
    emplace_destroy(first);
    emplace_destroy(last);
    execute();

    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_entity_registry.contains(last));
    REQUIRE(_entity_registry.contains(survivor));
    CHECK_EQ(_catalog.at(vacated.table).row_of(survivor), vacated.row);
    REQUIRE_EQ(_entity_registry.locate(survivor), vacated);
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(swap_scenario_fixture, "change_executor::execute: archetype migration relocates the swapped entity")
{
    emplace_attach<1>(target, 30);
    execute();

    REQUIRE_EQ(_entity_registry.locate(survivor), vacated);
    CHECK_EQ(_catalog.at(vacated.table).row_of(survivor), vacated.row);
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(target, 10, 30);
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
    CHECK_FALSE(_catalog.at(prev_loc.table).contains(e0));
}

TEST_CASE_FIXTURE(swap_scenario_fixture, "change_executor::execute: detaching the last component relocates the swapped entity")
{
    emplace_detach<0>(target);
    execute();

    CHECK(_entity_registry.contains(target));
    CHECK_EQ(_entity_registry.locate(target), entity_location::invalid);
    CHECK_FALSE(_catalog.at(vacated.table).contains(target));
    REQUIRE_EQ(_entity_registry.locate(survivor), vacated);
    CHECK_EQ(_catalog.at(vacated.table).row_of(survivor), vacated.row);
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(fixture, "change_executor::execute: detach moves entity to new table")
{
    const entity e0 = _creator.create_entity<0, 1>(42, 24);
    const entity_location prev_loc = _entity_registry.locate(e0);

    emplace_detach<0>(e0);

    execute();

    check_entity<1>(e0, 24);
    CHECK_FALSE(_catalog.at(prev_loc.table).contains(e0));
}

TEST_CASE_FIXTURE(attachment_scenario_fixture, "change_executor::execute: enqueue attach then destroy on different entities preserves attachment callback values")
{
    emplace_attach<1>(last, 40);
    emplace_destroy(first);
    execute();

    CHECK_EQ(attaches, 1);
    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(last, 30, 40);
}

TEST_CASE_FIXTURE(attachment_scenario_fixture, "change_executor::execute: enqueue destroy then attach on different entities preserves attachment callback values")
{
    emplace_destroy(first);
    emplace_attach<1>(last, 40);
    execute();

    CHECK_EQ(attaches, 1);
    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(last, 30, 40);
}

TEST_CASE_FIXTURE(detachment_scenario_fixture, "change_executor::execute: enqueue detach one component then destroy on different entities preserves detachment callback values")
{
    emplace_detach<0>(last);
    emplace_destroy(first);
    execute();

    CHECK_EQ(first_detaches, 1);
    CHECK_EQ(last_detaches, 1);
    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0, 1>(survivor, 20, 21);
    REQUIRE(_entity_registry.contains(last));
    check_entity<1>(last, 31);
}

TEST_CASE_FIXTURE(detachment_scenario_fixture, "change_executor::execute: enqueue detach all components then destroy on different entities preserves detachment callback values")
{
    emplace_detach<0>(last);
    emplace_detach<1>(last);
    emplace_destroy(first);
    execute();

    CHECK_EQ(first_detaches, 1);
    CHECK_EQ(last_detaches, 1);
    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0, 1>(survivor, 20, 21);
    REQUIRE(_entity_registry.contains(last));
    CHECK_EQ(_entity_registry.locate(last), entity_location::invalid);
}

TEST_CASE_FIXTURE(detachment_scenario_fixture, "change_executor::execute: enqueue destroy then detach one component on different entities preserves detachment callback values")
{
    emplace_destroy(first);
    emplace_detach<0>(last);
    execute();

    CHECK_EQ(first_detaches, 1);
    CHECK_EQ(last_detaches, 1);
    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0, 1>(survivor, 20, 21);
    REQUIRE(_entity_registry.contains(last));
    check_entity<1>(last, 31);
}

TEST_CASE_FIXTURE(detachment_scenario_fixture, "change_executor::execute: enqueue destroy then detach all components on different entities preserves detachment callback values")
{
    emplace_destroy(first);
    emplace_detach<0>(last);
    emplace_detach<1>(last);
    execute();

    CHECK_EQ(first_detaches, 1);
    CHECK_EQ(last_detaches, 1);
    CHECK_FALSE(_entity_registry.contains(first));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0, 1>(survivor, 20, 21);
    REQUIRE(_entity_registry.contains(last));
    CHECK_EQ(_entity_registry.locate(last), entity_location::invalid);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched attachments preserve all entity locations when executing first row first")
{
    emplace_attach<1>(first, 11);
    emplace_attach<1>(last, 31);
    _coalescer.consume(_accumulator);
    auto changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 2);
    std::ranges::sort(changes.entities, {}, &coalesced_entity_change::entity);

    _executor.execute(changes, _accumulator);

    REQUIRE(_entity_registry.contains(first));
    REQUIRE(_entity_registry.contains(last));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(first, 10, 11);
    check_entity<0, 1>(last, 30, 31);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched attachments preserve all entity locations when executing last row first")
{
    emplace_attach<1>(first, 11);
    emplace_attach<1>(last, 31);
    _coalescer.consume(_accumulator);
    auto changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 2);
    std::ranges::sort(changes.entities, {}, &coalesced_entity_change::entity);
    std::ranges::reverse(changes.entities);

    _executor.execute(changes, _accumulator);

    REQUIRE(_entity_registry.contains(first));
    REQUIRE(_entity_registry.contains(last));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(first, 10, 11);
    check_entity<0, 1>(last, 30, 31);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched detachments of all components preserve the survivor when executing first row first")
{
    emplace_detach<0>(first);
    emplace_detach<0>(last);
    _coalescer.consume(_accumulator);
    auto changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 2);
    std::ranges::sort(changes.entities, {}, &coalesced_entity_change::entity);

    _executor.execute(changes, _accumulator);

    REQUIRE(_entity_registry.contains(first));
    REQUIRE(_entity_registry.contains(last));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    CHECK_EQ(_entity_registry.locate(first), entity_location::invalid);
    CHECK_EQ(_entity_registry.locate(last), entity_location::invalid);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched detachments of all components preserve the survivor when executing last row first")
{
    emplace_detach<0>(first);
    emplace_detach<0>(last);
    _coalescer.consume(_accumulator);
    auto changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 2);
    std::ranges::sort(changes.entities, {}, &coalesced_entity_change::entity);
    std::ranges::reverse(changes.entities);

    _executor.execute(changes, _accumulator);

    REQUIRE(_entity_registry.contains(first));
    REQUIRE(_entity_registry.contains(last));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    CHECK_EQ(_entity_registry.locate(first), entity_location::invalid);
    CHECK_EQ(_entity_registry.locate(last), entity_location::invalid);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched attachment and detachment preserve all entity locations when executing first row first")
{
    emplace_attach<1>(first, 11);
    emplace_detach<0>(last);
    _coalescer.consume(_accumulator);
    auto changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 2);
    std::ranges::sort(changes.entities, {}, &coalesced_entity_change::entity);

    _executor.execute(changes, _accumulator);

    REQUIRE(_entity_registry.contains(first));
    REQUIRE(_entity_registry.contains(last));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(first, 10, 11);
    CHECK_EQ(_entity_registry.locate(last), entity_location::invalid);
}

TEST_CASE_FIXTURE(single_component_scenario_fixture, "change_executor::execute: batched attachment and detachment preserve all entity locations when executing last row first")
{
    emplace_attach<1>(first, 11);
    emplace_detach<0>(last);
    _coalescer.consume(_accumulator);
    auto changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 2);
    std::ranges::sort(changes.entities, {}, &coalesced_entity_change::entity);
    std::ranges::reverse(changes.entities);

    _executor.execute(changes, _accumulator);

    REQUIRE(_entity_registry.contains(first));
    REQUIRE(_entity_registry.contains(last));
    CHECK_FALSE(_catalog.at(source).contains(first));
    CHECK_FALSE(_catalog.at(source).contains(last));
    check_entity<0>(survivor, 20);
    check_entity<0, 1>(first, 10, 11);
    CHECK_EQ(_entity_registry.locate(last), entity_location::invalid);
}

TEST_CASE_FIXTURE(single_component_conflict_scenario_fixture, "change_executor::execute: enqueue detach then destroy on the same entity destroys it once")
{
    emplace_detach<0>(target);
    emplace_destroy(target);
    execute();

    CHECK_EQ(attaches, 0);
    CHECK_EQ(detaches, 1);
    CHECK_FALSE(_entity_registry.contains(target));
    CHECK_FALSE(_catalog.at(source).contains(target));
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(single_component_conflict_scenario_fixture, "change_executor::execute: enqueue attach then destroy on the same entity destroys it once")
{
    emplace_attach<1>(target, 11);
    emplace_destroy(target);
    execute();

    CHECK_EQ(attaches, 0);
    CHECK_EQ(detaches, 1);
    CHECK_FALSE(_entity_registry.contains(target));
    CHECK_FALSE(_catalog.at(source).contains(target));
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(single_component_conflict_scenario_fixture, "change_executor::execute: enqueue destroy then detach on the same entity destroys it once")
{
    emplace_destroy(target);
    emplace_detach<0>(target);
    execute();

    CHECK_EQ(attaches, 0);
    CHECK_EQ(detaches, 1);
    CHECK_FALSE(_entity_registry.contains(target));
    CHECK_FALSE(_catalog.at(source).contains(target));
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(single_component_conflict_scenario_fixture, "change_executor::execute: enqueue destroy then attach on the same entity destroys it once")
{
    emplace_destroy(target);
    emplace_attach<1>(target, 11);
    execute();

    CHECK_EQ(attaches, 0);
    CHECK_EQ(detaches, 1);
    CHECK_FALSE(_entity_registry.contains(target));
    CHECK_FALSE(_catalog.at(source).contains(target));
    check_entity<0>(survivor, 20);
}

TEST_CASE_FIXTURE(two_component_conflict_scenario_fixture, "change_executor::execute: enqueue attach then detach on the same component detaches its original value")
{
    emplace_attach<0>(target, 99);
    emplace_detach<0>(target);
    execute();

    CHECK_EQ(attaches, 0);
    CHECK_EQ(detaches, 1);
    CHECK_FALSE(_catalog.at(source).contains(target));
    check_entity<1>(target, 11);
    check_entity<0, 1>(survivor, 20, 21);
}

TEST_CASE_FIXTURE(two_component_conflict_scenario_fixture, "change_executor::execute: enqueue detach then attach on the same component detaches its original value")
{
    emplace_detach<0>(target);
    emplace_attach<0>(target, 99);
    execute();

    CHECK_EQ(attaches, 0);
    CHECK_EQ(detaches, 1);
    CHECK_FALSE(_catalog.at(source).contains(target));
    check_entity<1>(target, 11);
    check_entity<0, 1>(survivor, 20, 21);
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
