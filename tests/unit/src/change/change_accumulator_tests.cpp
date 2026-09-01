#include <ant/change/change_accumulator.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/detail/change/change_accumulator_consumer.hpp>

namespace ant::detail { namespace {

struct fixture
{
    schema _schema{testing::make_indexed_schema<8>()};
    change_accumulator _accumulator{_schema};
};

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_destroy: emplace destroy change")
{
    entity e0{0};

    _accumulator.emplace_destroy(e0);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<destroy_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: emplace attach change with default ctor")
{
    entity e0{0};

    _accumulator.emplace_attach<testing::component<0>>(e0);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_EQ(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: emplace attach change with ctor with value")
{
    entity e0{0};

    _accumulator.emplace_attach<testing::component<0>>(e0, 42u);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_NE(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: override pending attach change for same entity and component")
{
    entity e0{0};

    _accumulator.emplace_attach<testing::component<0>>(e0);
    _accumulator.emplace_attach<testing::component<0>>(e0, 42u);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_NE(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: does not override pending attach change for different entity")
{
    entity e0{0};
    entity e1{1};

    _accumulator.emplace_attach<testing::component<0>>(e0);
    _accumulator.emplace_attach<testing::component<0>>(e1, 42u);

    REQUIRE_EQ(_accumulator.size(), 2u);

    const auto* first = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(first != nullptr);
    CHECK_EQ(first->entity, e0);

    const auto* second = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[1]);
    REQUIRE(second != nullptr);
    CHECK_EQ(second->entity, e1);
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_attach: does not override pending attach change for different component")
{
    entity e0{0};

    _accumulator.emplace_attach<testing::component<0>>(e0);
    _accumulator.emplace_attach<testing::component<1>>(e0, 42u);

    REQUIRE_EQ(_accumulator.size(), 2u);

    const auto* first = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(first != nullptr);
    CHECK_EQ(first->ctor.meta, &_schema.meta_of<testing::component<0>>());

    const auto* second = std::get_if<attach_change>(&change_accumulator_consumer::changes(_accumulator)[1]);
    REQUIRE(second != nullptr);
    CHECK_EQ(second->ctor.meta, &_schema.meta_of<testing::component<1>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_detach: emplace detach change")
{
    entity e0{0};

    _accumulator.emplace_detach<testing::component<0>>(e0);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<detach_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->entity, e0);
    CHECK_EQ(change->meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_set: emplace set env change with default ctor")
{
    _accumulator.emplace_set<testing::component<0>>();

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<set_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_set: emplace set env change with ctor with value")
{
    _accumulator.emplace_set<testing::component<0>>(42u);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<set_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_NE(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_set: override pending set change for same component")
{
    _accumulator.emplace_set<testing::component<0>>();
    _accumulator.emplace_set<testing::component<0>>(42u);

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<set_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_NE(change->ctor.fn, nullptr);
    CHECK_EQ(change->ctor.meta, &_schema.meta_of<testing::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_set: does not override pending set change for different component")
{
    _accumulator.emplace_set<testing::component<0>>();
    _accumulator.emplace_set<testing::component<1>>(42u);

    REQUIRE_EQ(_accumulator.size(), 2u);

    const auto* first = std::get_if<set_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(first != nullptr);
    CHECK_EQ(first->ctor.meta, &_schema.meta_of<testing::component<0>>());

    const auto* second = std::get_if<set_change>(&change_accumulator_consumer::changes(_accumulator)[1]);
    REQUIRE(second != nullptr);
    CHECK_EQ(second->ctor.meta, &_schema.meta_of<testing::component<1>>());
}

TEST_CASE_FIXTURE(fixture, "change_accumulator::emplace_unset: emplace unset change")
{
    _accumulator.emplace_unset<testing::component<0>>();

    REQUIRE_EQ(_accumulator.size(), 1u);

    const auto* change = std::get_if<unset_change>(&change_accumulator_consumer::changes(_accumulator)[0]);
    REQUIRE(change != nullptr);

    CHECK_EQ(change->meta, &_schema.meta_of<testing::component<0>>());
}

}} // namespace ant::detail
