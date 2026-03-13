#include <ant.unit/doctest.hpp>
#include <ant/database/detail/schema/component_vtable.hpp>

#include <memory>
#include <new>

namespace ant::detail { namespace {

struct component
{
    struct invoke_table
    {
        bool relocated{false};
        bool cloned{false};
        bool destroyed{false};
    };

    constexpr component() noexcept = default;

    constexpr component(invoke_table& tbl) noexcept
        : table{&tbl}
    {}

    constexpr component(component&& other) noexcept
        : table{std::exchange(other.table, nullptr)}
        , value{std::exchange(other.value, 0)}
    {
        if (table) table->relocated = true;
    }

    constexpr component(const component& other) noexcept
        : table{other.table}
        , value{other.value}
    {
        if (table) table->cloned = true;
    }

    constexpr ~component() noexcept
    {
        if (table) table->destroyed = true;
    }

    invoke_table* table{nullptr};
    int value{0};
};

struct component_buffer_fixture
{
    ~component_buffer_fixture()
    {
        if (!invoke_table.destroyed && (invoke_table.cloned || invoke_table.relocated))
        {
            std::destroy_at(destination_ptr);
        }
    }

    alignas(component) std::byte destination_storage[sizeof(component)];

    component::invoke_table invoke_table;
    component source{invoke_table};

    component* destination_ptr{std::launder(reinterpret_cast<component*>(destination_storage))};
};

TEST_CASE("component_vtable::of: primitive type")
{
    const auto vtable = component_vtable::of<int>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: empty type")
{
    struct empty
    {
    };

    const auto vtable = component_vtable::of<empty>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: trivial type")
{
    struct trivial
    {
        int value{0};
    };

    const auto vtable = component_vtable::of<trivial>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: non trivial copy type")
{
    struct non_trivial_copy
    {
        constexpr non_trivial_copy() noexcept = default;
        constexpr non_trivial_copy(const non_trivial_copy& other) noexcept
            : value(other.value)
        {}

        int value{0};
    };

    const auto vtable = component_vtable::of<non_trivial_copy>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: non trivial type")
{
    struct non_trivial
    {
        constexpr non_trivial() noexcept = default;
        constexpr non_trivial(const non_trivial& other) noexcept
            : value(other.value)
        {}
        constexpr ~non_trivial() noexcept
        {}

        int value{0};
    };

    const auto vtable = component_vtable::of<non_trivial>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_NE(vtable.destroy, nullptr);
}

TEST_CASE_FIXTURE(component_buffer_fixture, "component_vtable::invoke_relocate: moves into destination buffer")
{
    source.value = 42;

    component_vtable::of<component>().relocate(destination_ptr, &source);

    CHECK(invoke_table.relocated);
    CHECK_FALSE(invoke_table.cloned);
    CHECK_FALSE(invoke_table.destroyed);
    CHECK_EQ(destination_ptr->table, &invoke_table);
    CHECK_EQ(destination_ptr->value, 42);
}

TEST_CASE_FIXTURE(component_buffer_fixture, "component_vtable::invoke_clone: copies value into destination buffer")
{
    source.value = 42;

    component_vtable::of<component>().clone(destination_ptr, &source);

    CHECK(invoke_table.cloned);
    CHECK_FALSE(invoke_table.relocated);
    CHECK_FALSE(invoke_table.destroyed);
    CHECK_EQ(destination_ptr->table, &invoke_table);
    CHECK_EQ(destination_ptr->value, source.value);
}

TEST_CASE_FIXTURE(component_buffer_fixture, "component_vtable::invoke_destroy: releases destination instance")
{
    component_vtable::of<component>().clone(destination_ptr, &source);
    component_vtable::of<component>().destroy(destination_ptr);

    CHECK(invoke_table.destroyed);
}

}} // namespace ant::detail
