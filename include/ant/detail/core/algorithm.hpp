#pragma once

#include <algorithm>

namespace ant::ranges {

template<typename Range, typename Predicate>
constexpr auto remove_one_if(Range& range, Predicate pred)
{
    if (auto it = std::ranges::find_if(range, pred); it != range.end())
    {
        if (it + 1 != range.end())
        {
            *it = std::move(range.back());
        }
        range.erase(std::prev(range.end()));
    }
}

} // namespace ant::ranges
