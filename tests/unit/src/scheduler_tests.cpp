#include <ant/query.hpp>
#include <doctest/doctest.h>

#include <ant/database.hpp>
#include <ant/scheduler.hpp>
#include <ant/scheduler/stage.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

struct fixture
{
    database _db{testing::make_indexed_schema<4>()};
    scheduler _scheduler{_db};
};

TEST_CASE_FIXTURE(fixture, "scheduler::stage_handle::add: permits the same system type in different stages")
{
    auto system = [](env_of<testing::component<0>>) {};

    CHECK_NOTHROW(_scheduler.stage<struct schedule, struct stage0>().add(system));
    CHECK_NOTHROW(_scheduler.stage<struct schedule, struct stage1>().add(system));
}

TEST_CASE_FIXTURE(fixture, "scheduler::stage: infers the schedule from the stage")
{
    struct schedule
    {
        struct stage : stage_of<schedule>
        {
        };
    };

    int called = 0;
    _scheduler.stage<schedule::stage>().add([&called](env_of<testing::component<0>*>) { ++called; });
    _scheduler.compile<schedule>();

    _scheduler.execute<schedule>();

    CHECK_EQ(called, 1);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: empty schedule does nothing")
{
    _scheduler.stage<struct schedule, struct stage>();
    _scheduler.compile<struct schedule>();

    CHECK_NOTHROW(_scheduler.execute<struct schedule>());
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: invokes a registered system exactly once")
{
    int called = 0;

    _scheduler.stage<struct schedule, struct stage>().add([&called](env_of<testing::component<0>*>) { ++called; });
    _scheduler.compile<struct schedule>();

    _scheduler.execute<struct schedule>();

    CHECK_EQ(called, 1);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: skips a system when a required env component is missing")
{
    int called = 0;

    _scheduler.stage<struct schedule, struct stage>().add([&called](env_of<testing::component<0>>) { ++called; });
    _scheduler.compile<struct schedule>();

    _scheduler.execute<struct schedule>();

    CHECK_EQ(called, 0);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: invokes every registered system")
{
    bool stage0_system0_called = false;
    bool stage0_system1_called = false;
    bool stage1_system0_called = false;

    _scheduler.stage<struct schedule, struct stage0>().add([&stage0_system0_called](env_of<testing::component<0>*>) { stage0_system0_called = true; });
    _scheduler.stage<struct schedule, struct stage0>().add([&stage0_system1_called](env_of<testing::component<0>*>) { stage0_system1_called = true; });
    _scheduler.stage<struct schedule, struct stage1>().add([&stage1_system0_called](env_of<testing::component<0>*>) { stage1_system0_called = true; });
    _scheduler.compile<struct schedule>();

    _scheduler.execute<struct schedule>();

    CHECK(stage0_system0_called);
    CHECK(stage0_system1_called);
    CHECK(stage1_system0_called);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: runs stages in registration order")
{
    int order = 0;

    _scheduler.stage<struct schedule, struct stage0>().add([&order](env_of<testing::component<0>*>) { CHECK_EQ(order, 0); ++order; });
    _scheduler.stage<struct schedule, struct stage0>().add([&order](env_of<testing::component<0>*>) { CHECK_EQ(order, 1); ++order; });
    _scheduler.stage<struct schedule, struct stage1>().add([&order](env_of<testing::component<0>*>) { CHECK_EQ(order, 2); ++order; });
    _scheduler.stage<struct schedule, struct stage1>().add([&order](env_of<testing::component<0>*>) { CHECK_EQ(order, 3); ++order; });
    _scheduler.compile<struct schedule>();

    _scheduler.execute<struct schedule>();

    CHECK_EQ(order, 4);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: recompiles after adding a system")
{
    int system_called = 0;
    _scheduler.stage<struct schedule, struct stage0>().add([&system_called](env_of<testing::component<0>*>) { ++system_called; });
    _scheduler.compile<struct schedule>();
    _scheduler.execute<struct schedule>();

    int system2_called = 0;
    _scheduler.stage<struct schedule, struct stage0>().add([&system2_called](env_of<testing::component<0>*>) { ++system2_called; });
    _scheduler.compile<struct schedule>();
    _scheduler.execute<struct schedule>();

    CHECK_EQ(system_called, 2);
    CHECK_EQ(system2_called, 1);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: flushes changes into the database")
{
    _scheduler.stage<struct schedule, struct stage0>().add([](changeset_of<set_env<testing::component<0>>> cs) {
        cs.set_env<testing::component<0>>(42);
    });
    _scheduler.compile<struct schedule>();

    _scheduler.execute<struct schedule>();

    const testing::component<0>* c = _db.inspect().get_env<testing::component<0>>();
    REQUIRE_NE(c, nullptr);
    CHECK_EQ(c->value, 42);
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: exposes earlier-stage changes to later stage")
{
    _scheduler.stage<struct schedule, struct stage0>().add([](changeset_of<set_env<testing::component<0>>> cs) {
        cs.set_env<testing::component<0>>(42);
    });
    _scheduler.stage<struct schedule, struct stage1>().add([](env_of<testing::component<0>*> env) {
        const testing::component<0>* c = env.get<testing::component<0>>();
        REQUIRE_NE(c, nullptr);
        CHECK_EQ(c->value, 42);
    });
    _scheduler.compile<struct schedule>();

    _scheduler.execute<struct schedule>();
}

TEST_CASE_FIXTURE(fixture, "scheduler::execute: runs only the selected schedule")
{
    int schedule0_calls = 0;
    int schedule1_calls = 0;

    _scheduler.stage<struct schedule0, struct stage>().add([&schedule0_calls](env_of<testing::component<0>*>) { ++schedule0_calls; });
    _scheduler.stage<struct schedule1, struct stage>().add([&schedule1_calls](env_of<testing::component<0>*>) { ++schedule1_calls; });
    _scheduler.compile<struct schedule0>();
    _scheduler.compile<struct schedule1>();

    _scheduler.execute<struct schedule0>();

    CHECK_EQ(schedule0_calls, 1);
    CHECK_EQ(schedule1_calls, 0);
}

}} // namespace ant
