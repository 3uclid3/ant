#pragma once

#include <type_traits>

#include <ant/detail/type_traits/signature_traits.hpp>
#include <ant/schema.hpp>
#include <ant/signature/query_signature.hpp>
#include <ant/type_list.hpp>

namespace ant::detail {

// Explode exclude<Types...> into type_list<exclude<Types>...>
template<typename T>
struct query_signature_explode
{
    using type = type_list<T>;
};

template<typename... Types>
struct query_signature_explode<exclude<Types...>>
{
    using type = type_list<exclude<Types>...>;
};

template<typename T>
using query_signature_explode_t = typename query_signature_explode<T>::type;

template<typename T>
struct is_excluded : std::false_type
{};

template<typename... Types>
struct is_excluded<exclude<Types...>> : std::true_type
{};

template<typename T>
struct is_included : std::bool_constant<!is_excluded<T>::value>
{};

template<typename T>
struct remove_exclude
{
    using type = T;
};

template<typename T>
struct remove_exclude<exclude<T>>
{
    using type = T;
};

template<typename T>
struct is_required<exclude<T>> : std::false_type
{};

template<typename T>
struct is_optional<exclude<T>> : std::false_type
{};

template<typename T>
struct query_signature_parameter_decay
{
    using type = std::remove_const_t<std::remove_pointer_t<T>>;
};

} // namespace ant::detail
