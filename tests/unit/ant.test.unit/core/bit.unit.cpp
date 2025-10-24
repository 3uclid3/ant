#include <doctest/doctest.h>

#include <ant/core/bit.hpp>

namespace ant { namespace {

TEST_CASE_TEMPLATE("compute_mask", T, std::uint8_t, std::uint16_t, std::uint32_t, std::uint64_t)
{
    if constexpr (sizeof(T) >= 1)
    {
        CHECK_EQ(compute_mask<T>(1), 0x01);
        CHECK_EQ(compute_mask<T>(1, 1), 0x01 << 1);
    }

    if constexpr (sizeof(T) >= 2)
    {
        CHECK_EQ(compute_mask<T>(9), 0x01FF);
        CHECK_EQ(compute_mask<T>(9, 3), 0x01FF << 3);
    }

    if constexpr (sizeof(T) >= 4)
    {
        CHECK_EQ(compute_mask<T>(17), 0x0001'FFFF);
        CHECK_EQ(compute_mask<T>(17, 5), 0x0001'FFFF << 5);
    }

    if constexpr (sizeof(T) >= 8)
    {
        CHECK_EQ(compute_mask<T>(33), 0x0000'0001'FFFF'FFFF);
        CHECK_EQ(compute_mask<T>(33, 7), 0x0000'0001'FFFF'FFFF << 7);
    }
}

}} // namespace ant
