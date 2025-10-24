#pragma once

#include <ant/entity/entity_layout.hpp>

namespace ant {

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
