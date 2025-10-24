#pragma once

#include <type_traits>

#include <ant/core/bit.hpp>

namespace ant {

template<std::size_t IdentifierBits, std::size_t VersionBits>
struct entity_integral_layout
{
    using integral_type = uint_for_bits_t<IdentifierBits + VersionBits>;

    using identifier_type = uint_for_bits_t<IdentifierBits>;
    using version_type = uint_for_bits_t<VersionBits>;

    static constexpr std::size_t identifier_bits{IdentifierBits};
    static constexpr std::size_t version_bits{VersionBits};

    static constexpr std::size_t identifier_shift{0};
    static constexpr std::size_t version_shift{identifier_bits};

    static constexpr integral_type identifier_mask{compute_mask<integral_type>(identifier_bits, identifier_shift)};
    static constexpr integral_type version_mask{compute_mask<integral_type>(version_bits, version_shift)};

    static constexpr integral_type identifier_max{(identifier_mask >> identifier_shift) - 1};
    static constexpr integral_type version_max{(version_mask >> version_shift) - 1};

    static constexpr bool is_versioned{true};

    static_assert((identifier_mask & version_mask) == 0, "identifier and version overlap");
    static_assert(identifier_mask < version_mask, "identifier must occupy lower bits");
};

template<std::size_t IdentifierBit>
struct entity_integral_layout<IdentifierBit, 0>
{
    using integral_type = uint_for_bits_t<IdentifierBit>;

    using identifier_type = integral_type;
    using version_type = uint_for_bits_t<0>;

    static constexpr std::size_t identifier_bits{IdentifierBit};
    static constexpr std::size_t version_bits{0};

    static constexpr std::size_t identifier_shift{0};
    static constexpr std::size_t version_shift{0};

    static constexpr integral_type identifier_mask{compute_mask<integral_type>(identifier_bits)};
    static constexpr integral_type version_mask{0};

    static constexpr integral_type identifier_max{identifier_mask - 1};
    static constexpr integral_type version_max{0};

    static constexpr bool is_versioned{false};
};

template<typename T>
struct entity_layout;

template<typename T>
static constexpr bool is_entity_enum_v = std::is_enum_v<T>;

template<typename T>
static constexpr bool is_entity_class_v = std::is_class_v<T> && requires { typename T::integral_type; };

template<typename T>
requires is_entity_enum_v<T>
struct entity_layout<T> : entity_layout<std::underlying_type_t<T>>
{
    using value_type = T;
};

template<typename T>
requires is_entity_class_v<T>
struct entity_layout<T> : entity_layout<typename T::integral_type>
{
    using value_type = T;
};

template<>
struct entity_layout<std::uint32_t> : entity_integral_layout<20, 12>
{
    using value_type = std::uint32_t;
};

template<>
struct entity_layout<std::uint64_t> : entity_integral_layout<32, 32>
{
    using value_type = std::uint64_t;
};

} // namespace ant
