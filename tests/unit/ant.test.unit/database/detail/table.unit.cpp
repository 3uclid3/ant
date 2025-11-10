#include <doctest/doctest.h>

#include <ant/database/detail/table.hpp>

#include <algorithm>
#include <vector>

#include <ant.test.shared/database/table.hpp>
#include <ant.test.shared/doctest/check.hpp>
#include <ant.test.shared/doctest/generator.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/detail/entity_traits.hpp>
#include <ant/database/entity.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail { namespace {

using fixture = test::table_fixture<8>;

// helper to generate table sizes for template tests
template<std::size_t Size>
struct table_size
{
    static constexpr std::size_t value = Size;
};

TEST_CASE("table::ctor(default): creates an empty table")
{
    table table;
    CHECK(table.empty());
}

TEST_CASE_TEMPLATE("table::ctor(components): creates a table with given components", T, table_size<0>, table_size<1>, table_size<2>, table_size<4>, table_size<8>, table_size<16>)
{
    constexpr std::size_t size = T::value;

    schema schema{test::make_schema<size>()};
    table table{test::make_table<size>(schema)};

    CHECK_EQ(table.components().count(), size);
}

TEST_CASE_FIXTURE(fixture, "table::insert: maintains order and sizes")
{
    const std::size_t n = 16;
    const std::vector<entity> entities = make_entities(n, true);

    for (std::size_t i = 0; i < n; ++i)
    {
        CHECK_EQ(table.insert(entities[i]), i);

        for_each_components(table, entities[i], [](std::size_t id, const auto& comp) {
            CHECK_EQ(comp.get_id(), id);
            CHECK_EQ(comp.value, id);
        });
    }

    CHECK(std::ranges::equal(table.entities(), entities));
    CHECK_EQ(table.size(), n);
}

TEST_CASE_FIXTURE(fixture, "table::insert: duplicate returns existing index; no growth")
{
    const entity e = entity_traits::construct(42);

    CHECK_EQ(table.insert(e), 0);
    CHECK_EQ(table.insert(e), 0);
    CHECK_EQ(table.size(), 1);
}

TEST_CASE_FIXTURE(fixture, "table::insert: large index triggers sparse growth")
{
    const entity e = entity_traits::construct(10'000);

    CHECK_EQ(table.insert(e), 0);
    CHECK(table.contains(e));
}

TEST_CASE_FIXTURE(fixture, "table::erase: removes entity and maintains sizes")
{
    const std::size_t n = GENERATE(1, 2, 4, 16);

    for (entity e : make_entities(n))
    {
        table.insert(e);
    }

    // erase out of order
    for (entity e : make_entities(n, true))
    {
        CHECK(table.erase(e));
        CHECK_FALSE(table.contains(e));
    }
}

TEST_CASE_FIXTURE(fixture, "table::erase: non-existent entity returns false")
{
    table.insert(entity_traits::construct(1));

    CHECK_FALSE(table.erase(entity_traits::construct(0)));      // in sparse range
    CHECK_FALSE(table.erase(entity_traits::construct(10'000))); // out of sparse range
}

TEST_CASE_FIXTURE(fixture, "table::splice: moves entity from source to destination table")
{
    detail::table source{GENERATE(test::make_table<4>(schema), test::make_table<8>(schema), test::make_table<16>(schema))};

    const std::size_t n = 16;
    const std::vector<entity> entities = make_entities(n);

    for (entity e : entities)
    {
        source.insert(e);
    }

    for (std::size_t i = 0; i < n; ++i)
    {
        const entity e = entities[i];

        CHECK_EQ(table.splice(e, source), i);

        CHECK_FALSE(source.contains(e));
        CHECK(table.contains(e));

        for_each_components(table, entities[i], [](std::size_t id, const auto& comp) {
            CHECK_EQ(comp.get_id(), id);
            CHECK_EQ(comp.value, id);
        });
    }

    CHECK(source.empty());
    CHECK_EQ(table.size(), n);
    CHECK(std::ranges::equal(table.entities(), entities));
}

TEST_CASE_FIXTURE(fixture, "table::column_of: returns correct column indices")
{
    CHECK_NE(table.column_of<test::component<0>>(), detail::table::npos);
    CHECK_NE(table.column_of<test::component<1>>(), detail::table::npos);

    CHECK_EQ(table.column_of<test::component<10'000>>(), detail::table::npos);
}

TEST_CASE_FIXTURE(fixture, "table::row_of: returns npos for non-existent entity")
{
    CHECK_EQ(table.row_of(entity_traits::construct(0)), detail::table::npos);      // in sparse range
    CHECK_EQ(table.row_of(entity_traits::construct(10'000)), detail::table::npos); // out of sparse range
}

TEST_CASE_FIXTURE(fixture, "table::erase: non-existent entity returns false")
{
    table.insert(entity_traits::construct(1));

    CHECK_FALSE(table.erase(entity_traits::construct(0)));      // in sparse range
    CHECK_FALSE(table.erase(entity_traits::construct(10'000))); // out of sparse range
}

#if ANT_ASSERT_ENABLED
TEST_CASE_FIXTURE(fixture, "table::insert: asserts on invalid entity index")
{
    const auto invalid = static_cast<entity>(detail::entity_traits::index_mask); // npos in index bits
    CHECK_ASSERTS(table.insert(invalid));
}

TEST_CASE_FIXTURE(fixture, "table::splice: asserts when dest already contains entity")
{
    detail::table source{test::make_table<16>(schema)};

    const entity e = entity_traits::construct(5);
    table.insert(e);
    source.insert(e);

    CHECK_ASSERTS(table.splice(e, source));
}
#endif

}} // namespace ant::detail
