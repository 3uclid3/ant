#pragma once

#include <memory>

namespace ant {

template<typename T>
using allocator_traits = std::allocator_traits<T>;

template<typename From, typename To>
using rebind_alloc_t = typename allocator_traits<From>::template rebind_alloc<To>;

} // namespace ant
