#include <ant/detail/entity/entity_traits.hpp>
#include <doctest/doctest.h>

#include <cstdint>

namespace ant::detail { namespace {

TEST_CASE("compute_entity_mask: zero bits always produces zero")
{
    CHECK(compute_entity_mask<std::uint8_t>(0, 0) == 0x00u);
    CHECK(compute_entity_mask<std::uint8_t>(0, 4) == 0x00u);
    CHECK(compute_entity_mask<std::uint16_t>(0, 0) == 0x0000u);
    CHECK(compute_entity_mask<std::uint32_t>(0, 0) == 0x00000000u);
    CHECK(compute_entity_mask<std::uint64_t>(0, 0) == 0x0000000000000000ull);
}

TEST_CASE("compute_entity_mask: all bits with no shift produces all-ones")
{
    CHECK(compute_entity_mask<std::uint8_t>(8, 0) == 0xFFu);
    CHECK(compute_entity_mask<std::uint16_t>(16, 0) == 0xFFFFu);
    CHECK(compute_entity_mask<std::uint32_t>(32, 0) == 0xFFFFFFFFu);
    CHECK(compute_entity_mask<std::uint64_t>(64, 0) == 0xFFFFFFFFFFFFFFFFull);
}

TEST_CASE("compute_entity_mask: partial bits with no shift")
{
    CHECK(compute_entity_mask<std::uint8_t>(1, 0) == 0x01u);
    CHECK(compute_entity_mask<std::uint8_t>(4, 0) == 0x0Fu);
    CHECK(compute_entity_mask<std::uint8_t>(7, 0) == 0x7Fu);
    CHECK(compute_entity_mask<std::uint16_t>(8, 0) == 0x00FFu);
    CHECK(compute_entity_mask<std::uint32_t>(16, 0) == 0x0000FFFFu);
    CHECK(compute_entity_mask<std::uint64_t>(32, 0) == 0x00000000FFFFFFFFull);
}

TEST_CASE("compute_entity_mask: partial bits with shift")
{
    CHECK(compute_entity_mask<std::uint8_t>(1, 4) == 0x10u);
    CHECK(compute_entity_mask<std::uint8_t>(4, 4) == 0xF0u);
    CHECK(compute_entity_mask<std::uint8_t>(3, 2) == 0x1Cu);
    CHECK(compute_entity_mask<std::uint16_t>(8, 8) == 0xFF00u);
    CHECK(compute_entity_mask<std::uint32_t>(8, 8) == 0x0000FF00u);
    CHECK(compute_entity_mask<std::uint32_t>(16, 16) == 0xFFFF0000u);
    CHECK(compute_entity_mask<std::uint64_t>(32, 32) == 0xFFFFFFFF00000000ull);
}

TEST_CASE("compute_entity_mask: bits + shift >= type width fills remaining bits")
{
    // bits count exceeds remaining bits after shift -> saturates to ~T{0} << shift
    CHECK(compute_entity_mask<std::uint8_t>(8, 4) == 0xF0u);
    CHECK(compute_entity_mask<std::uint8_t>(5, 4) == 0xF0u);
    CHECK(compute_entity_mask<std::uint16_t>(16, 8) == 0xFF00u);
    CHECK(compute_entity_mask<std::uint32_t>(32, 16) == 0xFFFF0000u);
    CHECK(compute_entity_mask<std::uint64_t>(64, 32) == 0xFFFFFFFF00000000ull);
}

TEST_CASE("compute_entity_mask: single-bit mask at each position (uint8_t)")
{
    CHECK(compute_entity_mask<std::uint8_t>(1, 0) == 0x01u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 1) == 0x02u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 2) == 0x04u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 3) == 0x08u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 4) == 0x10u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 5) == 0x20u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 6) == 0x40u);
    CHECK(compute_entity_mask<std::uint8_t>(1, 7) == 0x80u);
}

TEST_CASE("compute_entity_mask: signed integral types")
{
    CHECK(compute_entity_mask<std::int8_t>(4, 0) == static_cast<std::int8_t>(0x0F));
    CHECK(compute_entity_mask<std::int32_t>(16, 0) == static_cast<std::int32_t>(0x0000FFFF));
    CHECK(compute_entity_mask<std::int32_t>(16, 16) == static_cast<std::int32_t>(0xFFFF0000u));
}

TEST_CASE("entity_traits::construct: assigns index and version")
{
    auto index = GENERATE(0U, entity_traits::index_max);
    auto version = GENERATE(0U, entity_traits::version_max);

    CAPTURE(index);
    CAPTURE(version);

    auto entity = entity_traits::construct(index, version);

    CHECK_EQ(entity_traits::to_index(entity), index);
    CHECK_EQ(entity_traits::to_version(entity), version);
}

TEST_CASE("entity_traits::bump: increments version")
{
    auto index = GENERATE(0U, entity_traits::index_max);
    auto version = GENERATE(0U, 1U);

    CAPTURE(index);
    CAPTURE(version);

    auto entity = entity_traits::construct(index, version);
    auto bumped = entity_traits::bump(entity);

    CHECK_EQ(entity_traits::to_index(bumped), index);
    CHECK_EQ(entity_traits::to_version(bumped), version + 1);
}

TEST_CASE("entity_traits::bump: wraps around when version exceeds max")
{
    auto index = GENERATE(0U, entity_traits::index_max);

    CAPTURE(index);

    auto entity = entity_traits::construct(index, entity_traits::version_max);
    auto bumped = entity_traits::bump(entity);

    CHECK_EQ(entity_traits::to_index(bumped), index);
    CHECK_EQ(entity_traits::to_version(bumped), 0);
}

}} // namespace ant::detail
