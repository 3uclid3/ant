#include <ant.test.shared/doctest.hpp>

#include <ant/database/detail/catalog.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/database/schema.hpp>

namespace ant::detail { namespace {

struct fixture : test::schema_fixture<16>
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
                [[maybe_unused]] auto _ = catalog.ensure_of(schema.bitset_for<Cs...>());
            }
        }
        else
        {
            // Case 1: skip I
            emplace_combinations<Size, I + 1, Cs...>();
            // Case 2: include I
            emplace_combinations<Size, I + 1, Cs..., test::component<I>>();
        }
    }

    catalog catalog{this->schema};
};

TEST_CASE_FIXTURE(fixture, "basic_catalog::ensure_of: create and retrieve table index matching components")
{
    dynamic_bitset components{schema.bitset_for<test::component<1>, test::component<2>>()};

    CHECK(catalog.empty());

    auto first_idx = catalog.ensure_of(components);
    auto second_idx = catalog.ensure_of(components);

    CHECK_EQ(first_idx, second_idx);
    CHECK_EQ(catalog.size(), 1u);

    const auto& table = catalog.at(first_idx);
    CHECK_EQ(table.components(), components);
}

TEST_CASE_FIXTURE(fixture, "basic_catalog::for_each: match tables by components")
{
    emplace_combinations<3>();

    dynamic_bitset required{GENERATE(
        schema.bitset_for<test::component<0>, test::component<1>>(),
        schema.bitset_for<test::component<0>, test::component<2>>(),
        schema.bitset_for<test::component<1>, test::component<2>>())};

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    std::vector<std::size_t> expected_tables{
        catalog.index_of(required),
        catalog.index_of(schema.bitset_for<test::component<0>, test::component<1>, test::component<2>>())};

    CHECK(test::equivalent(matched_tables, expected_tables));
}

TEST_CASE_FIXTURE(fixture, "basic_catalog::for_each: required none matches all tables")
{
    emplace_combinations<2>();

    dynamic_bitset required; // empty

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    std::vector<std::size_t> expected_tables{
        catalog.index_of(schema.bitset_for<test::component<0>>()),
        catalog.index_of(schema.bitset_for<test::component<1>>()),
        catalog.index_of(schema.bitset_for<test::component<0>, test::component<1>>())};
    CHECK(test::equivalent(matched_tables, expected_tables));
}

TEST_CASE_FIXTURE(fixture, "basic_catalog::for_each: required none matches no tables when catalog empty")
{
    dynamic_bitset required; // empty

    std::vector<std::size_t> matched_tables;
    catalog.for_each(required, [&matched_tables](std::size_t idx, const auto& table [[maybe_unused]]) {
        matched_tables.push_back(idx);
    });

    CHECK(matched_tables.empty());
}

TEST_CASE_FIXTURE(fixture, "basic_catalog::for_each: no matches when required component absent")
{
    emplace_combinations<2>();

    dynamic_bitset required{schema.bitset_for<test::component<2>>()};

    bool found = false;
    catalog.for_each(required, [&found](std::size_t idx [[maybe_unused]], const auto& table [[maybe_unused]]) {
        found = true;
    });

    CHECK_FALSE(found);
}

TEST_CASE_FIXTURE(fixture, "basic_catalog::for_each: matches after capacity growth")
{
    // 9 components -> 2^9 - 1 = 511 tables (> 256 inplace capacity)
    emplace_combinations<9>();

    // Require two components -> 2^(9-2) = 128 matches
    dynamic_bitset required{schema.bitset_for<test::component<0>, test::component<1>>()};

    std::size_t count = 0;

    catalog.for_each(required, [&count](std::size_t idx [[maybe_unused]], const auto& table [[maybe_unused]]) {
        ++count;
    });

    CHECK_EQ(count, 128u);
}

}} // namespace ant::detail
