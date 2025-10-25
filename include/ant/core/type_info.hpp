#pragma once

#include <compare>
#include <string_view>
#include <type_traits>
#include <utility>

#include <ant/core/detail/type_name.hpp>
#include <ant/core/hash.hpp>

namespace ant {

template<typename T>
struct type_hash
{
    [[nodiscard]] static constexpr auto value() noexcept -> std::uint32_t;
    [[nodiscard]] constexpr operator std::uint32_t() const noexcept;
};

template<typename T>
struct type_name
{
    [[nodiscard]] static constexpr auto value() noexcept -> std::string_view;
    [[nodiscard]] constexpr operator std::string_view() const noexcept;
};

class type_info
{
public:
    template<typename Type>
    constexpr type_info(std::in_place_type_t<Type>) noexcept;

    [[nodiscard]] constexpr auto hash() const noexcept -> std::uint32_t;
    [[nodiscard]] constexpr auto name() const noexcept -> std::string_view;

private:
    std::string_view _name;
    std::uint32_t _hash;
};

template<typename Type>
[[nodiscard]] constexpr auto type_id() noexcept -> type_info;

template<typename Type>
[[nodiscard]] constexpr auto type_id(Type&&) noexcept -> type_info;

[[nodiscard]] constexpr auto operator<=>(type_info lhs, type_info rhs) noexcept -> std::strong_ordering;

template<typename T>
constexpr auto type_hash<T>::value() noexcept -> std::uint32_t
{
    return hash::compile_crc32(detail::type_name<T>());
}

template<typename T>
constexpr type_hash<T>::operator std::uint32_t() const noexcept
{
    return value();
}

template<typename T>
constexpr auto type_name<T>::value() noexcept -> std::string_view
{
    return detail::type_name<T>();
}

template<typename T>
constexpr type_name<T>::operator std::string_view() const noexcept
{
    return value();
}

template<typename Type>
constexpr type_info::type_info(std::in_place_type_t<Type>) noexcept
    : _name{type_name<Type>::value()}
    , _hash{type_hash<Type>::value()}
{
}

constexpr auto type_info::hash() const noexcept -> std::uint32_t
{
    return _hash;
}

constexpr auto type_info::name() const noexcept -> std::string_view
{
    return _name;
}

template<typename T>
constexpr auto type_id() noexcept -> type_info
{
    if constexpr (std::is_same_v<T, std::remove_cvref_t<T>>)
    {
        return type_info{std::in_place_type<T>};
    }
    else
    {
        return type_id<std::remove_cvref_t<T>>();
    }
}

template<typename T>
constexpr auto type_id(T&&) noexcept -> type_info
{
    return type_id<std::remove_cvref_t<T>>();
}

constexpr auto operator<=>(type_info lhs, type_info rhs) noexcept -> std::strong_ordering
{
    return lhs.hash() <=> rhs.hash();
}

} // namespace ant
