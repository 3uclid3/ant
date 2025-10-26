#pragma once

#include <cstdint>
#include <limits>

namespace ant {

enum class table_index : std::uint32_t
{
    npos = std::numeric_limits<std::uint32_t>::max()
};

enum class table_row_index : std::uint32_t
{
    npos = std::numeric_limits<std::uint32_t>::max()
};

struct table_location
{
    table_index table{table_index::npos};
    table_row_index row{table_row_index::npos};
};

} // namespace ant
