#include <doctest/doctest.h>

#include <ant/core/dynamic_bitset.hpp>

#include <bitset>
#include <iostream>
#include <utility>
#include <vector>

#include <ant.test.shared/doctest/generator.hpp>

namespace ant {

template<typename Allocator>
auto operator<<(std::ostream& os, const basic_dynamic_bitset<Allocator>& bitset) -> std::ostream&
{
    for (auto block : bitset.blocks_view())
    {
        os << "\n"
           << std::bitset<sizeof(block) * 8>(block);
    }
    return os;
}

namespace {

// Pattern for more robust testing

auto set_even(dynamic_bitset& bitset) -> void
{
    for (std::size_t i = 0; i < bitset.size(); i += 2)
    {
        bitset.set(i);
    }
}

auto set_odd(dynamic_bitset& bitset) -> void
{
    for (std::size_t i = 1; i < bitset.size(); i += 2)
    {
        bitset.set(i);
    }
}

auto even_bitset(std::size_t size) -> dynamic_bitset
{
    dynamic_bitset bitset{size};
    set_even(bitset);
    return bitset;
}

auto odd_bitset(std::size_t size) -> dynamic_bitset
{
    dynamic_bitset bitset{size};
    set_odd(bitset);
    return bitset;
}

const auto tail_only_blocks_size = dynamic_bitset::bits_per_block / 2;
const auto full_only_blocks_size = dynamic_bitset::bits_per_block * 2;
const auto full_and_tail_blocks_size = full_only_blocks_size + tail_only_blocks_size;

TEST_CASE("basic_dynamic_bitset::ctor: default")
{
    dynamic_bitset bitset;

    CHECK_FALSE(bitset.is_heap());
    CHECK(bitset.empty());
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
}

TEST_CASE("basic_dynamic_bitset::ctor: with size smaller or equal to inplace_capacity")
{
    const std::size_t size = GENERATE(dynamic_bitset::inplace_capacity - 1, dynamic_bitset::inplace_capacity);

    dynamic_bitset bitset{size};

    CHECK_FALSE(bitset.is_heap());
    CHECK_EQ(bitset.size(), size);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
}

TEST_CASE("basic_dynamic_bitset::ctor: with size larger than inplace_capacity")
{
    constexpr auto size = dynamic_bitset::inplace_capacity + 1;

    dynamic_bitset bitset{size};

    CHECK(bitset.is_heap());
    CHECK_EQ(bitset.size(), size);
    CHECK_GE(bitset.capacity(), size); // rounded up
}

TEST_CASE("basic_dynamic_bitset::ctor: copy from inplace")
{
    dynamic_bitset from{dynamic_bitset::inplace_capacity};
    set_odd(from);

    dynamic_bitset to{from};

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_dynamic_bitset::ctor: copy from heap")
{
    dynamic_bitset from{dynamic_bitset::inplace_capacity + 1};
    set_odd(from);

    dynamic_bitset to{from};

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_dynamic_bitset::ctor: move from inplace")
{
    dynamic_bitset expected{odd_bitset(dynamic_bitset::inplace_capacity)};
    dynamic_bitset from{expected};

    dynamic_bitset to{std::move(from)};

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::ctor: move from heap")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity + 1};
    set_odd(expected);
    dynamic_bitset from{expected};

    dynamic_bitset to{std::move(from)};

    CHECK(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator=: copy from self is no-op")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity};
    set_odd(expected);

    dynamic_bitset to{expected};
    const dynamic_bitset* from_ptr = &to;
    to = *from_ptr;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator=: copy from inplace to self inplace")
{
    dynamic_bitset from{odd_bitset(dynamic_bitset::inplace_capacity)};
    dynamic_bitset to{even_bitset(dynamic_bitset::inplace_capacity)};

    to = from;

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_dynamic_bitset::operator=: copy from heap to self inplace")
{
    dynamic_bitset from{dynamic_bitset::inplace_capacity + 1};
    set_odd(from);
    dynamic_bitset to{dynamic_bitset::inplace_capacity};
    set_even(to);

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_dynamic_bitset::operator=: copy from inplace to self heap")
{
    dynamic_bitset from{dynamic_bitset::inplace_capacity};
    set_odd(from);
    dynamic_bitset to{dynamic_bitset::inplace_capacity + 1};
    set_even(to);

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
}

TEST_CASE("basic_dynamic_bitset::operator=: copy from heap to self heap")
{
    constexpr std::size_t to_size = (dynamic_bitset::inplace_capacity + 1) * 3;
    const std::size_t from_size = GENERATE(to_size - 1, to_size, to_size + 1, to_size + dynamic_bitset::inplace_capacity);

    dynamic_bitset from{from_size};
    set_odd(from);
    dynamic_bitset to{to_size};
    set_even(to);

    to = from;

    CHECK(to.is_heap());
    CHECK_EQ(to, from);
    CHECK_GE(to.capacity(), to_size);
}

TEST_CASE("basic_dynamic_bitset::operator=: move from self is no-op")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity + 1};
    set_odd(expected);
    dynamic_bitset to{expected};
    const dynamic_bitset* from_ptr = &to;

    to = std::move(*from_ptr);

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator=: move from inplace to self inplace")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity};
    set_odd(expected);
    dynamic_bitset from{expected};
    dynamic_bitset to{dynamic_bitset::inplace_capacity};
    set_even(to);

    to = std::move(from);

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator=: move from heap to self inplace")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity + 1};
    set_odd(expected);
    dynamic_bitset from{expected};
    dynamic_bitset to{dynamic_bitset::inplace_capacity};
    set_even(to);

    to = std::move(from);

    CHECK(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator=: move from inplace to self heap")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity};
    set_odd(expected);
    dynamic_bitset from{expected};
    dynamic_bitset to{dynamic_bitset::inplace_capacity + 1};
    set_even(to);

    to = std::move(from);

    CHECK_FALSE(to.is_heap());
    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator=: move from heap to self heap ")
{
    constexpr std::size_t to_size = (dynamic_bitset::inplace_capacity + 1) * 3;
    const std::size_t from_size = GENERATE(to_size - 1, to_size, to_size + 1);

    dynamic_bitset expected{from_size};
    set_odd(expected);
    dynamic_bitset from{expected};
    dynamic_bitset to{to_size};
    set_even(to);

    to = std::move(from);

    CHECK(to.is_heap());
    CHECK_EQ(to, expected);
    CHECK_GE(to.capacity(), expected.size());
}

TEST_CASE("basic_dynamic_bitset::operator&=: from self is no-op")
{
    dynamic_bitset expected{64};
    set_odd(expected);
    dynamic_bitset to{expected};
    const dynamic_bitset* from_ptr = &to;

    to &= (*from_ptr);

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator&=: empty")
{
    dynamic_bitset to;

    to &= dynamic_bitset();

    CHECK_EQ(to, dynamic_bitset());
}

TEST_CASE("basic_dynamic_bitset::operator&=: AND bits")
{
    dynamic_bitset expected{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_even(expected);
    dynamic_bitset from{expected};
    dynamic_bitset to{from.size()};
    to.set();

    to &= from;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator|=: empty")
{
    dynamic_bitset to;

    to |= dynamic_bitset();

    CHECK_EQ(to, dynamic_bitset());
}

TEST_CASE("basic_dynamic_bitset::operator|=: OR bits")
{
    dynamic_bitset expected{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    expected.set();
    dynamic_bitset from{expected.size()};
    set_odd(from);
    dynamic_bitset to{expected.size()};
    set_even(to);

    to |= from;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::operator^=: empty")
{
    dynamic_bitset to;

    to ^= dynamic_bitset();

    CHECK_EQ(to, dynamic_bitset());
}

TEST_CASE("basic_dynamic_bitset::operator^=: XOR bits")
{
    dynamic_bitset expected{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(expected);
    dynamic_bitset from{expected.size()};
    from.set();
    dynamic_bitset to{expected.size()};
    set_even(to);

    to ^= from;

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::all: none")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK_FALSE(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::all: partial")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    CHECK_FALSE(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::all: all")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set();

    CHECK(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::any: none")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK_FALSE(bitset.any());
}

TEST_CASE("basic_dynamic_bitset::any: partial")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    CHECK(bitset.any());
}

TEST_CASE("basic_dynamic_bitset::any: all")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set();

    CHECK(bitset.any());
}

TEST_CASE("basic_dynamic_bitset::none: none")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::none: partial")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    CHECK_FALSE(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::none: all")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set();

    CHECK_FALSE(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::count: none")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};

    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE("basic_dynamic_bitset::count: partial")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    CHECK_EQ(bitset.count(), bitset.size() / 2);
}

TEST_CASE("basic_dynamic_bitset::count: all")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set();

    CHECK_EQ(bitset.count(), bitset.size());
}

TEST_CASE("basic_dynamic_bitset::set(all): empty ")
{
    dynamic_bitset bitset;

    bitset.set();

    CHECK(bitset.empty());
    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE("basic_dynamic_bitset::set(all): sets all bits")
{
    dynamic_bitset bitset{64};

    bitset.set();

    CHECK(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::set(all): unused bits are masked out")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 5};

    bitset.set();

    CHECK(bitset.all());

    const auto blocks = bitset.blocks_view();
    const auto mask = (1ULL << 5) - 1;

    CHECK_EQ(blocks.back() & ~mask, 0);
}

TEST_CASE("basic_dynamic_bitset::set(bit_idx): sets a bit")
{
    dynamic_bitset bitset{64};

    bitset.set(3);

    CHECK_EQ(bitset.count(), 1);
    CHECK(bitset.test(3));
}

TEST_CASE("basic_dynamic_bitset::set(range): sets a range")
{
    static constexpr std::size_t range_start = 2;
    static constexpr std::size_t range_size = 6;

    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set(range_start, range_size);

    CHECK_EQ(bitset.count(), range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK(bitset.test(i));
    }
}

TEST_CASE("basic_dynamic_bitset::reset(all): resets all bits")
{
    dynamic_bitset bitset{64};
    set_odd(bitset);

    bitset.reset();

    CHECK(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::reset(bit_idx): resets a bit")
{
    dynamic_bitset bitset{64};
    bitset.set();

    bitset.reset(3);

    CHECK_EQ(bitset.count(), bitset.size() - 1);
    CHECK_FALSE(bitset.test(3));
}

TEST_CASE("basic_dynamic_bitset::reset(range): resets a range")
{
    static constexpr std::size_t range_start = 2;
    static constexpr std::size_t range_size = 6;

    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set();
    bitset.reset(range_start, range_size);

    CHECK_EQ(bitset.count(), bitset.size() - range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK_FALSE(bitset.test(i));
    }
}

TEST_CASE("basic_dynamic_bitset::flip(all): empty ")
{
    dynamic_bitset bitset;

    bitset.set();

    CHECK(bitset.empty());
    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE("basic_dynamic_bitset::flip(all): flips all bits")
{
    dynamic_bitset expected{64};
    set_even(expected);
    dynamic_bitset bitset{64};
    set_odd(bitset);

    bitset.flip();

    CHECK_EQ(bitset, expected);
}

TEST_CASE("basic_dynamic_bitset::flip(all): unused bits are masked out")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 5};

    bitset.set();

    CHECK(bitset.all());

    const auto blocks = bitset.blocks_view();
    const auto mask = (1ULL << 5) - 1;

    CHECK_EQ(blocks.back() & ~mask, 0);
}

TEST_CASE("basic_dynamic_bitset::flip(bit_idx): sets a bit")
{
    dynamic_bitset bitset{64};

    bitset.set(3);

    CHECK_EQ(bitset.count(), 1);
    CHECK(bitset.test(3));
}

TEST_CASE("basic_dynamic_bitset::flip(range): sets a range")
{
    static constexpr std::size_t range_start = 2;
    static constexpr std::size_t range_size = 6;

    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    bitset.set(range_start, range_size);

    CHECK_EQ(bitset.count(), range_size);

    for (std::size_t i = range_start; i < range_start + range_size; ++i)
    {
        CHECK(bitset.test(i));
    }
}

TEST_CASE("basic_dynamic_bitset::for_each_set: visits every set bit")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    dynamic_bitset visited{bitset.size()};
    bitset.for_each_set([&](std::size_t idx) { visited.set(idx); });

    CHECK_EQ(visited, bitset);
}

TEST_CASE("basic_dynamic_bitset::for_each_set: visits interrupt on return false")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    const std::size_t expected_count = (bitset.size() + 1) / 2;
    std::size_t count = 0;
    bitset.for_each_set([&count, expected_count](std::size_t idx [[maybe_unused]]) { return ++count < expected_count; });

    CHECK_EQ(count, expected_count);
}

TEST_CASE("basic_dynamic_bitset::for_each_unset: visits every unset bit")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    dynamic_bitset visited{bitset.size()};
    visited.set();
    bitset.for_each_unset([&](std::size_t idx) { visited.reset(idx); });

    CHECK_EQ(visited, bitset);
}

TEST_CASE("basic_dynamic_bitset::for_each_unset: visits interrupt on return false")
{
    dynamic_bitset bitset{GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size)};
    set_odd(bitset);

    const std::size_t expected_count = (bitset.size() + 1) / 2;
    std::size_t count = 0;
    bitset.for_each_unset([&count, expected_count](std::size_t idx [[maybe_unused]]) { return ++count < expected_count; });

    CHECK_EQ(count, expected_count);
}

TEST_CASE("basic_dynamic_bitset::swap: from self is no-op")
{
    dynamic_bitset expected{dynamic_bitset::inplace_capacity};
    set_odd(expected);

    dynamic_bitset to{expected};
    dynamic_bitset* from_ptr = &to;
    to.swap(*from_ptr);

    CHECK_EQ(to, expected);
}

TEST_CASE("basic_dynamic_bitset::swap: from inplace to self inplace")
{
    dynamic_bitset from{odd_bitset(dynamic_bitset::inplace_capacity)};
    dynamic_bitset to{even_bitset(dynamic_bitset::inplace_capacity)};

    to.swap(from);

    CHECK_EQ(from, even_bitset(dynamic_bitset::inplace_capacity));
    CHECK_EQ(to, odd_bitset(dynamic_bitset::inplace_capacity));
}

TEST_CASE("basic_dynamic_bitset::swap: from heap to self inplace")
{
    dynamic_bitset from{odd_bitset(dynamic_bitset::inplace_capacity + 1)};
    dynamic_bitset to{even_bitset(dynamic_bitset::inplace_capacity)};

    to.swap(from);

    CHECK_FALSE(from.is_heap());
    CHECK(to.is_heap());
    CHECK_EQ(from, even_bitset(dynamic_bitset::inplace_capacity));
    CHECK_EQ(to, odd_bitset(dynamic_bitset::inplace_capacity + 1));
}

TEST_CASE("basic_dynamic_bitset::swap: from inplace to self heap")
{
    dynamic_bitset from{odd_bitset(dynamic_bitset::inplace_capacity)};
    dynamic_bitset to{even_bitset(dynamic_bitset::inplace_capacity + 1)};

    to.swap(from);

    CHECK(from.is_heap());
    CHECK_FALSE(to.is_heap());
    CHECK_EQ(from, even_bitset(dynamic_bitset::inplace_capacity + 1));
    CHECK_EQ(to, odd_bitset(dynamic_bitset::inplace_capacity));
}

TEST_CASE("basic_dynamic_bitset::swap: from heap to self heap")
{
    constexpr std::size_t to_size = (dynamic_bitset::inplace_capacity + 1) * 3;
    const std::size_t from_size = GENERATE(to_size - 1, to_size, to_size + 1);

    dynamic_bitset from{odd_bitset(from_size)};
    dynamic_bitset to{even_bitset(to_size)};

    to.swap(from);

    CHECK(from.is_heap());
    CHECK(to.is_heap());
    CHECK_GE(from.capacity(), to_size);
    CHECK_GE(to.capacity(), from_size);
    CHECK_EQ(from, even_bitset(to_size));
    CHECK_EQ(to, odd_bitset(from_size));
}

TEST_CASE("basic_dynamic_bitset::reserve: stays inplace when reserving smaller")
{
    dynamic_bitset bitset;

    bitset.reserve(GENERATE(0, dynamic_bitset::inplace_capacity / 2, dynamic_bitset::inplace_capacity));

    CHECK_EQ(bitset.size(), 0);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(bitset.is_heap());
}

TEST_CASE("basic_dynamic_bitset::reserve: with size larger than inplace_capacity switch to heap")
{
    const std::size_t size = GENERATE(dynamic_bitset::inplace_capacity + 1, dynamic_bitset::inplace_capacity * 2);

    dynamic_bitset bitset;

    bitset.reserve(size);

    CHECK_EQ(bitset.size(), 0);
    CHECK_GE(bitset.capacity(), size);
    CHECK(bitset.is_heap());
}

TEST_CASE("basic_dynamic_bitset::reserve: grows existing heap capacity and preserves bits")
{
    const std::size_t size = dynamic_bitset::inplace_capacity + GENERATE(1, dynamic_bitset::bits_per_block + 1);
    const std::size_t new_size = size + dynamic_bitset::bits_per_block + 1;

    dynamic_bitset bitset{size};
    bitset.set();

    bitset.reserve(new_size);

    CHECK_GE(bitset.capacity(), new_size);
    CHECK_EQ(bitset.count(), size);

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK(bitset.test(i));
    }
}

TEST_CASE("basic_dynamic_bitset::resize: no-op when resizing to same size")
{
    dynamic_bitset bitset{odd_bitset(16)};

    bitset.resize(16);

    CHECK_EQ(bitset, odd_bitset(16));
}

TEST_CASE("basic_dynamic_bitset::resize(value = false): grow inplace")
{
    const std::size_t size = GENERATE(1, dynamic_bitset::inplace_capacity / 2, dynamic_bitset::inplace_capacity - 1);
    const std::size_t new_size = size + 1;

    dynamic_bitset bitset{size};
    bitset.set();

    bitset.resize(new_size);

    CHECK_EQ(bitset.size(), new_size);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_EQ(bitset.count(), size);

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK(bitset.test(i));
    }
}

TEST_CASE("basic_dynamic_bitset::resize(value = true): grow inplace")
{
    const std::size_t size = GENERATE(1, dynamic_bitset::inplace_capacity / 2, dynamic_bitset::inplace_capacity - 1);
    const std::size_t new_size = size + 1;

    dynamic_bitset bitset{size};
    bitset.set();

    bitset.resize(new_size, true);

    CHECK_EQ(bitset.size(), new_size);
    CHECK(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::resize(value = false): grow heap")
{
    const std::size_t size = dynamic_bitset::inplace_capacity / 2;
    const std::size_t new_size = size + GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);

    dynamic_bitset bitset{size};
    bitset.set();

    bitset.resize(new_size);

    CHECK_EQ(bitset.size(), new_size);
    CHECK_GE(bitset.capacity(), new_size);
    CHECK_EQ(bitset.count(), size);

    for (std::size_t i = 0; i < size; ++i)
    {
        CHECK(bitset.test(i));
    }
}

TEST_CASE("basic_dynamic_bitset::resize(value = true): grow heap")
{
    const std::size_t size = dynamic_bitset::inplace_capacity / 2;
    const std::size_t new_size = size + GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);

    dynamic_bitset bitset{size};
    bitset.set();

    CAPTURE(bitset);
    bitset.resize(new_size, true);
    CAPTURE(bitset);

    CHECK_EQ(bitset.size(), new_size);
    CHECK(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::resize(value = true): shrink")
{
    const std::size_t size = GENERATE(tail_only_blocks_size, full_only_blocks_size, full_and_tail_blocks_size);
    const std::size_t new_size = size - dynamic_bitset::bits_per_block / 2;

    dynamic_bitset bitset{size};
    bitset.set();

    bitset.resize(new_size, true);

    CHECK_EQ(bitset.size(), new_size);
    CHECK(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::clear: resets size")
{
    dynamic_bitset bitset{64};
    bitset.set();
    bitset.clear();

    CHECK_EQ(bitset.size(), 0);
}

TEST_CASE("basic_dynamic_bitset::clear: no-op when empty")
{
    dynamic_bitset bitset;

    bitset.clear();

    CHECK(bitset.empty());
}

TEST_CASE("basic_dynamic_bitset::comparison: compares lexicographically")
{
    dynamic_bitset lhs{16};
    dynamic_bitset rhs{16};

    lhs.set(5);
    rhs.set(7);

    CHECK(lhs < rhs);
    CHECK(rhs > lhs);
    CHECK(lhs != rhs);

    dynamic_bitset copy = lhs;
    CHECK(copy == lhs);

    dynamic_bitset bigger{32};
    bigger.set(20);
    CHECK(lhs < bigger);
}

} // namespace
} // namespace ant
