#include <doctest/doctest.h>

#include <ant/core/detail/dynamic_bitset/v1/dynamic_bitset.hpp>

#include <cstdint>
#include <memory>
#include <utility>
#include <vector>

namespace ant::detail::dynamic_bitset { namespace {

using dynamic_bitset = v1::basic_dynamic_bitset<std::uint64_t, std::allocator<std::uint64_t>>;
using size_type = dynamic_bitset::size_type;

TEST_CASE("basic_dynamic_bitset::ctor: default")
{
    dynamic_bitset bitset;

    CHECK(bitset.empty());
    CHECK_EQ(bitset.size(), 0);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
}

TEST_CASE("basic_dynamic_bitset::ctor: with size smaller than inplace_capacity")
{
    constexpr auto size = dynamic_bitset::inplace_capacity - 1;

    dynamic_bitset bitset{size};

    CHECK_FALSE(bitset.empty());
    CHECK_EQ(bitset.size(), size);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
}

TEST_CASE("basic_dynamic_bitset::ctor: with size equal to inplace_capacity")
{
    dynamic_bitset bitset{dynamic_bitset::inplace_capacity};

    CHECK_FALSE(bitset.empty());
    CHECK_EQ(bitset.size(), dynamic_bitset::inplace_capacity);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
}

TEST_CASE("basic_dynamic_bitset::ctor: with size larger than inplace_capacity")
{
    constexpr auto size = dynamic_bitset::inplace_capacity + 50;

    dynamic_bitset bitset{size};

    CHECK_FALSE(bitset.empty());
    CHECK_EQ(bitset.size(), size);
    CHECK_GE(bitset.capacity(), size); // capacity may be rounded up
}

TEST_CASE("basic_dynamic_bitset::ctor: copy from inplace storage duplicates data")
{
    const auto size = dynamic_bitset::inplace_capacity - 8;

    dynamic_bitset original{size};
    original.set(0);
    original.set(size - 1);

    dynamic_bitset copy{original};

    CHECK_FALSE(original.is_heap());
    CHECK_FALSE(copy.is_heap());
    CHECK_EQ(copy.size(), original.size());
    CHECK(copy.test(0));
    CHECK(copy.test(size - 1));

    original.reset(size - 1);

    CHECK(copy.test(size - 1));
    CHECK_EQ(copy.count(), 2);
}

TEST_CASE("basic_dynamic_bitset::ctor: copy from heap storage performs deep copy")
{
    const auto size = dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block;

    dynamic_bitset original{size};
    original.set(3);
    original.set(size - 1);

    dynamic_bitset copy{original};

    CHECK(original.is_heap());
    CHECK(copy.is_heap());
    CHECK_EQ(copy.size(), original.size());
    CHECK(copy.test(3));
    CHECK(copy.test(size - 1));

    original.reset(3);

    CHECK(copy.test(3));
    CHECK_EQ(copy.count(), 2);
}

TEST_CASE("basic_dynamic_bitset::ctor: move preserves inplace storage")
{
    const auto size = dynamic_bitset::inplace_capacity - 4;

    dynamic_bitset original{size};
    original.set(2);
    original.set(size - 1);

    dynamic_bitset moved{std::move(original)};

    CHECK_FALSE(moved.is_heap());
    CHECK_EQ(moved.size(), size);
    CHECK(moved.test(2));
    CHECK(moved.test(size - 1));

    CHECK_EQ(original.size(), 0);
    CHECK_EQ(original.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(original.is_heap());
}

TEST_CASE("basic_dynamic_bitset::ctor: move transfers heap storage")
{
    const auto size = dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block;

    dynamic_bitset original{size};
    original.set(5);
    original.set(size - 3);

    dynamic_bitset moved{std::move(original)};

    CHECK(moved.is_heap());
    CHECK_EQ(moved.size(), size);
    CHECK(moved.test(5));
    CHECK(moved.test(size - 3));

    CHECK_EQ(original.size(), 0);
    CHECK_EQ(original.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(original.is_heap());
}

TEST_CASE("basic_dynamic_bitset::assign: copy switches to inplace storage when source fits")
{
    dynamic_bitset source{dynamic_bitset::inplace_capacity - 1};
    source.set(4);
    source.set(10);

    dynamic_bitset target{dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block};
    target.set(0);
    target.set(dynamic_bitset::inplace_capacity);

    CHECK(target.is_heap());

    target = source;

    CHECK_FALSE(target.is_heap());
    CHECK_EQ(target.size(), source.size());
    CHECK(target.test(4));
    CHECK(target.test(10));

    source.reset(10);

    CHECK(target.test(10));
    CHECK_EQ(target.count(), 2);
}

TEST_CASE("basic_dynamic_bitset::assign: copy grows to heap when needed")
{
    const auto size = dynamic_bitset::inplace_capacity + 5;

    dynamic_bitset source{size};
    source.set(1);
    source.set(size - 2);

    dynamic_bitset target{dynamic_bitset::inplace_capacity - 4};
    target.set(0);

    CHECK(source.is_heap());
    CHECK_FALSE(target.is_heap());

    target = source;

    CHECK(target.is_heap());
    CHECK_EQ(target.size(), source.size());
    CHECK(target.test(1));
    CHECK(target.test(size - 2));

    source.reset(1);

    CHECK(target.test(1));
    CHECK_EQ(target.count(), 2);
}

TEST_CASE("basic_dynamic_bitset::assign: move releases previous heap storage")
{
    dynamic_bitset source{dynamic_bitset::inplace_capacity - 6};
    source.set(3);
    source.set(7);

    dynamic_bitset target{dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block};
    target.set(0);
    target.set(dynamic_bitset::inplace_capacity);

    CHECK(target.is_heap());

    target = std::move(source);

    CHECK_FALSE(target.is_heap());
    CHECK_EQ(target.size(), dynamic_bitset::inplace_capacity - 6);
    CHECK(target.test(3));
    CHECK(target.test(7));

    CHECK_EQ(source.size(), 0);
    CHECK_EQ(source.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(source.is_heap());
}

TEST_CASE("basic_dynamic_bitset::assign: move transfers heap storage")
{
    const auto size = dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block;

    dynamic_bitset source{size};
    source.set(2);
    source.set(size - 4);

    dynamic_bitset target{dynamic_bitset::inplace_capacity - 2};
    target.set(1);

    CHECK(source.is_heap());
    CHECK_FALSE(target.is_heap());

    target = std::move(source);

    CHECK(target.is_heap());
    CHECK_EQ(target.size(), size);
    CHECK(target.test(2));
    CHECK(target.test(size - 4));

    CHECK_EQ(source.size(), 0);
    CHECK_EQ(source.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(source.is_heap());
}

TEST_CASE("basic_dynamic_bitset::operator&=: intersects bits")
{
    dynamic_bitset lhs{64};
    dynamic_bitset rhs{64};

    lhs.set(1);
    lhs.set(3);
    rhs.set(3);
    rhs.set(4);

    lhs &= rhs;

    CHECK_EQ(lhs.count(), 1);
    CHECK(lhs.test(3));
}

TEST_CASE("basic_dynamic_bitset::operator|=: unions bits")
{
    dynamic_bitset lhs{64};
    dynamic_bitset rhs{64};

    lhs.set(1);
    lhs.set(3);
    rhs.set(3);
    rhs.set(4);

    lhs |= rhs;

    CHECK(lhs.test(1));
    CHECK(lhs.test(3));
    CHECK(lhs.test(4));
    CHECK_EQ(lhs.count(), 3);
}

TEST_CASE("basic_dynamic_bitset::operator^=: computes symmetric difference")
{
    dynamic_bitset lhs{64};
    dynamic_bitset rhs{64};

    lhs.set(1);
    lhs.set(3);
    rhs.set(3);
    rhs.set(4);

    lhs ^= rhs;

    CHECK(lhs.test(1));
    CHECK_FALSE(lhs.test(3));
    CHECK(lhs.test(4));
    CHECK_EQ(lhs.count(), 2);
}

TEST_CASE("basic_dynamic_bitset::shift: left shift crosses block boundary")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 5};
    bitset.set(0);
    bitset.set(dynamic_bitset::bits_per_block);

    bitset <<= 3;

    CHECK(bitset.test(3));
    CHECK(bitset.test(dynamic_bitset::bits_per_block + 3));
    CHECK_FALSE(bitset.test(0));
}

TEST_CASE("basic_dynamic_bitset::shift: right shift crosses block boundary")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 5};
    bitset.set(dynamic_bitset::bits_per_block + 3);
    bitset.set(3);

    bitset >>= 5;

    CHECK(bitset.test(dynamic_bitset::bits_per_block - 2));
    CHECK_FALSE(bitset.test(3));
    CHECK_FALSE(bitset.test(dynamic_bitset::bits_per_block + 3));
}

TEST_CASE("basic_dynamic_bitset::shift: shifting by size clears bits")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 5};
    bitset.set(4);

    bitset >>= bitset.size();

    CHECK(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::all: empty bitset")
{
    dynamic_bitset bitset{32};

    CHECK_FALSE(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::all: partially populated")
{
    dynamic_bitset bitset{32};
    bitset.set(5);

    CHECK_FALSE(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::all: fully populated")
{
    dynamic_bitset bitset{32};
    bitset.set();

    CHECK(bitset.all());
    CHECK_EQ(bitset.count(), bitset.size());
}

TEST_CASE("basic_dynamic_bitset::any: empty bitset")
{
    dynamic_bitset bitset{32};

    CHECK_FALSE(bitset.any());
}

TEST_CASE("basic_dynamic_bitset::any: partially populated")
{
    dynamic_bitset bitset{32};
    bitset.set(5);

    CHECK(bitset.any());
}

TEST_CASE("basic_dynamic_bitset::any: fully populated")
{
    dynamic_bitset bitset{32};
    bitset.set();

    CHECK(bitset.any());
}

TEST_CASE("basic_dynamic_bitset::none: empty bitset")
{
    dynamic_bitset bitset{32};

    CHECK(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::none: partially populated")
{
    dynamic_bitset bitset{32};
    bitset.set(5);

    CHECK_FALSE(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::none: fully populated")
{
    dynamic_bitset bitset{32};
    bitset.set();

    CHECK_FALSE(bitset.none());
}

TEST_CASE("basic_dynamic_bitset::count: empty bitset returns zero")
{
    dynamic_bitset bitset{48};

    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE("basic_dynamic_bitset::count: tracks number of set bits")
{
    dynamic_bitset bitset{48};
    bitset.set(2);
    bitset.set(17);
    bitset.set(32);

    CHECK_EQ(bitset.count(), 3);
}

TEST_CASE("basic_dynamic_bitset::count: updates after resetting bits")
{
    dynamic_bitset bitset{48};
    bitset.set();
    bitset.reset(0);
    bitset.reset(47);

    CHECK_EQ(bitset.count(), bitset.size() - 2);
}

TEST_CASE("basic_dynamic_bitset::set: sets bits within bounds")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block * 2};

    bitset.set(0);
    bitset.set(dynamic_bitset::bits_per_block - 1);
    bitset.set(bitset.size() - 1);

    CHECK(bitset.test(0));
    CHECK(bitset.test(dynamic_bitset::bits_per_block - 1));
    CHECK(bitset.test(bitset.size() - 1));
    CHECK_EQ(bitset.count(), 3);
}

TEST_CASE("basic_dynamic_bitset::set: sets ranges across blocks")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block * 2};

    const auto start = dynamic_bitset::bits_per_block - 3;
    const auto len = 6U;
    bitset.set(start, len);

    for (size_type i = 0; i < bitset.size(); ++i)
    {
        if (i >= start && i < start + len)
        {
            CHECK(bitset.test(i));
        }
        else
        {
            CHECK_FALSE(bitset.test(i));
        }
    }
}

TEST_CASE("basic_dynamic_bitset::reset: clears a single bit")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 8};
    bitset.set();

    bitset.reset(3);

    CHECK_FALSE(bitset.test(3));
    CHECK_EQ(bitset.count(), bitset.size() - 1);
}

TEST_CASE("basic_dynamic_bitset::reset: clears a range")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 8};
    bitset.set();

    bitset.reset(dynamic_bitset::bits_per_block - 2, 5);

    for (size_type i = dynamic_bitset::bits_per_block - 2; i < dynamic_bitset::bits_per_block + 3; ++i)
    {
        CHECK_FALSE(bitset.test(i));
    }
    CHECK_EQ(bitset.count(), bitset.size() - 5);
}

TEST_CASE("basic_dynamic_bitset::flip: toggles a single bit")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 1};
    bitset.set(1);

    bitset.flip(1);

    CHECK_FALSE(bitset.test(1));
    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE("basic_dynamic_bitset::flip: toggles a range")
{
    dynamic_bitset bitset{dynamic_bitset::bits_per_block + 1};
    bitset.set(dynamic_bitset::bits_per_block);

    bitset.flip(0, dynamic_bitset::bits_per_block + 1);

    CHECK(bitset.test(1));
    CHECK_FALSE(bitset.test(dynamic_bitset::bits_per_block));
    CHECK_EQ(bitset.count(), dynamic_bitset::bits_per_block);
}

TEST_CASE("basic_dynamic_bitset::for_each_set: visits every set bit")
{
    dynamic_bitset bitset{32};
    bitset.set(2);
    bitset.set(10);
    bitset.set(25);

    std::vector<std::size_t> visited;
    bitset.for_each_set([&](std::size_t idx) {
        visited.push_back(idx);
        return true;
    });

    CHECK_EQ(visited, std::vector<std::size_t>{2, 10, 25});
}

TEST_CASE("basic_dynamic_bitset::for_each_set: stops when callback returns false")
{
    dynamic_bitset bitset{32};
    bitset.set(2);
    bitset.set(10);
    bitset.set(25);

    std::vector<std::size_t> visited;
    bitset.for_each_set([&](std::size_t idx) {
        visited.push_back(idx);
        return visited.size() < 2;
    });

    CHECK_EQ(visited, std::vector<std::size_t>{2, 10});
}

TEST_CASE("basic_dynamic_bitset::for_each_unset: iterates over unset bits")
{
    dynamic_bitset bitset{8};
    bitset.set(0);
    bitset.set(7);

    std::vector<std::size_t> visited;
    bitset.for_each_unset([&](std::size_t idx) {
        visited.push_back(idx);
    });

    CHECK_EQ(visited, std::vector<std::size_t>{1, 2, 3, 4, 5, 6});
}

TEST_CASE("basic_dynamic_bitset::swap: exchanges inplace and heap storage")
{
    dynamic_bitset inplace_bitset{32};
    inplace_bitset.set(5);

    dynamic_bitset heap_bitset{dynamic_bitset::inplace_capacity + 10};
    heap_bitset.set(70);

    inplace_bitset.swap(heap_bitset);

    CHECK(heap_bitset.test(5));
    CHECK_FALSE(heap_bitset.is_heap());
    CHECK(inplace_bitset.test(70));
    CHECK(inplace_bitset.is_heap());
}

TEST_CASE("basic_dynamic_bitset::reserve: stays inplace when reserving smaller")
{
    dynamic_bitset bitset;

    bitset.reserve(dynamic_bitset::inplace_capacity - 10);

    CHECK_EQ(bitset.size(), 0);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(bitset.is_heap());
}

TEST_CASE("basic_dynamic_bitset::reserve: stays inplace when reserving equal")
{
    dynamic_bitset bitset;

    bitset.reserve(dynamic_bitset::inplace_capacity);

    CHECK_EQ(bitset.size(), 0);
    CHECK_EQ(bitset.capacity(), dynamic_bitset::inplace_capacity);
    CHECK_FALSE(bitset.is_heap());
}

TEST_CASE("basic_dynamic_bitset::reserve: with size larger than inplace_capacity switch to heap")
{
    constexpr auto size = dynamic_bitset::inplace_capacity + 50;

    dynamic_bitset bitset;

    bitset.reserve(size);

    CHECK_EQ(bitset.size(), 0);
    CHECK_GE(bitset.capacity(), size);
    CHECK(bitset.is_heap());
}

TEST_CASE("basic_dynamic_bitset::reserve: preserves data when growing")
{
    dynamic_bitset bitset{dynamic_bitset::inplace_capacity};
    bitset.set(10);
    bitset.set(dynamic_bitset::inplace_capacity - 1);

    bitset.reserve(dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block);

    CHECK(bitset.is_heap());
    CHECK_EQ(bitset.size(), dynamic_bitset::inplace_capacity);
    CHECK(bitset.test(10));
    CHECK(bitset.test(dynamic_bitset::inplace_capacity - 1));
    CHECK_GE(bitset.capacity(), dynamic_bitset::inplace_capacity + dynamic_bitset::bits_per_block);
}

TEST_CASE("basic_dynamic_bitset::resize: grow fills new bits when value true")
{
    dynamic_bitset bitset{16};
    bitset.set(3);

    bitset.resize(24, true);

    CHECK(bitset.test(3));
    for (size_type i = 16; i < 24; ++i)
    {
        CHECK(bitset.test(i));
    }
    CHECK_EQ(bitset.count(), 9);
}

TEST_CASE("basic_dynamic_bitset::resize: shrink drops bits above new size")
{
    dynamic_bitset bitset{24};
    bitset.set(3);
    bitset.set(12);

    bitset.resize(10);

    CHECK_EQ(bitset.size(), 10);
    CHECK(bitset.test(3));
    CHECK_FALSE(bitset.test(9));
    CHECK_EQ(bitset.count(), 1);
}

TEST_CASE("basic_dynamic_bitset::resize: shrink clears tail bits down to mid size")
{
    dynamic_bitset bitset{40};
    bitset.set();

    bitset.resize(13);

    CHECK_EQ(bitset.size(), 13);
    CHECK(bitset.all());
}

TEST_CASE("basic_dynamic_bitset::resize: shrink clears tail bits down to small size")
{
    dynamic_bitset bitset{40};
    bitset.set();

    bitset.resize(5);

    CHECK_EQ(bitset.size(), 5);
    CHECK(bitset.all());
    CHECK_EQ(bitset.count(), bitset.size());
}

TEST_CASE("basic_dynamic_bitset::clear: resets size and bits")
{
    dynamic_bitset bitset{64};
    bitset.set();
    bitset.clear();

    CHECK_EQ(bitset.size(), 0);
    CHECK(bitset.none());
    CHECK_EQ(bitset.count(), 0);
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

}} // namespace ant::detail::dynamic_bitset
