#include <ant/database/detail/component/component_vtable.hpp>
#include <doctest/doctest.h>

#include <memory>

#include "../../component.hpp"

namespace ant::detail { namespace {

TEST_CASE("component_vtable_of: primitive type")
{
    const auto vtable = component_vtable_of<int>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable_of: empty type")
{
    struct empty
    {
    };

    const auto vtable = component_vtable_of<empty>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable_of: trivial type")
{
    const auto vtable = component_vtable_of<trivial_component<0>>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable_of: non trivial copy type")
{
    struct non_trivial_copy
    {
        constexpr non_trivial_copy() noexcept = default;
        constexpr non_trivial_copy(const non_trivial_copy& other) noexcept
            : value(other.value)
        {}

        int value{0};
    };

    const auto vtable = component_vtable_of<non_trivial_copy>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable_of: non trivial type")
{
    const auto vtable = component_vtable_of<component<0>>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_NE(vtable.destroy, nullptr);
}

}} // namespace ant::detail
