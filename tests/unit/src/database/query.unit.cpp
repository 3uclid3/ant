#include <ant.unit/doctest.hpp>
#include <ant/database/query.hpp>

#include <ant.unit/database/component.hpp>
#include <ant.unit/database/schema.hpp>
#include <ant/database/detail/query/query_builder.hpp>

namespace ant { namespace detail { namespace {

struct fixture : test::schema_fixture<16>
{
    template<std::size_t... Cs>
    auto insert_entity_with_components(entity e) -> void
    {
        const std::size_t i = catalog.ensure_of(schema.bitset_for<test::component<Cs>...>());
        catalog.at(i).insert(e);
    }

    template<typename Signature>
    auto make_query() -> query<Signature>
    {
        return builder.build<Signature>();
    }

    catalog catalog{schema};
    detail::query_builder builder{schema, catalog};
};

TEST_CASE_FIXTURE(fixture, "query::row: returns nullopt for non-matching entities")
{
    insert_entity_with_components<0, 1>(entity{1});
    insert_entity_with_components<1>(entity{2});

    using signature = query_signature<test::component<0>, test::component<1>>;
    query query = make_query<signature>();

    CHECK(query.row(entity{1}).has_value());
    CHECK_FALSE(query.row(entity{2}).has_value());
    CHECK_FALSE(query.row(entity{999}).has_value());
}

TEST_CASE_FIXTURE(fixture, "query: supports multiple excluded component types")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<0, 2>(entity{2});
    insert_entity_with_components<0, 3>(entity{3});
    insert_entity_with_components<0, 2, 3>(entity{4});

    using signature = query_signature<test::component<0>, exclude<test::component<2>, test::component<3>>>;
    query query = make_query<signature>();

    CHECK(query.row(entity{1}).has_value());
    CHECK_FALSE(query.row(entity{2}).has_value());
    CHECK_FALSE(query.row(entity{3}).has_value());
    CHECK_FALSE(query.row(entity{4}).has_value());
    CHECK_EQ(query.count_rows(), 1);
}

TEST_CASE_FIXTURE(fixture, "query_row: has and try_get stay consistent")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<0, 3>(entity{2});

    using signature = query_signature<test::component<0>, const test::component<3>*>;
    query query = make_query<signature>();

    auto row01 = query.row(entity{1});
    REQUIRE(row01.has_value());

    CHECK_FALSE(row01->has<test::component<3>>());
    CHECK_EQ(row01->try_get<test::component<3>>(), nullptr);

    auto row02 = query.row(entity{2});
    REQUIRE(row02.has_value());

    REQUIRE(row02->has<test::component<3>>());
    CHECK_EQ(row02->try_get<test::component<3>>()->value, 3);
}

TEST_CASE_FIXTURE(fixture, "query_row::get: mutable access writes through")
{
    insert_entity_with_components<0>(entity{1});

    using signature = query_signature<test::component<0>>;
    query query = make_query<signature>();

    auto row = query.row(entity{1});
    REQUIRE(row.has_value());
    row->get<test::component<0>>().value = 42;

    auto updated_row = query.row(entity{1});
    REQUIRE(updated_row.has_value());
    CHECK_EQ(updated_row->get<test::component<0>>().value, 42);
}

TEST_CASE_FIXTURE(fixture, "query::iterator: postfix increment returns previous iterator")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<0>(entity{2});

    using signature = query_signature<test::component<0>>;
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

TEST_CASE_FIXTURE(fixture, "query::begin: equals end when all matching tables are empty")
{
    // ensure_of creates the table but no entity is inserted, so it is empty
    [[maybe_unused]] auto _ = catalog.ensure_of(schema.bitset_for<test::component<0>>());

    using signature = query_signature<test::component<0>>;
    query query = make_query<signature>();

    CHECK_EQ(query.begin(), query.end());
}

TEST_CASE_FIXTURE(fixture, "query::begin: skips leading empty tables")
{
    // first table matching the query is empty
    [[maybe_unused]] auto _ = catalog.ensure_of(schema.bitset_for<test::component<0>>());

    // second table matching the query has one entity
    insert_entity_with_components<0, 1>(entity{1});

    using signature = query_signature<test::component<0>>;
    query query = make_query<signature>();

    REQUIRE_NE(query.begin(), query.end());
    CHECK_EQ((*query.begin()).entity(), entity{1});
}

TEST_CASE_FIXTURE(fixture, "query_builder::build: supports sequential query construction")
{
    insert_entity_with_components<0>(entity{1});
    insert_entity_with_components<1>(entity{2});
    insert_entity_with_components<0, 1>(entity{3});

    using signature0 = query_signature<test::component<0>>;
    using signature1 = query_signature<test::component<1>>;
    using signature01 = query_signature<test::component<0>, exclude<test::component<1>>>;

    query query0 = make_query<signature0>();
    query query1 = make_query<signature1>();
    query query01 = make_query<signature01>();

    CHECK(query0.row(entity{1}).has_value());
    CHECK_FALSE(query0.row(entity{2}).has_value());
    CHECK(query0.row(entity{3}).has_value());
    CHECK_EQ(query0.count_rows(), 2);

    CHECK_FALSE(query1.row(entity{1}).has_value());
    CHECK(query1.row(entity{2}).has_value());
    CHECK(query1.row(entity{3}).has_value());
    CHECK_EQ(query1.count_rows(), 2);

    CHECK(query01.row(entity{1}).has_value());
    CHECK_FALSE(query01.row(entity{2}).has_value());
    CHECK_FALSE(query01.row(entity{3}).has_value());
    CHECK_EQ(query01.count_rows(), 1);
}

}}} // namespace ant::detail
