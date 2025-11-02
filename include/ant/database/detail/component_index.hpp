#pragma once

#include <cstdint>

#include <ant/core/index.hpp>

namespace ant::detail {

using component_index = basic_index<struct component_index_tag, std::uint16_t>;

} // namespace ant::detail
