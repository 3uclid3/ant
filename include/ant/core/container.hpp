#pragma once

#include <unordered_map>
#include <vector>

#include <ant/core/memory.hpp>

namespace ant {

template<typename T, typename Allocator>
using vector = std::vector<T, rebind_alloc_t<T, Allocator>>;

template<typename Key, typename T, typename Allocator>
using unordered_map = std::unordered_map<Key, T, std::hash<Key>, std::equal_to<Key>, rebind_alloc_t<std::pair<const Key, T>, Allocator>>;

} // namespace ant
