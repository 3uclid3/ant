
#include <ant/binding.hpp>
#include <ant/database.hpp>
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
        auto changes = _db.changeset<changeset_signature<create, attach<testing::component<Indices>...>>>(_accumulator);
        const entity e = changes.create();
        (changes.template attach<testing::component<Indices>>(e), ...);
        flush();
        return e;
    }

    auto flush() -> void
    {
        _db.flush(std::span<change_accumulator>{&_accumulator, 1});
    }

    database _db{testing::make_indexed_schema<4>()};
    change_accumulator _accumulator{_db.schema()};
};

TEST_CASE("binding_descriptor::ctor: default is invalid")
{
    binding_descriptor bd;
    CHECK_FALSE(bd.is_valid());
}

TEST_CASE("binding_descriptor::describe: changeset with attach")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<attach<testing::component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.changeset.attaches, component_bitset_of<testing::component<0>>());
    CHECK(bd.changeset.detaches.none());

    CHECK(bd.changeset.sets.none());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with detach")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<detach<testing::component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK_EQ(bd.changeset.detaches, component_bitset_of<testing::component<0>>());

    CHECK(bd.changeset.sets.none());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with set_env")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<set_env<testing::component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK(bd.changeset.detaches.none());

    CHECK_EQ(bd.changeset.sets, component_bitset_of<testing::component<0>>());
    CHECK(bd.changeset.unsets.none());

    CHECK_FALSE(bd.changeset.create);
    CHECK_FALSE(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: changeset with unset_env")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](changeset_of<unset_env<testing::component<0>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.changeset.attaches.none());
    CHECK(bd.changeset.detaches.none());

    CHECK(bd.changeset.sets.none());
    CHECK_EQ(bd.changeset.unsets, component_bitset_of<testing::component<0>>());

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
        attach<testing::component<0>>,
        detach<testing::component<1>>,
        set_env<testing::component<2>>,
        unset_env<testing::component<3>>,
        create,
        destroy>;

    binding_descriptor bd = binding_descriptor::describe<decltype([](changes) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.env.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.changeset.attaches, component_bitset_of<testing::component<0>>());
    CHECK_EQ(bd.changeset.detaches, component_bitset_of<testing::component<1>>());

    CHECK_EQ(bd.changeset.sets, component_bitset_of<testing::component<2>>());
    CHECK_EQ(bd.changeset.unsets, component_bitset_of<testing::component<3>>());

    CHECK(bd.changeset.create);
    CHECK(bd.changeset.destroy);
}

TEST_CASE("binding_descriptor::describe: env with readonly components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](env_of<const testing::component<0>, const testing::component<1>*>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.env.reads, component_bitset_of<testing::component<0>, testing::component<1>>());
    CHECK(bd.env.writes.none());
}

TEST_CASE("binding_descriptor::describe: env with write components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](env_of<testing::component<0>, testing::component<1>*>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK(bd.env.reads.none());
    CHECK_EQ(bd.env.writes, component_bitset_of<testing::component<0>, testing::component<1>>());
}

TEST_CASE("binding_descriptor::describe: env with read and write components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](env_of<const testing::component<0>, testing::component<1>*>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.queries.is_valid());

    CHECK_EQ(bd.env.reads, component_bitset_of<testing::component<0>>());
    CHECK_EQ(bd.env.writes, component_bitset_of<testing::component<1>>());
}

TEST_CASE("binding_descriptor::describe: query with read, write and excluded components")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](query_of<const testing::component<0>, testing::component<1>*, exclude<testing::component<2>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.env.is_valid());

    CHECK_EQ(bd.queries.reads, component_bitset_of<testing::component<0>>());
    CHECK_EQ(bd.queries.writes, component_bitset_of<testing::component<1>>());
    CHECK_EQ(bd.queries.excludes, component_bitset_of<testing::component<2>>());
}

TEST_CASE("binding_descriptor::describe: aggregates multiple queries")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](
                                                                      query_of<const testing::component<0>, testing::component<1>, exclude<testing::component<2>>>,
                                                                      query_of<const testing::component<3>*, testing::component<4>*, exclude<testing::component<5>>>) {})>();
    CHECK(bd.is_valid());
    CHECK_FALSE(bd.changeset.is_valid());
    CHECK_FALSE(bd.env.is_valid());

    CHECK_EQ(bd.queries.reads, component_bitset_of<testing::component<0>, testing::component<3>>());
    CHECK_EQ(bd.queries.writes, component_bitset_of<testing::component<1>, testing::component<4>>());
    CHECK_EQ(bd.queries.excludes, component_bitset_of<testing::component<2>, testing::component<5>>());
}

TEST_CASE("binding_descriptor::describe: combines changeset, env and queries")
{
    binding_descriptor bd = binding_descriptor::describe<decltype([](
                                                                      changeset_of<attach<testing::component<0>>>,
                                                                      env_of<const testing::component<1>, testing::component<2>>,
                                                                      query_of<const testing::component<3>, testing::component<4>, exclude<testing::component<5>>>) {})>();
    CHECK(bd.is_valid());
    CHECK(bd.changeset.is_valid());
    CHECK(bd.env.is_valid());
    CHECK(bd.queries.is_valid());

    CHECK_EQ(bd.changeset.attaches, component_bitset_of<testing::component<0>>());
    CHECK_EQ(bd.env.reads, component_bitset_of<testing::component<1>>());
    CHECK_EQ(bd.env.writes, component_bitset_of<testing::component<2>>());
    CHECK_EQ(bd.queries.reads, component_bitset_of<testing::component<3>>());
    CHECK_EQ(bd.queries.writes, component_bitset_of<testing::component<4>>());
    CHECK_EQ(bd.queries.excludes, component_bitset_of<testing::component<5>>());
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: invokes the function")
{
    bool called = false;
    auto sys = [&called](env_of<testing::component<0>>) {
        called = true;
    };

    binding b = _db.bind(sys);
    b.invoke(_accumulator);

    CHECK(called);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: false when a required env component is missing")
{
    binding b = _db.bind([](env_of<testing::component<0>>) {});

    CHECK_FALSE(b.is_ready());
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: true when all required env components are set")
{
    auto setup = _db.changeset<changeset_signature<set_env<testing::component<0>>, set_env<testing::component<1>>>>(_accumulator);
    setup.set_env<testing::component<0>>();
    setup.set_env<testing::component<1>>();
    flush();

    binding b = _db.bind([](env_of<testing::component<0>, const testing::component<1>>) {});

    CHECK(b.is_ready());
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: false when any required env component is missing")
{
    auto setup = _db.changeset<changeset_signature<set_env<testing::component<0>>>>(_accumulator);
    setup.set_env<testing::component<0>>();
    flush();

    binding b = _db.bind([](env_of<testing::component<0>, const testing::component<1>>) {});

    CHECK_FALSE(b.is_ready());
}

TEST_CASE_FIXTURE(binding_fixture, "binding::is_ready: true when an optional env component is missing")
{
    binding b = _db.bind([](env_of<testing::component<0>*>) {});

    CHECK(b.is_ready());
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: supplies arguments in declared order")
{
    [[maybe_unused]] const entity e = create_entity<0>();

    auto setup = _db.changeset<changeset_signature<set_env<testing::component<2>>>>(_accumulator);
    setup.set_env<testing::component<2>>(2);
    flush();

    bool called = false;
    binding b = _db.bind([&called](
                             query_of<const testing::component<0>> query,
                             changeset_of<set_env<testing::component<1>>> changes,
                             env_of<testing::component<2>> env) {
        CHECK_EQ(query.count_rows(), 1u);
        changes.set_env<testing::component<1>>(1);
        env.get<testing::component<2>>().value = 42;
        called = true;
    });

    b.invoke(_accumulator);

    CHECK(called);
    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::set_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
    CHECK_EQ(_db.env<env_signature<const testing::component<2>>>().get<testing::component<2>>().value, 42u);
}

TEST_CASE_FIXTURE(binding_fixture, "basic_binding::invoke: forwards supplied arguments before injected arguments")
{
    bool called = false;

    basic_binding<int> b = _db.bind<int>([&called](int supplied, env_of<testing::component<0>*> env) {
        CHECK_EQ(supplied, 42);
        CHECK_FALSE(env.has<testing::component<0>>());
        called = true;
    });

    b.invoke(_accumulator, 42);

    CHECK(called);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: changeset writes into the provided accumulator")
{
    binding b = _db.bind([](changeset_of<set_env<testing::component<0>>> changes) {
        changes.set_env<testing::component<0>>(42);
    });

    b.invoke(_accumulator);

    REQUIRE_EQ(_accumulator.size(), 1u);
    CHECK(std::holds_alternative<detail::set_change>(detail::change_accumulator_consumer::changes(_accumulator)[0]));
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: env writes through to the registry")
{
    auto setup = _db.changeset<changeset_signature<set_env<testing::component<0>>>>(_accumulator);
    setup.set_env<testing::component<0>>(1);
    flush();

    binding b = _db.bind([](env_of<testing::component<0>> env) {
        env.get<testing::component<0>>().value = 42;
    });

    b.invoke(_accumulator);

    CHECK_EQ(_db.env<env_signature<const testing::component<0>>>().get<testing::component<0>>().value, 42u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: compiles query on first invocation")
{
    [[maybe_unused]] const entity e = create_entity<0>();
    std::size_t row_count = 0;

    binding b = _db.bind([&row_count](query_of<const testing::component<0>> query) {
        row_count = query.count_rows();
    });

    b.invoke(_accumulator);

    CHECK_EQ(row_count, 1u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: recompiles cached query after catalog epoch changes")
{
    [[maybe_unused]] const entity e0 = create_entity<0>();
    std::size_t row_count = 0;

    binding b = _db.bind([&row_count](query_of<const testing::component<0>> query) {
        row_count = query.count_rows();
    });

    b.invoke(_accumulator);
    REQUIRE_EQ(row_count, 1u);

    [[maybe_unused]] const entity e1 = create_entity<0, 1>();
    b.invoke(_accumulator);

    CHECK_EQ(row_count, 2u);
}

TEST_CASE_FIXTURE(binding_fixture, "binding::invoke: supports move-only callable state")
{
    int value = 0;
    binding b = _db.bind([state = std::make_unique<int>(0), &value](env_of<testing::component<0>*>) mutable {
        value = ++*state;
    });

    b.invoke(_accumulator);
    CHECK_EQ(value, 1);

    b.invoke(_accumulator);
    CHECK_EQ(value, 2);
}

TEST_CASE_FIXTURE(binding_fixture, "binding: is movable and non-copyable")
{
    static_assert(std::is_move_constructible_v<binding>);
    static_assert(std::is_move_assignable_v<binding>);
    static_assert(!std::is_copy_constructible_v<binding>);
    static_assert(!std::is_copy_assignable_v<binding>);

    int calls = 0;
    binding source = _db.bind([&calls](env_of<testing::component<0>*>) {
        ++calls;
    });

    binding moved(std::move(source));
    moved.invoke(_accumulator);

    binding assigned = _db.bind([](env_of<testing::component<0>*>) {});
    assigned = std::move(moved);
    assigned.invoke(_accumulator);

    CHECK_EQ(calls, 2);
}

}} // namespace ant
