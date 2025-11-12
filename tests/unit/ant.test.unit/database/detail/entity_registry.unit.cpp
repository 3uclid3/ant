#include <ant/database/detail/entity_registry.hpp>

#include <ant.test.shared/doctest.hpp>

namespace ant::detail { namespace {

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
    CHECK_EQ(entity_traits::to_version(e), 0);

    const auto loc = registry.locate(e); // default location
    CHECK_EQ(loc, entity_location::invalid());
}

TEST_CASE("entity_registry::relocate: locate reflects new position")
{
    entity_registry registry;
    const auto e = registry.create();

    registry.relocate(e, entity_location{.table = 1, .row = 7});
    const auto loc = registry.locate(e);
    CHECK_EQ(loc.table, 1);
    CHECK_EQ(loc.row, 7);
}

TEST_CASE("entity_registry::destroy: invalidates and bumps recycled id version")
{
    entity_registry registry;
    const auto e1 = registry.create();
    const auto id = entity_traits::to_index(e1);
    const auto v0 = entity_traits::to_version(e1);

    REQUIRE(registry.contains(e1));
    registry.destroy(e1);
    CHECK_FALSE(registry.contains(e1));
    CHECK_EQ(registry.size(), 0u);

    const auto e2 = registry.create();
    const auto id2 = entity_traits::to_index(e2);
    const auto v1 = entity_traits::to_version(e2);

    CHECK_EQ(id2, id); // id reused
    CHECK_EQ(v1, static_cast<entity_traits::version_type>((v0 + 1) % entity_traits::version_mask));
    CHECK(registry.contains(e2));
    CHECK_FALSE(registry.contains(e1)); // stale handle remains invalid
}

TEST_CASE("entity_registry::destroy: free list is LIFO")
{
    entity_registry registry;
    const auto a = registry.create();
    const auto b = registry.create();
    const auto id_a = entity_traits::to_index(a);
    const auto id_b = entity_traits::to_index(b);

    registry.destroy(a);
    registry.destroy(b);

    const auto c = registry.create();
    const auto d = registry.create();

    CHECK_EQ(entity_traits::to_index(c), id_b); // last destroyed comes back first
    CHECK_EQ(entity_traits::to_index(d), id_a);
}

}} // namespace ant::detail
