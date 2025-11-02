#include <doctest/doctest.h>

#include <ant/database/column.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant.test.shared/database/shim_database.hpp>
#include <ant/database/schema.hpp>

namespace ant { namespace {

using column = basic_column<std::allocator<std::byte>>;

static constexpr auto meta = detail::component_meta::make<test::trivial>("trivial");

auto emplace(column& c, int value) -> row_index
{
    const auto idx = c.emplace_back();

    void* row_ptr = c.row(idx);
    REQUIRE_NE(row_ptr, nullptr);

    test::trivial* trivial_ptr = static_cast<test::trivial*>(row_ptr);
    trivial_ptr->value = value;

    return idx;
}

auto get(column& c, row_index idx) -> test::trivial&
{
    void* row_ptr = c.row(idx);
    REQUIRE_NE(row_ptr, nullptr);

    return *static_cast<test::trivial*>(row_ptr);
}

TEST_CASE("column::ctor: default empty")
{
    column c{meta};
    CHECK(c.empty());
    CHECK_EQ(c.size(), 0);
}

TEST_CASE("column::emplace_back: returns index")
{
    column c{meta};

    const row_index idx = emplace(c, 42);

    CHECK_EQ(c.size(), 1);
    CHECK_EQ(get(c, idx).value, 42);
}

TEST_CASE("column::swap_and_pop: removes element")
{
    column c{meta};

    c.swap_and_pop(c.emplace_back());

    CHECK(c.empty());
}

TEST_CASE("column::swap_and_pop: removes element and moves last to removed")
{
    column c{meta};

    const row_index idx0 = emplace(c, 42);
    emplace(c, 24);
    emplace(c, 33);

    c.swap_and_pop(idx0);

    REQUIRE_EQ(c.size(), 2);

    const test::trivial& trivial = get(c, idx0);
    CHECK_EQ(trivial.value, 33);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "column::emplace_back: default constructs when non-trivial default ctor present")
{
    constexpr auto meta_tr = detail::component_meta::make<test::tracked>("tracked");
    column c{meta_tr};

    const row_index idx = c.emplace_back();
    auto* ptr = static_cast<test::tracked*>(c.row(idx));
    REQUIRE_NE(ptr, nullptr);

    CHECK_EQ(ptr->value, 7);
    CHECK_EQ(test::tracked::ctor_count, 1);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "column::swap_and_pop: uses relocate for non-trivial types")
{
    constexpr auto meta_tr = detail::component_meta::make<test::tracked>("tracked");
    column c{meta_tr};

    const row_index i0 = c.emplace_back();
    const row_index i1 = c.emplace_back();

    static_cast<test::tracked*>(c.row(i0))->value = 1;
    static_cast<test::tracked*>(c.row(i1))->value = 2;

    c.swap_and_pop(i0);

    CHECK_EQ(c.size(), 1);
    CHECK_EQ(static_cast<test::tracked*>(c.row(row_index{}))->value, 2);
    CHECK(test::tracked::move_count >= 1);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "column::swap_and_pop: last element calls destroy")
{
    constexpr auto meta_tr = detail::component_meta::make<test::tracked>("tracked");
    column c{meta_tr};

    const row_index idx = c.emplace_back();
    c.swap_and_pop(idx);

    CHECK_EQ(c.size(), 0);
    CHECK_EQ(test::tracked::dtor_count, 1);
}

}} // namespace ant
