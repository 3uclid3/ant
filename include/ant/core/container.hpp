#pragma once

#include <memory>
#include <unordered_map>
#include <vector>

namespace ant {

template<typename T, typename Allocator>
using vector = std::vector<T, typename std::allocator_traits<Allocator>::template rebind_alloc<T>>;

template<typename Key, typename T, typename Allocator>
using unordered_map = std::unordered_map<Key, T, std::hash<Key>, std::equal_to<Key>, typename std::allocator_traits<Allocator>::template rebind_alloc<std::pair<const Key, T>>>;

template<typename Allocator>
class rebind_allocator
{
public:
    constexpr explicit rebind_allocator(const Allocator& allocator) noexcept;

    template<typename Other>
    requires std::is_constructible_v<Other, const Allocator&>
    constexpr operator Other() const noexcept(std::is_nothrow_constructible_v<Other, const Allocator&>);

private:
    Allocator _allocator;
};

template<typename Allocator>
constexpr rebind_allocator<Allocator>::rebind_allocator(const Allocator& allocator) noexcept
    : _allocator(allocator)
{
}

template<typename Allocator>
template<typename Other>
requires std::is_constructible_v<Other, const Allocator&>
constexpr rebind_allocator<Allocator>::operator Other() const noexcept(std::is_nothrow_constructible_v<Other, const Allocator&>)
{
    return Other(_allocator);
}

} // namespace ant
