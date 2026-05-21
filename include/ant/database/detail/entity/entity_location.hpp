#pragma once

#include <cstddef>
#include <limits>

namespace ant::detail {

struct entity_location
{
    static const entity_location invalid;

    constexpr auto operator==(const entity_location&) const noexcept -> bool = default;

    std::size_t table;
    std::size_t row;
};

constexpr inline entity_location entity_location::invalid{
    .table = std::numeric_limits<std::size_t>::max(),
    .row = std::numeric_limits<std::size_t>::max(),
};

} // namespace ant::detail
