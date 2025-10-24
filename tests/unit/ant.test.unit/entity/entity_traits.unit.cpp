#include <doctest/doctest.h>

#include <ant/entity/entity_traits.hpp>

#include <ant.test.shared/doctest/generator.hpp>
#include <ant.test.shared/entity/entity.hpp>

namespace ant { namespace {

template<typename T>
struct basic_entity_entry
{
    using value_type = T;
    using traits_type = entity_traits<T>;

    using identifier_type = traits_type::identifier_type;
    using version_type = traits_type::version_type;

    basic_entity_entry() noexcept = default;

    explicit basic_entity_entry(identifier_type id, version_type ver = 0) noexcept
        : value{traits_type::construct(id, ver)}
        , identifier{id}
        , version{ver}
    {
    }

    value_type value;
    identifier_type identifier;
    version_type version;
};

template<typename T>
struct basic_entity_bump_entry
{
    using entity_entry_type = basic_entity_entry<T>;
    using traits_type = entity_entry_type::traits_type;

    using identifier_type = traits_type::identifier_type;
    using version_type = traits_type::version_type;

    basic_entity_bump_entry() noexcept = default;

    explicit basic_entity_bump_entry(identifier_type id, version_type ver = 0, version_type next_ver = 0) noexcept
        : current{id, ver}
        , next{id, next_ver}
    {
    }

    entity_entry_type current;
    entity_entry_type next;
};

TEST_CASE_TEMPLATE("entity_traits<T>::construct: versioned", T, test::entity8, test::entity16, test::entity32, test::entity64)
{
    using entry_t = basic_entity_entry<T>;
    using traits_t = entry_t::traits_type;

    auto entry = GENERATE(entry_t{0, 0},
                          entry_t{1, 0},
                          entry_t{0, 1},
                          entry_t{traits_t::identifier_max, traits_t::version_max});

    CHECK_EQ(traits_t::to_identifier(entry.value), entry.identifier);
    CHECK_EQ(traits_t::to_version(entry.value), entry.version);
}

TEST_CASE_TEMPLATE("entity_traits<T>::construct: unversioned", T, test::unversioned_entity32, test::unversioned_entity64)
{
    using entry_t = basic_entity_entry<T>;
    using traits_t = entry_t::traits_type;

    auto entry = GENERATE(entry_t{0, 0},
                          entry_t{1, 0},
                          entry_t{0, 1},
                          entry_t{traits_t::identifier_max, traits_t::version_max});

    CHECK_EQ(traits_t::to_identifier(entry.value), entry.identifier);
    CHECK_EQ(traits_t::to_version(entry.value), 0u);
}

TEST_CASE_TEMPLATE("entity_traits<T>::construct: overflow", T, test::entity8, test::entity16, test::entity32, test::entity64, test::unversioned_entity32, test::unversioned_entity64)
{
    using entry_t = basic_entity_entry<T>;
    using traits_t = entry_t::traits_type;

    auto value = traits_t::construct(traits_t::identifier_max + 1, traits_t::version_max + 1);

    CHECK_EQ(traits_t::to_identifier(value), 0);
    CHECK_EQ(traits_t::to_version(value), 0);
}

TEST_CASE_TEMPLATE("entity_traits<T>::bump: versioned", T, test::entity8, test::entity16, test::entity32, test::entity64)
{
    using entry_t = basic_entity_bump_entry<T>;
    using traits_t = entry_t::traits_type;

    auto entry = GENERATE(entry_t{0, 0, 1},
                          entry_t{1, 0, 1},
                          entry_t{0, 1, 2},
                          entry_t{traits_t::identifier_max, traits_t::version_max, 0});

    CHECK_EQ(traits_t::to_identifier(entry.current.value), entry.current.identifier);
    CHECK_EQ(traits_t::to_version(entry.current.value), entry.current.version);

    CHECK_EQ(traits_t::to_identifier(entry.next.value), entry.current.identifier); // same identifier as current
    CHECK_EQ(traits_t::to_version(entry.next.value), entry.next.version);
}

TEST_CASE_TEMPLATE("entity_traits<T>::bump: unversioned", T, test::unversioned_entity32, test::unversioned_entity64)
{
    using entry_t = basic_entity_bump_entry<T>;
    using traits_t = entry_t::traits_type;

    auto current = traits_t::construct(4, 2);
    auto bumped = traits_t::bump(current);

    CHECK_EQ(current, bumped);
}

TEST_CASE_TEMPLATE("entity_traits<T>::bump: overflow", T, test::entity8, test::entity16, test::entity32, test::entity64)
{
    using entry_t = basic_entity_bump_entry<T>;
    using traits_t = entry_t::traits_type;

    auto current = traits_t::construct(4, traits_t::version_max);
    auto bumped = traits_t::bump(current);

    CHECK_EQ(traits_t::to_identifier(bumped), 4);
    CHECK_EQ(traits_t::to_version(bumped), 0);
}

}} // namespace ant