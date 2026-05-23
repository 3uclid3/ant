#include <ant/core/bitset.hpp>
#include <doctest/doctest.h>

#include <bitset>
#include <iostream>
#include <utility>

namespace ant {

template<std::size_t C, typename Allocator>
auto operator<<(std::ostream& os, const basic_bitset<C, Allocator>& bs) -> std::ostream&
{
    for (auto block : bs.blocks_view())
    {
        os << "\n"
           << std::bitset<sizeof(block) * 8>(block);
    }
    return os;
}

namespace {

// Pattern for more robust testing

auto set_even(bitset& bs) -> void
{
    for (std::size_t i = 0; i < bs.size(); i += 2)
    {
        bs.set(i);
    }
}

auto set_odd(bitset& bs) -> void
{
    for (std::size_t i = 1; i < bs.size(); i += 2)
    {
        bs.set(i);
    }
}

auto even_bitset(std::size_t size) -> bitset
{
    bitset bs{size};
    set_even(bs);
    return bs;
}

auto odd_bitset(std::size_t size) -> bitset
{
    bitset bs{size};
    set_odd(bs);
    return bs;
}

const auto tail_only_blocks_size = bitset::bits_per_block / 2;
const auto full_only_blocks_size = bitset::bits_per_block * 4;
const auto full_and_tail_blocks_size = full_only_blocks_size + tail_only_blocks_size;

using small_bitset = basic_bitset<64, std::allocator<std::uint64_t>>;

TEST_CASE("basic_bitset::ctor: default")
{
    bitset bs;

    CHECK_FALSE(bs.is_heap());
    CHECK(bs.empty());
    CHECK_EQ(bs.capacity(), bitset::inplace_capacity);
}

TEST_CASE("basic_bitset::ctor: with size smaller or equal to inplace_capacity")
{
    const std::size_t size = GENERATE(bitset::inplace_capacity - 1, bitset::inplace_capacity);

    bitset bs{size};

    CHECK_FALSE(bs.is_heap());
    CHECK_EQ(bs.size(), size);
    CHECK_EQ(bs.capacity(), bitset::inplace_capacity);
}

TEST_CASE("basic_bitset::ctor: with size larger than inplace_capacity")
{
    constexpr auto size = bitset::inplace_capacity + 1;

    bitset bs{size};

    CHECK(bs.is_heap());
    CHECK_EQ(bs.size(), size);
    CHECK_GE(bs.capacity(), size); // rounded up
}

TEST_CASE("basic_bitset::ctor: copy from inplace")
{
    bitset from{odd_bitset(bitset::inplace_capacity)};

    bitset to{from};

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::ctor: copy from heap")
{
    bitset from{odd_bitset(bitset::inplace_capacity + 1)};

    bitset to{from};

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::ctor: move from inplace")
{
    bitset expected{odd_bitset(bitset::inplace_capacity)};
    bitset from{expected};

    bitset to{std::move(from)};

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::ctor: move from heap")
{
    bitset expected{odd_bitset(bitset::inplace_capacity + 1)};
    bitset from{expected};

    bitset to{std::move(from)};

    CHECK(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::ctor: cross-capacity copy: large-inplace to small-inplace")
{
    // size(64) fits in small's inplace (64), is inplace in large (256) too
    bitset from{odd_bitset(64)};
    CHECK_FALSE(from.is_heap());

    small_bitset to{from};

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::ctor: cross-capacity copy: large-inplace to small-heap")
{
    // size(128) is inplace in large (256) but exceeds small's inplace (64)
    bitset from{odd_bitset(128)};
    CHECK_FALSE(from.is_heap());

    small_bitset to{from};

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::ctor: cross-capacity copy: small-heap to large-inplace")
{
    // size(128) forces heap in small (64) but fits in large's inplace (256)
    small_bitset from{128};
    for (std::size_t i = 1; i < from.size(); i += 2)
        from.set(i);
    CHECK(from.is_heap());

    bitset to{from};

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::ctor: cross-capacity copy: both heap")
{
    // size > 256, forces heap in both
    bitset from{odd_bitset(bitset::inplace_capacity + 1)};
    CHECK(from.is_heap());

    small_bitset to{from};

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: copy from self is no-op")
{
    bitset expected{odd_bitset(bitset::inplace_capacity)};

    bitset to{expected};
    const bitset* from_ptr = &to;
    to = *from_ptr;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator=: copy from inplace to self inplace")
{
    bitset from{odd_bitset(bitset::inplace_capacity)};
    bitset to{even_bitset(bitset::inplace_capacity)};

    to = from;

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: copy from heap to self inplace")
{
    bitset from{odd_bitset(bitset::inplace_capacity + 1)};
    bitset to{even_bitset(bitset::inplace_capacity)};

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: copy from inplace to self heap")
{
    bitset from{odd_bitset(bitset::inplace_capacity)};
    bitset to{even_bitset(bitset::inplace_capacity + 1)};

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: copy from heap to self heap")
{
    constexpr std::size_t to_size = (bitset::inplace_capacity + 1) * 3;
    const std::size_t from_size = GENERATE(to_size - 1, to_size, to_size + 1, to_size + bitset::inplace_capacity);

    bitset from{odd_bitset(from_size)};
    bitset to{even_bitset(to_size)};

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
    CHECK_GE(to.capacity(), to_size);
}

TEST_CASE("basic_bitset::operator=: move from self is no-op")
{
    bitset expected{odd_bitset(bitset::inplace_capacity + 1)};
    bitset to{expected};
    const bitset* from_ptr = &to;

    to = std::move(*from_ptr);

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator=: move from inplace to self inplace")
{
    bitset expected{odd_bitset(bitset::inplace_capacity)};
    bitset from{expected};
    bitset to{even_bitset(bitset::inplace_capacity)};

    to = std::move(from);

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator=: move from heap to self inplace")
{
    bitset expected{odd_bitset(bitset::inplace_capacity + 1)};
    bitset from{expected};
    bitset to{even_bitset(bitset::inplace_capacity)};

    to = std::move(from);

    CHECK(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator=: move from inplace to self heap")
{
    bitset expected{odd_bitset(bitset::inplace_capacity)};
    bitset from{expected};
    bitset to{even_bitset(bitset::inplace_capacity + 1)};

    to = std::move(from);

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator=: move from heap to self heap ")
{
    constexpr std::size_t to_size = (bitset::inplace_capacity + 1) * 3;
    const std::size_t from_size = GENERATE(to_size - 1, to_size, to_size + 1);

    bitset expected{odd_bitset(from_size)};
    bitset from{expected};
    bitset to{even_bitset(to_size)};

    to = std::move(from);

    CHECK(to.is_heap());
    CHECK_EQ(to, expected);
    CHECK_GE(to.capacity(), expected.size());
}

TEST_CASE("basic_bitset::operator=: cross-capacity copy: large-inplace to small-inplace")
{
    bitset from{odd_bitset(64)};
    small_bitset to{32};

    to = from;

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: cross-capacity copy: large-inplace to small-heap")
{
    // size(128) is inplace in large but must go to heap in small
    bitset from{odd_bitset(128)};
    CHECK_FALSE(from.is_heap());

    small_bitset to{32};

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: cross-capacity copy: small-heap to large-inplace")
{
    small_bitset from{128};
    for (std::size_t i = 1; i < from.size(); i += 2)
        from.set(i);
    CHECK(from.is_heap());

    bitset to{odd_bitset(64)};

    to = from;

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: cross-capacity copy: both heap")
{
    bitset from{odd_bitset(bitset::inplace_capacity + 1)};
    CHECK(from.is_heap());

    small_bitset to{128};
    CHECK(to.is_heap());

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator&=: from self is no-op")
{
    bitset expected{odd_bitset(64)};
    bitset to{expected};
    const bitset* from_ptr = &to;

    to &= (*from_ptr);

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator&=: empty")
{
    bitset to;

    to &= bitset();

    CHECK_EQ(to, bitset());
}

TEST_CASE("basic_bitset::operator&=: AND bits")
{
    bitset expected{even_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};
    bitset from{expected};
    bitset to{from.size()};
    to.set();

    to &= from;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator|=: empty")
{
    bitset to;

    to |= bitset();

    CHECK_EQ(to, bitset());
}

TEST_CASE("basic_bitset::operator|=: OR bits")
{
    bitset expected{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    expected.set();
    bitset from{odd_bitset(expected.size())};
    bitset to{even_bitset(expected.size())};

    to |= from;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::operator^=: empty")
{
    bitset to;

    to ^= bitset();

    CHECK_EQ(to, bitset());
}

TEST_CASE("basic_bitset::operator^=: XOR bits")
{
    bitset expected{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};
    bitset from{expected.size()};
    from.set();
    bitset to{even_bitset(expected.size())};

    to ^= from;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::all: none")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK_FALSE(bs.all());
}

TEST_CASE("basic_bitset::all: partial")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    CHECK_FALSE(bs.all());
}

TEST_CASE("basic_bitset::all: all")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set();

    CHECK(bs.all());
}

TEST_CASE("basic_bitset::any: none")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK_FALSE(bs.any());
}

TEST_CASE("basic_bitset::any: partial")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    CHECK(bs.any());
}

TEST_CASE("basic_bitset::any: all")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set();

    CHECK(bs.any());
}

TEST_CASE("basic_bitset::none: none")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK(bs.none());
}

TEST_CASE("basic_bitset::none: partial")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    CHECK_FALSE(bs.none());
}

TEST_CASE("basic_bitset::none: all")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set();

    CHECK_FALSE(bs.none());
}

TEST_CASE("basic_bitset::count: none")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK_EQ(bs.count(), 0);
}

TEST_CASE("basic_bitset::count: partial")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    CHECK_EQ(bs.count(), bs.size() / 2);
}

TEST_CASE("basic_bitset::count: all")
{
    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set();

    CHECK_EQ(bs.count(), bs.size());
}

TEST_CASE("basic_bitset::set(all): empty ")
{
    bitset bs;

    bs.set();

    CHECK(bs.empty());
    CHECK_EQ(bs.count(), 0);
}

TEST_CASE("basic_bitset::set(all): sets all bits")
{
    bitset bs{64};

    bs.set();

    CHECK(bs.all());
}

TEST_CASE("basic_bitset::set(all): unused bits are masked out")
{
    bitset bs{bitset::bits_per_block + 5};

    bs.set();

    CHECK(bs.all());

    const auto blocks = bs.blocks_view();
    const auto mask = (1ULL << 5) - 1;

    CHECK_EQ(blocks.back() & ~mask, 0);
}

TEST_CASE("basic_bitset::set(bit_idx): sets a bit")
{
    bitset bs{64};

    bs.set(3);

    CHECK_EQ(bs.count(), 1);
    CHECK(bs.test(3));
}

TEST_CASE("basic_bitset::set(range): sets a range")
{
    static constexpr std::size_t range_start = 2;
    static constexpr std::size_t range_size = 6;

    bitset bs{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set(range_start, range_size);

    CHECK_EQ(bs.count(), range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK(bs.test(i));
    }
}

TEST_CASE("basic_bitset::set(range): size 0 is no-op")
{
    bitset bs{odd_bitset(24)};

    bs.set(10, 0);

    CHECK_EQ(bs, odd_bitset(24));
}

TEST_CASE("basic_bitset::set(range): spans a block boundary")
{
    static constexpr std::size_t range_start = bitset::bits_per_block - 4;
    static constexpr std::size_t range_size = 8;

    bitset bs{GENERATE(full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set(range_start, range_size);

    CHECK_EQ(bs.count(), range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK(bs.test(i));
    }
}

TEST_CASE("basic_bitset::reset(all): empty is no-op")
{
    bitset bs;

    bs.reset();

    CHECK(bs.empty());
}

TEST_CASE("basic_bitset::reset(all): resets all bits")
{
    bitset bs{odd_bitset(64)};

    bs.reset();

    CHECK(bs.none());
}

TEST_CASE("basic_bitset::reset(bit_idx): resets a bit")
{
    bitset bs{64};
    bs.set();

    bs.reset(3);

    CHECK_EQ(bs.count(), bs.size() - 1);
    CHECK_FALSE(bs.test(3));
}

TEST_CASE("basic_bitset::reset(range): resets a range")
{
    static constexpr std::size_t range_start = 2;

    const std::size_t size = GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);
    const std::size_t range_size = size / 2;

    bitset bs{size};
    bs.set();
    bs.reset(range_start, range_size);

    CHECK_EQ(bs.count(), bs.size() - range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK_FALSE(bs.test(i));
    }
}

TEST_CASE("basic_bitset::reset(range): size 0 is no-op")
{
    bitset bs{odd_bitset(24)};

    bs.reset(10, 0);

    CHECK_EQ(bs, odd_bitset(24));
}

TEST_CASE("basic_bitset::reset(range): spans a block boundary")
{
    static constexpr std::size_t range_start = bitset::bits_per_block - 4;
    static constexpr std::size_t range_size = 8;

    bitset bs{GENERATE(full_only_blocks_size, full_and_tail_blocks_size)};
    bs.set();
    bs.reset(range_start, range_size);

    CHECK_EQ(bs.count(), bs.size() - range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK_FALSE(bs.test(i));
    }
}

TEST_CASE("basic_bitset::flip(all): empty ")
{
    bitset bs;

    bs.set();

    CHECK(bs.empty());
    CHECK_EQ(bs.count(), 0);
}

TEST_CASE("basic_bitset::flip(all): flips all bits")
{
    bitset expected{even_bitset(64)};
    bitset bs{odd_bitset(64)};

    bs.flip();

    CHECK_EQ(bs, expected);
}

TEST_CASE("basic_bitset::flip(all): unused bits are masked out")
{
    bitset bs{bitset::bits_per_block + 5};

    bs.set();

    CHECK(bs.all());

    const auto blocks = bs.blocks_view();
    const auto mask = (1ULL << 5) - 1;

    CHECK_EQ(blocks.back() & ~mask, 0);
}

TEST_CASE("basic_bitset::flip(bit_idx): flip a bit")
{
    bitset bs{64};

    bs.flip(3);

    CHECK_EQ(bs.count(), 1);
    CHECK(bs.test(3));
}

TEST_CASE("basic_bitset::flip(range): sets a range")
{
    static constexpr std::size_t range_start = 2;

    const std::size_t size = GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);
    const std::size_t range_size = size / 2;

    bitset bs{size};
    bs.flip(range_start, range_size);

    CHECK_EQ(bs.count(), range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK(bs.test(i));
    }
}

TEST_CASE("basic_bitset::flip(range): size 0 is no-op")
{
    bitset bs{odd_bitset(24)};

    bs.flip(10, 0);

    CHECK_EQ(bs, odd_bitset(24));
}

TEST_CASE("basic_bitset::for_each_set: empty visits nothing")
{
    bitset bs;

    std::size_t count = 0;
    bs.for_each_set([&](std::size_t) { ++count; });

    CHECK_EQ(count, 0);
}

TEST_CASE("basic_bitset::for_each_set: visits every set bit")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    bitset visited{bs.size()};
    bs.for_each_set([&](std::size_t idx) { visited.set(idx); });

    CHECK_EQ(visited, bs);
}

TEST_CASE("basic_bitset::for_each_set: visits interrupt on return false")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    const std::size_t expected_count = (bs.size() + 1) / 2;
    std::size_t count = 0;
    bs.for_each_set([&count, expected_count](std::size_t idx [[maybe_unused]]) { return ++count < expected_count; });

    CHECK_EQ(count, expected_count);
}

TEST_CASE("basic_bitset::for_each_unset: empty visits nothing")
{
    bitset bs;

    std::size_t count = 0;
    bs.for_each_unset([&](std::size_t) { ++count; });

    CHECK_EQ(count, 0);
}

TEST_CASE("basic_bitset::for_each_unset: visits every unset bit")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    bitset visited{bs.size()};
    visited.set();
    bs.for_each_unset([&](std::size_t idx) { visited.reset(idx); });

    CHECK_EQ(visited, bs);
}

TEST_CASE("basic_bitset::for_each_unset: visits interrupt on return false")
{
    bitset bs{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};

    const std::size_t expected_count = (bs.size() + 1) / 2;
    std::size_t count = 0;
    bs.for_each_unset([&count, expected_count](std::size_t idx [[maybe_unused]]) { return ++count < expected_count; });

    CHECK_EQ(count, expected_count);
}

TEST_CASE("basic_bitset::swap: from self is no-op")
{
    bitset expected{odd_bitset(bitset::inplace_capacity)};

    bitset to{expected};
    bitset* from_ptr = &to;
    to.swap(*from_ptr);

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_bitset::swap: from inplace to self inplace")
{
    bitset from{odd_bitset(bitset::inplace_capacity)};
    bitset to{even_bitset(bitset::inplace_capacity)};

    to.swap(from);

    CHECK_EQ(from, even_bitset(bitset::inplace_capacity));
    CHECK_EQ(to, odd_bitset(bitset::inplace_capacity));
}

TEST_CASE("basic_bitset::swap: from heap to self inplace")
{
    bitset from{odd_bitset(bitset::inplace_capacity + 1)};
    bitset to{even_bitset(bitset::inplace_capacity)};

    to.swap(from);

    CHECK_FALSE(from.is_heap());
    CHECK(to.is_heap());
    CHECK_EQ(from, even_bitset(bitset::inplace_capacity));
    CHECK_EQ(to, odd_bitset(bitset::inplace_capacity + 1));
}

TEST_CASE("basic_bitset::swap: from inplace to self heap")
{
    bitset from{odd_bitset(bitset::inplace_capacity)};
    bitset to{even_bitset(bitset::inplace_capacity + 1)};

    to.swap(from);

    CHECK(from.is_heap());
    CHECK_FALSE(to.is_heap());
    CHECK_EQ(from, even_bitset(bitset::inplace_capacity + 1));
    CHECK_EQ(to, odd_bitset(bitset::inplace_capacity));
}

TEST_CASE("basic_bitset::swap: from heap to self heap")
{
    constexpr std::size_t to_size = (bitset::inplace_capacity + 1) * 3;
    const std::size_t from_size = GENERATE(to_size - 1, to_size, to_size + 1);

    bitset from{odd_bitset(from_size)};
    bitset to{even_bitset(to_size)};

    to.swap(from);

    CHECK(from.is_heap());
    CHECK(to.is_heap());
    CHECK_GE(from.capacity(), to_size);
    CHECK_GE(to.capacity(), from_size);
    CHECK_EQ(from, even_bitset(to_size));
    CHECK_EQ(to, odd_bitset(from_size));
}

TEST_CASE("basic_bitset::reserve: stays inplace when reserving smaller")
{
    bitset bs;

    bs.reserve(GENERATE(0, bitset::inplace_capacity / 2, bitset::inplace_capacity));

    CHECK_EQ(bs.size(), 0);
    CHECK_EQ(bs.capacity(), bitset::inplace_capacity);
    CHECK_FALSE(bs.is_heap());
}

TEST_CASE("basic_bitset::reserve: with size larger than inplace_capacity switch to heap")
{
    const std::size_t size = GENERATE(bitset::inplace_capacity + 1, bitset::inplace_capacity * 2);

    bitset bs;

    bs.reserve(size);

    CHECK_EQ(bs.size(), 0);
    CHECK_GE(bs.capacity(), size);
    CHECK(bs.is_heap());
}

TEST_CASE("basic_bitset::reserve: grows existing heap capacity and preserves bits")
{
    const std::size_t size = bitset::inplace_capacity + GENERATE(1, bitset::bits_per_block + 1);
    const std::size_t new_size = size + bitset::bits_per_block + 1;

    bitset bs{size};
    bs.set();

    bs.reserve(new_size);

    CHECK_GE(bs.capacity(), new_size);
    CHECK_EQ(bs.count(), size);

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK(bs.test(i));
    }
}

TEST_CASE("basic_bitset::resize: no-op when resizing to same size")
{
    bitset bs{odd_bitset(16)};

    bs.resize(16);

    CHECK_EQ(bs, odd_bitset(16));
}

TEST_CASE("basic_bitset::resize(value = false): grow inplace")
{
    const std::size_t size = GENERATE(1, bitset::inplace_capacity / 2, bitset::inplace_capacity - 1);
    const std::size_t new_size = size + 1;

    bitset bs{size};
    bs.set();

    bs.resize(new_size);

    CHECK_EQ(bs.size(), new_size);
    CHECK_EQ(bs.capacity(), bitset::inplace_capacity);
    CHECK_EQ(bs.count(), size);

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK(bs.test(i));
    }
}

TEST_CASE("basic_bitset::resize(value = true): grow inplace")
{
    const std::size_t size = GENERATE(1, bitset::inplace_capacity / 2, bitset::inplace_capacity - 1);
    const std::size_t new_size = size + 1;

    bitset bs{size};
    bs.set();

    bs.resize(new_size, true);

    CHECK_EQ(bs.size(), new_size);
    CHECK(bs.all());
}

TEST_CASE("basic_bitset::resize(value = false): grow heap")
{
    const std::size_t size = bitset::inplace_capacity / 2;
    const std::size_t new_size = size + GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);

    bitset bs{size};
    bs.set();

    bs.resize(new_size);

    CHECK_EQ(bs.size(), new_size);
    CHECK_GE(bs.capacity(), new_size);
    CHECK_EQ(bs.count(), size);

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK(bs.test(i));
    }
}

TEST_CASE("basic_bitset::resize(value = true): grow heap")
{
    const std::size_t size = bitset::inplace_capacity / 2;
    const std::size_t new_size = size + GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);

    bitset bs{size};
    bs.set();

    CAPTURE(bs);
    bs.resize(new_size, true);
    CAPTURE(bs);

    CHECK_EQ(bs.size(), new_size);
    CHECK(bs.all());
}

TEST_CASE("basic_bitset::resize(value = true): shrink")
{
    const std::size_t size = GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);
    const std::size_t new_size = size - bitset::bits_per_block / 2;

    bitset bs{size};
    bs.set();

    bs.resize(new_size, true);

    CHECK_EQ(bs.size(), new_size);
    CHECK(bs.all());
}

TEST_CASE("basic_bitset::clear: resets size")
{
    bitset bs{64};
    bs.set();
    bs.clear();

    CHECK_EQ(bs.size(), 0);
}

TEST_CASE("basic_bitset::clear: no-op when empty")
{
    bitset bs;

    bs.clear();

    CHECK(bs.empty());
}

TEST_CASE("basic_bitset::compare: are equal")
{
    bitset a{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};
    bitset b{a};

    CHECK_EQ(a, b);
    CHECK_EQ(b, a);
}

TEST_CASE("basic_bitset::operator==: not equal when size differ")
{
    bitset a{odd_bitset(64)};
    bitset b{odd_bitset(65)};

    CHECK_NE(a, b);
    CHECK_NE(b, a);
}

TEST_CASE("basic_bitset::operator==: not equal when bits differ")
{
    bitset a{odd_bitset(64)};
    bitset b{even_bitset(64)};

    CHECK_NE(a, b);
    CHECK_NE(b, a);
}

TEST_CASE("basic_bitset::operator&: AND bits")
{
    bitset expected{even_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};
    bitset with{expected.size()};
    with.set();

    CHECK_EQ(with & even_bitset(expected.size()), expected);
    CHECK_EQ(even_bitset(expected.size()) & with, expected);
}
TEST_CASE("basic_bitset::operator|: OR bits")
{
    bitset expected{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    expected.set();

    CHECK_EQ(odd_bitset(expected.size()) | even_bitset(expected.size()), expected);
    CHECK_EQ(even_bitset(expected.size()) | odd_bitset(expected.size()), expected);
}

TEST_CASE("basic_bitset::operator^: XOR bits")
{
    bitset expected{odd_bitset(GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size))};
    bitset with{expected.size()};
    with.set();

    CHECK_EQ(even_bitset(expected.size()) ^ with, expected);
    CHECK_EQ(with ^ even_bitset(expected.size()), expected);
}

TEST_CASE("basic_bitset::operator<: same size orders by most-significant bit")
{
    bitset a{64};
    bitset b{64};
    a.set(3); // ...00001000
    b.set(5); // ...00100000 (greater)

    CHECK(a < b);
    CHECK_FALSE(b < a);
}

TEST_CASE("basic_bitset::operator<: different sizes treat missing high blocks as zero")
{
    bitset small{64}; // all zeros
    bitset large{65}; // high bit beyond 64
    large.set(64);

    CHECK(small < large);
    CHECK_FALSE(large < small);
}

TEST_CASE("basic_bitset::operator<: cross-block higher block dominates lower block differences")
{
    // Ensure ordering considers the most-significant differing block first.
    bitset a{bitset::bits_per_block * 2};
    bitset b{a.size()};

    // a has some lower-block bits set
    a.set(1);
    a.set(10);
    a.set(60);

    // b has a single bit set in the next (more significant) block
    b.set(bitset::bits_per_block + 1);

    CHECK(a < b);
    CHECK_FALSE(b < a);
}

TEST_CASE("basic_bitset::ctor: copy from different allocator type")
{
    bitset from{odd_bitset(pmr::bitset::inplace_capacity + 1)};

    pmr::bitset to{from};

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator=: copy from different allocator type")
{
    bitset from{odd_bitset(bitset::inplace_capacity + 1)};
    pmr::bitset to{even_bitset(pmr::bitset::inplace_capacity + 1)};

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_bitset::operator<: from different allocator type")
{
    bitset a{64};
    pmr::bitset b{64};
    a.set(3); // ...00001000
    b.set(5); // ...00100000 (greater)

    CHECK(a < b);
    CHECK_FALSE(b < a);
}

} // namespace
} // namespace ant
