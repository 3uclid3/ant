#pragma once

#include <cstdint>
#include <memory>

#include <ant/core/detail/dynamic_bitset.hpp>

namespace ant {

template<typename T, typename Allocator>
using basic_dynamic_bitset = detail::dynamic_bitset::basic_dynamic_bitset<T, Allocator>;

using dynamic_bitset = basic_dynamic_bitset<std::uint64_t, std::allocator<std::uint64_t>>;

} // namespace ant
;