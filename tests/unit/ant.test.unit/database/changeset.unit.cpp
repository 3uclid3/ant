#include <ant/database/changeset.hpp>

#include <ant.test.shared/doctest.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/database/schema.hpp>

namespace ant { namespace {

struct fixture : test::schema_fixture<16>
{
    detail::changeset_queue queue{this->schema};
    detail::entity_registry entity_registry;
};

TEST_CASE_FIXTURE(fixture, "changeset::create: creates a new entity")
{
    changeset_of<create> cs{queue, entity_registry};

    const auto e = cs.create();

    CHECK(entity_registry.contains(e));
    CHECK_EQ(entity_registry.size(), 1u);
}

TEST_CASE_FIXTURE(fixture, "changeset::destroy: queue entity for destruction")
{
    const auto e = entity_registry.create();
    changeset_of<destroy> cs{queue, entity_registry};

    cs.destroy(e);

    CHECK_EQ(queue.size(), 1u);
    CHECK(std::holds_alternative<detail::destroy_change>(queue.front()));
}

TEST_CASE_FIXTURE(fixture, "changeset::attach: queue component attachment")
{
    const auto e = entity_registry.create();
    changeset_of<attach<test::component<0>>> cs{queue, entity_registry};

    cs.attach<test::component<0>>(e, 42);

    CHECK_EQ(queue.size(), 1u);
    CHECK(std::holds_alternative<detail::attach_change>(queue.front()));
}

TEST_CASE_FIXTURE(fixture, "changeset::detach: queue component detachment")
{
    const auto e = entity_registry.create();
    changeset_of<detach<test::component<0>>> cs{queue, entity_registry};

    cs.detach<test::component<0>>(e);

    CHECK_EQ(queue.size(), 1u);
    CHECK(std::holds_alternative<detail::detach_change>(queue.front()));
}

}} // namespace ant
