#pragma once

#include <algorithm>
#include <ostream>
#include <vector>

#include <doctest/doctest.h>

#include <ant.unit/assert_error.hpp>
#include <ant.unit/generator.hpp>
#include <ant/core/assert.hpp>

#if ANT_ASSERT_ENABLED

#define WARN_ASSERTS(expr) WARN_THROWS_AS(expr, ant::test::assert_error)
#define CHECK_ASSERTS(expr) CHECK_THROWS_AS(expr, ant::test::assert_error)
#define REQUIRE_ASSERTS(expr) REQUIRE_THROWS_AS(expr, ant::test::assert_error)

#define WARN_NOASSERT(expr) WARN_NOTHROW(expr)
#define CHECK_NOASSERT(expr) CHECK_NOTHROW(expr)
#define REQUIRE_NOASSERT(expr) REQUIRE_NOTHROW(expr)

#else

#define WARN_ASSERTS(expr) (void)0
#define CHECK_ASSERTS(expr) (void)0
#define REQUIRE_ASSERTS(expr) (void)0

#define WARN_NOASSERT(expr) (void)0
#define CHECK_NOASSERT(expr) (void)0
#define REQUIRE_NOASSERT(expr) (void)0

#endif

namespace std {

// shhh don't tell anyone
template<typename T>
auto operator<<(ostream& stream, const vector<T>& in) -> ostream&
{
    stream << "[";
    for (size_t i = 0; i < in.size(); ++i)
    {
        if (i != 0) { stream << ", "; }
        stream << in[i];
    }
    stream << "]";
    return stream;
}

} // namespace std

namespace ant::test {

// use for outputting comparison results of two vectors ignoring order
template<typename T>
struct equivalent_result
{
    constexpr operator bool() const noexcept
    {
        return value;
    }

    const std::vector<T>& lhs;
    const std::vector<T>& rhs;
    bool value;
};

template<typename T>
auto operator<<(std::ostream& stream, const equivalent_result<T>& in) -> std::ostream&
{
    stream << "lhs: " << in.lhs << ", rhs: " << in.rhs;
    return stream;
}

template<typename T>
auto equivalent(const std::vector<T>& lhs, const std::vector<T>& rhs) -> equivalent_result<T>
{
    if (lhs.size() != rhs.size())
    {
        return {lhs, rhs, false};
    }

    for (const auto& item : lhs)
    {
        if (std::ranges::find(rhs, item) == rhs.end())
        {
            return {lhs, rhs, false};
        }
    }
    return {lhs, rhs, true};
}

} // namespace ant::test
