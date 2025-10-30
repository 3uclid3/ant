#pragma once

#include <bit>
#include <cstdint>
#include <cstring>
#include <memory>
#include <type_traits>
#include <utility>

#include <ant/config.hpp>
#include <ant/core/assert.hpp>

namespace ant {

template<typename Block, typename Allocator>
class basic_dynamic_bitset;

using dynamic_bitset = basic_dynamic_bitset<std::uint64_t, std::allocator<std::uint64_t>>;

template<typename Block, typename Allocator>
class basic_dynamic_bitset
{
public:
    using allocator_type = Allocator;
    using block_type = Block;
    using alloc_traits = std::allocator_traits<allocator_type>;
    using size_type = std::size_t;

    static constexpr size_type bits_per_block = sizeof(block_type) * 8;

    static constexpr size_type inplace_capacity = 256;
    static constexpr size_type inplace_block_count = (inplace_capacity + bits_per_block - 1) / bits_per_block;

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
    constexpr auto operator<<=(size_type shift) -> basic_dynamic_bitset&;
    constexpr auto operator>>=(size_type shift) -> basic_dynamic_bitset&;

    [[nodiscard]] constexpr auto test(size_type bit_index) const noexcept -> bool;
    [[nodiscard]] constexpr auto all() const noexcept -> bool;
    [[nodiscard]] constexpr auto any() const noexcept -> bool;
    [[nodiscard]] constexpr auto none() const noexcept -> bool;
    [[nodiscard]] constexpr auto count() const noexcept -> size_type;

    constexpr auto set() -> basic_dynamic_bitset&;
    constexpr auto set(size_type bit_index) -> basic_dynamic_bitset&;
    constexpr auto set(size_type bit_index, size_type len) -> basic_dynamic_bitset&;

    constexpr auto reset() -> basic_dynamic_bitset&;
    constexpr auto reset(size_type bit_index) -> basic_dynamic_bitset&;
    constexpr auto reset(size_type bit_index, size_type len) -> basic_dynamic_bitset&;

    constexpr auto flip() -> basic_dynamic_bitset&;
    constexpr auto flip(size_type bit_index) -> basic_dynamic_bitset&;
    constexpr auto flip(size_type bit_index, size_type len) -> basic_dynamic_bitset&;

    template<typename F>
    requires std::is_invocable_v<F, size_type>
    constexpr auto for_each_set(F&& func) const -> void;

    template<typename F>
    requires std::is_invocable_v<F, size_type>
    constexpr auto for_each_unset(F&& func) const -> void;

    [[nodiscard]] constexpr auto empty() const noexcept -> bool;
    [[nodiscard]] constexpr auto size() const noexcept -> size_type;        // in bits
    [[nodiscard]] constexpr auto capacity() const noexcept -> size_type;    // in bits
    [[nodiscard]] constexpr auto block_count() const noexcept -> size_type; // number of blocks

    constexpr auto swap(basic_dynamic_bitset& other) noexcept(alloc_traits::propagate_on_container_swap::value || alloc_traits::is_always_equal::value) -> void;

    constexpr auto reserve(size_type size_bits) -> void;
    constexpr auto resize(size_type size_bits, bool value = false) -> void;
    constexpr auto clear() noexcept -> void;

    [[nodiscard]] constexpr auto is_heap() const noexcept -> bool;
    [[nodiscard]] constexpr auto get_allocator() const noexcept -> const allocator_type&;

    friend constexpr auto swap(basic_dynamic_bitset& lhs, basic_dynamic_bitset& rhs) noexcept(noexcept(lhs.swap(rhs))) -> void;

private:
    using inplace_storage = block_type[inplace_block_count];
    using heap_storage = block_type*;

    [[nodiscard]] constexpr auto size_in_bytes() const noexcept -> size_type;
    [[nodiscard]] constexpr auto block_count_for(std::size_t bits) const noexcept -> size_type;

    [[nodiscard]] constexpr auto used_block_count() const noexcept -> size_type;
    [[nodiscard]] static constexpr auto lower_mask(size_type bits) noexcept -> block_type;

    template<typename Fn>
    constexpr auto apply_mask_range(size_type bit_index, size_type len, Fn&& fn) -> void;

    [[nodiscard]] constexpr auto storage() noexcept -> block_type*;
    [[nodiscard]] constexpr auto storage() const noexcept -> const block_type*;

    union
    {
        inplace_storage _inplace{};
        heap_storage _heap;
    };

    ANT_NO_UNIQUE_ADDRESS allocator_type _allocator;

    size_type _size{0};                    // in bits
    size_type _capacity{inplace_capacity}; // in bits (heap capacity is always multiple of block size)
    bool _is_heap{false};

    static_assert(std::is_unsigned_v<block_type>, "Block type must be an unsigned integer type.");
    static_assert(std::is_same_v<typename alloc_traits::value_type, block_type>, "Allocator::value_type must be Block");
};

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator==(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator!=(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator<(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator<=(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator>(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator>=(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator&(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator|(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator^(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>;

template<typename Block, typename Allocator>
[[nodiscard]] constexpr auto operator~(const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>;

template<typename Block, typename Allocator>
constexpr basic_dynamic_bitset<Block, Allocator>::basic_dynamic_bitset(size_type size_bits)
{
    resize(size_bits);
}

template<typename Block, typename Allocator>
constexpr basic_dynamic_bitset<Block, Allocator>::basic_dynamic_bitset(const allocator_type& alloc) noexcept(std::is_nothrow_copy_constructible_v<allocator_type>)
    : _allocator(alloc)
{
}

template<typename Block, typename Allocator>
constexpr basic_dynamic_bitset<Block, Allocator>::basic_dynamic_bitset(size_type size_bits, const allocator_type& alloc)
    : _allocator(alloc)
{
    resize(size_bits);
}

template<typename Block, typename Allocator>
constexpr basic_dynamic_bitset<Block, Allocator>::basic_dynamic_bitset(const basic_dynamic_bitset& other)
    : _allocator(other._allocator)
    , _size(other._size)
    , _capacity(other._capacity)
    , _is_heap(other._is_heap)
{
    if (_is_heap)
    {
        const size_type blocks = block_count();
        _heap = _allocator.allocate(blocks);

        std::memcpy(_heap, other._heap, blocks * sizeof(block_type));
    }
    else
    {
        std::memcpy(_inplace, other._inplace, sizeof(_inplace));
    }
}

template<typename Block, typename Allocator>
constexpr basic_dynamic_bitset<Block, Allocator>::basic_dynamic_bitset(basic_dynamic_bitset&& other) noexcept(alloc_traits::is_always_equal::value || std::is_nothrow_move_constructible_v<allocator_type>)
    : _allocator(std::move(other._allocator))
    , _size(std::exchange(other._size, 0))
    , _capacity(std::exchange(other._capacity, inplace_capacity))
    , _is_heap(std::exchange(other._is_heap, false))
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

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    if (this != &other)
    {
        const size_type old_blocks = block_count();
        if (_is_heap)
        {
            _allocator.deallocate(_heap, old_blocks);
        }

        _allocator = other._allocator;
        _size = other._size;
        _capacity = other._capacity;
        _is_heap = other._is_heap;

        if (_is_heap)
        {
            const size_type new_blocks = block_count();
            _heap = _allocator.allocate(new_blocks);

            std::memcpy(_heap, other._heap, new_blocks * sizeof(block_type));
        }
        else
        {
            std::memcpy(_inplace, other._inplace, sizeof(_inplace));
        }
    }
    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator=(basic_dynamic_bitset&& other) noexcept(alloc_traits::propagate_on_container_move_assignment::value || alloc_traits::is_always_equal::value) -> basic_dynamic_bitset&
{
    if (this != &other)
    {
        const size_type old_blocks = block_count();
        if (_is_heap)
        {
            _allocator.deallocate(_heap, old_blocks);
        }

        _allocator = std::move(other._allocator);
        _size = std::exchange(other._size, 0);
        _capacity = std::exchange(other._capacity, inplace_capacity);
        _is_heap = std::exchange(other._is_heap, false);

        if (_is_heap)
        {
            _heap = std::exchange(other._heap, nullptr);
        }
        else
        {
            std::memcpy(_inplace, other._inplace, sizeof(_inplace));
        }
    }
    return *this;
}

template<typename Block, typename Allocator>
constexpr basic_dynamic_bitset<Block, Allocator>::~basic_dynamic_bitset() noexcept
{
    if (_is_heap)
    {
        _allocator.deallocate(_heap, block_count());
    }
}

// 9) operator&=
template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator&=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    ANT_ASSERT(_size == other._size);

    if (_size == 0)
    {
        return *this;
    }

    const size_type blocks = used_block_count();
    block_type* ptr = storage();
    const block_type* other_ptr = other.storage();

    for (size_type i = 0; i < blocks; ++i)
    {
        ptr[i] &= other_ptr[i];
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        ptr[blocks - 1] &= lower_mask(rem_bits);
    }

    return *this;
}

// 10) operator|=
template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator|=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    ANT_ASSERT(_size == other._size);

    if (_size == 0)
    {
        return *this;
    }

    const size_type blocks = used_block_count();
    block_type* ptr = storage();
    const block_type* other_ptr = other.storage();

    for (size_type i = 0; i < blocks; ++i)
    {
        ptr[i] |= other_ptr[i];
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        ptr[blocks - 1] &= lower_mask(rem_bits);
    }

    return *this;
}

// 11) operator^=
template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator^=(const basic_dynamic_bitset& other) -> basic_dynamic_bitset&
{
    ANT_ASSERT(_size == other._size);

    if (_size == 0)
    {
        return *this;
    }

    const size_type blocks = used_block_count();
    block_type* ptr = storage();
    const block_type* other_ptr = other.storage();

    for (size_type i = 0; i < blocks; ++i)
    {
        ptr[i] ^= other_ptr[i];
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        ptr[blocks - 1] &= lower_mask(rem_bits);
    }

    return *this;
}

// 12) operator<<=
template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator<<=(size_type shift) -> basic_dynamic_bitset&
{
    if (shift == 0 || _size == 0)
    {
        return *this;
    }

    if (shift >= _size)
    {
        reset();
        return *this;
    }

    const size_type blocks = used_block_count();
    const size_type block_shift = shift / bits_per_block;
    const size_type bit_shift = shift % bits_per_block;

    block_type* ptr = storage();

    if (block_shift != 0)
    {
        for (size_type i = blocks; i-- > 0;)
        {
            if (i >= block_shift)
            {
                ptr[i] = ptr[i - block_shift];
            }
            else
            {
                ptr[i] = block_type{0};
            }
        }
    }

    if (bit_shift != 0)
    {
        for (size_type i = blocks; i-- > 0;)
        {
            const block_type carry = (i > 0) ? static_cast<block_type>(ptr[i - 1] >> (bits_per_block - bit_shift)) : block_type{0};
            ptr[i] = static_cast<block_type>((ptr[i] << bit_shift) | carry);
        }
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        ptr[blocks - 1] &= lower_mask(rem_bits);
    }

    return *this;
}

// 13) operator>>=
template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::operator>>=(size_type shift) -> basic_dynamic_bitset&
{
    if (shift == 0 || _size == 0)
    {
        return *this;
    }

    if (shift >= _size)
    {
        reset();
        return *this;
    }

    const size_type blocks = used_block_count();
    const size_type block_shift = shift / bits_per_block;
    const size_type bit_shift = shift % bits_per_block;

    block_type* ptr = storage();

    if (block_shift != 0)
    {
        for (size_type i = 0; i < blocks; ++i)
        {
            if (i + block_shift < blocks)
            {
                ptr[i] = ptr[i + block_shift];
            }
            else
            {
                ptr[i] = block_type{0};
            }
        }
    }

    if (bit_shift != 0)
    {
        for (size_type i = 0; i < blocks; ++i)
        {
            const block_type carry = (i + 1 < blocks) ? static_cast<block_type>(ptr[i + 1] << (bits_per_block - bit_shift)) : block_type{0};
            ptr[i] = static_cast<block_type>((ptr[i] >> bit_shift) | carry);
        }
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        ptr[blocks - 1] &= lower_mask(rem_bits);
    }

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::test(size_type bit_index) const noexcept -> bool
{
    ANT_ASSERT(bit_index < _size);

    const size_type block_index = bit_index / bits_per_block;
    const size_type bit_offset = bit_index % bits_per_block;

    return (storage()[block_index] & (block_type(1) << bit_offset)) != 0;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::all() const noexcept -> bool
{
    if (_size == 0)
    {
        return true;
    }

    const block_type* ptr = storage();
    const size_type full_blocks = _size / bits_per_block;

    for (size_type i = 0; i < full_blocks; ++i)
    {
        if (ptr[i] != ~block_type{0})
        {
            return false;
        }
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits == 0)
    {
        return true;
    }

    const block_type mask = lower_mask(rem_bits);
    return (ptr[full_blocks] & mask) == mask;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::any() const noexcept -> bool
{
    if (_size == 0)
    {
        return false;
    }

    const block_type* ptr = storage();

    // unused bits in the last block are always zeroed out
    const size_type used_blocks = used_block_count();

    for (size_type i = 0; i < used_blocks; ++i)
    {
        if (ptr[i] != block_type{0})
        {
            return true;
        }
    }

    return false;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::none() const noexcept -> bool
{
    const block_type* ptr = storage();

    // unused bits in the last block are always zeroed out
    const size_type used_blocks = used_block_count();

    for (size_type i = 0; i < used_blocks; ++i)
    {
        if (ptr[i] != block_type{0})
        {
            return false;
        }
    }

    return true;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::count() const noexcept -> size_type
{
    const block_type* ptr = storage();

    // unused bits in the last block are always zeroed out
    const size_type used_blocks = used_block_count();

    size_type total = 0;
    for (size_type i = 0; i < used_blocks; ++i)
    {
        total += static_cast<size_type>(std::popcount(ptr[i]));
    }

    return total;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::set() -> basic_dynamic_bitset&
{
    if (_size == 0)
    {
        return *this;
    }

    block_type* ptr = storage();
    const size_type full_blocks = _size / bits_per_block;

    for (size_type i = 0; i < full_blocks; ++i)
    {
        ptr[i] = ~block_type{0};
    }

    const size_type rem_bits = _size % bits_per_block;
    if (rem_bits != 0)
    {
        ptr[full_blocks] = lower_mask(rem_bits);
    }

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::set(size_type bit_index) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_index < _size);

    block_type* ptr = storage();

    const size_type block_index = bit_index / bits_per_block;
    const size_type bit_offset = bit_index % bits_per_block;
    ptr[block_index] |= static_cast<block_type>(block_type{1} << bit_offset);

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::set(size_type bit_index, size_type len) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_index + len <= _size);

    apply_mask_range(bit_index, len, [](block_type& block, block_type mask) {
        block |= mask;
    });

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::reset() -> basic_dynamic_bitset&
{
    if (_size == 0)
    {
        return *this;
    }

    block_type* ptr = storage();
    const size_type blocks = used_block_count();
    if (blocks != 0)
    {
        std::memset(ptr, 0, blocks * sizeof(block_type));
    }

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::reset(size_type bit_index) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_index < _size);

    block_type* ptr = storage();

    const size_type block_index = bit_index / bits_per_block;
    const size_type bit_offset = bit_index % bits_per_block;
    const block_type mask = static_cast<block_type>(block_type{1} << bit_offset);

    ptr[block_index] &= static_cast<block_type>(~mask);

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::reset(size_type bit_index, size_type len) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_index + len <= _size);

    apply_mask_range(bit_index, len, [](block_type& block, block_type mask) {
        block &= static_cast<block_type>(~mask);
    });

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::flip() -> basic_dynamic_bitset&
{
    if (_size == 0)
    {
        return *this;
    }

    return flip(size_type{0}, _size);
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::flip(size_type bit_index) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_index < _size);

    block_type* ptr = storage();

    const size_type block_index = bit_index / bits_per_block;
    const size_type bit_offset = bit_index % bits_per_block;

    ptr[block_index] ^= static_cast<block_type>(block_type{1} << bit_offset);

    if (_size % bits_per_block != 0)
    {
        ptr[used_block_count() - 1] &= lower_mask(_size % bits_per_block);
    }

    return *this;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::flip(size_type bit_index, size_type len) -> basic_dynamic_bitset&
{
    ANT_ASSERT(bit_index + len <= _size);

    if (len == 0)
    {
        return *this;
    }

    apply_mask_range(bit_index, len, [](block_type& block, block_type mask) {
        block ^= mask;
    });

    if (_size % bits_per_block != 0)
    {
        block_type* ptr = storage();
        ptr[used_block_count() - 1] &= lower_mask(_size % bits_per_block);
    }

    return *this;
}

template<typename Block, typename Allocator>
template<typename F>
requires std::is_invocable_v<F, typename basic_dynamic_bitset<Block, Allocator>::size_type>
constexpr auto basic_dynamic_bitset<Block, Allocator>::for_each_set(F&& func) const -> void
{
    using callback_result = std::invoke_result_t<F, size_type>;

    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<callback_result>, bool>;

    if (_size == 0)
    {
        return;
    }

    auto&& callback = std::forward<F>(func);

    const block_type* ptr = storage();
    const size_type blocks = used_block_count();
    const size_type rem_bits = _size % bits_per_block;

    for (size_type block_index = 0; block_index < blocks; ++block_index)
    {
        block_type block = ptr[block_index];
        if (block_index == blocks - 1 && rem_bits != 0)
        {
            block &= lower_mask(rem_bits);
        }

        while (block != 0)
        {
            const size_type offset = std::countr_zero(block);
            const size_type bit = block_index * bits_per_block + offset;

            if constexpr (is_interruptible)
            {
                if (!callback(bit))
                {
                    return;
                }
            }
            else
            {
                callback(bit);
            }

            const block_type reduced = static_cast<block_type>(block - block_type{1});
            block = static_cast<block_type>(block & reduced);
        }
    }
}

template<typename Block, typename Allocator>
template<typename F>
requires std::is_invocable_v<F, typename basic_dynamic_bitset<Block, Allocator>::size_type>
constexpr auto basic_dynamic_bitset<Block, Allocator>::for_each_unset(F&& func) const -> void
{
    using callback_result = std::invoke_result_t<F, size_type>;

    constexpr bool is_interruptible = std::is_same_v<std::remove_cvref_t<callback_result>, bool>;

    if (_size == 0)
    {
        return;
    }

    auto&& callback = std::forward<F>(func);

    const block_type* ptr = storage();
    const size_type blocks = used_block_count();
    const size_type rem_bits = _size % bits_per_block;

    for (size_type block_index = 0; block_index < blocks; ++block_index)
    {
        block_type mask = ~block_type{0};
        if (block_index == blocks - 1 && rem_bits != 0)
        {
            mask = lower_mask(rem_bits);
        }

        block_type block = static_cast<block_type>(~ptr[block_index]) & mask;

        while (block != 0)
        {
            const size_type offset = std::countr_zero(block);
            const size_type bit = block_index * bits_per_block + offset;

            if constexpr (is_interruptible)
            {
                if (!callback(bit))
                {
                    return;
                }
            }
            else
            {
                callback(bit);
            }

            const block_type reduced = static_cast<block_type>(block - block_type{1});
            block = static_cast<block_type>(block & reduced);
        }
    }
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::empty() const noexcept -> bool
{
    return _size == 0;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::size() const noexcept -> size_type
{
    return _size;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::capacity() const noexcept -> size_type
{
    return _capacity;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::block_count() const noexcept -> size_type
{
    return _capacity / bits_per_block;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::swap(basic_dynamic_bitset& other) noexcept(alloc_traits::propagate_on_container_swap::value || alloc_traits::is_always_equal::value) -> void
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
        for (size_type i = 0; i < inplace_block_count; ++i)
        {
            swap(_inplace[i], other._inplace[i]);
        }
    }
    else if (lhs_heap && !rhs_heap)
    {
        block_type temp[inplace_block_count];
        std::memcpy(temp, other._inplace, sizeof(_inplace));
        block_type* heap_ptr = _heap;

        std::memcpy(_inplace, temp, sizeof(_inplace));
        other._heap = heap_ptr;
    }
    else // !lhs_heap && rhs_heap
    {
        block_type temp[inplace_block_count];
        std::memcpy(temp, _inplace, sizeof(_inplace));
        block_type* heap_ptr = other._heap;

        std::memcpy(other._inplace, temp, sizeof(_inplace));
        _heap = heap_ptr;
    }

    swap(_is_heap, other._is_heap);
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::reserve(size_type size_bits) -> void
{
    if (size_bits <= _capacity)
    {
        return;
    }

    const size_type new_block_count = block_count_for(size_bits);
    const size_type used_blocks = used_block_count();

    block_type* new_heap = _allocator.allocate(new_block_count);

    if (used_blocks != 0)
    {
        std::memcpy(new_heap, storage(), used_blocks * sizeof(block_type));

        const auto remaining_blocks = new_block_count - used_blocks;
        std::memset(new_heap + used_blocks, 0, remaining_blocks * sizeof(block_type));
    }
    else
    {
        std::memset(new_heap, 0, new_block_count * sizeof(block_type));
    }

    if (_is_heap)
    {
        _allocator.deallocate(_heap, block_count());
    }

    _is_heap = true;
    _heap = new_heap;
    _capacity = new_block_count * bits_per_block;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::resize(size_type size_bits, bool value) -> void
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

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::clear() noexcept -> void
{
    if (_size == 0)
    {
        return;
    }

    block_type* ptr = storage();
    const size_type blocks = used_block_count();
    if (blocks != 0)
    {
        std::memset(ptr, 0, blocks * sizeof(block_type));
    }

    _size = 0;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::is_heap() const noexcept -> bool
{
    return _is_heap;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::get_allocator() const noexcept -> const allocator_type&
{
    return _allocator;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::size_in_bytes() const noexcept -> size_type
{
    return block_count() * sizeof(block_type);
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::block_count_for(std::size_t bits) const noexcept -> size_type
{
    return (bits + bits_per_block - 1) / bits_per_block;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::used_block_count() const noexcept -> size_type
{
    return block_count_for(_size);
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::lower_mask(size_type bits) noexcept -> block_type
{
    if (bits == 0)
    {
        return block_type{0};
    }
    if (bits >= bits_per_block)
    {
        return ~block_type{0};
    }
    return static_cast<block_type>((block_type{1} << bits) - block_type{1});
}

template<typename Block, typename Allocator>
template<typename Fn>
constexpr auto basic_dynamic_bitset<Block, Allocator>::apply_mask_range(size_type bit_index, size_type len, Fn&& fn) -> void
{
    if (len == 0)
    {
        return;
    }

    block_type* ptr = storage();

    const size_type start_block = bit_index / bits_per_block;
    const size_type start_offset = bit_index % bits_per_block;

    const size_type end_bit = bit_index + len;
    const size_type end_block = (end_bit - 1) / bits_per_block;
    const size_type end_offset = (end_bit - 1) % bits_per_block;

    if (start_block == end_block)
    {
        const size_type bits = end_offset - start_offset + 1;
        const block_type mask = static_cast<block_type>(lower_mask(bits) << start_offset);
        fn(ptr[start_block], mask);
        return;
    }

    fn(ptr[start_block], static_cast<block_type>(~lower_mask(start_offset)));

    for (size_type block = start_block + 1; block < end_block; ++block)
    {
        fn(ptr[block], ~block_type{0});
    }

    fn(ptr[end_block], lower_mask(end_offset + 1));
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::storage() noexcept -> block_type*
{
    return _is_heap ? _heap : _inplace;
}

template<typename Block, typename Allocator>
constexpr auto basic_dynamic_bitset<Block, Allocator>::storage() const noexcept -> const block_type*
{
    return _is_heap ? _heap : _inplace;
}

template<typename Block, typename Allocator>
constexpr auto swap(basic_dynamic_bitset<Block, Allocator>& lhs, basic_dynamic_bitset<Block, Allocator>& rhs) noexcept(noexcept(lhs.swap(rhs))) -> void
{
    lhs.swap(rhs);
}

template<typename Block, typename Allocator>
constexpr auto operator==(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool
{
    if (lhs.size() != rhs.size())
    {
        return false;
    }

    const typename basic_dynamic_bitset<Block, Allocator>::size_type total_bits = lhs.size();
    for (typename basic_dynamic_bitset<Block, Allocator>::size_type i = 0; i < total_bits; ++i)
    {
        if (lhs.test(i) != rhs.test(i))
        {
            return false;
        }
    }

    return true;
}

template<typename Block, typename Allocator>
constexpr auto operator!=(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool
{
    return !(lhs == rhs);
}

template<typename Block, typename Allocator>
constexpr auto operator<(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool
{
    using size_type = typename basic_dynamic_bitset<Block, Allocator>::size_type;

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

template<typename Block, typename Allocator>
constexpr auto operator<=(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool
{
    return !(rhs < lhs);
}

template<typename Block, typename Allocator>
constexpr auto operator>(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool
{
    return (rhs < lhs);
}

template<typename Block, typename Allocator>
constexpr auto operator>=(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) noexcept -> bool
{
    return !(lhs < rhs);
}

template<typename Block, typename Allocator>
constexpr auto operator&(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>
{
    auto tmp = lhs;
    tmp &= rhs;
    return tmp;
}

template<typename Block, typename Allocator>
constexpr auto operator|(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>
{
    auto tmp = lhs;
    tmp |= rhs;
    return tmp;
}

template<typename Block, typename Allocator>
constexpr auto operator^(const basic_dynamic_bitset<Block, Allocator>& lhs, const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>
{
    auto tmp = lhs;
    tmp ^= rhs;
    return tmp;
}

template<typename Block, typename Allocator>
constexpr auto operator~(const basic_dynamic_bitset<Block, Allocator>& rhs) -> basic_dynamic_bitset<Block, Allocator>
{
    auto tmp = rhs;
    tmp.flip();
    return tmp;
}

} // namespace ant
