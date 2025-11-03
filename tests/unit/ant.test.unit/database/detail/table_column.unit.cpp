#include <doctest/doctest.h>

#include <ant/database/detail/table_column.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail { namespace {

static constexpr auto meta = make_meta<test::trivial>("trivial");

auto emplace(table_column& c, int value) -> std::size_t
{
    const auto idx = c.emplace_back();

    void* row_ptr = c.row(idx);
    REQUIRE_NE(row_ptr, nullptr);

    test::trivial* trivial_ptr = static_cast<test::trivial*>(row_ptr);
    trivial_ptr->value = value;

    return idx;
}

auto get(table_column& c, std::size_t idx) -> test::trivial&
{
    void* row_ptr = c.row(idx);
    REQUIRE_NE(row_ptr, nullptr);

    return *static_cast<test::trivial*>(row_ptr);
}

TEST_CASE("table_column::ctor: default empty")
{
    table_column c{meta};
    CHECK(c.empty());
    CHECK_EQ(c.size(), 0);
}

TEST_CASE("table_column::emplace_back: returns index")
{
    table_column c{meta};

    const std::size_t idx = emplace(c, 42);

    CHECK_EQ(c.size(), 1);
    CHECK_EQ(get(c, idx).value, 42);
}

TEST_CASE("table_column::swap_and_pop: removes element")
{
    table_column c{meta};

    c.swap_and_pop(c.emplace_back());

    CHECK(c.empty());
}

TEST_CASE("table_column::swap_and_pop: removes element and moves last to removed")
{
    table_column c{meta};

    const std::size_t idx0 = emplace(c, 42);
    emplace(c, 24);
    emplace(c, 33);

    c.swap_and_pop(idx0);

    REQUIRE_EQ(c.size(), 2);

    const test::trivial& trivial = get(c, idx0);
    CHECK_EQ(trivial.value, 33);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "table_column::emplace_back: default constructs when non-trivial default ctor present")
{
    constexpr auto meta_tr = make_meta<test::tracked>("tracked");
    table_column c{meta_tr};

    const std::size_t idx = c.emplace_back();
    auto* ptr = static_cast<test::tracked*>(c.row(idx));
    REQUIRE_NE(ptr, nullptr);

    CHECK_EQ(ptr->value, 7);
    CHECK_EQ(test::tracked::ctor_count, 1);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "table_column::swap_and_pop: uses relocate for non-trivial types")
{
    constexpr auto meta_tr = make_meta<test::tracked>("tracked");
    table_column c{meta_tr};

    const std::size_t i0 = c.emplace_back();
    const std::size_t i1 = c.emplace_back();

    static_cast<test::tracked*>(c.row(i0))->value = 1;
    static_cast<test::tracked*>(c.row(i1))->value = 2;

    c.swap_and_pop(i0);

    CHECK_EQ(c.size(), 1);
    CHECK_EQ(static_cast<test::tracked*>(c.row(0))->value, 2);
    CHECK(test::tracked::move_count >= 1);
}

TEST_CASE_FIXTURE(test::tracked_fixture, "table_column::swap_and_pop: last element calls destroy")
{
    constexpr auto meta_tr = make_meta<test::tracked>("tracked");
    table_column c{meta_tr};

    const std::size_t idx = c.emplace_back();
    c.swap_and_pop(idx);

    CHECK_EQ(c.size(), 0);
    CHECK_EQ(test::tracked::dtor_count, 1);
}

}} // namespace ant::detail
