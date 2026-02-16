#include <ant/database/detail/query_cursor.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/database/schema.hpp>
#include <ant.test.shared/doctest.hpp>
#include <ant/database/detail/catalog.hpp>

namespace ant::detail { namespace {

struct fixture : test::schema_fixture<16>
{
    fixture()
    {
        table_idx0 = catalog.ensure_of(schema.bitset_for<test::component<0>>());
        table_idx1 = catalog.ensure_of(schema.bitset_for<test::component<1>>());
    }

    auto table0() -> table&
    {
        return catalog.at(table_idx0);
    }

    auto table1() -> table&
    {
        return catalog.at(table_idx1);
    }

    catalog catalog{schema};

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

}} // namespace ant::detail
