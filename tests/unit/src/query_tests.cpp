#include <ant/query.hpp>
#include <doctest/doctest.h>

#include <ant/detail/query/query_compiler.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/entity/entity_registry.hpp>

#include "detail/entity_creator.hpp"

namespace ant { namespace detail { namespace {

struct fixture
{
    template<typename Signature>
    auto compile_query() -> compiled_query<Signature>
    {
        return query_compiler::compile<Signature>(_catalog);
    }

    schema _schema{testing::make_indexed_schema<16>()};
    detail::entity_registry _entity_registry;
    detail::catalog _catalog{_schema};
    entity_creator _creator{_schema, _entity_registry, _catalog};
};

TEST_CASE_FIXTURE(fixture, "basic_query: supports multiple excluded component types")
{
    const entity e0 = _creator.create_entity<0>();
    const entity e1 = _creator.create_entity<0, 2>();
    const entity e2 = _creator.create_entity<0, 3>();
    const entity e3 = _creator.create_entity<0, 2, 3>();

    using signature = query_signature<testing::component<0>, exclude<testing::component<2>, testing::component<3>>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    CHECK(query.row(e0).has_value());
    CHECK_FALSE(query.row(e1).has_value());
    CHECK_FALSE(query.row(e2).has_value());
    CHECK_FALSE(query.row(e3).has_value());
    CHECK_EQ(query.count_rows(), 1);
}

TEST_CASE_FIXTURE(fixture, "basic_query::row: returns nullopt for non-matching entities")
{
    const entity e0 = _creator.create_entity<0, 1>();
    const entity e1 = _creator.create_entity<1>();

    using signature = query_signature<testing::component<0>, testing::component<1>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    CHECK(query.row(e0).has_value());
    CHECK_FALSE(query.row(e1).has_value());
    CHECK_FALSE(query.row(entity{999}).has_value());
}

TEST_CASE_FIXTURE(fixture, "basic_query::begin: equals end when all matching tables are empty")
{
    // ensure_of creates the table but no entity is inserted, so it is empty
    [[maybe_unused]] auto _ = _catalog.ensure_of(component_bitset_of<testing::component<0>>());

    using signature = query_signature<testing::component<0>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    CHECK_EQ(query.begin(), query.end());
}

TEST_CASE_FIXTURE(fixture, "basic_query::begin: skips leading empty tables")
{
    // first table matching the query is empty
    [[maybe_unused]] auto _ = _catalog.ensure_of(component_bitset_of<testing::component<0>>());

    // second table matching the query has one entity
    const entity e0 = _creator.create_entity<0, 1>();

    using signature = query_signature<testing::component<0>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    REQUIRE_NE(query.begin(), query.end());
    CHECK_EQ((*query.begin()).entity(), e0);
}

TEST_CASE_FIXTURE(fixture, "basic_query::iterator: postfix increment returns previous iterator")
{
    const entity e0 = _creator.create_entity<0>();
    const entity e1 = _creator.create_entity<0>();

    using signature = query_signature<testing::component<0>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    auto it = query.begin();
    REQUIRE_NE(it, query.end());

    auto previous = it++;
    CHECK_EQ((*previous).entity(), e0);

    REQUIRE_NE(it, query.end());
    CHECK_EQ((*it).entity(), e1);

    ++it;
    CHECK_EQ(it, query.end());
}

TEST_CASE_FIXTURE(fixture, "query_row: has and get optional stay consistent")
{
    const entity e0 = _creator.create_entity<0>();
    const entity e1 = _creator.create_entity<0, 3>();

    using signature = query_signature<testing::component<0>, const testing::component<3>*>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    auto row01 = query.row(e0);
    REQUIRE(row01.has_value());

    CHECK_FALSE(row01->has<testing::component<3>>());
    CHECK_EQ(row01->get<testing::component<3>>(), nullptr);

    auto row02 = query.row(e1);
    REQUIRE(row02.has_value());

    REQUIRE(row02->has<testing::component<3>>());
    CHECK_EQ(std::as_const(row02)->get<testing::component<3>>()->value, 3);
}

TEST_CASE_FIXTURE(fixture, "query_row::get: mutable access writes through")
{
    const entity e0 = _creator.create_entity<0>();

    using signature = query_signature<testing::component<0>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    auto row = query.row(e0);
    REQUIRE(row.has_value());
    row->get<testing::component<0>>().value = 42;

    auto updated_row = query.row(e0);
    REQUIRE(updated_row.has_value());
    CHECK_EQ(updated_row->get<testing::component<0>>().value, 42);
}

TEST_CASE_FIXTURE(fixture, "query_row::get optional mutable: writes through pointer")
{
    const entity e0 = _creator.create_entity<0, 1>();
    const entity e1 = _creator.create_entity<0>();

    using signature = query_signature<testing::component<0>, testing::component<1>*>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    auto row = query.row(e0);
    REQUIRE(row.has_value());
    REQUIRE(row->has<testing::component<1>>());
    row->get<testing::component<1>>()->value = 99;

    auto updated = query.row(e0);
    REQUIRE(updated.has_value());
    CHECK_EQ(updated->get<testing::component<1>>()->value, 99);

    auto row2 = query.row(e1);
    REQUIRE(row2.has_value());
    CHECK_FALSE(row2->has<testing::component<1>>());
    CHECK_EQ(row2->get<testing::component<1>>(), nullptr);
}

TEST_CASE_FIXTURE(fixture, "query_row::operator bool: true for valid row")
{
    const entity e0 = _creator.create_entity<0>();

    using signature = query_signature<testing::component<0>>;
    compiled_query cquery = compile_query<signature>();
    query query = cquery.query();

    auto row = query.row(e0);
    REQUIRE(row.has_value());
    CHECK(bool(*row));
}

}}} // namespace ant::detail
