#include <doctest/doctest.h>

#include <ant/core/bitset.hpp>

#include <cstdint>
#include <memory>

namespace ant { namespace {

template<typename T>
using basic_bitset = ant::basic_bitset<T, std::allocator<T>>;

TEST_CASE_TEMPLATE("bitset: default ctor", T, std::uint32_t, std::uint64_t)
{
    const basic_bitset<T> bitset;

    CHECK_EQ(bitset.size(), 0);
    CHECK_EQ(bitset.count(), 0);
    CHECK(bitset.none());
    CHECK(bitset.all());
}

TEST_CASE_TEMPLATE("bitset: ctor", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{128};

    CHECK_EQ(bitset.size(), 128);
    CHECK_EQ(bitset.count(), 0);
    CHECK(bitset.none());
    CHECK_FALSE(bitset.all());
}

TEST_CASE_TEMPLATE("bitset: ctor round to next block", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{127};

    CHECK_EQ(bitset.size(), 128);
}

TEST_CASE_TEMPLATE("bitset::set", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(0);
    bitset.set(5);
    bitset.set(63);

    CHECK(bitset.test(0));
    CHECK(bitset.test(5));
    CHECK(bitset.test(63));
}

TEST_CASE_TEMPLATE("bitset: set grows storage", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(65);

    CHECK_GT(bitset.size(), 64);
    CHECK(bitset.test(65));
}

TEST_CASE_TEMPLATE("bitset::test ", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(0);
    bitset.set(5);

    CHECK_FALSE(bitset.test(7));
}

TEST_CASE_TEMPLATE("bitset::unset: clears bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(10);
    bitset.unset(10);

    CHECK_FALSE(bitset.test(10));
}

TEST_CASE_TEMPLATE("bitset::count: counts set bits", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};

    bitset.set(0);
    bitset.set(5);
    bitset.set(63);

    CHECK_EQ(bitset.count(), 3);
}

TEST_CASE_TEMPLATE("bitset::none: ", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{128};
    CHECK(bitset.none());

    bitset.set(64);
    CHECK_FALSE(bitset.none());
}

TEST_CASE_TEMPLATE("bitset::all: ", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{64};
    CHECK_FALSE(bitset.all());

    for (std::size_t i = 0; i < bitset.size(); ++i)
    {
        bitset.set(i);
    }

    CHECK(bitset.all());
}

TEST_CASE_TEMPLATE("bitset::resize: round to next block", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset;
    bitset.resize(127);

    CHECK_EQ(bitset.size(), 128);
}

TEST_CASE_TEMPLATE("bitset::resize: shrinks", T, std::uint32_t, std::uint64_t)
{
    basic_bitset<T> bitset{128};

    bitset.set(3);
    bitset.set(70);

    bitset.resize(64);
    CHECK_EQ(bitset.size(), 64);

    CHECK(bitset.test(3));
    CHECK_FALSE(bitset.test(70));
}

}} // namespace ant
