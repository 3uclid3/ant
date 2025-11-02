#pragma once

#include <compare>
#include <concepts>
#include <format>
#include <limits>

namespace ant {

template<typename Tag, std::integral T, T Npos = std::numeric_limits<T>::max()>
class basic_index
{
public:
    using tag_type = Tag;
    using value_type = T;

    static consteval auto npos() noexcept -> basic_index;

    static constexpr auto cast(std::integral auto value) noexcept -> basic_index;

    constexpr basic_index() noexcept = default;
    constexpr basic_index(const basic_index&) noexcept = default;
    constexpr basic_index(basic_index&&) noexcept = default;

    template<std::integral U = T>
    constexpr explicit basic_index(U value) noexcept;

    template<typename Tag1, std::integral T1, T1 Npos1>
    requires(!std::same_as<Tag1, Tag> || !std::same_as<T1, T> || Npos1 != Npos)
    constexpr basic_index(const basic_index<Tag1, T1, Npos1>& other) = delete;

    template<typename Tag1, std::integral T1, T1 Npos1>
    requires(!std::same_as<Tag1, Tag> || !std::same_as<T1, T> || Npos1 != Npos)
    constexpr basic_index(basic_index<Tag1, T1, Npos1>&& other) = delete;

    template<typename Tag1, std::integral T1, T1 Npos1>
    requires(!std::same_as<Tag1, Tag> || !std::same_as<T1, T> || Npos1 != Npos)
    constexpr auto operator<=>(const basic_index<Tag1, T1, Npos1>& other) const -> std::strong_ordering = delete;

    constexpr auto operator=(const basic_index&) noexcept -> basic_index& = default;
    constexpr auto operator=(basic_index&&) noexcept -> basic_index& = default;

    constexpr auto operator<=>(const basic_index& other) const noexcept -> std::strong_ordering = default;

    constexpr auto operator+=(value_type offset) noexcept -> basic_index&;
    constexpr auto operator-=(value_type offset) noexcept -> basic_index&;

    constexpr auto operator++() noexcept -> basic_index&;
    constexpr auto operator++(int) noexcept -> basic_index;

    constexpr auto operator--() noexcept -> basic_index&;
    constexpr auto operator--(int) noexcept -> basic_index;

    constexpr operator T() const noexcept;
    constexpr auto value() const noexcept -> value_type;

private:
    value_type _value{};
};

template<typename Tag, std::integral T, T Npos>
consteval auto basic_index<Tag, T, Npos>::npos() noexcept -> basic_index
{
    return basic_index{Npos};
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::cast(std::integral auto value) noexcept -> basic_index
{
    return basic_index{static_cast<T>(value)};
}

template<typename Tag, std::integral T, T Npos>
template<std::integral U>
constexpr basic_index<Tag, T, Npos>::basic_index(U value) noexcept
    : _value{static_cast<T>(value)}
{
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::operator+=(value_type offset) noexcept -> basic_index&
{
    _value += offset;
    return *this;
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::operator-=(value_type offset) noexcept -> basic_index&
{
    _value -= offset;
    return *this;
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::operator++() noexcept -> basic_index&
{
    ++_value;
    return *this;
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::operator++(int) noexcept -> basic_index
{
    basic_index temp = *this;
    ++_value;
    return temp;
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::operator--() noexcept -> basic_index&
{
    --_value;
    return *this;
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::operator--(int) noexcept -> basic_index
{
    basic_index temp = *this;
    --_value;
    return temp;
}

template<typename Tag, std::integral T, T Npos>
constexpr basic_index<Tag, T, Npos>::operator T() const noexcept
{
    return _value;
}

template<typename Tag, std::integral T, T Npos>
constexpr auto basic_index<Tag, T, Npos>::value() const noexcept -> value_type
{
    return _value;
}

} // namespace ant
