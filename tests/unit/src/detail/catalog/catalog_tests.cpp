#include <ant/detail/catalog/catalog.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>
#include <ant.mock/equivalent.hpp>
#include <ant/detail/schema/component_bitset.hpp>

namespace ant::detail { namespace {

struct fixture : catalog_fixture<16>
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
            emplace_combinations<Size, I + 1, Cs..., component<I>>();
        }
    }
};

TEST_CASE_FIXTURE(fixture, "catalog::ensure_of: create and retrieve table index matching components")
{
    component_bitset components = component_bitset_of<component<1>, component<2>>();

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
    component_bitset components = component_bitset_of<component<3>, component<4>>();

    CHECK_EQ(catalog.index_of(components), catalog.npos);
}

TEST_CASE_FIXTURE(fixture, "catalog::for_each: match tables by components")
{
    emplace_combinations<3>();

    component_bitset required{GENERATE(
        component_bitset_of<component<0>, component<1>>(),
        component_bitset_of<component<0>, component<2>>(),
        component_bitset_of<component<1>, component<2>>())};

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    std::vector<std::size_t> expected_tables{
        catalog.index_of(required),
        catalog.index_of(component_bitset_of<component<0>, component<1>, component<2>>())};

    CHECK(equivalent(matched_tables, expected_tables));
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
        catalog.index_of(component_bitset_of<component<0>>()),
        catalog.index_of(component_bitset_of<component<1>>()),
        catalog.index_of(component_bitset_of<component<0>, component<1>>())};
    CHECK(equivalent(matched_tables, expected_tables));
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

    component_bitset required{component_bitset_of<component<2>>()};

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
    component_bitset required{component_bitset_of<component<0>, component<1>>()};

    std::size_t count = 0;

    catalog.for_each(required, [&count](std::size_t idx [[maybe_unused]], const auto& table [[maybe_unused]]) {
        ++count;
    });

    CHECK_EQ(count, 128u);
}

}} // namespace ant::detail
