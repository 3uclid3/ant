#include <ant/database/detail/changeset_queue.hpp>

#include <ant.test.shared/doctest.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/database/schema.hpp>

namespace ant::detail { namespace {

struct fixture : test::schema_fixture<16>
{
    changeset_queue queue{this->schema};
};

TEST_CASE_FIXTURE(fixture, "changeset_queue::ctor(default): creates an empty queue")
{
    CHECK(queue.empty());
    CHECK_EQ(queue.size(), 0u);
}

TEST_CASE_FIXTURE(fixture, "changeset_queue::push_destroy: adds a destroy_change to the queue")
{
    const auto e = entity{1};

    queue.push_destroy(e);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<destroy_change>(queue.front()));

    const auto& change = std::get<destroy_change>(queue.front());
    CHECK_EQ(change.entity, e);
}

TEST_CASE_FIXTURE(fixture, "changeset_queue::push_attach: adds an attach_change to the queue")
{
    const auto e = entity{1};

    queue.push_attach<test::component<0>>(e, 42);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<attach_change>(queue.front()));

    const auto& change = std::get<attach_change>(queue.front());
    CHECK_EQ(change.entity, e);

    REQUIRE_NE(change.component, nullptr);
    REQUIRE_EQ(change.meta, &schema.meta_of<test::component<0>>());

    const auto* component = static_cast<test::component<0>*>(change.component);
    CHECK_EQ(component->value, 42);
}

TEST_CASE_FIXTURE(fixture, "changeset_queue::push_detach: adds a detach_change to the queue")
{
    const auto e = entity{1};

    queue.push_detach<test::component<0>>(e);

    CHECK_EQ(queue.size(), 1u);
    REQUIRE(std::holds_alternative<detach_change>(queue.front()));

    const auto& change = std::get<detach_change>(queue.front());
    CHECK_EQ(change.entity, e);
    CHECK_EQ(change.meta, &schema.meta_of<test::component<0>>());
}

TEST_CASE_FIXTURE(fixture, "changeset_queue::consume_all: consumes all changes in the queue")
{
    const auto e1 = entity{1};
    const auto e2 = entity{2};
    const auto e3 = entity{3};

    queue.push_destroy(e1);
    queue.push_attach<test::component<0>>(e2, 42);
    queue.push_detach<test::component<1>>(e3);

    std::size_t count = 0;
    queue.consume_all([&](const auto& change) {
        switch (count++)
        {
        case 0:
        {
            REQUIRE(std::is_same_v<std::decay_t<decltype(change)>, destroy_change>);
            CHECK_EQ(change.entity, e1);
            break;
        }
        case 1:
        {
            REQUIRE(std::is_same_v<std::decay_t<decltype(change)>, attach_change>);
            CHECK_EQ(change.entity, e2);

            if constexpr (std::is_same_v<std::decay_t<decltype(change)>, attach_change>)
            {
                REQUIRE_NE(change.component, nullptr);
                REQUIRE_EQ(change.meta, &schema.meta_of<test::component<0>>());
                const auto* component = static_cast<test::component<0>*>(change.component);
                CHECK_EQ(component->value, 42);
            }
            break;
        }
        case 2:
        {
            REQUIRE(std::is_same_v<std::decay_t<decltype(change)>, detach_change>);
            CHECK_EQ(change.entity, e3);

            if constexpr (std::is_same_v<std::decay_t<decltype(change)>, detach_change>)
            {
                CHECK_EQ(change.meta, &schema.meta_of<test::component<1>>());
            }
            break;
        }
        }
    });

    CHECK_EQ(count, 3);
    CHECK(queue.empty());
}

}} // namespace ant::detail
