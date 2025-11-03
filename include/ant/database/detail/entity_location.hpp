#pragma once

#include <compare>
#include <cstddef>
#include <limits>

namespace ant::detail {

struct entity_location
{
    static consteval auto invalid() noexcept -> entity_location;

    constexpr auto operator==(const entity_location&) const noexcept -> bool = default;

    std::size_t table;
    std::size_t row;
};

consteval auto entity_location::invalid() noexcept -> entity_location
{
    return entity_location{
        .table = std::numeric_limits<std::size_t>::max(),
        .row = std::numeric_limits<std::size_t>::max(),
    };
}

} // namespace ant::detail
