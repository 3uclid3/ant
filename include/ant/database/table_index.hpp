#pragma once

#include <cstdint>

#include <ant/core/index.hpp>

namespace ant {

using table_index = basic_index<struct table_index_tag, std::uint32_t>;
using table_row_index = basic_index<struct table_row_index_tag, std::uint32_t>;

struct table_location
{
    table_index table{table_index::npos};
    table_row_index row{table_row_index::npos};
};

} // namespace ant
