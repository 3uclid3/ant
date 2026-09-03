#include <ant/changeset.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/detail/changeset/change_accumulator_consumer.hpp>

namespace ant { namespace {

struct fixture
{
    template<typename... C>
    auto make_changeset() -> changeset_of<C...>
    {
        return changeset_of<C...>{_accumulator, _entity_registry};
    }

    schema _schema{testing::make_indexed_schema<5>()};
    change_accumulator _accumulator{_schema};
    detail::entity_registry _entity_registry{};
};

TEST_CASE_FIXTURE(fixture, "changeset::create: creates an entity")
{
    changeset_of cs = make_changeset<create>();

    const entity e = cs.create();

    CHECK(_entity_registry.contains(e));
}

TEST_CASE_FIXTURE(fixture, "changeset::destroy: emplace destroy change")
{
    changeset_of cs = make_changeset<destroy>();
    cs.destroy(entity{});

    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::destroy_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::attach: emplace attach change")
{
    changeset_of cs = make_changeset<attach<testing::component<0>>>();
    cs.attach<testing::component<0>>(entity{});

    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::attach_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::detach: emplace detach change")
{
    changeset_of cs = make_changeset<detach<testing::component<0>>>();
    cs.detach<testing::component<0>>(entity{});

    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::detach_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::set_env: emplace set change")
{
    changeset_of cs = make_changeset<set_env<testing::component<0>>>();
    cs.set_env<testing::component<0>>();

    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::set_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
}

TEST_CASE_FIXTURE(fixture, "changeset::unset: emplace unset change")
{
    changeset_of cs = make_changeset<unset_env<testing::component<0>>>();
    cs.unset_env<testing::component<0>>();

    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::unset_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
}

}} // namespace ant
