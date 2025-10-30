#pragma once

#include <algorithm>
#include <bit>
#include <concepts>
#include <type_traits>
#include <vector>

#include <ant/core/allocator.hpp>

namespace ant::detail::dynamic_bitset { inline namespace v0 {

template<std::integral T, typename Allocator>
class basic_dynamic_bitset
{
public:
    using block_type = T;
    using allocator_type = rebind_allocator_t<block_type, Allocator>;

    constexpr explicit basic_dynamic_bitset(const allocator_type& allocator = {});
    constexpr explicit basic_dynamic_bitset(std::size_t bits_size, const allocator_type& allocator = {});

    constexpr basic_dynamic_bitset(const basic_dynamic_bitset&) = default;
    constexpr basic_dynamic_bitset(basic_dynamic_bitset&&) noexcept = default;

    constexpr basic_dynamic_bitset& operator=(const basic_dynamic_bitset&) = default;
    constexpr basic_dynamic_bitset& operator=(basic_dynamic_bitset&&) noexcept = default;

    constexpr auto size() const noexcept -> std::size_t;
    constexpr auto count() const noexcept -> std::size_t;

    constexpr auto none() const noexcept -> bool;
    constexpr auto all() const noexcept -> bool;

    constexpr auto test(std::size_t bit_index) const noexcept -> bool;
    constexpr auto set(std::size_t bit_index) noexcept -> void;
    constexpr auto unset(std::size_t bit_index) noexcept -> void;

    constexpr auto set_all() noexcept -> void;
    constexpr auto unset_all() noexcept -> void;

    constexpr auto set() noexcept -> void { set_all(); }
    constexpr auto reset() noexcept -> void { unset_all(); }

    constexpr auto resize(std::size_t bits_size) -> void;

    template<typename F>
    constexpr auto for_each_set(F&& func) const -> void;

    template<typename F>
    constexpr auto for_each_unset(F&& func) const -> void;

private:
    static constexpr std::size_t bits_per_block = sizeof(block_type) * 8;

    static constexpr auto compute_block_count(std::size_t bits_size) noexcept -> std::size_t;
    static constexpr auto compute_block_index(std::size_t bit_index) noexcept -> std::size_t;
    static constexpr auto compute_block_bit_index(std::size_t bit_index) noexcept -> std::size_t;

    template<typename F, bool IsSet>
    constexpr auto for_each_impl(F&& func) const -> void;

    // Iterate full blocks and the optional remainder block.
    // on_full:  callable with (Block&)
    // on_tail:  callable with (Block&, std::size_t rem_bits)
    // If a callable returns bool, returning false interrupts iteration.
    template<typename OnFull, typename OnTail>
    static constexpr auto for_each_blocks(auto&& self, OnFull&& on_full, OnTail&& on_tail) -> void;

    std::vector<block_type, allocator_type> _bits;
    std::size_t _bits_size{0};
};

template<std::integral T, typename Allocator>
constexpr basic_dynamic_bitset<T, Allocator>::basic_dynamic_bitset(const allocator_type& allocator)
    : _bits(0, block_type{0}, allocator)
    , _bits_size(0)
{
}

template<std::integral T, typename Allocator>
constexpr basic_dynamic_bitset<T, Allocator>::basic_dynamic_bitset(std::size_t bits_size, const allocator_type& allocator)
    : _bits(compute_block_count(bits_size), block_type{0}, allocator)
    , _bits_size(bits_size)
{
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::size() const noexcept -> std::size_t
{
    return _bits_size;
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::none() const noexcept -> bool
{
    bool ok = true;
    for_each_blocks(
        *this,
        [&](const block_type& block) {
            if (block != block_type{0})
            {
                ok = false;
                return false;
            }
            return true;
        },
        [&](const block_type& block, std::size_t rem_bits) {
            const block_type mask = (block_type{1} << rem_bits) - 1;
            if ((block & mask) != block_type{0})
            {
                ok = false;
            }
        });
    return ok;
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::all() const noexcept -> bool
{
    bool ok = true;
    for_each_blocks(
        *this,
        [&](const block_type& block) {
            if (block != ~block_type{0})
            {
                ok = false;
            }
            return ok;
        },
        [&](const block_type& block, std::size_t rem_bits) {
            const block_type mask = (block_type{1} << rem_bits) - 1;
            if ((block & mask) != mask)
            {
                ok = false;
            }
        });
    return ok;
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::count() const noexcept -> std::size_t
{
    std::size_t count = 0;
    for_each_blocks(
        *this,
        [&](const block_type& block) { count += std::popcount(block); },
        [&](const block_type& block, std::size_t rem_bits) {
            const block_type mask = (block_type{1} << rem_bits) - 1;
            count += std::popcount(block & mask);
        });
    return count;
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::test(std::size_t bit_index) const noexcept -> bool
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
constexpr auto basic_dynamic_bitset<T, Allocator>::set(std::size_t bit_index) noexcept -> void
{
    const auto block_index = compute_block_index(bit_index);
    const auto block_bit_index = compute_block_bit_index(bit_index);

    if (block_index >= _bits.size())
    {
        _bits.resize(block_index + 1, block_type{0});
    }

    _bits[block_index] |= (block_type{1} << block_bit_index);

    // Expand logical size to include this bit
    if (bit_index + 1 > _bits_size)
    {
        _bits_size = bit_index + 1;
    }
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::unset(std::size_t bit_index) noexcept -> void
{
    const auto block_index = compute_block_index(bit_index);
    const auto block_bit_index = compute_block_bit_index(bit_index);

    if (block_index < _bits.size())
    {
        _bits[block_index] &= ~(block_type{1} << block_bit_index);
    }
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::set_all() noexcept -> void
{
    if (_bits_size == 0)
    {
        return;
    }
    for_each_blocks(
        *this,
        [&](block_type& block) { block = ~block_type{0}; },
        [&](block_type& block, std::size_t rem_bits) {
            const block_type mask = (block_type{1} << rem_bits) - 1;
            block = mask;
        });
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::unset_all() noexcept -> void
{
    for (auto& block : _bits)
    {
        block = block_type{0};
    }
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::resize(std::size_t bits_size) -> void
{
    _bits.resize(compute_block_count(bits_size), block_type{0});
    _bits_size = bits_size;

    // Clear any unused high bits in the last block
    if (!_bits.empty())
    {
        const std::size_t rem_bits = _bits_size % bits_per_block;
        if (rem_bits != 0)
        {
            const block_type mask = (block_type{1} << rem_bits) - 1;
            _bits.back() &= mask;
        }
    }
}

template<std::integral T, typename Allocator>
template<typename F>
constexpr auto basic_dynamic_bitset<T, Allocator>::for_each_set(F&& func) const -> void
{
    return for_each_impl<F, true>(std::forward<F>(func));
}

template<std::integral T, typename Allocator>
template<typename F>
constexpr auto basic_dynamic_bitset<T, Allocator>::for_each_unset(F&& func) const -> void
{
    return for_each_impl<F, false>(std::forward<F>(func));
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::compute_block_count(std::size_t bits_size) noexcept -> std::size_t
{
    return (bits_size + bits_per_block - 1) / bits_per_block;
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::compute_block_index(std::size_t bit_index) noexcept -> std::size_t
{
    return bit_index / bits_per_block;
}

template<std::integral T, typename Allocator>
constexpr auto basic_dynamic_bitset<T, Allocator>::compute_block_bit_index(std::size_t bit_index) noexcept -> std::size_t
{
    return bit_index % bits_per_block;
}

template<std::integral T, typename Allocator>
template<typename F, bool IsSet>
constexpr auto basic_dynamic_bitset<T, Allocator>::for_each_impl(F&& func) const -> void
{
    // Support two callable forms:
    // - void(std::size_t idx)
    // - bool(std::size_t idx)  // returning false interrupts iteration
    constexpr bool is_interruptible = std::is_invocable_r_v<bool, F, std::size_t>;

    for (std::size_t block_idx = 0; block_idx < _bits.size(); ++block_idx)
    {
        const std::size_t block_start_bit = block_idx * bits_per_block;

        if (block_start_bit >= _bits_size)
        {
            break;
        }

        const auto& block = _bits[block_idx];
        std::size_t block_end_bit = std::min(block_start_bit + bits_per_block, _bits_size);

        for (std::size_t bit_idx = 0; block_start_bit + bit_idx < block_end_bit; ++bit_idx)
        {
            const bool bit_is_set = (block & (block_type{1} << bit_idx)) != 0;
            if (bit_is_set == IsSet)
            {
                const std::size_t global_bit_index = block_start_bit + bit_idx;
                if constexpr (is_interruptible)
                {
                    if (!func(global_bit_index))
                    {
                        return;
                    }
                }
                else
                {
                    func(global_bit_index);
                }
            }
        }
    }
}

template<std::integral T, typename Allocator>
template<typename OnFull, typename OnTail>
constexpr auto basic_dynamic_bitset<T, Allocator>::for_each_blocks(auto&& self, OnFull&& on_full, OnTail&& on_tail) -> void
{
    const std::size_t full_blocks = self._bits_size / bits_per_block;
    const std::size_t rem_bits = self._bits_size % bits_per_block;

    for (std::size_t i = 0; i < full_blocks; ++i)
    {
        if constexpr (std::is_invocable_r_v<bool, OnFull, decltype(self._bits[i])>)
        {
            if (!on_full(self._bits[i]))
            {
                return;
            }
        }
        else
        {
            on_full(self._bits[i]);
        }
    }

    if (rem_bits != 0)
    {
        const std::size_t idx = full_blocks;
        on_tail(self._bits[idx], rem_bits);
    }
}

}} // namespace ant::detail::dynamic_bitset::v0
