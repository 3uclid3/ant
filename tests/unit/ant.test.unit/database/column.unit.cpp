#include <doctest/doctest.h>

#include <ant/database/column.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant.test.shared/database/shim_database.hpp>
#include <ant/database/schema.hpp>

namespace ant { namespace {

using column = basic_column<test::shim_naked_database>;

static constexpr auto meta = detail::component_meta::make<test::trivial>("trivial");

TEST_CASE("column: default empty")
{
    column c{meta};
    CHECK(c.empty());
    CHECK_EQ(c.size(), 0);
}

TEST_CASE("column::emplace_back: returns index")
{
    column c{meta};

    const row_index idx = c.emplace_back<test::trivial>(42);

    CHECK_EQ(c.size(), 1);

    const void* row_ptr = c.row(idx);
    REQUIRE_NE(row_ptr, nullptr);

    const test::trivial* trivial_ptr = static_cast<const test::trivial*>(row_ptr);
    CHECK_EQ(trivial_ptr->value, 42);
}

TEST_CASE("column::swap_and_pop: removes element")
{
    column c{meta};

    const row_index idx = c.emplace_back<test::trivial>(42);
    c.swap_and_pop(idx);

    CHECK(c.empty());
}

TEST_CASE("column::swap_and_pop: removes element and moves last to removed")
{
    column c{meta};

    const row_index idx0 = c.emplace_back<test::trivial>(42);
    c.emplace_back<test::trivial>(24);
    c.emplace_back<test::trivial>(33);

    c.swap_and_pop(idx0);

    REQUIRE_EQ(c.size(), 2);

    const void* row_ptr = c.row(idx0);
    REQUIRE_NE(row_ptr, nullptr);

    const test::trivial* trivial_ptr = static_cast<const test::trivial*>(row_ptr);
    CHECK_EQ(trivial_ptr->value, 33);
}

}} // namespace ant
