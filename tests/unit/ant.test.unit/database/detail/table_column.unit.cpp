#include <doctest/doctest.h>

#include <ant/database/detail/table_column.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/doctest/generator.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail { namespace {

template<typename Component>
struct fixture : test::component_fixture
{
    using component = Component;

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

TEST_CASE_TEMPLATE("table_column::ctor: is empty with correct meta", T, test::component<0>, test::trivial_component<1>)
{
    fixture<T> f;

    CHECK(f.column.empty());
    CHECK_EQ(f.column.size(), 0u);
    CHECK_EQ(&f.column.meta(), &f.meta);
}

TEST_CASE_TEMPLATE("table_column::emplace_back: construct component", T, test::component<0>, test::trivial_component<1>)
{
    fixture<T> f;

    const std::size_t size = GENERATE(0, 1, 2, 5, 10);

    for (std::size_t i = 0; i < size; ++i)
    {
        f.column.emplace_back();
    }

    CHECK_EQ(f.column.size(), size);

    if constexpr (!std::is_trivially_move_constructible_v<T>)
    {
        CHECK_EQ(f.track(), test::component_track{.ctor = size});
    }
}

TEST_CASE_TEMPLATE("table_column::splice_back: relocate component", T, test::component<0>, test::trivial_component<1>)
{
    fixture<T> f;

    constexpr std::size_t size = 10;

    table_column source(f.meta);
    f.emplace_indexed(size);
    f.emplace_indexed(size, source);

    std::size_t index = GENERATE(0, 1, 2, 6, 8);

    CHECK_EQ(f.column.splice_back(source, index), size);

    CHECK_EQ(f.column.size(), size + 1);
    CHECK_EQ(f.column.template row_as<T>(size).value, index);

    CHECK_EQ(source.size(), size - 1);
    CHECK_EQ(source.template row_as<T>(index).value, size - 1);

    if constexpr (!std::is_trivially_destructible_v<T> && !std::is_trivially_move_constructible_v<T>)
    {
        CHECK_EQ(f.track(), test::component_track{.dtor = 2, .move = 2});
    }
}

TEST_CASE_TEMPLATE("table_column::splice_back: relocate last component", T, test::component<0>, test::trivial_component<1>)
{
    fixture<T> f;

    const std::size_t size = GENERATE(1, 2, 10);
    const std::size_t index = size - 1;

    table_column source(f.meta);
    f.emplace_indexed(size);
    f.emplace_indexed(size, source);

    CHECK_EQ(f.column.splice_back(source, index), size);

    CHECK_EQ(f.column.size(), size + 1);
    CHECK_EQ(source.size(), size - 1);

    CHECK_EQ(f.column.template row_as<T>(size).value, index);

    if constexpr (!std::is_trivially_destructible_v<T> && !std::is_trivially_move_constructible_v<T>)
    {
        CHECK_EQ(f.track(), test::component_track{.dtor = 1, .move = 1});
    }
}

TEST_CASE_TEMPLATE("table_column::swap_and_pop(non last): relocates last into index", T, test::component<0>, test::trivial_component<1>)
{
    fixture<T> f;

    constexpr std::size_t size = 10;
    f.emplace_indexed(size);

    const std::size_t index = GENERATE(0, 1, 2, 6, 8);

    f.column.swap_and_pop(index);

    CHECK_EQ(f.column.size(), size - 1);

    // check remaining values are intact
    for (std::size_t i = 0; i < f.column.size(); ++i)
    {
        if (i == index)
        {
            CHECK_EQ(f.column.template row_as<T>(i).value, size - 1);
        }
        else
        {
            CHECK_EQ(f.column.template row_as<T>(i).value, i);
        }
    }

    if constexpr (!std::is_trivially_destructible_v<T> && !std::is_trivially_move_constructible_v<T>)
    {
        CHECK_EQ(f.track(), test::component_track{.dtor = 1, .move = 1});
    }
}

TEST_CASE_TEMPLATE("table_column::swap_and_pop(last): destroys last only", T, test::component<0>, test::trivial_component<1>)
{
    fixture<T> f;

    const std::size_t size = GENERATE(1, 2, 10);
    const std::size_t index = size - 1;

    f.emplace_indexed(size);

    f.column.swap_and_pop(index);

    CHECK_EQ(f.column.size(), size - 1);

    // check remaining values are intact
    for (std::size_t i = 0; i < f.column.size(); ++i)
    {
        CHECK_EQ(f.column.template row_as<T>(i).value, i);
    }

    if constexpr (!std::is_trivially_destructible_v<T>)
    {
        CHECK_EQ(f.track(), test::component_track{.dtor = 1});
    }
}

}} // namespace ant::detail
