#include <doctest/doctest.h>

#include <ant/database/entity_index.hpp>

#include <ant.test.shared/database/entity_types.hpp>
#include <ant.test.shared/database/shim_database.hpp>

namespace ant { namespace {

using entity_index = basic_entity_index<test::shim_naked_database>;
using traits = entity_traits<test::shim_naked_database::entity_type>;

TEST_CASE("entity_index::ctor: initially empty")
{
    entity_index index;
    CHECK(index.empty());
    CHECK_EQ(index.size(), 0u);
}

TEST_CASE("entity_index::create: registers handle and updates size")
{
    entity_index index;
    const auto e = index.create();

    CHECK_FALSE(index.empty());
    CHECK_EQ(index.size(), 1u);
    CHECK(index.contains(e));
    CHECK_EQ(traits::to_version(e), 0);

    const auto loc = index.locate(e); // default location
    CHECK_EQ(loc.table, table_index::npos());
    CHECK_EQ(loc.row, row_index::npos());
}

TEST_CASE("entity_index::relocate: locate reflects new position")
{
    entity_index index;
    const auto e = index.create();

    index.relocate(e, static_cast<table_index>(1), static_cast<row_index>(7));
    const auto loc = index.locate(e);
    CHECK_EQ(loc.table, static_cast<table_index>(1));
    CHECK_EQ(loc.row, static_cast<row_index>(7));
}

TEST_CASE("entity_index::destroy: invalidates and bumps recycled id version")
{
    entity_index index;
    const auto e1 = index.create();
    const auto id = traits::to_identifier(e1);
    const auto v0 = traits::to_version(e1);

    REQUIRE(index.contains(e1));
    index.destroy(e1);
    CHECK_FALSE(index.contains(e1));
    CHECK_EQ(index.size(), 0u);

    const auto e2 = index.create();
    const auto id2 = traits::to_identifier(e2);
    const auto v1 = traits::to_version(e2);

    CHECK_EQ(id2, id); // id reused
    CHECK_EQ(v1, static_cast<traits::version_type>((v0 + 1) % traits::layout_type::version_mask));
    CHECK(index.contains(e2));
    CHECK_FALSE(index.contains(e1)); // stale handle remains invalid
}

TEST_CASE("entity_index::destroy: free list is LIFO")
{
    entity_index index;
    const auto a = index.create();
    const auto b = index.create();
    const auto id_a = traits::to_identifier(a);
    const auto id_b = traits::to_identifier(b);

    index.destroy(a);
    index.destroy(b);

    const auto c = index.create();
    const auto d = index.create();

    CHECK_EQ(traits::to_identifier(c), id_b); // last destroyed comes back first
    CHECK_EQ(traits::to_identifier(d), id_a);
}

}} // namespace ant