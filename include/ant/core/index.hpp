#pragma once

#include <compare>
#include <concepts>
#include <limits>

namespace ant {

template<typename Tag, std::integral T, T Npos = std::numeric_limits<T>::max()>
class basic_index
{
public:
    using tag_type = Tag;
    using value_type = T;

    static const basic_index npos;

    constexpr basic_index() noexcept = default;
    constexpr basic_index(const basic_index&) noexcept = default;
    constexpr basic_index(basic_index&&) noexcept = default;
    constexpr explicit basic_index(value_type value) noexcept;

    constexpr auto operator=(const basic_index&) noexcept -> basic_index& = default;
    constexpr auto operator=(basic_index&&) noexcept -> basic_index& = default;

    constexpr auto operator==(const basic_index& other) const noexcept -> bool = default;
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
constexpr basic_index<Tag, T, Npos> basic_index<Tag, T, Npos>::npos{Npos};

template<typename Tag, std::integral T, T Npos>
constexpr basic_index<Tag, T, Npos>::basic_index(value_type value) noexcept
    : _value{value}
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
