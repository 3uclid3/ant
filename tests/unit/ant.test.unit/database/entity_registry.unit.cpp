#include <doctest/doctest.h>

#include <ant/database/entity_registry.hpp>

namespace ant { namespace {

using entity_registry = basic_entity_registry<std::allocator<entity>>;
using traits = detail::entity_traits;

TEST_CASE("entity_registry::ctor: initially empty")
{
    entity_registry registry;
    CHECK(registry.empty());
    CHECK_EQ(registry.size(), 0u);
}

TEST_CASE("entity_registry::create: registers handle and updates size")
{
    entity_registry registry;
    const auto e = registry.create();

    CHECK_FALSE(registry.empty());
    CHECK_EQ(registry.size(), 1u);
    CHECK(registry.contains(e));
    CHECK_EQ(traits::to_version(e), 0);

    const auto loc = registry.locate(e); // default location
    CHECK_EQ(loc.table, detail::table_index::npos());
    CHECK_EQ(loc.row, detail::row_index::npos());
}

TEST_CASE("entity_registry::relocate: locate reflects new position")
{
    entity_registry registry;
    const auto e = registry.create();

    registry.relocate(e, static_cast<detail::table_index>(1), static_cast<detail::row_index>(7));
    const auto loc = registry.locate(e);
    CHECK_EQ(loc.table, static_cast<detail::table_index>(1));
    CHECK_EQ(loc.row, static_cast<detail::row_index>(7));
}

TEST_CASE("entity_registry::destroy: invalidates and bumps recycled id version")
{
    entity_registry registry;
    const auto e1 = registry.create();
    const auto id = traits::to_identifier(e1);
    const auto v0 = traits::to_version(e1);

    REQUIRE(registry.contains(e1));
    registry.destroy(e1);
    CHECK_FALSE(registry.contains(e1));
    CHECK_EQ(registry.size(), 0u);

    const auto e2 = registry.create();
    const auto id2 = traits::to_identifier(e2);
    const auto v1 = traits::to_version(e2);

    CHECK_EQ(id2, id); // id reused
    CHECK_EQ(v1, static_cast<traits::version_type>((v0 + 1) % traits::version_mask));
    CHECK(registry.contains(e2));
    CHECK_FALSE(registry.contains(e1)); // stale handle remains invalid
}

TEST_CASE("entity_registry::destroy: free list is LIFO")
{
    entity_registry registry;
    const auto a = registry.create();
    const auto b = registry.create();
    const auto id_a = traits::to_identifier(a);
    const auto id_b = traits::to_identifier(b);

    registry.destroy(a);
    registry.destroy(b);

    const auto c = registry.create();
    const auto d = registry.create();

    CHECK_EQ(traits::to_identifier(c), id_b); // last destroyed comes back first
    CHECK_EQ(traits::to_identifier(d), id_a);
}

}} // namespace ant
