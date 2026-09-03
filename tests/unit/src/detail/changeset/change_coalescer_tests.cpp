#include <ant/detail/changeset/change_coalescer.hpp>
#include <doctest/doctest.h>

#include <algorithm>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/change_accumulator.hpp>
#include <ant/detail/store/catalog.hpp>
#include <ant/detail/store/entity_registry.hpp>

#include "../store/entity_creator.hpp"

namespace ant::detail { namespace {

struct fixture
{
    schema _schema{testing::make_indexed_schema<8>()};
    entity_registry _entity_registry;
    catalog _catalog{_schema};
    entity_creator _creator{_schema, _entity_registry, _catalog};
    change_coalescer _coalescer{_schema, _entity_registry, _catalog};
};

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: destroy entities")
{
    const entity e0 = _entity_registry.create();
    const entity e1 = _entity_registry.create();

    change_accumulator accumulator{_schema};
    accumulator.emplace_destroy(e0);
    accumulator.emplace_destroy(e1);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.destroy_entities.size(), 2);
    CHECK(std::ranges::any_of(changes.destroy_entities, [e0](const auto& change) { return change.entity == e0; }));
    CHECK(std::ranges::any_of(changes.destroy_entities, [e1](const auto& change) { return change.entity == e1; }));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: destroy prevents any changes on the entity")
{
    const entity e0 = _entity_registry.create();

    change_accumulator accumulator{_schema};
    accumulator.emplace_destroy(e0);
    accumulator.emplace_attach<testing::component<0>>(e0);
    accumulator.emplace_detach<testing::component<0>>(e0);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.destroy_entities.size(), 1);
    CHECK_EQ(changes.destroy_entities[0].entity, e0);
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: attach")
{
    const entity e0 = _entity_registry.create();

    component_bitset expected;
    expected.set_safe(_schema.meta_of<testing::component<0>>().index);
    expected.set_safe(_schema.meta_of<testing::component<1>>().index);

    change_accumulator accumulator{_schema};
    accumulator.emplace_attach<testing::component<0>>(e0);
    accumulator.emplace_attach<testing::component<1>>(e0, 42);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    const coalesced_entity_change& coalesced_e = changes.entities.back();

    CHECK_EQ(coalesced_e.entity, e0);
    CHECK_EQ(coalesced_e.table_index, entity_location::invalid.table);
    CHECK_EQ(coalesced_e.new_table_index, _catalog.ensure_of(expected));
    CHECK_EQ(coalesced_e.logical_attach_components, expected);
    CHECK(coalesced_e.logical_detach_components.none());

    REQUIRE_EQ(coalesced_e.ctors.size(), 2);
    CHECK_EQ(coalesced_e.ctors[0].meta, &_schema.meta_of<testing::component<0>>());
    CHECK_EQ(coalesced_e.ctors[1].meta, &_schema.meta_of<testing::component<1>>());
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: detach")
{
    const entity e0 = _creator.create_entity<0, 1, 2>();

    change_accumulator accumulator{_schema};
    accumulator.emplace_detach<testing::component<0>>(e0);
    accumulator.emplace_detach<testing::component<1>>(e0);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    const coalesced_entity_change& coalesced_e = changes.entities.back();

    CHECK_EQ(coalesced_e.entity, e0);
    CHECK_EQ(coalesced_e.table_index, _entity_registry.locate(e0).table);
    CHECK_EQ(coalesced_e.new_table_index, _catalog.index_of(component_bitset_of<testing::component<2>>()));
    CHECK(coalesced_e.logical_attach_components.none());
    CHECK_EQ(coalesced_e.logical_detach_components, component_bitset_of<testing::component<0>, testing::component<1>>());
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: reports only effective component changes")
{
    const entity e0 = _creator.create_entity<0>();

    change_accumulator accumulator{_schema};
    accumulator.emplace_attach<testing::component<0>>(e0);
    accumulator.emplace_detach<testing::component<1>>(e0);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    CHECK(changes.entities[0].logical_attach_components.none());
    CHECK(changes.entities[0].logical_detach_components.none());
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: destroying an entity detaches all its components")
{
    const entity e0 = _creator.create_entity<0, 2>();

    change_accumulator accumulator{_schema};
    accumulator.emplace_destroy(e0);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.destroy_entities.size(), 1);
    CHECK_EQ(changes.destroy_entities[0].entity, e0);
    CHECK_EQ(changes.destroy_entities[0].logical_detach_components, component_bitset_of<testing::component<0>, testing::component<2>>());
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: detach prevent attach")
{
    const entity e0 = _creator.create_entity<0, 1, 2>();

    change_accumulator accumulator{_schema};
    accumulator.emplace_detach<testing::component<0>>(e0);
    accumulator.emplace_attach<testing::component<0>>(e0);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    const coalesced_entity_change& coalesced_e = changes.entities.back();

    CHECK_EQ(coalesced_e.entity, e0);
    CHECK_EQ(coalesced_e.table_index, _entity_registry.locate(e0).table);
    CHECK_EQ(coalesced_e.new_table_index, _catalog.index_of(component_bitset_of<testing::component<1>, testing::component<2>>()));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: set env")
{
    change_accumulator accumulator{_schema};
    accumulator.emplace_set<testing::component<0>>();
    accumulator.emplace_set<testing::component<1>>(42);

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    CHECK_EQ(changes.set_envs.size(), 2);
    CHECK(std::ranges::any_of(changes.set_envs, [this](const auto& change) { return change.ctor.meta == &_schema.meta_of<testing::component<0>>(); }));
    CHECK(std::ranges::any_of(changes.set_envs, [this](const auto& change) { return change.ctor.meta == &_schema.meta_of<testing::component<1>>(); }));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: unset env")
{
    change_accumulator accumulator{_schema};
    accumulator.emplace_unset<testing::component<0>>();
    accumulator.emplace_unset<testing::component<1>>();

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    vector<coalesced_unset_change> expected{{{.meta = &_schema.meta_of<testing::component<0>>()}, {.meta = &_schema.meta_of<testing::component<1>>()}}};
    CHECK(std::ranges::is_permutation(changes.unset_envs, expected, [](const auto& lhs, const auto& rhs) { return lhs.meta == rhs.meta; }));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: unset prevent set env")
{
    change_accumulator accumulator{_schema};
    accumulator.emplace_unset<testing::component<0>>();
    accumulator.emplace_set<testing::component<0>>();

    _coalescer.consume(accumulator);
    coalesced_changes changes = _coalescer.coalesce();

    CHECK(changes.set_envs.empty());

    REQUIRE_EQ(changes.unset_envs.size(), 1);
    CHECK_EQ(changes.unset_envs[0].meta, &_schema.meta_of<testing::component<0>>());
}

}} // namespace ant::detail
