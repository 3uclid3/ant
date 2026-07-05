#pragma once

#include <cstddef>

#include <ant/detail/memory.hpp>
#include <ant/memory.hpp>

namespace ant::detail {

template<typename T>
class allocator
{
public:
    using value_type = T;

    constexpr allocator() noexcept = default;

    template<typename U>
    constexpr allocator(const allocator<U>&) noexcept;

    [[nodiscard]] auto allocate(std::size_t n) -> T*;
    auto deallocate(T* ptr, std::size_t n) noexcept -> void;
};

template<typename T, typename U>
[[nodiscard]] constexpr auto operator==(const allocator<T>&, const allocator<U>&) noexcept -> bool
{
    return true;
}

template<typename T>
template<typename U>
constexpr allocator<T>::allocator(const allocator<U>&) noexcept
{
}

template<typename T>
[[nodiscard]] auto allocator<T>::allocate(std::size_t n) -> T*
{
    return static_cast<T*>(ant::detail::allocate(n * sizeof(T), alignof(T)));
}

template<typename T>
auto allocator<T>::deallocate(T* ptr, std::size_t n) noexcept -> void
{
    ant::detail::deallocate(ptr, n * sizeof(T), alignof(T));
}

} // namespace ant::detail
