#include <doctest/doctest.h>

#include <ant/database/detail/table.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant/database/detail/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/detail/entity_traits.hpp>
#include <ant/database/entity.hpp>

namespace ant::detail { namespace {

static constexpr auto make_entity(std::uint32_t id, std::uint32_t ver = 0) -> entity
{
    return detail::entity_traits::construct(id, ver);
}

TEST_CASE("basic_table: default empty")
{
    table tbl{table_signature{}, std::vector<table_column>{}};

    CHECK(tbl.rows().empty());
}

TEST_CASE("basic_table::signature: propagated from ctor")
{
    std::vector<table_column> columns{};
    table_signature signature{};
    signature.add(component_index{3});

    table tbl{std::move(signature), std::move(columns)};

    CHECK(tbl.signature().has(component_index{3}));
}

TEST_CASE("basic_table::columns: stores provided columns")
{
    const auto meta = make_meta<test::trivial>("trivial");

    std::vector<table_column> columns{};
    columns.emplace_back(meta);
    columns.emplace_back(meta);

    table_signature signature{};
    table tbl{std::move(signature), std::move(columns)};

    CHECK_EQ(tbl.columns().size(), 2);
}

TEST_CASE("basic_table::add_row: returns index 0 for first row")
{
    std::vector<table_column> columns{};
    table_signature signature{};
    table tbl{std::move(signature), std::move(columns)};

    const auto idx = tbl.add_row(make_entity(1));

    CHECK_EQ(idx, row_index{});
}

TEST_CASE("basic_table::add_row: adds a single row")
{
    table tbl{table_signature{}, std::vector<table_column>{}};

    (void)tbl.add_row(make_entity(2));

    CHECK_EQ(tbl.rows().size(), 1);
}

TEST_CASE("basic_table::remove_row(entity): removes existing")
{
    table tbl{table_signature{}, std::vector<table_column>{}};

    const auto e0 = make_entity(10);
    const auto e1 = make_entity(11);
    tbl.add_row(e0);
    tbl.add_row(e1);

    tbl.remove_row(e0);

    CHECK_EQ(tbl.rows().size(), 1);
}

TEST_CASE("basic_table::remove_row(index): removes and compacts")
{
    table tbl{table_signature{}, std::vector<table_column>{}};

    const auto e0 = make_entity(20);
    const auto e1 = make_entity(21);
    tbl.add_row(e0);
    tbl.add_row(e1);

    tbl.remove_row(row_index{});

    CHECK_EQ(tbl.rows().size(), 1);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "basic_table::add_row: grows all columns and default constructs")
{
    constexpr auto meta_tr = make_meta<test::tracked>("tracked");

    std::vector<table_column> columns{};
    columns.emplace_back(meta_tr);
    columns.emplace_back(meta_tr);

    table tbl{table_signature{}, std::move(columns)};

    const row_index idx = tbl.add_row(make_entity(100));

    CHECK_EQ(idx, row_index{});
    CHECK_EQ(tbl.columns().size(), 2);

    for (const auto& col : tbl.columns())
    {
        const auto* ptr = static_cast<const test::tracked*>(col.row(idx));
        REQUIRE_NE(ptr, nullptr);
        CHECK_EQ(ptr->value, 7);
        CHECK_EQ(col.size(), 1);
    }

    CHECK_EQ(test::tracked::ctor_count, 2);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "basic_table::remove_row(entity): updates columns with relocate")
{
    constexpr auto meta_tr = make_meta<test::tracked>("tracked");

    std::vector<table_column> columns{};
    columns.emplace_back(meta_tr);

    table tbl{table_signature{}, std::move(columns)};

    const auto e0 = make_entity(200);
    const auto e1 = make_entity(201);
    const auto i0 = tbl.add_row(e0);
    const auto i1 = tbl.add_row(e1);

    const auto* cptr0 = static_cast<const test::tracked*>(tbl.columns()[0].row(i0));
    const auto* cptr1 = static_cast<const test::tracked*>(tbl.columns()[0].row(i1));
    const_cast<test::tracked*>(cptr0)->value = 1;
    const_cast<test::tracked*>(cptr1)->value = 9;

    tbl.remove_row(e0);

    CHECK_EQ(tbl.rows().size(), 1);
    const auto* moved = static_cast<const test::tracked*>(tbl.columns()[0].row(row_index{}));
    CHECK_EQ(moved->value, 9);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "basic_table::remove_row(index): last element triggers destroy in columns")
{
    constexpr auto meta_tr = make_meta<test::tracked>("tracked");

    std::vector<table_column> columns{};
    columns.emplace_back(meta_tr);

    table tbl{table_signature{}, std::move(columns)};

    const row_index idx = tbl.add_row(make_entity(300));
    tbl.remove_row(idx);

    CHECK_EQ(tbl.rows().size(), 0);
    CHECK_EQ(test::tracked::dtor_count, 1);
}

}} // namespace ant::detail
