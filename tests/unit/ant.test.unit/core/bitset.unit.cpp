#include <doctest/doctest.h>

#include <ant/core/bitset.hpp>

#include <cstdint>
#include <memory>

namespace ant { namespace {

template<typename T>
using basic_bitset = ant::basic_bitset<T, std::allocator<T>>;

TEST_CASE_TEMPLATE("basic_bitset::ctor: default", T, std::uint32_t, std::uint64_t)
{
    const basic_bitset<T> bitset;

    CHECK_EQ(bitset.size(), 0);
    CHECK_EQ(bitset.count(), 0);
    CHECK(bitset.none());
    CHECK(bitset.all());
}

TEST_CASE_TEMPLATE("basic_bitset::ctor: with size", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{128};

    CHECK_EQ(bitset.size(), 128);
    CHECK_EQ(bitset.count(), 0);
    CHECK(bitset.none());
    CHECK_FALSE(bitset.all());
}

TEST_CASE_TEMPLATE("basic_bitset::ctor: keeps logical size (no rounding)", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{127};

    CHECK_EQ(bitset.size(), 127);
}

TEST_CASE_TEMPLATE("basic_bitset::set: sets bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(0);
    bitset.set(5);
    bitset.set(63);

    CHECK(bitset.test(0));
    CHECK(bitset.test(5));
    CHECK(bitset.test(63));
}

TEST_CASE_TEMPLATE("basic_bitset::set: grows storage", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(65);

    CHECK_GT(bitset.size(), 64);
    CHECK(bitset.test(65));
}

TEST_CASE_TEMPLATE("basic_bitset::test: unset returns false", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(0);
    bitset.set(5);

    CHECK_FALSE(bitset.test(7));
}

TEST_CASE_TEMPLATE("basic_bitset::unset: clears bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(10);
    bitset.unset(10);

    CHECK_FALSE(bitset.test(10));
}

TEST_CASE_TEMPLATE("basic_bitset::count: counts set bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(0);
    bitset.set(5);
    bitset.set(63);

    CHECK_EQ(bitset.count(), 3);
}

// (moved to group with all())

// (moved to group with resize())

TEST_CASE_TEMPLATE("basic_bitset::none: detects no bits set", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{128};
    CHECK(bitset.none());

    bitset.set(64);
    CHECK_FALSE(bitset.none());
}

TEST_CASE_TEMPLATE("basic_bitset::all: detects all bits set", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};
    CHECK_FALSE(bitset.all());

    for (std::size_t i = 0; i < bitset.size(); ++i)
    {
        bitset.set(i);
    }

    CHECK(bitset.all());
}

TEST_CASE_TEMPLATE("basic_bitset::all: ignores unused bits in last block", T, std::uint32_t, std::uint64_t)
{
    constexpr std::size_t total = sizeof(T) * 8 + 6; // one full block + 6 bits
    basic_bitset<T> bitset{total};

    for (std::size_t i = 0; i < total; ++i)
    {
        bitset.set(i);
    }
    CHECK(bitset.all());
    CHECK_EQ(bitset.count(), total);
}

TEST_CASE_TEMPLATE("basic_bitset::resize: keeps logical size (no rounding)", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset;
    bitset.resize(127);

    CHECK_EQ(bitset.size(), 127);
}

TEST_CASE_TEMPLATE("basic_bitset::resize: shrinking within a block keeps lower bits only", T, std::uint32_t, std::uint64_t)
{
    constexpr std::size_t block = sizeof(T) * 8;
    basic_bitset<T> bitset{block};

    // set all bits
    for (std::size_t i = 0; i < bitset.size(); ++i)
    {
        bitset.set(i);
    }
    CHECK(bitset.all());

    // shrink within the same block
    bitset.resize(block - 3);
    CHECK_EQ(bitset.size(), block - 3);
    CHECK(bitset.all());
}

TEST_CASE_TEMPLATE("basic_bitset::size: grows when setting beyond current size", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    CHECK_EQ(bitset.size(), 64);
    bitset.set(70);
    CHECK_EQ(bitset.size(), 71);
}

TEST_CASE_TEMPLATE("basic_bitset::resize: shrinks", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{128};

    bitset.set(3);
    bitset.set(70);

    bitset.resize(64);
    CHECK_EQ(bitset.size(), 64);

    CHECK(bitset.test(3));
    CHECK_FALSE(bitset.test(70));
}

TEST_CASE_TEMPLATE("basic_bitset::for_each_set: visits set bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{16};

    // Set a few bits
    bitset.set(0);
    bitset.set(5);
    bitset.set(15);

    std::vector<std::size_t> visited;
    bitset.for_each_set([&](std::size_t idx) {
        visited.push_back(idx);
    });

    std::vector<std::size_t> expected{0, 5, 15};
    CHECK_EQ(visited, expected);
}

TEST_CASE_TEMPLATE("basic_bitset::for_each_unset: visits unset bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{8};

    // Set some bits, leaving others unset
    bitset.set(1);
    bitset.set(3);

    std::vector<std::size_t> visited;
    bitset.for_each_unset([&](std::size_t idx) {
        visited.push_back(idx);
    });

    std::vector<std::size_t> expected{0, 2, 4, 5, 6, 7};
    CHECK_EQ(visited, expected);
}

TEST_CASE_TEMPLATE("basic_bitset::for_each_set: interruptible", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{32};
    bitset.set(2);
    bitset.set(3);
    bitset.set(30);

    std::vector<std::size_t> visited;
    bitset.for_each_set([&](std::size_t idx) {
        visited.push_back(idx);
        return visited.size() < 2; // stop after collecting two
    });

    std::vector<std::size_t> expected{2, 3};
    CHECK_EQ(visited, expected);
}

TEST_CASE_TEMPLATE("basic_bitset::for_each_unset: interruptible", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{8};
    bitset.set(0);
    bitset.set(1);

    std::vector<std::size_t> visited;
    bitset.for_each_unset([&](std::size_t idx) {
        visited.push_back(idx);
        return visited.size() < 3; // stop after three
    });

    std::vector<std::size_t> expected{2, 3, 4};
    CHECK_EQ(visited, expected);
}

TEST_CASE_TEMPLATE("basic_bitset::set_all: sets every logical bit", T, std::uint32_t, std::uint64_t)
{
    const std::size_t block = sizeof(T) * 8;
    const std::size_t total = block + 5; // crosses a block boundary
    basic_bitset<T> bitset{total};

    // Start with some random pattern
    bitset.set(0);
    bitset.set(block - 1);
    bitset.unset(0);

    bitset.set_all();

    CHECK(bitset.all());
    CHECK_EQ(bitset.count(), total);
    CHECK(bitset.test(0));
    CHECK(bitset.test(block - 1));
    CHECK(bitset.test(block));
    CHECK(bitset.test(total - 1));
}

TEST_CASE_TEMPLATE("basic_bitset::unset_all: clears all logical bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{73};
    bitset.set(0);
    bitset.set(3);
    bitset.set(72);

    bitset.unset_all();

    CHECK(bitset.none());
    CHECK_EQ(bitset.count(), 0);
    CHECK_FALSE(bitset.test(0));
    CHECK_FALSE(bitset.test(3));
    CHECK_FALSE(bitset.test(72));
}

TEST_CASE_TEMPLATE("basic_bitset::set_all: empty bitset is a no-op", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{};
    bitset.set_all();
    CHECK_EQ(bitset.size(), 0);
    CHECK(bitset.none());
    CHECK(bitset.all());
    CHECK_EQ(bitset.count(), 0);
}

TEST_CASE_TEMPLATE("basic_bitset::set_all: respects grown logical size", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{8};
    bitset.set(12); // grows logical size to 13
    CHECK_EQ(bitset.size(), 13);

    bitset.set_all();
    CHECK(bitset.all());
    CHECK_EQ(bitset.count(), 13);
}

}} // namespace ant
