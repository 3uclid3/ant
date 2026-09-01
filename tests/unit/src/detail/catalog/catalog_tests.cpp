#include <ant/detail/catalog/catalog.hpp>
#include <doctest/doctest.h>

#include <algorithm>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/component/component_bitset.hpp>
#include <ant/detail/entity/entity_registry.hpp>

#include "../entity_creator.hpp"

namespace ant::detail { namespace {

struct fixture
{
    // Recursively enumerate all non-empty subsets of {0..Size-1}
    // Cs... holds the currently included components in ascending order.
    template<std::size_t Size, std::size_t I = 0, typename... Cs>
    auto emplace_combinations() -> void
    {
        if constexpr (I == Size)
        {
            if constexpr (sizeof...(Cs) > 0)
            {
                auto _ = catalog.ensure_of(component_bitset_of<Cs...>());
            }
        }
        else
        {
            // Case 1: skip I
            emplace_combinations<Size, I + 1, Cs...>();
            // Case 2: include I
            emplace_combinations<Size, I + 1, Cs..., testing::component<I>>();
        }
    }

    ant::schema schema{testing::make_indexed_schema<16>()};
    ant::detail::entity_registry entity_registry;
    ant::detail::catalog catalog{schema};
    entity_creator creator{schema, entity_registry, catalog};
};

TEST_CASE_FIXTURE(fixture, "catalog::ensure_of: create and retrieve table index matching components")
{
    component_bitset components = component_bitset_of<testing::component<1>, testing::component<2>>();

    CHECK(catalog.empty());

    auto first_idx = catalog.ensure_of(components);
    auto second_idx = catalog.ensure_of(components);

    CHECK_EQ(first_idx, second_idx);
    CHECK_EQ(catalog.size(), 1u);

    const auto& table = catalog.at(first_idx);
    CHECK_EQ(table.components(), components);
}

TEST_CASE_FIXTURE(fixture, "catalog::index_of: returns npos for non-existing table")
{
    component_bitset components = component_bitset_of<testing::component<3>, testing::component<4>>();

    CHECK_EQ(catalog.index_of(components), catalog.npos);
}

TEST_CASE_FIXTURE(fixture, "catalog::for_each: match tables by components")
{
    emplace_combinations<3>();

    component_bitset required{GENERATE(
        component_bitset_of<testing::component<0>, testing::component<1>>(),
        component_bitset_of<testing::component<0>, testing::component<2>>(),
        component_bitset_of<testing::component<1>, testing::component<2>>())};

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    std::vector<std::size_t> expected_tables{
        catalog.index_of(required),
        catalog.index_of(component_bitset_of<testing::component<0>, testing::component<1>, testing::component<2>>())};

    CHECK(std::ranges::is_permutation(matched_tables, expected_tables));
}

TEST_CASE_FIXTURE(fixture, "catalog::for_each: required none matches all tables")
{
    emplace_combinations<2>();

    component_bitset required; // empty

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    std::vector<std::size_t> expected_tables{
        catalog.index_of(component_bitset_of<testing::component<0>>()),
        catalog.index_of(component_bitset_of<testing::component<1>>()),
        catalog.index_of(component_bitset_of<testing::component<0>, testing::component<1>>())};
    CHECK(std::ranges::is_permutation(matched_tables, expected_tables));
}

TEST_CASE_FIXTURE(fixture, "catalog::for_each: required none matches no tables when catalog empty")
{
    component_bitset required; // empty

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    CHECK(matched_tables.empty());
}

TEST_CASE_FIXTURE(fixture, "catalog::for_each: no matches when required component absent")
{
    emplace_combinations<2>();

    component_bitset required{component_bitset_of<testing::component<2>>()};

    bool found = false;
    catalog.for_each(required, [&found](std::size_t idx [[maybe_unused]], const auto& table [[maybe_unused]]) {
        found = true;
    });

    CHECK_FALSE(found);
}

TEST_CASE_FIXTURE(fixture, "catalog::for_each: matches after capacity growth")
{
    // 9 components -> 2^9 - 1 = 511 tables (> 256 inplace capacity)
    emplace_combinations<9>();

    // Require two components -> 2^(9-2) = 128 matches
    component_bitset required{component_bitset_of<testing::component<0>, testing::component<1>>()};

    std::size_t count = 0;

    catalog.for_each(required, [&count](std::size_t idx [[maybe_unused]], const auto& table [[maybe_unused]]) {
        ++count;
    });

    CHECK_EQ(count, 128u);
}

}} // namespace ant::detail
