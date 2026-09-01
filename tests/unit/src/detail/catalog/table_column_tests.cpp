#include <ant/detail/catalog/table_column.hpp>
#include <doctest/doctest.h>

#include <cstddef>
#include <type_traits>
#include <utility>

namespace ant::detail { namespace {

struct operation_counts
{
    std::size_t ctor{};
    std::size_t dtor{};
    std::size_t move{};
    std::size_t copy{};
};

struct tracked_component
{
    tracked_component() noexcept
    {
        ++operations.ctor;
    }

    tracked_component(const tracked_component& other) noexcept
        : value(other.value)
    {
        ++operations.copy;
    }

    tracked_component(tracked_component&& other) noexcept
        : value(std::exchange(other.value, 0))
    {
        ++operations.move;
    }

    ~tracked_component() noexcept
    {
        ++operations.dtor;
    }

    auto operator=(const tracked_component&) -> tracked_component& = delete;
    auto operator=(tracked_component&&) -> tracked_component& = delete;

    static auto reset_operations() -> void
    {
        operations = {};
    }

    static inline operation_counts operations;

    std::size_t value{};
};

struct fixture
{
    using component_t = tracked_component;

    static inline const component_meta _meta = make_component_meta<component_t>();

    fixture()
    {
        component_t::reset_operations();
    }

    auto check_operations(operation_counts expected) const -> void
    {
        CHECK_EQ(component_t::operations.ctor, expected.ctor);
        CHECK_EQ(component_t::operations.dtor, expected.dtor);
        CHECK_EQ(component_t::operations.move, expected.move);
        CHECK_EQ(component_t::operations.copy, expected.copy);
    }

    auto emplace_indexed(std::size_t size, table_column& target) -> void
    {
        const std::size_t initial_size = target.size();
        for (std::size_t i = 0; i < size; ++i)
        {
            target.emplace_back();
            target.at<component_t>(initial_size + i).value = i;
        }

        component_t::reset_operations();
    }

    auto emplace_indexed(std::size_t size) -> void
    {
        emplace_indexed(size, _column);
    }

    table_column _column{_meta};
};

TEST_CASE_FIXTURE(fixture, "table_column::ctor: is empty with correct meta")
{
    CHECK(_column.empty());
    CHECK_EQ(_column.size(), 0u);
    CHECK_EQ(&_column.meta(), &_meta);
}

TEST_CASE_FIXTURE(fixture, "table_column::ctor_move: transfers elements without constructing or destroying")
{
    const std::size_t size = GENERATE(0, 1, 2, 10);
    emplace_indexed(size);

    table_column moved(std::move(_column));

    CHECK_EQ(moved.size(), size);
    CHECK(_column.empty());
    check_operations({});

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK_EQ(moved.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: destroys existing elements then transfers source")
{
    constexpr std::size_t dest_size = 5;
    constexpr std::size_t src_size = 10;

    table_column source(_meta);
    emplace_indexed(dest_size);
    emplace_indexed(src_size, source);

    _column = std::move(source);

    CHECK_EQ(_column.size(), src_size);
    CHECK(source.empty());
    check_operations({.dtor = dest_size});

    for (std::size_t i = 0; i < src_size; ++i)
    {
        CHECK_EQ(_column.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: from empty source destroys existing elements")
{
    constexpr std::size_t size = 5;
    emplace_indexed(size);

    table_column empty_source(_meta);
    _column = std::move(empty_source);

    CHECK(_column.empty());
    check_operations({.dtor = size});
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: to empty dest transfers without destroying")
{
    constexpr std::size_t size = 5;

    table_column source(_meta);
    emplace_indexed(size, source);

    _column = std::move(source);

    CHECK_EQ(_column.size(), size);
    CHECK(source.empty());
    check_operations({});

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK_EQ(_column.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: self-assignment is a no-op")
{
    constexpr std::size_t size = 5;
    emplace_indexed(size);

    table_column* self = &_column;
    _column = std::move(*self);

    CHECK_EQ(_column.size(), size);
    check_operations({});

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK_EQ(_column.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::emplace_back: construct component")
{
    const std::size_t size = GENERATE(0, 1, 2, 5, 10);

    for (std::size_t i = 0; i < size; ++i)
    {
        _column.emplace_back();
    }

    CHECK_EQ(_column.size(), size);
    check_operations({.ctor = size});
}

TEST_CASE_FIXTURE(fixture, "table_column::splice_back: relocate component")
{
    constexpr std::size_t size = 10;

    table_column source(_meta);
    emplace_indexed(size);
    emplace_indexed(size, source);

    std::size_t index = GENERATE(0, 1, 2, 6, 8);

    CHECK_EQ(_column.splice_back(source, index), size);

    CHECK_EQ(_column.size(), size + 1);
    CHECK_EQ(_column.template at<component_t>(size).value, index);

    CHECK_EQ(source.size(), size - 1);
    CHECK_EQ(source.template at<component_t>(index).value, size - 1);

    check_operations({.dtor = 2, .move = 2});
}

TEST_CASE_FIXTURE(fixture, "table_column::splice_back: relocate last component")
{
    const std::size_t size = GENERATE(1, 2, 10);
    const std::size_t index = size - 1;

    table_column source(_meta);
    emplace_indexed(size);
    emplace_indexed(size, source);

    CHECK_EQ(_column.splice_back(source, index), size);

    CHECK_EQ(_column.size(), size + 1);
    CHECK_EQ(source.size(), size - 1);

    CHECK_EQ(_column.template at<component_t>(size).value, index);

    if constexpr (!std::is_trivially_destructible_v<component_t> && !std::is_trivially_move_constructible_v<component_t>)
    {
        check_operations({.dtor = 1, .move = 1});
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::swap_and_pop(non last): relocates last into index")
{
    constexpr std::size_t size = 10;
    emplace_indexed(size);

    const std::size_t index = GENERATE(0, 1, 2, 6, 8);

    _column.swap_and_pop(index);

    CHECK_EQ(_column.size(), size - 1);

    // check remaining values are intact
    for (std::size_t i = 0; i < _column.size(); ++i)
    {
        if (i == index)
        {
            CHECK_EQ(_column.template at<component_t>(i).value, size - 1);
        }
        else
        {
            CHECK_EQ(_column.template at<component_t>(i).value, i);
        }
    }

    check_operations({.dtor = 2, .move = 1});
}

TEST_CASE_FIXTURE(fixture, "table_column::swap_and_pop(last): destroys last only")
{
    const std::size_t size = GENERATE(1, 2, 10);
    const std::size_t index = size - 1;

    emplace_indexed(size);

    _column.swap_and_pop(index);

    CHECK_EQ(_column.size(), size - 1);

    // check remaining values are intact
    for (std::size_t i = 0; i < _column.size(); ++i)
    {
        CHECK_EQ(_column.template at<component_t>(i).value, i);
    }

    check_operations({.dtor = 1});
}

}} // namespace ant::detail
