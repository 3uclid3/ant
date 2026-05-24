#include <ant/detail/query/query_cursor.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>
#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/schema/component_bitset.hpp>

namespace ant::detail { namespace {

struct fixture : schema_fixture<16>
{
    fixture()
    {
        table_idx0 = catalog.ensure_of(component_bitset_of<component<0>>());
        table_idx1 = catalog.ensure_of(component_bitset_of<component<1>>());
    }

    auto table0() -> table&
    {
        return catalog.at(table_idx0);
    }

    auto table1() -> table&
    {
        return catalog.at(table_idx1);
    }

    detail::catalog catalog{schema};

    std::size_t table_idx0{};
    std::size_t table_idx1{};
};

TEST_CASE_FIXTURE(fixture, "query_cursor: valid")
{
    table0().insert(entity{1});

    base_query query{&schema, {&table0()}, {0}};
    query_cursor cursor{&query, 0, 0};

    CHECK(cursor.is_valid());
}

TEST_CASE_FIXTURE(fixture, "query_cursor: invalid")
{
    query_cursor cursor;

    CHECK_FALSE(cursor.is_valid());
}

TEST_CASE_FIXTURE(fixture, "query_cursor::advance: returns false when empty")
{
    base_query query{&schema, {}, {}};
    query_cursor cursor{&query, 0, 0};

    CHECK_FALSE(cursor.advance());
}

TEST_CASE_FIXTURE(fixture, "query_cursor::advance: returns true when not empty")
{
    table0().insert(entity{0});
    table1().insert(entity{1});

    base_query query{&schema, {&table0(), &table1()}, {0, 0}};
    query_cursor cursor{&query, 0, 0};

    CHECK(cursor.advance());
}

TEST_CASE_FIXTURE(fixture, "query_cursor::advance: cursor moves within same table")
{
    table0().insert(entity{0});
    table0().insert(entity{1});

    base_query query{&schema, {&table0()}, {0}};
    query_cursor cursor{&query, 0, 0};

    REQUIRE(cursor.advance());
    CHECK_EQ(cursor.table_index, 0);
    CHECK_EQ(cursor.row_index, 1);
}

TEST_CASE_FIXTURE(fixture, "query_cursor::advance: cursor moves to next table")
{
    table0().insert(entity{0});
    table1().insert(entity{1});

    base_query query{&schema, {&table0(), &table1()}, {0, 0}};
    query_cursor cursor{&query, 0, 0};

    REQUIRE(cursor.advance());
    CHECK_EQ(cursor.table_index, 1);
    CHECK_EQ(cursor.row_index, 0);
}

TEST_CASE_FIXTURE(fixture, "query_cursor::advance: returns false and cursor at end after last row")
{
    table0().insert(entity{0});

    base_query query{&schema, {&table0()}, {0}};
    query_cursor cursor{&query, 0, 0};

    CHECK_FALSE(cursor.advance());
    CHECK_EQ(cursor.table_index, 1);
    CHECK_EQ(cursor.row_index, 0);
    CHECK_FALSE(cursor.is_valid());
}

TEST_CASE_FIXTURE(fixture, "query_cursor::advance: skips empty intermediate table")
{
    table0().insert(entity{0});
    // table1 is empty
    table& table2 = catalog.at(catalog.ensure_of(component_bitset_of<component<2>>()));
    table2.insert(entity{2});

    base_query query{&schema, {&table0(), &table1(), &table2}, {0, 0, 0}};
    query_cursor cursor{&query, 0, 0};

    REQUIRE(cursor.advance());
    CHECK_EQ(cursor.table_index, 2);
    CHECK_EQ(cursor.row_index, 0);
}

TEST_CASE_FIXTURE(fixture, "query_cursor::entity: returns entity at current row")
{
    table0().insert(entity{42});

    base_query query{&schema, {&table0()}, {0}};
    query_cursor cursor{&query, 0, 0};

    CHECK_EQ(cursor.entity(), entity{42});
}

TEST_CASE_FIXTURE(fixture, "query_cursor::table: returns table at current row")
{
    table0().insert(entity{1});

    base_query query{&schema, {&table0()}, {0}};
    query_cursor cursor{&query, 0, 0};

    CHECK_EQ(&cursor.table(), &table0());
}

}} // namespace ant::detail
