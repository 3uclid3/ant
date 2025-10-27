#pragma once

#include <type_traits>

namespace ant::test {

struct empty
{
};

struct trivial
{
    int value{0};
};

struct non_trivial_copy
{
    constexpr non_trivial_copy() noexcept = default;
    constexpr non_trivial_copy(const non_trivial_copy& other) noexcept
        : value(other.value)
    {}

    int value{0};
};

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

struct with_throw_copy
{
    constexpr with_throw_copy() noexcept = default;
    constexpr with_throw_copy(with_throw_copy&& other) noexcept
        : value(other.value)
    {}
    constexpr with_throw_copy(const with_throw_copy& other) noexcept(false)
        : value(other.value)
    {}

    int value{0};
};

struct with_throw_move
{
    constexpr with_throw_move() noexcept = default;
    constexpr with_throw_move(with_throw_move&& other) noexcept(false)
        : value(other.value)
    {}
    constexpr with_throw_move(const with_throw_move& other) noexcept
        : value(other.value)
    {}

    int value{0};
};

struct with_throw_dtor
{
    constexpr with_throw_dtor() noexcept = default;
    constexpr with_throw_dtor(with_throw_dtor&&) noexcept = default;
    constexpr with_throw_dtor(const with_throw_dtor&) noexcept = default;
    constexpr ~with_throw_dtor() noexcept(false)
    {}

    int value{0};
};

// A tracked component used by tests to verify default construction, relocation and destruction paths
struct tracked
{
    static inline int ctor_count = 0;
    static inline int dtor_count = 0;
    static inline int move_count = 0;

    static constexpr auto reset() -> void
    {
        ctor_count = 0;
        dtor_count = 0;
        move_count = 0;
    }

    constexpr tracked() noexcept
        : value(7)
    {
        ++ctor_count;
    }
    constexpr tracked(tracked&& other) noexcept
        : value(other.value)
    {
        other.value = -1;
        ++move_count;
    }
    constexpr tracked(const tracked& other) noexcept
        : value(other.value)
    {}
    constexpr ~tracked() noexcept
    {
        ++dtor_count;
    }

    int value{0};
};

struct tracked_fixture
{
    tracked_fixture()
    {
        tracked::reset();
    }
};

// validate types

static_assert(std::is_empty_v<empty>);

static_assert(std::is_trivially_copyable_v<trivial>);
static_assert(std::is_trivially_destructible_v<trivial>);

static_assert(!std::is_trivially_copyable_v<non_trivial_copy>);
static_assert(std::is_trivially_destructible_v<non_trivial_copy>);

static_assert(!std::is_trivially_copyable_v<non_trivial>);
static_assert(!std::is_trivially_destructible_v<non_trivial>);

static_assert(!std::is_nothrow_copy_constructible_v<with_throw_copy>);

static_assert(!std::is_nothrow_move_constructible_v<with_throw_move>);

static_assert(!std::is_nothrow_destructible_v<with_throw_dtor>);

} // namespace ant::test
