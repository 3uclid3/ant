#include <doctest/doctest.h>

#include <ant/database/detail/table_column.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail { namespace {

struct fixture : test::component_fixture
{
    using component = test::component<42>;

    static constexpr component_meta meta = make_meta<component>("component");

    auto track() const -> const test::component_track&
    {
        return test::component_tracker::track<component>();
    }

    auto emplace_indexed(std::size_t size, table_column& column) -> void
    {
        const std::size_t initial_size = column.size();
        for (std::size_t i = 0; i < size; ++i)
        {
            column.emplace_back();

            column.row_as<component>(initial_size + i).value = i;
        }

        // reset tracker after setup
        test::component_tracker::reset();
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

TEST_CASE_FIXTURE(fixture, "table_column::emplace_back: construct component")
{
    for (std::size_t i = 0; i < 10; ++i)
    {
        const auto index = column.emplace_back();

        CHECK_EQ(column.size(), i + 1);
        CHECK_EQ(index, i);
        CHECK_EQ(track(), test::component_track{.ctor = i + 1});
        CHECK_EQ(column.row_as<component>(index).value, 42u);
    }
}

TEST_CASE_FIXTURE(fixture, "table_column::splice_back: relocate component")
{
    constexpr std::size_t initial_size = 5;

    table_column source(meta);

    emplace_indexed(initial_size);
    emplace_indexed(initial_size, source);

    // we alway slice from index 0 so the first spliced is always value 0
    // and the remaining are swapped from the back
    // 2 move and dtor: one for splice, one for source swap last
    // 1 move and dtor for last splice where no swap occurs
    column.splice_back(source, 0);
    CHECK_EQ(column.size(), initial_size + 1);
    CHECK_EQ(source.size(), initial_size - 1);
    CHECK_EQ(track(), test::component_track{.dtor = 2, .move = 2});
    CHECK_EQ(column.row_as<component>(initial_size).value, 0);

    for (std::size_t i = 1; i < initial_size - 1; ++i)
    {
        column.splice_back(source, 0);
        CHECK_EQ(column.size(), initial_size + i + 1);
        CHECK_EQ(source.size(), initial_size - i - 1);
        CHECK_EQ(track(), test::component_track{.dtor = (i + 1) * 2, .move = (i + 1) * 2});
        CHECK_EQ(column.row_as<component>(initial_size + i).value, initial_size - i);
    }

    column.splice_back(source, 0);
    CHECK_EQ(column.size(), initial_size * 2);
    CHECK_EQ(source.size(), 0);
    CHECK_EQ(track(), test::component_track{.dtor = 9, .move = 9}); // last splice, no swap
    CHECK_EQ(column.row_as<component>(initial_size * 2 - 1).value, 1);
}

TEST_CASE_FIXTURE(fixture, "table_column::swap_and_pop: relocate and destroy component")
{
    constexpr std::size_t initial_size = 5;

    emplace_indexed(initial_size);

    // we always pop from index 0 so the last element does not swap
    // remove all except last
    for (std::size_t i = 0; i < initial_size - 1; ++i)
    {
        CAPTURE(i);

        column.swap_and_pop(0);

        CHECK_EQ(column.size(), initial_size - i - 1);
        CHECK_EQ(track(), test::component_track{.dtor = i + 1, .move = i + 1});

        // check relocated values
        // first is always the last one from previous state
        CHECK_EQ(column.row_as<component>(0).value, initial_size - i - 1);

        // remaining values are in order
        for (std::size_t j = 1; j < column.size(); ++j)
        {
            CAPTURE(j);
            CHECK_EQ(column.row_as<component>(j).value, j);
        }
    }

    // last one, no relocate
    column.swap_and_pop(0);
    CHECK_EQ(column.size(), 0u);
    CHECK_EQ(track(), test::component_track{.dtor = initial_size, .move = initial_size - 1});
}

}} // namespace ant::detail
