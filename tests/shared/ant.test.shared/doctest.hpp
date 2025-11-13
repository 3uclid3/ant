#pragma once

#include <algorithm>
#include <ostream>
#include <vector>

#include <doctest/doctest.h>

#include <ant.test.shared/doctest/check.hpp>
#include <ant.test.shared/doctest/generator.hpp>

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
