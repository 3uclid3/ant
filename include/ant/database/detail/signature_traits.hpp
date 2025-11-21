#pragma once

#include <type_traits>

namespace ant::detail {

template<typename T, template<typename> typename Predicate>
struct negate : std::bool_constant<!Predicate<T>::value>
{};

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
struct is_optional : negate<T, is_required>
{};

} // namespace ant::detail
