#include <ant/detail/changeset/change_coalescer.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>
#include <ant.mock/equivalent.hpp>
#include <ant/detail/entity/entity_registry.hpp>

namespace ant::detail { namespace {

struct fixture : public catalog_fixture<8>
{
    change_coalescer coalescer{schema, entity_registry, catalog};
};

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: destroy entities")
{
    const entity e0 = entity_registry.create();
    const entity e1 = entity_registry.create();

    change_accumulator accumulator{schema};
    accumulator.emplace_destroy(e0);
    accumulator.emplace_destroy(e1);

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    CHECK(equivalent(changes.destroy_entities, vector<entity>{e0, e1}));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: destroy prevents any changes on the entity")
{
    const entity e0 = entity_registry.create();

    change_accumulator accumulator{schema};
    accumulator.emplace_destroy(e0);
    accumulator.emplace_attach<component<0>>(e0);
    accumulator.emplace_detach<component<0>>(e0);

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    CHECK_EQ(changes.destroy_entities, vector<entity>{e0});
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: attach")
{
    const entity e0 = entity_registry.create();

    component_bitset expected;
    expected.set_safe(schema.meta_of<component<0>>().index);
    expected.set_safe(schema.meta_of<component<1>>().index);

    change_accumulator accumulator{schema};
    accumulator.emplace_attach<component<0>>(e0);
    accumulator.emplace_attach<component<1>>(e0, 42);

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    const coalesced_entity_change& coalesced_e = changes.entities.back();

    CHECK_EQ(coalesced_e.entity, e0);
    CHECK_EQ(coalesced_e.table_index, entity_location::invalid.table);
    CHECK_EQ(coalesced_e.new_table_index, catalog.ensure_of(expected));

    REQUIRE_EQ(coalesced_e.ctors.size(), 2);
    CHECK_EQ(coalesced_e.ctors[0].meta, &schema.meta_of<component<0>>());
    CHECK_EQ(coalesced_e.ctors[1].meta, &schema.meta_of<component<1>>());
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: detach")
{
    const entity e0 = create_entity<0, 1, 2>();

    change_accumulator accumulator{schema};
    accumulator.emplace_detach<component<0>>(e0);
    accumulator.emplace_detach<component<1>>(e0);

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    const coalesced_entity_change& coalesced_e = changes.entities.back();

    CHECK_EQ(coalesced_e.entity, e0);
    CHECK_EQ(coalesced_e.table_index, entity_registry.locate(e0).table);
    CHECK_EQ(coalesced_e.new_table_index, catalog.index_of(component_bitset_of<component<2>>()));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: detach prevent attach")
{
    const entity e0 = create_entity<0, 1, 2>();

    change_accumulator accumulator{schema};
    accumulator.emplace_detach<component<0>>(e0);
    accumulator.emplace_attach<component<0>>(e0);

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    REQUIRE_EQ(changes.entities.size(), 1);
    const coalesced_entity_change& coalesced_e = changes.entities.back();

    CHECK_EQ(coalesced_e.entity, e0);
    CHECK_EQ(coalesced_e.table_index, entity_registry.locate(e0).table);
    CHECK_EQ(coalesced_e.new_table_index, catalog.index_of(component_bitset_of<component<1>, component<2>>()));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: set env")
{
    change_accumulator accumulator{schema};
    accumulator.emplace_set<component<0>>();
    accumulator.emplace_set<component<1>>(42);

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    CHECK_EQ(changes.set_envs.size(), 2);
    CHECK(std::ranges::any_of(changes.set_envs, [this](const auto& change) { return change.ctor.meta == &schema.meta_of<component<0>>(); }));
    CHECK(std::ranges::any_of(changes.set_envs, [this](const auto& change) { return change.ctor.meta == &schema.meta_of<component<1>>(); }));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: unset env")
{
    change_accumulator accumulator{schema};
    accumulator.emplace_unset<component<0>>();
    accumulator.emplace_unset<component<1>>();

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    vector<coalesced_unset_change> expected{{{.meta = &schema.meta_of<component<0>>()}, {.meta = &schema.meta_of<component<1>>()}}};
    CHECK(equivalent(changes.unset_envs, expected, [](const auto& lhs, const auto& rhs) { return lhs.meta == rhs.meta; }));
}

TEST_CASE_FIXTURE(fixture, "change_coalescer::coalesce: unset prevent set env")
{
    change_accumulator accumulator{schema};
    accumulator.emplace_unset<component<0>>();
    accumulator.emplace_set<component<0>>();

    coalescer.consume(accumulator);
    coalesced_changes changes = coalescer.coalesce();

    CHECK(changes.set_envs.empty());

    REQUIRE_EQ(changes.unset_envs.size(), 1);
    CHECK_EQ(changes.unset_envs[0].meta, &schema.meta_of<component<0>>());
}

}} // namespace ant::detail
