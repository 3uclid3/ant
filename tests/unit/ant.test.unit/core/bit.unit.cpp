#include <ant/core/bit.hpp>

#include <ant.test.shared/doctest.hpp>

namespace ant { namespace {

TEST_CASE_TEMPLATE("compute_mask", T, std::uint8_t, std::uint16_t, std::uint32_t, std::uint64_t)
{
    if constexpr (sizeof(T) >= 1)
    {
        CHECK_EQ(compute_mask<T>(1), 0x01);
        CHECK_EQ(compute_mask<T>(1, 1), 0x02);
    }

    if constexpr (sizeof(T) >= 2)
    {
        CHECK_EQ(compute_mask<T>(9), 0x01FF);
        CHECK_EQ(compute_mask<T>(9, 3), 0x0FF8);
    }

    if constexpr (sizeof(T) >= 4)
    {
        CHECK_EQ(compute_mask<T>(17), 0x0001'FFFF);
        CHECK_EQ(compute_mask<T>(17, 5), 0x003F'FFE0);
    }

    if constexpr (sizeof(T) >= 8)
    {
        CHECK_EQ(compute_mask<T>(33), 0x0000'0001'FFFF'FFFF);
        CHECK_EQ(compute_mask<T>(33, 7), 0x0000'00FF'FFFF'FF80);
    }
}

TEST_CASE_TEMPLATE("compute_mask: saturating branch", T, std::uint8_t, std::uint16_t, std::uint32_t, std::uint64_t)
{
    if constexpr (sizeof(T) >= 1)
    {
        CHECK_EQ(compute_mask<T>(8), static_cast<T>(0xFF));
        CHECK_EQ(compute_mask<T>(5, 3), static_cast<T>(0xF8));
    }

    if constexpr (sizeof(T) >= 2)
    {
        CHECK_EQ(compute_mask<T>(16), static_cast<T>(0xFFFF));
        CHECK_EQ(compute_mask<T>(9, 7), static_cast<T>(0xFF80));
    }

    if constexpr (sizeof(T) >= 4)
    {
        CHECK_EQ(compute_mask<T>(32), static_cast<T>(0xFFFF'FFFF));
        CHECK_EQ(compute_mask<T>(27, 5), static_cast<T>(0xFFFF'FFE0));
    }

    if constexpr (sizeof(T) >= 8)
    {
        CHECK_EQ(compute_mask<T>(64), static_cast<T>(0xFFFF'FFFF'FFFF'FFFF));
        CHECK_EQ(compute_mask<T>(57, 7), static_cast<T>(0xFFFF'FFFF'FFFF'FF80));
    }
}

}} // namespace ant
