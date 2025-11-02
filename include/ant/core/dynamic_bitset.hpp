#pragma once

#include <algorithm>
#include <bit>
#include <cstdint>
#include <cstring>
#include <iterator>
#include <memory>
#include <numeric>
#include <span>
#include <type_traits>
#include <utility>

#include <ant/config.hpp>
#include <ant/core/assert.hpp>

namespace ant {

template<typename Allocator>
class basic_dynamic_bitset;

using dynamic_bitset = basic_dynamic_bitset<std::allocator<std::uint64_t>>;

// A dynamic bitset with small-size optimization for up to 256 bits (32 bytes).
// Sizes and Capacities are in bits.
// Unused bits in the last block are always zeroed out.
template<typename Allocator>
class basic_dynamic_bitset
{
public:
    using allocator_type = Allocator;
    using alloc_traits = std::allocator_traits<allocator_type>;

    using block_type = std::uint64_t;
    using size_type = block_type;

    static constexpr size_type bits_per_block{sizeof(block_type) * 8};

    static constexpr size_type inplace_capacity{256};
    static constexpr size_type inplace_blocks_size{(inplace_capacity + bits_per_block - 1) / bits_per_block};

    constexpr basic_dynamic_bitset() noexcept(std::is_nothrow_default_constructible_v<allocator_type>) = default;

    constexpr explicit basic_dynamic_bitset(size_type size_bits);
    constexpr explicit basic_dynamic_bitset(const allocator_type& alloc) noexcept(std::is_nothrow_copy_constructible_v<allocator_type>);

    constexpr basic_dynamic_bitset(size_type size_bits, const allocator_type& alloc);

    constexpr basic_dynamic_bitset(const basic_dynamic_bitset& other);
    constexpr basic_dynamic_bitset(basic_dynamic_bitset&& other) noexcept(alloc_traits::is_always_equal::value || std::is_nothrow_move_constructible_v<allocator_type>);

    constexpr auto operator=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&;
    constexpr auto operator=(basic_dynamic_bitset&& other) noexcept(alloc_traits::propagate_on_container_move_assignment::value || alloc_traits::is_always_equal::value) -> basic_dynamic_bitset&;

    constexpr ~basic_dynamic_bitset() noexcept;

    constexpr auto operator&=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&;
    constexpr auto operator|=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&;
    constexpr auto operator^=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&;

    [[nodiscard]] constexpr auto test(size_type bit_idx) const noexcept -> bool;
    [[nodiscard]] constexpr auto all() const noexcept -> bool;
    [[nodiscard]] constexpr auto any() const noexcept -> bool;
    [[nodiscard]] constexpr auto none() const noexcept -> bool;
    [[nodiscard]] constexpr auto count() const noexcept -> size_type;

    constexpr auto set() -> basic_dynamic_bitset&;
    constexpr auto set(size_type bit_idx) -> basic_dynamic_bitset&;
    constexpr auto set(size_type bit_idx, size_type size) -> basic_dynamic_bitset&;

    constexpr auto reset() -> basic_dynamic_bitset&;
    constexpr auto reset(size_type bit_idx) -> basic_dynamic_bitset&;
    constexpr auto reset(size_type bit_idx, size_type size) -> basic_dynamic_bitset&;

    constexpr auto flip() -> basic_dynamic_bitset&;
    constexpr auto flip(size_type bit_idx) -> basic_dynamic_bitset&;
    constexpr auto flip(size_type bit_idx, size_type size) -> basic_dynamic_bitset&;

    template<typename F>
    requires std::is_invocable_v<F, size_type>
    constexpr auto for_each_set(F&& func) const -> void;

    template<typename F>
    requires std::is_invocable_v<F, size_type>
    constexpr auto for_each_unset(F&& func) const -> void;

    [[nodiscard]] constexpr auto empty() const noexcept -> bool;
    [[nodiscard]] constexpr auto size() const noexcept -> size_type;
    [[nodiscard]] constexpr auto capacity() const noexcept -> size_type;

    constexpr auto swap(basic_dynamic_bitset& other) noexcept(alloc_traits::propagate_on_container_swap::value || alloc_traits::is_always_equal::value) -> void;

    constexpr auto reserve(size_type size_bits) -> void;
    constexpr auto resize(size_type size_bits, bool value = false) -> void;
    constexpr auto clear() noexcept -> void;

    [[nodiscard]] constexpr auto blocks_size() const noexcept -> size_type;
    [[nodiscard]] constexpr auto full_blocks_size() const noexcept -> size_type;

    [[nodiscard]] constexpr auto blocks_view() const noexcept -> std::span<const block_type>;
    [[nodiscard]] constexpr auto full_blocks_view() const noexcept -> std::span<const block_type>;

    [[nodiscard]] constexpr auto hash() const noexcept -> std::uint64_t;

    [[nodiscard]] constexpr auto data() noexcept -> block_type*;
    [[nodiscard]] constexpr auto data() const noexcept -> const block_type*;

    [[nodiscard]] constexpr auto is_heap() const noexcept -> bool;
    [[nodiscard]] constexpr auto get_allocator() const noexcept -> const allocator_type&;

private:
    using inplace_storage = block_type[inplace_blocks_size];
    using heap_storage = block_type*;

    template<typename F>
    constexpr auto for_each_other_blocks(const basic_dynamic_bitset& other, F&& func) -> basic_dynamic_bitset&;

    template<typename F>
    constexpr auto for_each_blocks(F&& func) -> basic_dynamic_bitset&;

    template<typename F, typename Tail>
    constexpr auto for_each_blocks(F&& func, Tail&& tail_func) -> basic_dynamic_bitset&;

    template<typename F, typename P>
    constexpr auto for_each_blocks_in_range(size_type bit_idx, size_type size, F&& func, P&& partial_func) -> basic_dynamic_bitset&;

    [[nodiscard]] static constexpr auto compute_blocks_size(size_type size) noexcept -> size_type;
    [[nodiscard]] static constexpr auto compute_full_blocks_size(size_type size) noexcept -> size_type;

    [[nodiscard]] static constexpr auto mask_for(size_type idx) noexcept -> block_type;
    [[nodiscard]] static constexpr auto mask_for_block(size_type idx) noexcept -> block_type;

    [[nodiscard]] constexpr auto block_for(size_type idx) const noexcept -> const block_type&;
    [[nodiscard]] constexpr auto block_for(size_type idx) noexcept -> block_type&;

    constexpr auto move_blocks_from(basic_dynamic_bitset&& other) -> void;

    union
    {
        inplace_storage _inplace{};
        heap_storage _heap;
    };

    ANT_NO_UNIQUE_ADDRESS allocator_type _allocator{};

    size_type _size{0};                    // in bits
    size_type _capacity{inplace_capacity}; // in bits (heap capacity is always multiple of block size)
    bool _is_heap{false};

    static_assert(std::is_same_v<typename alloc_traits::value_type, block_type>, "Allocator::value_type must be Block");
};

template<typename Allocator>
[[nodiscard]] constexpr auto operator==(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool;

template<typename Allocator>
[[nodiscard]] constexpr auto operator!=(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool;

template<typename Allocator>
[[nodiscard]] constexpr auto operator<(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool;

template<typename Allocator>
[[nodiscard]] constexpr auto operator<=(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool;

template<typename Allocator>
[[nodiscard]] constexpr auto operator>(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool;

template<typename Allocator>
[[nodiscard]] constexpr auto operator>=(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool;

template<typename Allocator>
[[nodiscard]] constexpr auto operator&(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>;

template<typename Allocator>
[[nodiscard]] constexpr auto operator|(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>;

template<typename Allocator>
[[nodiscard]] constexpr auto operator^(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>;

template<typename Allocator>
[[nodiscard]] constexpr auto operator~(const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>;

template<typename Allocator>
constexpr basic_dynamic_bitset<Allocator>::basic_dynamic_bitset(size_type size_bits)
{
    resize(size_bits);
}

template<typename Allocator>
constexpr basic_dynamic_bitset<Allocator>::basic_dynamic_bitset(const allocator_type& alloc) noexcept(std::is_nothrow_copy_constructible_v<allocator_type>)
    : _allocator(alloc)
{
}

template<typename Allocator>
constexpr basic_dynamic_bitset<Allocator>::basic_dynamic_bitset(size_type size_bits, const allocator_type& alloc)
    : _allocator(alloc)
{
    resize(size_bits);
}

template<typename Allocator>
constexpr basic_dynamic_bitset<Allocator>::basic_dynamic_bitset(const basic_dynamic_bitset& other)
    : _allocator(other._allocator)
    , _size(other._size)
    , _capacity(other._capacity)
    , _is_heap(other._is_heap)
{
    if (other._is_heap)
    {
        const size_type blocks = compute_blocks_size(_size);
        _heap = _allocator.allocate(blocks);
        std::memcpy(_heap, other._heap, blocks * sizeof(block_type));
    }
    else
    {
        std::memcpy(_inplace, other._inplace, sizeof(_inplace));
    }
}

template<typename Allocator>
constexpr basic_dynamic_bitset<Allocator>::basic_dynamic_bitset(basic_dynamic_bitset&& other) noexcept(alloc_traits::is_always_equal::value || std::is_nothrow_move_constructible_v<allocator_type>)
    : _allocator(std::move(other._allocator))
    , _size(std::exchange(other._size, 0))
    , _capacity(std::exchange(other._capacity, inplace_capacity))
    , _is_heap(std::exchange(other._is_heap, false))
{
    move_blocks_from(std::move(other));
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::operator=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    if (this != &other)
    {
        if (other._size > _capacity)
        {
            if (_is_heap)
            {
                _allocator.deallocate(_heap, compute_blocks_size(_capacity));
            }

            _heap = _allocator.allocate(compute_blocks_size(other._size));
            _is_heap = true;
            _capacity = other._size;
        }

        std::memcpy(data(), other.data(), compute_blocks_size(other._size) * sizeof(block_type));
        _size = other._size;
    }

    return *this;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::operator=(basic_dynamic_bitset&& other) noexcept(alloc_traits::propagate_on_container_move_assignment::value || alloc_traits::is_always_equal::value) -> basic_dynamic_bitset&
{
    if (this != &other)
    {
        if (_is_heap)
        {
            _allocator.deallocate(_heap, compute_blocks_size(_capacity));
        }

        _allocator = std::move(other._allocator);
        _size = std::exchange(other._size, 0);
        _capacity = std::exchange(other._capacity, inplace_capacity);
        _is_heap = std::exchange(other._is_heap, false);

        move_blocks_from(std::move(other));
    }
    return *this;
}

template<typename Allocator>
constexpr basic_dynamic_bitset<Allocator>::~basic_dynamic_bitset() noexcept
{
    if (_is_heap)
    {
        _allocator.deallocate(_heap, compute_blocks_size(_capacity));
    }
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::operator&=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    return for_each_other_blocks(other, [](block_type& self, block_type other) { self &= other; });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::operator|=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    return for_each_other_blocks(other, [](block_type& self, block_type other) { self |= other; });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::operator^=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    return for_each_other_blocks(other, [](block_type& self, block_type other) { self ^= other; });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::test(size_type bit_idx) const noexcept -> bool
{
    return (block_for(bit_idx) & mask_for(bit_idx)) != 0;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::all() const noexcept -> bool
{
    const block_type* ptr = data();
    const size_type full_blocks_size = compute_full_blocks_size(_size);

    if (!std::all_of(ptr, std::next(ptr, full_blocks_size), [](block_type block) { return block == ~block_type{0}; }))
    {
        return false;
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits == 0)
    {
        return true;
    }

    const block_type mask = (1ULL << rem_bits) - 1ULL;
    const block_type tail = ptr[full_blocks_size];
    return (tail & mask) == mask;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::any() const noexcept -> bool
{
    const block_type* ptr = data();
    return std::any_of(ptr, std::next(ptr, compute_blocks_size(_size)), [](block_type block) { return block != block_type{0}; });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::none() const noexcept -> bool
{
    return !any();
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::count() const noexcept -> size_type
{
    const block_type* ptr = data();
    return std::accumulate(ptr, std::next(ptr, compute_blocks_size(_size)), 0ULL, [](size_type total, block_type block) { return total + static_cast<size_type>(std::popcount(block)); });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::set() -> basic_dynamic_bitset&
{
    return for_each_blocks(
        [](block_type& block) {
            block = ~block_type{0};
        },
        [](block_type& block, block_type mask) {
            block = mask;
        });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::set(size_type bit_idx) -> basic_dynamic_bitset&
{
    block_for(bit_idx) |= mask_for(bit_idx);

    return *this;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::set(size_type bit_idx, size_type size) -> basic_dynamic_bitset&
{
    return for_each_blocks_in_range(
        bit_idx,
        size,
        [](block_type& block) {
            block = ~block_type{0};
        },
        [](block_type& block, block_type mask) {
            block |= mask;
        });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::reset() -> basic_dynamic_bitset&
{
    if (_size > 0)
    {
        std::memset(data(), 0, compute_blocks_size(_size) * sizeof(block_type));
    }

    return *this;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::reset(size_type bit_idx) -> basic_dynamic_bitset&
{
    block_for(bit_idx) &= ~mask_for(bit_idx);

    return *this;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::reset(size_type bit_idx, size_type size) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_idx + size <= _size);

    return for_each_blocks_in_range(
        bit_idx,
        size,
        [](block_type& block) {
            block = 0ULL;
        },
        [](block_type& block, block_type mask) {
            block &= ~mask;
        });
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::flip() -> basic_dynamic_bitset&
{
    return flip(0ULL, _size);
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::flip(size_type bit_idx) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_idx < _size);

    block_for(bit_idx) ^= mask_for(bit_idx);

    return *this;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::flip(size_type bit_idx, size_type size) -> basic_dynamic_bitset&
{
    return for_each_blocks_in_range(
        bit_idx,
        size,
        [](block_type& block) {
            block = ~block;
        },
        [](block_type& block, block_type mask) {
            block ^= mask;
        });
}

template<typename Allocator>
template<typename F>
requires std::is_invocable_v<F, typename basic_dynamic_bitset<Allocator>::size_type>
constexpr auto basic_dynamic_bitset<Allocator>::for_each_set(F&& func) const -> void
{
    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<std::invoke_result_t<F, size_type>>, bool>;

    const block_type* ptr = data();
    const size_type size = blocks_size();

    for (size_type block_idx = 0; block_idx < size; ++block_idx)
    {
        block_type block = ptr[block_idx];

        while (block != 0)
        {
            const size_type offset = std::countr_zero(block);
            const size_type idx = block_idx * bits_per_block + offset;

            if constexpr (is_interruptible)
            {
                if (!func(idx))
                {
                    return;
                }
            }
            else
            {
                func(idx);
            }

            block &= ~(1ULL << offset);
        }
    }
}

template<typename Allocator>
template<typename F>
requires std::is_invocable_v<F, typename basic_dynamic_bitset<Allocator>::size_type>
constexpr auto basic_dynamic_bitset<Allocator>::for_each_unset(F&& func) const -> void
{
    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<std::invoke_result_t<F, size_type>>, bool>;

    const block_type* ptr = data();
    const size_type size = full_blocks_size();

    for (size_type block_idx = 0; block_idx < size; ++block_idx)
    {
        block_type block = ~ptr[block_idx];

        while (block != 0)
        {
            const size_type offset = std::countr_zero(block);
            const size_type idx = block_idx * bits_per_block + offset;

            if constexpr (is_interruptible)
            {
                if (!func(idx))
                {
                    return;
                }
            }
            else
            {
                func(idx);
            }

            block &= ~mask_for(idx);
        }
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        block_type tail = ~ptr[size];

        const block_type mask = (1ULL << rem_bits) - 1ULL;
        tail &= mask;

        while (tail != 0)
        {
            const size_type offset = std::countr_zero(tail);
            const size_type idx = size * bits_per_block + offset;

            if constexpr (is_interruptible)
            {
                if (!func(idx))
                {
                    return;
                }
            }
            else
            {
                func(idx);
            }

            tail &= ~(1ULL << offset);
        }
    }
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::empty() const noexcept -> bool
{
    return _size == 0;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::size() const noexcept -> size_type
{
    return _size;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::capacity() const noexcept -> size_type
{
    return _capacity;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::swap(basic_dynamic_bitset& other) noexcept(alloc_traits::propagate_on_container_swap::value || alloc_traits::is_always_equal::value) -> void
{
    if (this == &other)
    {
        return;
    }

    if constexpr (alloc_traits::propagate_on_container_swap::value)
    {
        using std::swap;
        swap(_allocator, other._allocator);
    }
    else if constexpr (!alloc_traits::is_always_equal::value)
    {
        ANT_ASSERT(_allocator == other._allocator);
    }

    const bool lhs_heap = _is_heap;
    const bool rhs_heap = other._is_heap;

    using std::swap;
    swap(_size, other._size);
    swap(_capacity, other._capacity);

    if (lhs_heap && rhs_heap)
    {
        swap(_heap, other._heap);
    }
    else if (!lhs_heap && !rhs_heap)
    {
        for (size_type i = 0; i < inplace_blocks_size; ++i)
        {
            swap(_inplace[i], other._inplace[i]);
        }
    }
    else if (lhs_heap && !rhs_heap)
    {
        block_type temp[inplace_blocks_size];
        std::memcpy(temp, other._inplace, sizeof(_inplace));
        block_type* heap_ptr = _heap;

        std::memcpy(_inplace, temp, sizeof(_inplace));
        other._heap = heap_ptr;
    }
    else // !lhs_heap && rhs_heap
    {
        block_type temp[inplace_blocks_size];
        std::memcpy(temp, _inplace, sizeof(_inplace));
        block_type* heap_ptr = other._heap;

        std::memcpy(other._inplace, temp, sizeof(_inplace));
        _heap = heap_ptr;
    }

    swap(_is_heap, other._is_heap);
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::reserve(size_type size_bits) -> void
{
    if (size_bits <= _capacity)
    {
        return;
    }

    const size_type new_capacity = compute_blocks_size(size_bits);
    const size_type capacity = compute_blocks_size(_capacity);
    ANT_ASSERT(capacity != 0);

    block_type* new_heap = _allocator.allocate(new_capacity);
    std::memcpy(new_heap, data(), capacity * sizeof(block_type));

    const auto remaining_blocks = new_capacity - capacity;
    std::memset(new_heap + capacity, 0, remaining_blocks * sizeof(block_type));

    if (_is_heap)
    {
        _allocator.deallocate(_heap, capacity);
    }

    _is_heap = true;
    _heap = new_heap;
    _capacity = new_capacity * bits_per_block;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::resize(size_type size_bits, bool value) -> void
{
    // if we shrink, we need to clear the unused bits
    // if we grow and value is true, we need to set the new bits

    if (size_bits < _size)
    {
        reset(size_bits, _size - size_bits);

        _size = size_bits;
    }
    else if (size_bits > _size)
    {
        reserve(size_bits);

        const auto old_size = _size;
        _size = size_bits;

        if (value)
        {
            set(old_size, _size - old_size);
        }
    }
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::clear() noexcept -> void
{
    if (_size > 0)
    {
        block_type* ptr = data();
        std::memset(ptr, 0, compute_blocks_size(_size) * sizeof(block_type));

        _size = 0;
    }
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::blocks_size() const noexcept -> size_type
{
    return compute_blocks_size(_size);
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::full_blocks_size() const noexcept -> size_type
{
    return compute_full_blocks_size(_size);
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::blocks_view() const noexcept -> std::span<const block_type>
{
    return std::span<const block_type>(data(), compute_blocks_size(_size));
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::full_blocks_view() const noexcept -> std::span<const block_type>
{
    return std::span<const block_type>(data(), compute_full_blocks_size(_size));
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::hash() const noexcept -> std::uint64_t
{
    constexpr std::uint64_t seed = 0x1DB54A32D192ED03ULL;

    const auto mix64_splitmix = [](std::uint64_t x) noexcept -> std::uint64_t {
        x += 0x9E3779B97F4A7C15ULL;
        x = (x ^ (x >> 30)) * 0xBF58476D1CE4E5B9ULL;
        x = (x ^ (x >> 27)) * 0x94D049BB133111EBULL;
        x ^= (x >> 31);
        return x;
    };

    const auto blocks = blocks_view();

    std::uint64_t s = seed ^ (static_cast<std::uint64_t>(blocks.size()) * 0x9E3779B185EBCA87ULL);
    for (std::uint64_t w : blocks)
    {
        const std::uint64_t m = mix64_splitmix(w); // decorrelate block patterns
        s ^= m;
        s = std::rotl(s, 27); // order-sensitive fold
        s = s * 0x9E3779B185EBCA87ULL + 0xC2B2AE3D27D4EB4FULL;
    }
    return mix64_splitmix(s);
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::data() noexcept -> block_type*
{
    return _is_heap ? _heap : _inplace;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::data() const noexcept -> const block_type*
{
    return _is_heap ? _heap : _inplace;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::is_heap() const noexcept -> bool
{
    return _is_heap;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::get_allocator() const noexcept -> const allocator_type&
{
    return _allocator;
}

template<typename Allocator>
template<typename F>
constexpr auto basic_dynamic_bitset<Allocator>::for_each_other_blocks(const basic_dynamic_bitset& other, F&& func) -> basic_dynamic_bitset&
{
    ANT_ASSERT(_size == other._size);

    using callback_result = std::invoke_result_t<F, block_type&, block_type>;
    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<callback_result>, bool>;

    const block_type* other_ptr = other.data();
    block_type* ptr = data();

    for (size_type i = 0, size = compute_blocks_size(_size); i < size; ++i)
    {
        if constexpr (is_interruptible)
        {
            if (!func(ptr[i], other_ptr[i]))
            {
                return *this;
            }
        }
        else
        {
            func(ptr[i], other_ptr[i]);
        }
    }

    return *this;
}

template<typename Allocator>
template<typename F>
constexpr auto basic_dynamic_bitset<Allocator>::for_each_blocks(F&& func) -> basic_dynamic_bitset&
{
    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<std::invoke_result_t<F, block_type&>>, bool>;

    block_type* ptr = data();
    for (size_type i = 0, size = compute_blocks_size(_size); i < size; ++i)
    {
        if constexpr (is_interruptible)
        {
            if (!func(ptr[i]))
            {
                return *this;
            }
        }
        else
        {
            func(ptr[i]);
        }
    }

    return *this;
}

template<typename Allocator>
template<typename F, typename Tail>
constexpr auto basic_dynamic_bitset<Allocator>::for_each_blocks(F&& func, Tail&& tail_func) -> basic_dynamic_bitset&
{
    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<std::invoke_result_t<F, block_type&>>, bool>;

    block_type* ptr = data();

    const size_type full_blocks = compute_full_blocks_size(_size);
    for (size_type i = 0; i < full_blocks; ++i)
    {
        if constexpr (is_interruptible)
        {
            if (!func(ptr[i]))
            {
                return *this;
            }
        }
        else
        {
            func(ptr[i]);
        }
    }

    if (size_type bits = _size % bits_per_block; bits != 0)
    {
        tail_func(ptr[full_blocks], static_cast<block_type>((1ULL << bits) - 1ULL));
    }

    return *this;
}

template<typename Allocator>
template<typename F, typename P>
constexpr auto basic_dynamic_bitset<Allocator>::for_each_blocks_in_range(size_type bit_idx, size_type size, F&& func, P&& partial_func) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_idx + size <= _size);

    if (_size == 0 || size == 0)
    {
        return *this;
    }

    block_type* ptr = data();

    const size_type start_block = bit_idx / bits_per_block;
    const size_type start_offset = bit_idx % bits_per_block;

    const size_type end_bit = bit_idx + size;
    const size_type end_block = (end_bit - 1) / bits_per_block;
    const size_type end_offset = (end_bit - 1) % bits_per_block;

    size_type cur_block = start_block;

    if (start_block == end_block)
    {
        // Range contained within a single block
        const size_type bits = end_offset - start_offset + 1; // [1, bits_per_block]

        // If the range covers the entire block, treat it as a full block
        if (start_offset == 0 && bits == bits_per_block)
        {
            func(ptr[start_block]);
        }
        else
        {
            // Safe: bits in [1, bits_per_block-1] here, so no UB shift
            const block_type mask = static_cast<block_type>(((1ULL << bits) - 1ULL) << start_offset);
            partial_func(ptr[start_block], mask);
        }
        return *this;
    }

    if (start_offset != 0)
    {
        // Apply partial mask to the starting block: bits [start_offset, 63]
        partial_func(ptr[start_block], static_cast<block_type>(~((1ULL << start_offset) - 1ULL)));

        ++cur_block;
    }

    for (; cur_block < end_block; ++cur_block)
    {
        func(ptr[cur_block]);
    }

    // Handle the ending block
    if (end_offset == bits_per_block - 1)
    {
        // Full ending block
        func(ptr[end_block]);
    }
    else
    {
        // Partial ending block: bits [0, end_offset]
        const block_type mask = static_cast<block_type>((1ULL << (end_offset + 1)) - 1ULL);
        partial_func(ptr[end_block], mask);
    }

    return *this;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::compute_blocks_size(size_type bits) noexcept -> size_type
{
    return (bits + bits_per_block - 1) / bits_per_block;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::compute_full_blocks_size(size_type bits) noexcept -> size_type
{
    return bits / bits_per_block;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::block_for(size_type bit_idx) const noexcept -> const block_type&
{
    ANT_ASSERT(bit_idx < _size);
    return data()[bit_idx / bits_per_block];
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::block_for(size_type bit_idx) noexcept -> block_type&
{
    ANT_ASSERT(bit_idx < _size);
    return data()[bit_idx / bits_per_block];
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::mask_for(size_type bit_idx) noexcept -> block_type
{
    const size_type bit_offset = bit_idx % bits_per_block;
    return 1ULL << bit_offset;
}

template<typename Allocator>
constexpr auto basic_dynamic_bitset<Allocator>::move_blocks_from(basic_dynamic_bitset&& other) -> void
{
    if (_is_heap)
    {
        _heap = std::exchange(other._heap, nullptr);
    }
    else
    {
        std::memcpy(_inplace, other._inplace, sizeof(_inplace));
    }
}

template<typename Allocator>
constexpr auto swap(basic_dynamic_bitset<Allocator>& lhs, basic_dynamic_bitset<Allocator>& rhs) noexcept(noexcept(lhs.swap(rhs))) -> void
{
    lhs.swap(rhs);
}

template<typename Allocator>
constexpr auto operator==(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool
{
    const std::size_t bits_per_block = basic_dynamic_bitset<Allocator>::bits_per_block;
    const std::size_t blocks_size = (lhs.size() + bits_per_block - 1) / bits_per_block;
    return lhs.size() == rhs.size() && std::equal(lhs.data(), lhs.data() + blocks_size, rhs.data());
}

template<typename Allocator>
constexpr auto operator!=(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool
{
    return !(lhs == rhs);
}

template<typename Allocator>
constexpr auto operator<(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool
{
    using size_type = typename basic_dynamic_bitset<Allocator>::size_type;

    const size_type lhs_size = lhs.size();
    const size_type rhs_size = rhs.size();
    const size_type max_bits = lhs_size > rhs_size ? lhs_size : rhs_size;

    for (size_type idx = max_bits; idx > 0; --idx)
    {
        const size_type bit = idx - 1;
        const bool lhs_bit = bit < lhs_size ? lhs.test(bit) : false;
        const bool rhs_bit = bit < rhs_size ? rhs.test(bit) : false;

        if (lhs_bit != rhs_bit)
        {
            return lhs_bit < rhs_bit;
        }
    }

    return false;
}

template<typename Allocator>
constexpr auto operator<=(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool
{
    return !(rhs < lhs);
}

template<typename Allocator>
constexpr auto operator>(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool
{
    return (rhs < lhs);
}

template<typename Allocator>
constexpr auto operator>=(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) noexcept -> bool
{
    return !(lhs < rhs);
}

template<typename Allocator>
constexpr auto operator&(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>
{
    auto tmp = lhs;
    tmp &= rhs;
    return tmp;
}

template<typename Allocator>
constexpr auto operator|(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>
{
    auto tmp = lhs;
    tmp |= rhs;
    return tmp;
}

template<typename Allocator>
constexpr auto operator^(const basic_dynamic_bitset<Allocator>& lhs, const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>
{
    auto tmp = lhs;
    tmp ^= rhs;
    return tmp;
}

template<typename Allocator>
constexpr auto operator~(const basic_dynamic_bitset<Allocator>& rhs) -> basic_dynamic_bitset<Allocator>
{
    auto tmp = rhs;
    tmp.flip();
    return tmp;
}

} // namespace ant
