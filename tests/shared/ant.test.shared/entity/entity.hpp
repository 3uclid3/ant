#pragma once

#include <ant/entity/entity_layout.hpp>

namespace ant::test {

enum class entity8 : std::uint8_t
{
};

enum class entity16 : std::uint16_t
{
};

enum class entity32 : std::uint32_t
{
};

enum class entity64 : std::uint64_t
{
};

enum class unversioned_entity32 : std::uint32_t
{
};

enum class unversioned_entity64 : std::uint64_t
{
};

} // namespace ant::test

template<>
struct ant::entity_layout<ant::test::entity8> : ant::entity_integral_layout<4, 4>
{
    using value_type = ant::test::entity8;
};

template<>
struct ant::entity_layout<ant::test::entity16> : ant::entity_integral_layout<8, 8>
{
    using value_type = ant::test::entity16;
};

template<>
struct ant::entity_layout<ant::test::entity32> : ant::entity_integral_layout<16, 16>
{
    using value_type = ant::test::entity32;
};

template<>
struct ant::entity_layout<ant::test::entity64> : ant::entity_integral_layout<32, 32>
{
    using value_type = ant::test::entity64;
};

template<>
struct ant::entity_layout<ant::test::unversioned_entity32> : ant::entity_integral_layout<32, 0>
{
    using value_type = ant::test::unversioned_entity32;
};

template<>
struct ant::entity_layout<ant::test::unversioned_entity64> : ant::entity_integral_layout<64, 0>
{
    using value_type = ant::test::unversioned_entity64;
};
