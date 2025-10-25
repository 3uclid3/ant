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
static constexpr bool is_entity_enum_v = std::is_enum_v<T>;

template<typename T>
static constexpr bool is_entity_class_v = std::is_class_v<T> && requires { typename T::integral_type; };

template<typename T>
struct entity_layout;

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

template<typename T>
struct entity_traits
{
    using value_type = T;
    using layout_type = entity_layout<T>;

    using integral_type = layout_type::integral_type;
    using identifier_type = layout_type::identifier_type;
    using version_type = layout_type::version_type;

    static constexpr bool is_versioned{layout_type::is_versioned};

    static constexpr integral_type identifier_max{layout_type::identifier_max};
    static constexpr integral_type version_max{layout_type::version_max};

    [[nodiscard]] static constexpr auto to_integral(value_type value) noexcept -> integral_type;
    [[nodiscard]] static constexpr auto to_identifier(value_type value) noexcept -> identifier_type;
    [[nodiscard]] static constexpr auto to_version(value_type value) noexcept -> version_type;

    [[nodiscard]] static constexpr auto construct(identifier_type value, version_type version = {}) noexcept -> value_type;
    [[nodiscard]] static constexpr auto bump(value_type value) noexcept -> value_type;
};

template<typename T>
constexpr auto entity_traits<T>::to_integral(value_type value) noexcept -> integral_type
{
    return static_cast<integral_type>(value);
}

template<typename T>
constexpr auto entity_traits<T>::to_identifier(value_type value) noexcept -> identifier_type
{
    const auto integral = to_integral(value);
    return static_cast<identifier_type>((integral & layout_type::identifier_mask) >> layout_type::identifier_shift);
}

template<typename T>
constexpr auto entity_traits<T>::to_version(value_type value) noexcept -> version_type
{
    if constexpr (is_versioned)
    {
        const auto integral = to_integral(value);
        return static_cast<version_type>((integral & layout_type::version_mask) >> layout_type::version_shift);
    }
    else
    {
        return static_cast<version_type>(0);
    }
}

template<typename T>
constexpr auto entity_traits<T>::construct(identifier_type identifier, version_type version [[maybe_unused]]) noexcept -> value_type
{
    integral_type integral = ((static_cast<integral_type>(identifier) << layout_type::identifier_shift) % layout_type::identifier_mask);

    if constexpr (is_versioned)
    {
        integral |= ((static_cast<integral_type>(version) << layout_type::version_shift) % layout_type::version_mask);
    }

    return static_cast<value_type>(integral);
}

template<typename T>
constexpr auto entity_traits<T>::bump(value_type value) noexcept -> value_type
{
    if constexpr (is_versioned)
    {
        const identifier_type identifier = to_identifier(value);
        const version_type version = to_version(value);
        const version_type new_version = static_cast<version_type>((version + 1) % layout_type::version_mask);
        return construct(identifier, new_version);
    }
    else
    {
        return value;
    }
}

} // namespace ant
