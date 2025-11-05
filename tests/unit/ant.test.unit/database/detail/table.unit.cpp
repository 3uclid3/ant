#include <doctest/doctest.h>

#include <ant/database/detail/table.hpp>

#include <algorithm>
#include <vector>

#include <ant.test.shared/database/table.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/detail/entity_traits.hpp>
#include <ant/database/entity.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail { namespace {

struct fixture : test::schema_fixture<32>
{
    auto make_entities(std::size_t size) -> std::vector<entity>
    {
        std::vector<entity> entities{};
        entities.reserve(size);

        for (std::size_t i = 0; i < size; ++i)
        {
            entities.push_back(entity_traits::construct(i));
        }

        return entities;
    }

    auto shuffle_entities(std::vector<entity> entities) -> std::vector<entity>
    {
        // just split odd and even indices for simplicity
        for (std::size_t i = 1; i < entities.size(); i += 2)
        {
            std::swap(entities[i], entities[i / 2]);
        }
        return entities;
    }

    auto insert(table& table, std::size_t size, std::size_t offset = 0) -> void
    {
        for (std::size_t i = 0; i < size; ++i)
        {
            table.insert(entity_traits::construct(i + offset));
        }
    }
};

TEST_CASE_FIXTURE(fixture, "table::ctor(default): creates an empty table")
{
    table tbl;

    CHECK(tbl.columns().empty());
}

TEST_CASE_FIXTURE(fixture, "table::ctor(columns): creates a table with given columns")
{
    table tbl{test::make_table<16>(schema)};

    CHECK_EQ(tbl.columns().size(), 16);
}

TEST_CASE_FIXTURE(fixture, "table::insert: adds a row to each columns")
{
    const auto entities = shuffle_entities(make_entities(4));

    table tbl{test::make_table<16>(schema)};

    for (const auto& e : entities)
    {
        tbl.insert(e);
    }

    CHECK(std::ranges::equal(tbl.rows(), entities));
    CHECK(std::ranges::all_of(tbl.columns(), [expected_size = entities.size()](const table_column& col) {
        return col.size() == expected_size;
    }));
}

TEST_CASE_FIXTURE(fixture, "table::splice: moves a row from another table")
{
    table tbl{test::make_table<4>(schema)};
    table source{test::make_table<2>(schema)};

    insert(tbl, 2);
    insert(source, 4, 2);

    for (std::size_t i = 0; i < 4; ++i)
    {
        const entity e = entity_traits::construct(i + 2);

        const std::size_t row_index = tbl.splice(e, source);
        REQUIRE_NE(row_index, table::npos);

        CHECK_EQ(tbl.rows()[row_index], e);
        CHECK_EQ(tbl.size(), 2 + i + 1);
        CHECK_EQ(source.size(), 4 - i - 1);
        CHECK_FALSE(source.contains(e));
        CHECK(std::ranges::all_of(tbl.columns(), [expected_size = tbl.size()](const table_column& col) {
            return col.size() == expected_size;
        }));
        CHECK(std::ranges::all_of(source.columns(), [expected_size = source.size()](const table_column& col) {
            return col.size() == expected_size;
        }));
    }
}

TEST_CASE_FIXTURE(fixture, "table::erase")
{
    // insert in order
    auto entities = make_entities(8);

    table tbl{test::make_table<16>(schema)};
    for (const auto& e : entities)
    {
        tbl.insert(e);
    }

    // erase in reverse shuffled order
    entities = shuffle_entities(std::move(entities));

    while (!entities.empty())
    {
        const entity e = entities.back();
        entities.pop_back();

        tbl.erase(e);

        CHECK_EQ(tbl.size(), entities.size());
        CHECK_FALSE(tbl.contains(e));
        CHECK(std::ranges::all_of(tbl.columns(), [expected_size = entities.size()](const table_column& col) {
            return col.size() == expected_size;
        }));
    }
}

}} // namespace ant::detail
