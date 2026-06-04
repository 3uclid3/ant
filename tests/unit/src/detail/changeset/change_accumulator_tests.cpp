#include <ant/detail/changeset/change_accumulator.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>

namespace ant::detail { namespace {

struct fixture : public schema_fixture<8>
{
    change_accumulator accumulator{schema};
};

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_destroy: emplace destroy change")
{
    entity e0{0};

    accumulator.emplace_destroy(e0);

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::destroy_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: emplace attach change with default ctor")
{
    entity e0{0};

    accumulator.emplace_attach<component<0>>(e0);

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::attach_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_EQ(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: emplace attach change with ctor with value")
{
    entity e0{0};

    accumulator.emplace_attach<component<0>>(e0, 42u);

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::attach_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_NE(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_detach: emplace detach change")
{
    entity e0{0};

    accumulator.emplace_detach<component<0>>(e0);

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::detach_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_EQ(change->meta, &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_set: emplace set env change with default ctor")
{
    accumulator.emplace_set<component<0>>();

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::set_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_set: emplace set env change with ctor with value")
{
    accumulator.emplace_set<component<0>>(42u);

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::set_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_NE(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_unset: emplace unset change")
{
    accumulator.emplace_unset<component<0>>();

    REQUIRE_EQ(accumulator.size(), 1u);

    const auto* change = std::get_if<change_accumulator::unset_change>(&accumulator[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->meta, &schema.meta_of<component<0>>());
}

}} // namespace ant::detail
