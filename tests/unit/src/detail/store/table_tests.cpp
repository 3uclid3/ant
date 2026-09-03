#include <ant/detail/store/table.hpp>
#include <doctest/doctest.h>

#include <algorithm>
#include <type_traits>
#include <vector>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/detail/store/entity_traits.hpp>
#include <ant/entity.hpp>
#include <ant/schema.hpp>

namespace ant::detail { namespace {

template<std::size_t... Ids>
constexpr auto make_table(const schema& schema, std::index_sequence<Ids...>) -> table
{
    return table{component_bitset_of<testing::component<Ids>...>(), schema};
}

template<std::size_t Size>
constexpr auto make_table(const schema& schema) -> table
{
    return make_table(schema, std::make_index_sequence<Size>{});
}

// helper to generate table sizes for template tests
template<std::size_t Size>
struct table_size
{
    static constexpr std::size_t value = Size;
};

struct fixture
{
    static auto make_entities(std::size_t size, bool shuffled = false) -> std::vector<entity>
    {
        std::vector<entity> entities{};
        entities.reserve(size);

        for (std::size_t i = 0; i < size; ++i)
        {
            entities.push_back(detail::entity_traits::construct(i));
        }

        if (shuffled)
        {
            // just split odd and even indices for determinism and simplicity
            for (std::size_t i = 1; i < entities.size(); i += 2)
            {
                std::swap(entities[i], entities[i / 2]);
            }
        }

        return entities;
    }

    template<typename F, std::size_t... Ids>
    static auto for_each_components(const table& table, entity e, F&& f, std::index_sequence<Ids...>) -> void
    {
        const std::size_t row_index = table.row_of(e);

        (f(Ids, table.at<testing::component<Ids>>(row_index)), ...);
    }

    template<typename F>
    static auto for_each_components(const table& table, entity e, F&& f) -> void
    {
        for_each_components(table, e, std::forward<F>(f), std::make_index_sequence<8>{});
    }

    schema _schema{testing::make_indexed_schema<16>()};
    table _table{make_table<8>(_schema)};
};

TEST_CASE("table::ctor(default): creates an empty table")
{
    table table;
    CHECK(table.empty());
}

TEST_CASE_TEMPLATE("table::ctor(components): creates a table with given components", T, table_size<0>, table_size<1>, table_size<2>, table_size<4>, table_size<8>, table_size<16>)
{
    constexpr std::size_t size = T::value;

    schema schema{testing::make_indexed_schema<size>()};
    table table{make_table<size>(schema)};

    CHECK_EQ(table.components().count(), size);
}

TEST_CASE_FIXTURE(fixture, "table::insert: maintains order and sizes")
{
    const std::size_t n = 16;
    const std::vector<entity> entities = make_entities(n, true);

    for (std::size_t i = 0; i < n; ++i)
    {
        CHECK_EQ(_table.insert(entities[i]), i);

        for_each_components(_table, entities[i], [](std::size_t id, const auto& comp) {
            CHECK_EQ(std::remove_cvref_t<decltype(comp)>::index, id);
            CHECK_EQ(comp.value, id);
        });
    }

    CHECK(std::ranges::equal(_table.entities(), entities));
    CHECK_EQ(_table.size(), n);
}

TEST_CASE_FIXTURE(fixture, "table::insert: large index triggers sparse growth")
{
    const entity e = entity_traits::construct(10'000);

    CHECK_EQ(_table.insert(e), 0);
    CHECK(_table.contains(e));
}

TEST_CASE_FIXTURE(fixture, "table::erase: removes entity and maintains sizes")
{
    const std::size_t n = GENERATE(1, 2, 4, 16);

    for (entity e : make_entities(n))
    {
        _table.insert(e);
    }

    // erase out of order
    for (entity e : make_entities(n, true))
    {
        CHECK(_table.erase(e));
        CHECK_FALSE(_table.contains(e));
    }
}

TEST_CASE_FIXTURE(fixture, "table::erase: non-existent entity returns false")
{
    _table.insert(entity_traits::construct(1));

    CHECK_FALSE(_table.erase(entity_traits::construct(0)));      // in sparse range
    CHECK_FALSE(_table.erase(entity_traits::construct(10'000))); // out of sparse range
}

TEST_CASE_FIXTURE(fixture, "table::splice: moves entity from source to destination table")
{
    detail::table source{make_table<16>(_schema)};

    const std::size_t n = 16;
    const std::vector<entity> entities = make_entities(n);

    for (entity e : entities)
    {
        source.insert(e);
    }

    for (std::size_t i = 0; i < n; ++i)
    {
        const entity e = entities[i];

        CHECK_EQ(_table.splice(e, source), i);

        CHECK_FALSE(source.contains(e));
        CHECK(_table.contains(e));

        for_each_components(_table, entities[i], [](std::size_t id, const auto& comp) {
            CHECK_EQ(std::remove_cvref_t<decltype(comp)>::index, id);
            CHECK_EQ(comp.value, id);
        });
    }

    CHECK(source.empty());
    CHECK_EQ(_table.size(), n);
    CHECK(std::ranges::equal(_table.entities(), entities));
}

TEST_CASE_FIXTURE(fixture, "table::column_of: returns correct column indices")
{
    CHECK_NE(_table.column_of<testing::component<0>>(), detail::table::npos);
    CHECK_NE(_table.column_of<testing::component<1>>(), detail::table::npos);

    CHECK_EQ(_table.column_of<testing::component<10'000>>(), detail::table::npos);
}

TEST_CASE_FIXTURE(fixture, "table::row_of: returns npos for non-existent entity")
{
    CHECK_EQ(_table.row_of(entity_traits::construct(0)), detail::table::npos);      // in sparse range
    CHECK_EQ(_table.row_of(entity_traits::construct(10'000)), detail::table::npos); // out of sparse range
}

TEST_CASE_FIXTURE(fixture, "table::erase: non-existent entity after insertion returns false")
{
    _table.insert(entity_traits::construct(1));

    CHECK_FALSE(_table.erase(entity_traits::construct(0)));      // in sparse range
    CHECK_FALSE(_table.erase(entity_traits::construct(10'000))); // out of sparse range
}

}} // namespace ant::detail
