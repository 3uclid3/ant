#pragma once

#include <bit>
#include <concepts>
#include <vector>

#include <ant/core/allocator.hpp>

namespace ant {

template<std::integral T, typename Allocator>
class basic_bitset
{
public:
    using block_type = T;
    using allocator_type = rebind_allocator_t<block_type, Allocator>;

    constexpr basic_bitset() = default;
    constexpr explicit basic_bitset(std::size_t bits_size, const allocator_type& allocator = {});

    constexpr basic_bitset(const basic_bitset&) = default;
    constexpr basic_bitset(basic_bitset&&) noexcept = default;

    constexpr basic_bitset& operator=(const basic_bitset&) = default;
    constexpr basic_bitset& operator=(basic_bitset&&) noexcept = default;

    constexpr auto size() const noexcept -> std::size_t;
    constexpr auto count() const noexcept -> std::size_t;

    constexpr auto none() const noexcept -> bool;
    constexpr auto all() const noexcept -> bool;

    constexpr auto test(std::size_t bit_index) const noexcept -> bool;
    constexpr auto set(std::size_t bit_index) noexcept -> void;
    constexpr auto unset(std::size_t bit_index) noexcept -> void;

    constexpr auto resize(std::size_t bits_size) -> void;

private:
    static constexpr std::size_t bits_per_block = sizeof(block_type) * 8;

    static constexpr auto compute_block_count(std::size_t bits_size) noexcept -> std::size_t;
    static constexpr auto compute_block_index(std::size_t bit_index) noexcept -> std::size_t;
    static constexpr auto compute_block_bit_index(std::size_t bit_index) noexcept -> std::size_t;

    std::vector<block_type, allocator_type> _bits;
};

template<std::integral T, typename Allocator>
constexpr basic_bitset<T, Allocator>::basic_bitset(std::size_t size, const allocator_type& allocator)
    : _bits(compute_block_count(size), block_type{0}, allocator)
{
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::size() const noexcept -> std::size_t
{
    return _bits.size() * bits_per_block;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::none() const noexcept -> bool
{
    for (const auto& block : _bits)
    {
        if (block != block_type{0})
        {
            return false;
        }
    }
    return true;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::all() const noexcept -> bool
{
    for (const auto& block : _bits)
    {
        if (block != ~block_type{0})
        {
            return false;
        }
    }
    return true;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::count() const noexcept -> std::size_t
{
    std::size_t count = 0;
    for (const auto& block : _bits)
    {
        count += std::popcount(block);
    }
    return count;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::test(std::size_t bit_index) const noexcept -> bool
{
    const auto block_index = compute_block_index(bit_index);
    const auto block_bit_index = compute_block_bit_index(bit_index);

    if (block_index >= _bits.size())
    {
        return false;
    }

    return (_bits[block_index] & (block_type{1} << block_bit_index)) != 0;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::set(std::size_t bit_index) noexcept -> void
{
    const auto block_index = compute_block_index(bit_index);
    const auto block_bit_index = compute_block_bit_index(bit_index);

    if (block_index >= _bits.size())
    {
        _bits.resize(block_index + 1, block_type{0});
    }

    _bits[block_index] |= (block_type{1} << block_bit_index);
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::unset(std::size_t bit_index) noexcept -> void
{
    const auto block_index = compute_block_index(bit_index);
    const auto block_bit_index = compute_block_bit_index(bit_index);

    if (block_index < _bits.size())
    {
        _bits[block_index] &= ~(block_type{1} << block_bit_index);
    }
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::resize(std::size_t bits_size) -> void
{
    _bits.resize(compute_block_count(bits_size), block_type{0});
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::compute_block_count(std::size_t bits_size) noexcept -> std::size_t
{
    return (bits_size + bits_per_block - 1) / bits_per_block;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::compute_block_index(std::size_t bit_index) noexcept -> std::size_t
{
    return bit_index / bits_per_block;
}

template<std::integral T, typename Allocator>
constexpr auto basic_bitset<T, Allocator>::compute_block_bit_index(std::size_t bit_index) noexcept -> std::size_t
{
    return bit_index % bits_per_block;
}

} // namespace ant
