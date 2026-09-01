#include <ant/detail/component/component_vtable.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>

namespace ant::detail { namespace {

TEST_CASE("make_component_vtable: primitive type")
{
    const auto vtable = make_component_vtable<int>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("make_component_vtable: empty type")
{
    struct empty
    {
    };

    const auto vtable = make_component_vtable<empty>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("make_component_vtable: trivial type")
{
    const auto vtable = make_component_vtable<trivial_component<0>>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("make_component_vtable: non trivial copy type")
{
    struct non_trivial_copy
    {
        constexpr non_trivial_copy() noexcept = default;
        constexpr non_trivial_copy(const non_trivial_copy& other) noexcept
            : value(other.value)
        {}

        int value{0};
    };

    const auto vtable = make_component_vtable<non_trivial_copy>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("make_component_vtable: non trivial type")
{
    const auto vtable = make_component_vtable<component<0>>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_NE(vtable.destroy, nullptr);
}

}} // namespace ant::detail
