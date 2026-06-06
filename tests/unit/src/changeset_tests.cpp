
#include <ant/changeset.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>

namespace ant { namespace {

struct fixture : detail::schema_fixture<5>
{
    template<typename... C>
    auto make_changeset() -> changeset_of<C...>
    {
        return changeset_of<C...>{accumulator, entity_registry};
    }

    detail::change_accumulator accumulator{schema};
    detail::entity_registry entity_registry{};
};

TEST_CASE_FIXTURE(fixture, "changeset::create: creates an entity")
{
    changeset_of cs = make_changeset<create>();

    const entity e = cs.create();

    CHECK(entity_registry.contains(e));
}

TEST_CASE_FIXTURE(fixture, "changeset::destroy: emplace destroy change")
{
    changeset_of cs = make_changeset<destroy>();
    cs.destroy(entity{});

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::change_accumulator::destroy_change>(accumulator[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::attach: emplace attach change")
{
    changeset_of cs = make_changeset<attach<component<0>>>();
    cs.attach<component<0>>(entity{});

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::change_accumulator::attach_change>(accumulator[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::detach: emplace detach change")
{
    changeset_of cs = make_changeset<detach<component<0>>>();
    cs.detach<component<0>>(entity{});

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::change_accumulator::detach_change>(accumulator[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::set_env: emplace set change")
{
    changeset_of cs = make_changeset<set_env<component<0>>>();
    cs.set_env<component<0>>();

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::change_accumulator::set_change>(accumulator[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::unset: emplace unset change")
{
    changeset_of cs = make_changeset<unset_env<component<0>>>();
    cs.unset_env<component<0>>();

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::change_accumulator::unset_change>(accumulator[0]));
}

}} // namespace ant
