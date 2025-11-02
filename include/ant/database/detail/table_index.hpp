#pragma once

#include <cstdint>

#include <ant/core/index.hpp>

namespace ant::detail {

using table_index = basic_index<struct table_index_tag, std::uint32_t>;
using row_index = basic_index<struct _row_index_tag, std::uint32_t>;

struct table_location
{
    static constexpr auto npos() noexcept -> table_location;

    table_index table{table_index::npos()};
    row_index row{row_index::npos()};
};

constexpr auto table_location::npos() noexcept -> table_location
{
    return table_location{table_index::npos(), row_index::npos()};
}

} // namespace ant::detail
