#pragma once

#include <memory>

namespace ant {

template<typename T>
using allocator_traits = std::allocator_traits<T>;

template<typename To, typename Allocator>
using rebind_allocator_t = typename allocator_traits<Allocator>::template rebind_alloc<To>;

template<typename To, typename Allocator>
constexpr auto rebind_allocator(const Allocator& allocator) -> rebind_allocator_t<To, Allocator>
{
    return rebind_allocator_t<To, Allocator>{allocator};
}

} // namespace ant
