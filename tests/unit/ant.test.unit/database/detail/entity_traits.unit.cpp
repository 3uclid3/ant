#include <doctest/doctest.h>

#include <ant/database/detail/entity_traits.hpp>

#include <ant.test.shared/doctest/generator.hpp>

namespace ant::detail { namespace {

struct entity_entry
{
    using identifier_type = entity_traits::identifier_type;
    using version_type = entity_traits::version_type;

    entity_entry() noexcept = default;
    entity_entry(identifier_type id, version_type ver) noexcept
        : value{entity_traits::construct(id, ver)}
        , identifier{id}
        , version{ver}
    {
    }

    entity value;
    identifier_type identifier;
    version_type version;
};

struct entity_bump_entry
{
    using identifier_type = entity_traits::identifier_type;
    using version_type = entity_traits::version_type;

    entity_bump_entry() noexcept = default;
    entity_bump_entry(identifier_type id, version_type ver, version_type next_ver) noexcept
        : current{id, ver}
        , next{id, next_ver}
    {
    }

    entity_entry current;
    entity_entry next;
};

TEST_CASE("entity_traits::construct: basic")
{
    auto entry = GENERATE(entity_entry{0, 0},
                          entity_entry{1, 0},
                          entity_entry{0, 1},
                          entity_entry{entity_traits::identifier_max, entity_traits::version_max});

    CHECK_EQ(entity_traits::to_identifier(entry.value), entry.identifier);
    CHECK_EQ(entity_traits::to_version(entry.value), entry.version);
}

TEST_CASE("entity_traits::construct: overflow")
{
    auto value = entity_traits::construct(entity_traits::identifier_max + 1, entity_traits::version_max + 1);

    CHECK_EQ(entity_traits::to_identifier(value), 0);
    CHECK_EQ(entity_traits::to_version(value), 0);
}

TEST_CASE("entity_traits::bump: basic")
{
    auto entry = GENERATE(entity_bump_entry{0, 0, 1},
                          entity_bump_entry{1, 0, 1},
                          entity_bump_entry{0, 1, 2},
                          entity_bump_entry{entity_traits::identifier_max, entity_traits::version_max, 0});

    CHECK_EQ(entity_traits::to_identifier(entry.current.value), entry.current.identifier);
    CHECK_EQ(entity_traits::to_version(entry.current.value), entry.current.version);

    CHECK_EQ(entity_traits::to_identifier(entry.next.value), entry.current.identifier); // same identifier as current
    CHECK_EQ(entity_traits::to_version(entry.next.value), entry.next.version);
}

TEST_CASE("entity_traits::bump: overflow")
{
    auto current = entity_traits::construct(4, entity_traits::version_max);
    auto bumped = entity_traits::bump(current);

    CHECK_EQ(entity_traits::to_identifier(bumped), 4);
    CHECK_EQ(entity_traits::to_version(bumped), 0);
}

}} // namespace ant::detail
