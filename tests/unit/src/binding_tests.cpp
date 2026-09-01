
#include <ant/binding.hpp>
#include <ant/detail/change/change_accumulator_consumer.hpp>
#include <doctest/doctest.h>

#include <memory>
#include <type_traits>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

struct binding_fixture
{
    template<std::size_t... Indices>
    auto create_entity() -> entity
    {
        auto changes = db.changeset<changeset_signature<create, attach<component<Indices>...>>>(accumulator);
        const entity e = changes.create();
        (changes.template attach<component<Indices>>(e), ...);
        flush();
        return e;
    }

    auto flush() -> void
    {
        db.flush(std::span<change_accumulator>{&accumulator, 1});
    }

    database db{make_schema<4>()};
    change_accumulator accumulator{db.schema()};

    binding_context ctx{db, accumulator};
};

TEST_CASE("binding_descriptor::ctor: default is invalid")
{
    binding_descriptor bd;
    CHECK_FALSE(bd.is_valid());
}

TEST_CASE("binding_descriptor::describe: changeset with attach")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<attach<component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.changeset.attaches, component_bitset_of<component<0>>());
    CHECK(bd.changeset.detaches.none());

    CHECK(bd.changeset.sets.none());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with detach")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<detach<component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK_EQ(bd.changeset.detaches, component_bitset_of<component<0>>());

    CHECK(bd.changeset.sets.none());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with set_env")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<set_env<component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK(bd.changeset.detaches.none());

    CHECK_EQ(bd.changeset.sets, component_bitset_of<component<0>>());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with unset_env")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<unset_env<component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK(bd.changeset.detaches.none());

    CHECK(bd.changeset.sets.none());
    CHECK_EQ(bd.changeset.unsets, component_bitset_of<component<0>>());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with create")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<create>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK(bd.changeset.detaches.none());

    CHECK(bd.changeset.sets.none());
    CHECK(bd.changeset.unsets.none());

    CHECK(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with destroy")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<destroy>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK(bd.changeset.detaches.none());

    CHECK(bd.changeset.sets.none());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with all operations")
{
    using changes = changeset_of<
        attach<component<0>>,
        detach<component<1>>,
        set_env<component<2>>,
        unset_env<component<3>>,
        create,
        destroy>;

    binding_descriptor bd = binding_descriptor::describe<decltype([](changes) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.changeset.attaches, component_bitset_of<component<0>>());
    CHECK_EQ(bd.changeset.detaches, component_bitset_of<component<1>>());

    CHECK_EQ(bd.changeset.sets, component_bitset_of<component<2>>());
    CHECK_EQ(bd.changeset.unsets, component_bitset_of<component<3>>());

    CHECK(bd.changeset.create);
    CHECK(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: env with readonly components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](env_of<const component<0>, const component<1>*>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.env.reads, component_bitset_of<component<0>, component<1>>());
    CHECK(bd.env.writes.none());
}

TEST_CASE("binding_descriptor::describe: env with write components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](env_of<component<0>, component<1>*>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.env.reads.none());
    CHECK_EQ(bd.env.writes, component_bitset_of<component<0>, component<1>>());
}

TEST_CASE("binding_descriptor::describe: env with read and write components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](env_of<const component<0>, component<1>*>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.env.reads, component_bitset_of<component<0>>());
    CHECK_EQ(bd.env.writes, component_bitset_of<component<1>>());
}

TEST_CASE("binding_descriptor::describe: query with read, write and excluded components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](query_of<const component<0>, component<1>*, exclude<component<2>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.env.is_valid());

    CHECK_EQ(bd.queries.reads, component_bitset_of<component<0>>());
    CHECK_EQ(bd.queries.writes, component_bitset_of<component<1>>());
    CHECK_EQ(bd.queries.excludes, component_bitset_of<component<2>>());
}

TEST_CASE("binding_descriptor::describe: aggregates multiple queries")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](
                                                                      query_of<const component<0>, component<1>, exclude<component<2>>>,
                                                                      query_of<const component<3>*, component<4>*, exclude<component<5>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.env.is_valid());

    CHECK_EQ(bd.queries.reads, component_bitset_of<component<0>, component<3>>());
    CHECK_EQ(bd.queries.writes, component_bitset_of<component<1>, component<4>>());
    CHECK_EQ(bd.queries.excludes, component_bitset_of<component<2>, component<5>>());
}

TEST_CASE("binding_descriptor::describe: combines changeset, env and queries")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](
                                                                      changeset_of<attach<component<0>>>,
                                                                      env_of<const component<1>, component<2>>,
                                                                      query_of<const component<3>, component<4>, exclude<component<5>>>) {})>();
    CHECK(bd.is_valid());
    CHECK(bd.changeset.is_valid());
    CHECK(bd.env.is_valid());
    CHECK(bd.queries.is_valid());

    CHECK_EQ(bd.changeset.attaches, component_bitset_of<component<0>>());
    CHECK_EQ(bd.env.reads, component_bitset_of<component<1>>());
    CHECK_EQ(bd.env.writes, component_bitset_of<component<2>>());
    CHECK_EQ(bd.queries.reads, component_bitset_of<component<3>>());
    CHECK_EQ(bd.queries.writes, component_bitset_of<component<4>>());
    CHECK_EQ(bd.queries.excludes, component_bitset_of<component<5>>());
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: invokes the function")
{
    bool called = false;
    auto sys = [&called](env_of<component<0>>) {
        called = true;
    };

    binding b(sys);
    b.invoke(ctx);

    CHECK(called);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: false when a required env component is missing")
{
    binding b([](env_of<component<0>>) {});

    CHECK_FALSE(b.is_ready(ctx));
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: true when all required env components are set")
{
    auto setup = db.changeset<changeset_signature<set_env<component<0>>, set_env<component<1>>>>(accumulator);
    setup.set_env<component<0>>();
    setup.set_env<component<1>>();
    flush();

    binding b([](env_of<component<0>, const component<1>>) {});

    CHECK(b.is_ready(ctx));
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: false when any required env component is missing")
{
    auto setup = db.changeset<changeset_signature<set_env<component<0>>>>(accumulator);
    setup.set_env<component<0>>();
    flush();

    binding b([](env_of<component<0>, const component<1>>) {});

    CHECK_FALSE(b.is_ready(ctx));
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: true when an optional env component is missing")
{
    binding b([](env_of<component<0>*>) {});

    CHECK(b.is_ready(ctx));
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: supplies arguments in declared order")
{
    [[maybe_unused]] const entity e = create_entity<0>();

    auto setup = db.changeset<changeset_signature<set_env<component<2>>>>(accumulator);
    setup.set_env<component<2>>(2);
    flush();

    bool called = false;
    binding b([&called](
                  query_of<const component<0>> query,
                  changeset_of<set_env<component<1>>> changes,
                  env_of<component<2>> env) {
        CHECK_EQ(query.count_rows(), 1u);
        changes.set_env<component<1>>(1);
        env.get<component<2>>().value = 42;
        called = true;
    });

    b.invoke(ctx);

    CHECK(called);
    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::set_change>(detail::change_accumulator_consumer::changes(accumulator)[0]));
    CHECK_EQ(db.env<env_signature<const component<2>>>().get<component<2>>().value, 42u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: changeset writes into the provided accumulator")
{
    binding b([](changeset_of<set_env<component<0>>> changes) {
        changes.set_env<component<0>>(42);
    });

    b.invoke(ctx);

    REQUIRE_EQ(accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::set_change>(detail::change_accumulator_consumer::changes(accumulator)[0]));
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: env writes through to the registry")
{
    auto setup = db.changeset<changeset_signature<set_env<component<0>>>>(accumulator);
    setup.set_env<component<0>>(1);
    flush();

    binding b([](env_of<component<0>> env) {
        env.get<component<0>>().value = 42;
    });

    b.invoke(ctx);

    CHECK_EQ(db.env<env_signature<const component<0>>>().get<component<0>>().value, 42u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: compiles query on first invocation")
{
    [[maybe_unused]] const entity e = create_entity<0>();
    std::size_t row_count = 0;

    binding b([&row_count](query_of<const component<0>> query) {
        row_count = query.count_rows();
    });

    b.invoke(ctx);

    CHECK_EQ(row_count, 1u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: recompiles cached query after catalog epoch changes")
{
    [[maybe_unused]] const entity e0 = create_entity<0>();
    std::size_t row_count = 0;

    binding b([&row_count](query_of<const component<0>> query) {
        row_count = query.count_rows();
    });

    b.invoke(ctx);
    REQUIRE_EQ(row_count, 1u);

    [[maybe_unused]] const entity e1 = create_entity<0, 1>();
    b.invoke(ctx);

    CHECK_EQ(row_count, 2u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: supports move-only callable state")
{
    int value = 0;
    binding b([state = std::make_unique<int>(0), &value](env_of<component<0>*>) mutable {
        value = ++*state;
    });

    b.invoke(ctx);
    CHECK_EQ(value, 1);

    b.invoke(ctx);
    CHECK_EQ(value, 2);
}

TEST_CASE_FIXTURE(binding_fixture, "binding: is movable and non-copyable")
{
    static_assert(std::is_move_constructible_v<binding>);
    static_assert(std::is_move_assignable_v<binding>);
    static_assert(!std::is_copy_constructible_v<binding>);
    static_assert(!std::is_copy_assignable_v<binding>);

    int calls = 0;
    binding source([&calls](env_of<component<0>*>) {
        ++calls;
    });

    binding moved(std::move(source));
    moved.invoke(ctx);

    binding assigned([](env_of<component<0>*>) {});
    assigned = std::move(moved);
    assigned.invoke(ctx);

    CHECK_EQ(calls, 2);
}

}} // namespace ant
