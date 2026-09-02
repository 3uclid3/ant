#include <ant/database.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

TEST_CASE("database::flush: executes cascading lifecycle changes until empty")
{
    database db{testing::make_indexed_schema<3>()};

    db.on_attach<testing::component<0>>([](entity e, testing::component<0>&, changeset_of<attach<testing::component<1>>> changes) {
        changes.attach<testing::component<1>>(e, 42);
    });
    db.on_attach<testing::component<1>>([](entity e, testing::component<1>&, changeset_of<attach<testing::component<2>>> changes) {
        changes.attach<testing::component<2>>(e, 24);
    });

    change_accumulator accumulator{db.schema()};
    auto changes = db.changeset_of<create, attach<testing::component<0>>>(accumulator);
    const entity e = changes.create();
    changes.attach<testing::component<0>>(e);

    db.flush(std::span<change_accumulator>{&accumulator, 1});

    const inspector inspect = db.inspect();
    REQUIRE_NE(inspect.get<testing::component<1>>(e), nullptr);
    REQUIRE_NE(inspect.get<testing::component<2>>(e), nullptr);
    CHECK_EQ(inspect.get<testing::component<1>>(e)->value, 42);
    CHECK_EQ(inspect.get<testing::component<2>>(e)->value, 24);
}

TEST_CASE("database::flush: lifecycle changes can destroy an entity")
{
    database db{testing::make_indexed_schema<1>()};

    db.on_attach<testing::component<0>>([](entity e, testing::component<0>&, changeset_of<destroy> changes) {
        changes.destroy(e);
    });

    int detach_calls = 0;
    db.on_detach<testing::component<0>>([&detach_calls](entity, const testing::component<0>& component) {
        CHECK_EQ(component.value, 42);
        ++detach_calls;
    });

    change_accumulator accumulator{db.schema()};
    auto changes = db.changeset_of<create, attach<testing::component<0>>>(accumulator);
    const entity e = changes.create();
    changes.attach<testing::component<0>>(e, 42);

    db.flush(std::span<change_accumulator>{&accumulator, 1});

    CHECK_EQ(detach_calls, 1);
    CHECK_FALSE(db.inspect().contains(e));
}

}} // namespace ant
