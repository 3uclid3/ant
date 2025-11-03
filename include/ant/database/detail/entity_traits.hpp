#pragma once

#include <cstdint>

#include <ant/core/bit.hpp>
#include <ant/database/entity.hpp>

namespace ant::detail {

struct entity_traits
{
    using value_type = entity;

    using integral_type = std::uint64_t;
    using identifier_type = integral_type;
    using version_type = integral_type;

    static constexpr std::size_t identifier_bits{32};
    static constexpr std::size_t version_bits{32};

    static constexpr std::size_t identifier_shift{0};
    static constexpr std::size_t version_shift{identifier_bits};

    static constexpr integral_type identifier_mask{compute_mask<integral_type>(identifier_bits, identifier_shift)};
    static constexpr integral_type version_mask{compute_mask<integral_type>(version_bits, version_shift)};

    static constexpr integral_type identifier_max{(identifier_mask >> identifier_shift) - 1};
    static constexpr integral_type version_max{(version_mask >> version_shift) - 1};

    [[nodiscard]] static constexpr auto to_integral(value_type value) noexcept -> integral_type;
    [[nodiscard]] static constexpr auto to_identifier(value_type value) noexcept -> identifier_type;
    [[nodiscard]] static constexpr auto to_version(value_type value) noexcept -> version_type;

    [[nodiscard]] static constexpr auto construct(identifier_type value, version_type version = {}) noexcept -> value_type;
    [[nodiscard]] static constexpr auto bump(value_type value) noexcept -> value_type;

    static_assert(sizeof(value_type) <= sizeof(integral_type), "value_type must fit within integral_type");
    static_assert(identifier_bits + version_bits <= sizeof(integral_type) * 8, "Not enough bits in integral_type");
    static_assert((identifier_mask & version_mask) == 0, "identifier and version overlap");
    static_assert(identifier_mask < version_mask, "identifier must occupy lower bits");
};

constexpr auto entity_traits::to_integral(value_type value) noexcept -> integral_type
{
    return static_cast<integral_type>(value);
}

constexpr auto entity_traits::to_identifier(value_type value) noexcept -> identifier_type
{
    const auto integral = to_integral(value);
    return static_cast<identifier_type>((integral & identifier_mask) >> identifier_shift);
}

constexpr auto entity_traits::to_version(value_type value) noexcept -> version_type
{
    const auto integral = to_integral(value);
    return static_cast<version_type>((integral & version_mask) >> version_shift);
}

constexpr auto entity_traits::construct(identifier_type identifier, version_type version [[maybe_unused]]) noexcept -> value_type
{
    return static_cast<value_type>(
        ((static_cast<integral_type>(identifier) << identifier_shift) % identifier_mask) | ((static_cast<integral_type>(version) << version_shift) % version_mask));
}

constexpr auto entity_traits::bump(value_type value) noexcept -> value_type
{
    const identifier_type identifier = to_identifier(value);
    const version_type version = to_version(value);
    const version_type new_version = static_cast<version_type>((version + 1) % version_mask);
    return construct(identifier, new_version);
}

} // namespace ant::detail
