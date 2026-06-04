#pragma once

#include <vector>
#include <string>
#include <sstream>

namespace ant {

// use for outputting comparison results of two vectors ignoring order
template<typename T, typename Allocator>
struct equivalent_result
{
    constexpr operator bool() const noexcept
    {
        return value;
    }

    const std::vector<T, Allocator>& lhs;
    const std::vector<T, Allocator>& rhs;
    bool value;
};

template<typename T, typename Allocator, typename BinaryPredicate>
auto equivalent(const std::vector<T, Allocator>& lhs, const std::vector<T, Allocator>& rhs, BinaryPredicate pred) -> equivalent_result<T, Allocator>
{
    if (lhs.size() != rhs.size())
    {
        return {lhs, rhs, false};
    }

    for (const auto& item : lhs)
    {
        if (std::ranges::find_if(rhs, [&item, pred](const auto& rhs_item) { return pred(item, rhs_item); }) == rhs.end())
        {
            return {lhs, rhs, false};
        }
    }
    return {lhs, rhs, true};
}

template<typename T, typename Allocator>
auto equivalent(const std::vector<T, Allocator>& lhs, const std::vector<T, Allocator>& rhs) -> equivalent_result<T, Allocator>
{
    return equivalent(lhs, rhs, std::equal_to<>{});
}

template<typename T, typename Allocator>
auto to_string(const std::vector<T, Allocator>& in, std::ostringstream& stream) -> void
{
    stream << "[";
    for (std::size_t i = 0; i < in.size(); ++i)
    {
        if (i != 0) { stream << ", "; }
        stream << in[i];
    }
    stream << "]";
}

template<typename T, typename Allocator>
auto to_string(const std::vector<T, Allocator>& in) -> std::string
{
    std::ostringstream stream;
    to_string(in, stream);
    return stream.str();
}

template<typename T, typename Allocator>
auto to_string(const equivalent_result<T, Allocator>& in) -> std::string
{
    std::ostringstream stream;

    stream << "lhs: ";
    to_string(in.lhs, stream);

    stream << ", rhs: ";
    to_string(in.rhs, stream);

    return stream.str();
}

} // namespace ant
