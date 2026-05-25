#include <ant/detail/changeset/change_queue.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/schema.hpp>

namespace ant::detail { namespace {

struct fixture : schema_fixture<16>
{
    change_queue queue{schema_fixture<16>::schema};
};

TEST_CASE_FIXTURE(fixture, "change_queue::ctor(default): creates an empty queue")
{
    CHECK(queue.empty());
    CHECK_EQ(queue.size(), 0u);
}

TEST_CASE_FIXTURE(fixture, "change_queue::push_destroy: adds a destroy_change to the queue")
{
    const auto e = entity{1};

    queue.push_destroy(e);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<destroy_change>(queue.front()));

    const auto& change = std::get<destroy_change>(queue.front());
    CHECK_EQ(change.entity, e);
}

TEST_CASE_FIXTURE(fixture, "change_queue::push_attach: adds an attach_change to the queue")
{
    const auto e = entity{1};

    queue.push_attach<component<0>>(e, 42);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<attach_change>(queue.front()));

    const auto& change = std::get<attach_change>(queue.front());
    CHECK_EQ(change.entity, e);

    CHECK_EQ(&change.construct.meta.get(), &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_queue::push_detach: adds a detach_change to the queue")
{
    const auto e = entity{1};

    queue.push_detach<component<0>>(e);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<detach_change>(queue.front()));

    const auto& change = std::get<detach_change>(queue.front());
    CHECK_EQ(change.entity, e);
    CHECK_EQ(&change.meta.get(), &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_queue::push_set_env: adds an set_env_change to the queue")
{
    queue.push_set_env<component<0>>(42);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<set_env_change>(queue.front()));

    const auto& change = std::get<set_env_change>(queue.front());
    REQUIRE_EQ(&change.construct.meta.get(), &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_queue::push_unset_env: adds a unset_env_change to the queue")
{
    queue.push_unset_env<component<0>>();

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<unset_env_change>(queue.front()));

    const auto& change = std::get<unset_env_change>(queue.front());
    CHECK_EQ(&change.meta.get(), &schema.meta_of<component<0>>());
}

TEST_CASE_FIXTURE(fixture, "change_queue::consume_all: consumes all changes in the queue")
{
    const auto e1 = entity{1};
    const auto e2 = entity{2};
    const auto e3 = entity{3};

    queue.push_destroy(e1);
    queue.push_destroy(e2);
    queue.push_destroy(e3);

    std::size_t count = 0;
    queue.consume_all([&](const auto& change) {
        REQUIRE(std::is_same_v<std::decay_t<decltype(change)>, destroy_change>);
        count++;
    });

    CHECK_EQ(count, 3);
    CHECK(queue.empty());
}

}} // namespace ant::detail
