#include <ant/query.hpp>
#include <doctest/doctest.h>

#include <ant/detail/query/query_builder.hpp>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>

namespace ant { namespace detail { namespace {

struct fixture : catalog_fixture<16>
{
    template<typename Signature>
    auto make_query() -> query<Signature>
    {
        return builder.build<Signature>();
    }

    query_builder builder{schema, catalog};
};

TEST_CASE_FIXTURE(fixture, "query: supports multiple excluded component types")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<0, 2>(entity{2});
    insert_entity_with_components<0, 3>(entity{3});
    insert_entity_with_components<0, 2, 3>(entity{4});

    using signature = query_signature<component<0>, exclude<component<2>, component<3>>>;
    query query = make_query<signature>();

    CHECK(query.row(entity{1}).has_value());
    CHECK_FALSE(query.row(entity{2}).has_value());
    CHECK_FALSE(query.row(entity{3}).has_value());
    CHECK_FALSE(query.row(entity{4}).has_value());
    CHECK_EQ(query.count_rows(), 1);
}

TEST_CASE_FIXTURE(fixture, "query::row: returns nullopt for non-matching entities")
{
    insert_entity_with_components<0, 1>(entity{1});
    insert_entity_with_components<1>(entity{2});

    using signature = query_signature<component<0>, component<1>>;
    query query = make_query<signature>();

    CHECK(query.row(entity{1}).has_value());
    CHECK_FALSE(query.row(entity{2}).has_value());
    CHECK_FALSE(query.row(entity{999}).has_value());
}

TEST_CASE_FIXTURE(fixture, "query::begin: equals end when all matching tables are empty")
{
    // ensure_of creates the table but no entity is inserted, so it is empty
    [[maybe_unused]] auto _ = catalog.ensure_of(component_bitset_of<component<0>>());

    using signature = query_signature<component<0>>;
    query query = make_query<signature>();

    CHECK_EQ(query.begin(), query.end());
}

TEST_CASE_FIXTURE(fixture, "query::begin: skips leading empty tables")
{
    // first table matching the query is empty
    [[maybe_unused]] auto _ = catalog.ensure_of(component_bitset_of<component<0>>());

    // second table matching the query has one entity
    insert_entity_with_components<0, 1>(entity{1});

    using signature = query_signature<component<0>>;
    query query = make_query<signature>();

    REQUIRE_NE(query.begin(), query.end());
    CHECK_EQ((*query.begin()).entity(), entity{1});
}

TEST_CASE_FIXTURE(fixture, "query::iterator: postfix increment returns previous iterator")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<0>(entity{2});

    using signature = query_signature<component<0>>;
    query query = make_query<signature>();

    auto it = query.begin();
    REQUIRE_NE(it, query.end());

    auto previous = it++;
    CHECK_EQ((*previous).entity(), entity{1});

    REQUIRE_NE(it, query.end());
    CHECK_EQ((*it).entity(), entity{2});

    ++it;
    CHECK_EQ(it, query.end());
}

TEST_CASE_FIXTURE(fixture, "query_row: has and try_get stay consistent")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<0, 3>(entity{2});

    using signature = query_signature<component<0>, const component<3>*>;
    query query = make_query<signature>();

    auto row01 = query.row(entity{1});
    REQUIRE(row01.has_value());

    CHECK_FALSE(row01->has<component<3>>());
    CHECK_EQ(row01->get<component<3>>(), nullptr);

    auto row02 = query.row(entity{2});
    REQUIRE(row02.has_value());

    REQUIRE(row02->has<component<3>>());
    CHECK_EQ(row02->get<component<3>>()->value, 3);
}

TEST_CASE_FIXTURE(fixture, "query_row::get: mutable access writes through")
{
    insert_entity_with_components<0>(entity{1});

    using signature = query_signature<component<0>>;
    query query = make_query<signature>();

    auto row = query.row(entity{1});
    REQUIRE(row.has_value());
    row->get<component<0>>().value = 42;

    auto updated_row = query.row(entity{1});
    REQUIRE(updated_row.has_value());
    CHECK_EQ(updated_row->get<component<0>>().value, 42);
}

TEST_CASE_FIXTURE(fixture, "query_row::operator bool: true for valid row")
{
    insert_entity_with_components<0>(entity{1});

    using signature = query_signature<component<0>>;
    query query = make_query<signature>();

    auto row = query.row(entity{1});
    REQUIRE(row.has_value());
    CHECK(bool(*row));
}

TEST_CASE_FIXTURE(fixture, "query_row::get optional mutable: writes through pointer")
{
    insert_entity_with_components<0, 1>(entity{1});
    insert_entity_with_components<0>(entity{2});

    using signature = query_signature<component<0>, component<1>*>;
    query query = make_query<signature>();

    auto row = query.row(entity{1});
    REQUIRE(row.has_value());
    REQUIRE(row->has<component<1>>());
    row->get<component<1>>()->value = 99;

    auto updated = query.row(entity{1});
    REQUIRE(updated.has_value());
    CHECK_EQ(updated->get<component<1>>()->value, 99);

    auto row2 = query.row(entity{2});
    REQUIRE(row2.has_value());
    CHECK_FALSE(row2->has<component<1>>());
    CHECK_EQ(row2->get<component<1>>(), nullptr);
}

}}} // namespace ant::detail
