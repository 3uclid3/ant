#include <ant/database/detail/catalog/table_column.hpp>
#include <doctest/doctest.h>

#include <ant/database/schema.hpp>

#include "../../component.hpp"

namespace ant::detail { namespace {

struct fixture : component_fixture
{
    using component_t = component<0>;

    static inline const component_meta meta = component_meta_of<component_t>();

    auto track() const -> const component_track&
    {
        return component_tracker::track<component_t>();
    }

    auto emplace_indexed(std::size_t size, table_column& column) -> void
    {
        const std::size_t initial_size = column.size();
        for (std::size_t i = 0; i < size; ++i)
        {
            column.emplace_back();
            column.at<component_t>(initial_size + i).value = i;
        }

        // reset tracker after setup
        component_tracker::reset();
    }

    auto emplace_indexed(std::size_t size) -> void
    {
        emplace_indexed(size, column);
    }

    table_column column{meta};
};

TEST_CASE_FIXTURE(fixture, "table_column::ctor: is empty with correct meta")
{
    CHECK(column.empty());
    CHECK_EQ(column.size(), 0u);
    CHECK_EQ(&column.meta(), &meta);
}

TEST_CASE_FIXTURE(fixture, "table_column::ctor_move: transfers elements without constructing or destroying")
{
    const std::size_t size = GENERATE(0, 1, 2, 10);
    emplace_indexed(size);

    table_column moved(std::move(column));

    CHECK_EQ(moved.size(), size);
    CHECK(column.empty());
    CHECK_EQ(track(), component_track{});

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK_EQ(moved.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: destroys existing elements then transfers source")
{
    constexpr std::size_t dest_size = 5;
    constexpr std::size_t src_size = 10;

    table_column source(meta);
    emplace_indexed(dest_size);
    emplace_indexed(src_size, source);

    column = std::move(source);

    CHECK_EQ(column.size(), src_size);
    CHECK(source.empty());
    CHECK_EQ(track(), component_track{.dtor = dest_size});

    for (std::size_t i = 0; i < src_size; ++i)
    {
        CHECK_EQ(column.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: from empty source destroys existing elements")
{
    constexpr std::size_t size = 5;
    emplace_indexed(size);

    table_column empty_source(meta);
    column = std::move(empty_source);

    CHECK(column.empty());
    CHECK_EQ(track(), component_track{.dtor = size});
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: to empty dest transfers without destroying")
{
    constexpr std::size_t size = 5;

    table_column source(meta);
    emplace_indexed(size, source);

    column = std::move(source);

    CHECK_EQ(column.size(), size);
    CHECK(source.empty());
    CHECK_EQ(track(), component_track{});

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK_EQ(column.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::move_assign: self-assignment is a no-op")
{
    constexpr std::size_t size = 5;
    emplace_indexed(size);

    table_column* self = &column;
    column = std::move(*self);

    CHECK_EQ(column.size(), size);
    CHECK_EQ(track(), component_track{});

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK_EQ(column.template at<component_t>(i).value, i);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::emplace_back: construct component")
{
    const std::size_t size = GENERATE(0, 1, 2, 5, 10);

    for (std::size_t i = 0; i < size; ++i)
    {
        column.emplace_back();
    }

    CHECK_EQ(column.size(), size);
    CHECK_EQ(track(), component_track{.ctor = size});
}

TEST_CASE_FIXTURE(fixture, "table_column::splice_back: relocate component")
{
    constexpr std::size_t size = 10;

    table_column source(meta);
    emplace_indexed(size);
    emplace_indexed(size, source);

    std::size_t index = GENERATE(0, 1, 2, 6, 8);

    CHECK_EQ(column.splice_back(source, index), size);

    CHECK_EQ(column.size(), size + 1);
    CHECK_EQ(column.template at<component_t>(size).value, index);

    CHECK_EQ(source.size(), size - 1);
    CHECK_EQ(source.template at<component_t>(index).value, size - 1);

    CHECK_EQ(track(), component_track{.dtor = 2, .move = 2});
}

TEST_CASE_FIXTURE(fixture, "table_column::splice_back: relocate last component")
{
    const std::size_t size = GENERATE(1, 2, 10);
    const std::size_t index = size - 1;

    table_column source(meta);
    emplace_indexed(size);
    emplace_indexed(size, source);

    CHECK_EQ(column.splice_back(source, index), size);

    CHECK_EQ(column.size(), size + 1);
    CHECK_EQ(source.size(), size - 1);

    CHECK_EQ(column.template at<component_t>(size).value, index);

    if constexpr (!std::is_trivially_destructible_v<component_t> && !std::is_trivially_move_constructible_v<component_t>)
    {
        CHECK_EQ(track(), component_track{.dtor = 1, .move = 1});
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::swap_and_pop(non last): relocates last into index")
{
    constexpr std::size_t size = 10;
    emplace_indexed(size);

    const std::size_t index = GENERATE(0, 1, 2, 6, 8);

    column.swap_and_pop(index);

    CHECK_EQ(column.size(), size - 1);

    // check remaining values are intact
    for (std::size_t i = 0; i < column.size(); ++i)
    {
        if (i == index)
        {
            CHECK_EQ(column.template at<component_t>(i).value, size - 1);
        }
        else
        {
            CHECK_EQ(column.template at<component_t>(i).value, i);
        }
    }

    CHECK_EQ(track(), component_track{.dtor = 2, .move = 1});
}

TEST_CASE_FIXTURE(fixture, "table_column::swap_and_pop(last): destroys last only")
{
    const std::size_t size = GENERATE(1, 2, 10);
    const std::size_t index = size - 1;

    emplace_indexed(size);

    column.swap_and_pop(index);

    CHECK_EQ(column.size(), size - 1);

    // check remaining values are intact
    for (std::size_t i = 0; i < column.size(); ++i)
    {
        CHECK_EQ(column.template at<component_t>(i).value, i);
    }

    CHECK_EQ(track(), component_track{.dtor = 1});
}

}} // namespace ant::detail
