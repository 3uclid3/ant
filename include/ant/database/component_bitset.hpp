#pragma once

#include <cstdint>

#include <ant/core/bitset.hpp>
#include <ant/database/component_index.hpp>

namespace ant {

template<typename Allocator>
using component_bitset = basic_bitset<std::uint64_t, Allocator>;

} // namespace ant
