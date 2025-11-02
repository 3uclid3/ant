#pragma once

#include <cstdint>

#include <ant/core/dynamic_bitset.hpp>
#include <ant/database/component_index.hpp>

namespace ant {

template<typename Allocator>
using component_bitset = basic_dynamic_bitset<Allocator>;

} // namespace ant
