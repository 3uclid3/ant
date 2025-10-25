#pragma once

#include <cstdint>
#include <limits>

namespace ant {

enum class component_index : std::uint32_t
{
    npos = std::numeric_limits<std::uint32_t>::max()
};

} // namespace ant
