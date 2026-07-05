#pragma once

#include <deque>
#include <unordered_map>
#include <vector>

#include <ant/detail/allocator.hpp>

namespace ant::detail {

template<typename T>
using deque = std::deque<T, ant::detail::allocator<T>>;

template<typename T>
using vector = std::vector<T, ant::detail::allocator<T>>;

template<typename K, typename V, typename Hash = std::hash<K>, typename Pred = std::equal_to<K>>
using unordered_map = std::unordered_map<K, V, Hash, Pred, ant::detail::allocator<std::pair<const K, V>>>;

} // namespace ant::detail
