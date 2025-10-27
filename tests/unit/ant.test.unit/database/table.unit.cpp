#include <doctest/doctest.h>

#include <ant/database/column.hpp>
#include <ant/database/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/table.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant.test.shared/database/shim_database.hpp>

namespace ant { namespace {

using table_signature = basic_table_signature<test::shim_naked_database>;
using table = basic_table<test::shim_naked_database>;
using entity = typename table::entity_type;

static constexpr auto make_entity(std::uint32_t id, std::uint32_t ver = 0) -> entity
{
    return entity_traits<entity>::construct(id, ver);
}

TEST_CASE("basic_table: default empty")
{
    table::columns_type columns{};
    table_signature signature{};

    table tbl{std::move(signature), std::move(columns)};

    CHECK(tbl.rows().empty());
}

TEST_CASE("basic_table::signature: propagated from ctor")
{
    table::columns_type columns{};
    table_signature signature{};
    signature.add(component_index{3});

    table tbl{std::move(signature), std::move(columns)};

    CHECK(tbl.signature().has(component_index{3}));
}

TEST_CASE("basic_table::columns: stores provided columns")
{
    const auto meta = detail::component_meta::make<test::trivial>("trivial");

    table::columns_type columns{};
    columns.emplace_back(meta);
    columns.emplace_back(meta);

    table_signature signature{};
    table tbl{std::move(signature), std::move(columns)};

    CHECK_EQ(tbl.columns().size(), 2);
}

TEST_CASE("basic_table::add_row: returns index 0 for first row")
{
    table::columns_type columns{};
    table_signature signature{};
    table tbl{std::move(signature), std::move(columns)};

    const auto idx = tbl.add_row(make_entity(1));

    CHECK(idx == row_index{0});
}

TEST_CASE("basic_table::add_row: adds a single row")
{
    table tbl{table_signature{}, table::columns_type{}};

    (void)tbl.add_row(make_entity(2));

    CHECK_EQ(tbl.rows().size(), 1);
}

TEST_CASE("basic_table::remove_row(entity): removes existing")
{
    table tbl{table_signature{}, table::columns_type{}};

    const auto e0 = make_entity(10);
    const auto e1 = make_entity(11);
    tbl.add_row(e0);
    tbl.add_row(e1);

    tbl.remove_row(e0);

    CHECK_EQ(tbl.rows().size(), 1);
}

TEST_CASE("basic_table::remove_row(index): removes and compacts")
{
    table tbl{table_signature{}, table::columns_type{}};

    const auto e0 = make_entity(20);
    const auto e1 = make_entity(21);
    tbl.add_row(e0);
    tbl.add_row(e1);

    tbl.remove_row(row_index{0});

    CHECK_EQ(tbl.rows().size(), 1);
}

}} // namespace ant
