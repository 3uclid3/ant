#pragma once

#include <ant/core/dynamic_bitset.hpp>

namespace ant {

using component_bitset = dynamic_bitset;

namespace pmr {
using component_bitset = pmr::dynamic_bitset;
} // namespace pmr

} // namespace ant