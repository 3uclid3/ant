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

struct fixture : test::schema_fixture<32>
{
    auto make_entities(std::size_t size, bool shuffled = false) -> std::vector<entity>
    {
        std::vector<entity> entities{};
        entities.reserve(size);

        for (std::size_t i = 0; i < size; ++i)
        {
            entities.push_back(entity_traits::construct(i));
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

    auto columns_match_size(const table& table) const noexcept -> bool
    {
        const auto expected_size = table.size();
        return std::ranges::all_of(table.columns(), [expected_size](const table_column& col) {
            return col.size() == expected_size;
        });
    }

    table tbl{test::make_table<16>(schema)};
};

// helper to generate table sizes for template tests
template<std::size_t Size>
struct table_size
{
    static constexpr std::size_t value = Size;
};

TEST_CASE("table::ctor(default): creates an empty table")
{
    table tbl;

    CHECK(tbl.columns().empty());
}

TEST_CASE_TEMPLATE("table::ctor(columns): creates a table with given columns", T, table_size<0>, table_size<1>, table_size<2>, table_size<4>, table_size<8>, table_size<16>)
{
    constexpr std::size_t size = T::value;

    schema schema{test::make_schema<size>()};
    table tbl{test::make_table<size>(schema)};

    CHECK_EQ(tbl.columns().size(), size);
}

TEST_CASE_FIXTURE(fixture, "table::insert: maintains order and sizes")
{
    const std::size_t n = GENERATE(0, 1, 2, 4, 16);
    const std::vector<entity> entities = make_entities(n, true);

    for (const auto& e : entities)
    {
        tbl.insert(e);
    }

    CHECK(std::ranges::equal(tbl.rows(), entities));
    CHECK(columns_match_size(tbl));
}

TEST_CASE_FIXTURE(fixture, "table::insert: duplicate returns existing index; no growth")
{
    const entity a = entity_traits::construct(42);
    const std::size_t i1 = tbl.insert(a);
    const std::size_t i2 = tbl.insert(a);

    CHECK_EQ(i1, i2);
    CHECK_EQ(tbl.size(), 1u);
    CHECK(columns_match_size(tbl));
}

TEST_CASE_FIXTURE(fixture, "table::insert: large index triggers sparse growth")
{
    const entity far = entity_traits::construct(10'000);

    tbl.insert(far);

    CHECK(tbl.contains(far));
    CHECK(columns_match_size(tbl));
}

TEST_CASE_FIXTURE(fixture, "table::erase: removes entity and maintains sizes")
{
    const std::size_t n = GENERATE(1, 2, 4, 16);

    for (entity e : make_entities(n))
    {
        tbl.insert(e);
    }

    // erase out of order
    for (entity e : make_entities(n, true))
    {
        CHECK(tbl.erase(e));
        CHECK_FALSE(tbl.contains(e));
        CHECK(columns_match_size(tbl));
    }
}

TEST_CASE_FIXTURE(fixture, "table::erase: updates mapping of moved row")
{
    const entity a = entity_traits::construct(7);  // row 0
    const entity b = entity_traits::construct(99); // row 1 (entity index != 1)

    tbl.insert(a);
    tbl.insert(b);

    // Erase non-last row; implementation moves last into 0
    CHECK(tbl.erase(a));

    // Rows reflect move
    CHECK_FALSE(tbl.contains(a));
    CHECK(tbl.contains(b));
    CHECK_EQ(tbl.size(), 1u);
    CHECK_EQ(tbl.rows()[0], b);

    // Critical assertion: duplicate insert must return remapped index (0)
    CHECK_EQ(tbl.insert(b), 0u);

    // Columns stay consistent with rows
    CHECK(columns_match_size(tbl));
}

TEST_CASE_FIXTURE(fixture, "table::splice: moves entity from source to destination table")
{
    table source{test::make_table<16>(schema)};

    const std::size_t n = GENERATE(1, 2, 4, 16);
    const std::vector<entity> entities = make_entities(n);

    for (entity e : entities)
    {
        source.insert(e);
    }

    for (entity e : entities)
    {
        tbl.splice(e, source);
    }

    CHECK(source.empty());
    CHECK_EQ(tbl.size(), n);
    CHECK(std::ranges::equal(tbl.rows(), entities));
    CHECK(columns_match_size(tbl));
    CHECK(columns_match_size(source));
}

#if ANT_ASSERT_ENABLED
TEST_CASE_FIXTURE(fixture, "table::insert: asserts on invalid entity index")
{
    const auto invalid = static_cast<entity>(detail::entity_traits::index_mask); // npos in index bits
    CHECK_ASSERTS(tbl.insert(invalid));
}

TEST_CASE_FIXTURE(fixture, "table::splice: asserts when dest already contains entity")
{
    table source{test::make_table<16>(schema)};

    const entity e = entity_traits::construct(5);
    tbl.insert(e);
    source.insert(e);

    CHECK_ASSERTS(tbl.splice(e, source));
}
#endif

}} // namespace ant::detail
