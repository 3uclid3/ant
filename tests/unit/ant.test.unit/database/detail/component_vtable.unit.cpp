#include <ant/database/detail/component_vtable.hpp>

#include <memory>
#include <new>

#include <ant.test.shared/database/component_types.hpp>
#include <ant.test.shared/doctest.hpp>

namespace ant::detail { namespace {

struct component_mock
{
    struct invoke_table
    {
        bool relocated{false};
        bool cloned{false};
        bool destroyed{false};
    };

    constexpr component_mock() noexcept = default;

    constexpr component_mock(invoke_table& tbl, int value = 0) noexcept
        : table{&tbl}
        , value{value}
    {}

    constexpr component_mock(component_mock&& other) noexcept
        : table{other.table}
        , value{other.value}
    {
        if (table) table->relocated = true;

        other.table = nullptr;
        other.value = 0;
    }

    constexpr component_mock(const component_mock& other) noexcept
        : table{other.table}
        , value{other.value}
    {
        if (table) table->cloned = true;
    }

    constexpr ~component_mock() noexcept
    {
        if (table) table->destroyed = true;
    }

    invoke_table* table{nullptr};
    int value{0};
};

struct component_mock_buffer_fixture
{
    ~component_mock_buffer_fixture()
    {
        if (!invoke_table.destroyed && (invoke_table.cloned || invoke_table.relocated))
        {
            std::destroy_at(destination_ptr);
        }
    }

    alignas(component_mock) std::byte destination_storage[sizeof(component_mock)];

    component_mock::invoke_table invoke_table;
    component_mock source{invoke_table};

    component_mock* destination_ptr{std::launder(reinterpret_cast<component_mock*>(destination_storage))};
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
    const auto vtable = component_vtable::of<test::empty>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: trivial type")
{
    const auto vtable = component_vtable::of<test::trivial>();

    CHECK_EQ(vtable.relocate, nullptr);
    CHECK_EQ(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: non trivial copy type")
{
    const auto vtable = component_vtable::of<test::non_trivial_copy>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_EQ(vtable.destroy, nullptr);
}

TEST_CASE("component_vtable::of: non trivial type")
{
    const auto vtable = component_vtable::of<test::non_trivial>();

    CHECK_NE(vtable.relocate, nullptr);
    CHECK_NE(vtable.clone, nullptr);
    CHECK_NE(vtable.destroy, nullptr);
}

TEST_CASE_FIXTURE(component_mock_buffer_fixture, "component_vtable::invoke_relocate: moves into destination buffer")
{
    source.value = 42;

    component_vtable::of<component_mock>().relocate(destination_ptr, &source);

    CHECK(invoke_table.relocated);
    CHECK_FALSE(invoke_table.cloned);
    CHECK_FALSE(invoke_table.destroyed);
    CHECK_EQ(destination_ptr->table, &invoke_table);
    CHECK_EQ(destination_ptr->value, 42);
}

TEST_CASE_FIXTURE(component_mock_buffer_fixture, "component_vtable::invoke_clone: copies value into destination buffer")
{
    source.value = 42;

    component_vtable::of<component_mock>().clone(destination_ptr, &source);

    CHECK(invoke_table.cloned);
    CHECK_FALSE(invoke_table.relocated);
    CHECK_FALSE(invoke_table.destroyed);
    CHECK_EQ(destination_ptr->table, &invoke_table);
    CHECK_EQ(destination_ptr->value, source.value);
}

TEST_CASE_FIXTURE(component_mock_buffer_fixture, "component_vtable::invoke_destroy: releases destination instance")
{
    component_vtable::of<component_mock>().clone(destination_ptr, &source);
    component_vtable::of<component_mock>().destroy(destination_ptr);

    CHECK(invoke_table.destroyed);
}

}} // namespace ant::detail
