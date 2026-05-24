#pragma once

#include <type_traits>

namespace ant::detail {

template<typename T>
struct is_required : std::true_type
{};

template<typename T>
struct is_required<const T*> : std::false_type
{};

template<typename T>
struct is_required<T*> : std::false_type
{};

template<typename T>
struct is_optional : std::false_type
{};

template<typename T>
struct is_optional<const T*> : std::true_type
{};

template<typename T>
struct is_optional<T*> : std::true_type
{};

} // namespace ant::detail
