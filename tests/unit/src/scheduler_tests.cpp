#include <ant/query.hpp>
#include <doctest/doctest.h>

#include <ant/database.hpp>
#include <ant/scheduler.hpp>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>

namespace ant { namespace {

struct fixture
{
    database db{make_schema<4>()};
    ant::scheduler scheduler{db};
};

TEST_CASE_FIXTURE(fixture, "scheduler::stage_handle::add: permits the same system type in different stages")
{
    auto system = [](env_of<component<0>>) {};

    CHECK_NOTHROW(scheduler.stage<struct schedule, struct stage0>().add(system));
    CHECK_NOTHROW(scheduler.stage<struct schedule, struct stage1>().add(system));
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: empty schedule does nothing")
{
    scheduler.stage<struct schedule, struct stage>();
    scheduler.compile<struct schedule>();

    CHECK_NOTHROW(scheduler.execute<struct schedule>());
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: invokes a registered system exactly once")
{
    int called = 0;

    scheduler.stage<struct schedule, struct stage>().add([&called](env_of<component<0>*>) { ++called; });
    scheduler.compile<struct schedule>();

    scheduler.execute<struct schedule>();

    CHECK_EQ(called, 1);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: skips a system when a required env component is missing")
{
    int called = 0;

    scheduler.stage<struct schedule, struct stage>().add([&called](env_of<component<0>>) { ++called; });
    scheduler.compile<struct schedule>();

    scheduler.execute<struct schedule>();

    CHECK_EQ(called, 0);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: invokes every registered system")
{
    bool stage0_system0_called = false;
    bool stage0_system1_called = false;
    bool stage1_system0_called = false;

    scheduler.stage<struct schedule, struct stage0>().add([&stage0_system0_called](env_of<component<0>*>) { stage0_system0_called = true; });
    scheduler.stage<struct schedule, struct stage0>().add([&stage0_system1_called](env_of<component<0>*>) { stage0_system1_called = true; });
    scheduler.stage<struct schedule, struct stage1>().add([&stage1_system0_called](env_of<component<0>*>) { stage1_system0_called = true; });
    scheduler.compile<struct schedule>();

    scheduler.execute<struct schedule>();

    CHECK(stage0_system0_called);
    CHECK(stage0_system1_called);
    CHECK(stage1_system0_called);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: runs stages in registration order")
{
    int order = 0;

    scheduler.stage<struct schedule, struct stage0>().add([&order](env_of<component<0>*>) { CHECK_EQ(order, 0); ++order; });
    scheduler.stage<struct schedule, struct stage0>().add([&order](env_of<component<0>*>) { CHECK_EQ(order, 1); ++order; });
    scheduler.stage<struct schedule, struct stage1>().add([&order](env_of<component<0>*>) { CHECK_EQ(order, 2); ++order; });
    scheduler.stage<struct schedule, struct stage1>().add([&order](env_of<component<0>*>) { CHECK_EQ(order, 3); ++order; });
    scheduler.compile<struct schedule>();

    scheduler.execute<struct schedule>();

    CHECK_EQ(order, 4);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: recompiles after adding a system")
{
    int system_called = 0;
    scheduler.stage<struct schedule, struct stage0>().add([&system_called](env_of<component<0>*>) { ++system_called; });
    scheduler.compile<struct schedule>();
    scheduler.execute<struct schedule>();

    int system2_called = 0;
    scheduler.stage<struct schedule, struct stage0>().add([&system2_called](env_of<component<0>*>) { ++system2_called; });
    scheduler.compile<struct schedule>();
    scheduler.execute<struct schedule>();

    CHECK_EQ(system_called, 2);
    CHECK_EQ(system2_called, 1);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: flushes changes into the database")
{
    scheduler.stage<struct schedule, struct stage0>().add([](changeset_of<set_env<component<0>>> cs) {
        cs.set_env<component<0>>(42);
    });
    scheduler.compile<struct schedule>();

    scheduler.execute<struct schedule>();

    const component<0>* c = db.inspect().get_env<component<0>>();
    REQUIRE_NE(c, nullptr);
    CHECK_EQ(c->value, 42);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: exposes earlier-stage changes to later stage")
{
    scheduler.stage<struct schedule, struct stage0>().add([](changeset_of<set_env<component<0>>> cs) {
        cs.set_env<component<0>>(42);
    });
    scheduler.stage<struct schedule, struct stage1>().add([](env_of<component<0>*> env) {
        const component<0>* c = env.get<component<0>>();
        REQUIRE_NE(c, nullptr);
        CHECK_EQ(c->value, 42);
    });
    scheduler.compile<struct schedule>();

    scheduler.execute<struct schedule>();
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: runs only the selected schedule")
{
    int schedule0_calls = 0;
    int schedule1_calls = 0;

    scheduler.stage<struct schedule0, struct stage>().add([&schedule0_calls](env_of<component<0>*>) { ++schedule0_calls; });
    scheduler.stage<struct schedule1, struct stage>().add([&schedule1_calls](env_of<component<0>*>) { ++schedule1_calls; });
    scheduler.compile<struct schedule0>();
    scheduler.compile<struct schedule1>();

    scheduler.execute<struct schedule0>();

    CHECK_EQ(schedule0_calls, 1);
    CHECK_EQ(schedule1_calls, 0);
}

}} // namespace ant
