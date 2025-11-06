#include <doctest/doctest.h>

#include <ant/database/detail/table_column.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/doctest/generator.hpp>
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
    const std::size_t size = GENERATE(0, 1, 2, 5, 10);

    for (std::size_t i = 0; i < size; ++i)
    {
        column.emplace_back();
    }

    CHECK_EQ(column.size(), size);
    CHECK_EQ(track(), test::component_track{.ctor = size});
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
    CHECK_EQ(column.row_as<component>(size).value, index);

    CHECK_EQ(source.size(), size - 1);
    CHECK_EQ(source.row_as<component>(index).value, size - 1);

    CHECK_EQ(track(), test::component_track{.dtor = 2, .move = 2});
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

    CHECK_EQ(column.row_as<component>(size).value, index);

    CHECK_EQ(track(), test::component_track{.dtor = 1, .move = 1});
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
            CHECK_EQ(column.row_as<component>(i).value, size - 1);
        }
        else
        {
            CHECK_EQ(column.row_as<component>(i).value, i);
        }
    }

    CHECK_EQ(track(), test::component_track{.dtor = 1, .move = 1});
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
        CHECK_EQ(column.row_as<component>(i).value, i);
    }

    CHECK_EQ(track(), test::component_track{.dtor = 1});
}

}} // namespace ant::detail
