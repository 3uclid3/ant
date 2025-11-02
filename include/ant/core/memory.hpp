#pragma once

#include <memory>

namespace ant {

template<typename Allocator>
using allocator_traits = std::allocator_traits<Allocator>;

template<typename T, typename Allocator>
using rebind_alloc_t = typename allocator_traits<Allocator>::template rebind_alloc<T>;

// Utility to convert an allocator to another allocator type via construction
template<typename Allocator>
class rebind_alloc
{
public:
    constexpr explicit rebind_alloc(const Allocator& allocator) noexcept(std::is_nothrow_copy_constructible_v<Allocator>);

    template<typename U>
    requires std::is_constructible_v<U, const Allocator&>
    constexpr operator U() const noexcept(std::is_nothrow_constructible_v<U, const Allocator&>);

private:
    Allocator _allocator;
};

template<typename Allocator>
constexpr rebind_alloc<Allocator>::rebind_alloc(const Allocator& allocator) noexcept(std::is_nothrow_copy_constructible_v<Allocator>)
    : _allocator(allocator)
{
}

template<typename Allocator>
template<typename U>
requires std::is_constructible_v<U, const Allocator&>
constexpr rebind_alloc<Allocator>::operator U() const noexcept(std::is_nothrow_constructible_v<U, const Allocator&>)
{
    return U(_allocator);
}

} // namespace ant
