#pragma once

#include <type_traits>

#include <ant/changeset/fwd.hpp>
#include <ant/detail/function_traits.hpp>
#include <ant/env/fwd.hpp>
#include <ant/query/fwd.hpp>

namespace ant::detail {

template<typename Arg>
struct is_binding_query : std::false_type
{};

template<typename Signature>
struct is_binding_query<query<Signature>> : std::true_type
{};

template<typename Arg>
inline constexpr bool is_binding_query_v = is_binding_query<Arg>::value;

template<typename Arg>
struct is_binding_env : std::false_type
{};

template<typename Signature>
struct is_binding_env<env<Signature>> : std::true_type
{};

template<typename Arg>
inline constexpr bool is_binding_env_v = is_binding_env<Arg>::value;

template<typename Arg>
struct is_binding_changeset : std::false_type
{};

template<typename Signature>
struct is_binding_changeset<changeset<Signature>> : std::true_type
{};

template<typename Arg>
inline constexpr bool is_binding_changeset_v = is_binding_changeset<Arg>::value;

template<typename Arg>
struct is_binding_arg : std::bool_constant<is_binding_changeset_v<Arg> || is_binding_env_v<Arg> || is_binding_query_v<Arg>>
{};

template<typename Arg>
inline constexpr bool is_binding_arg_v = is_binding_arg<Arg>::value;

template<typename F>
struct binding_traits
{
    using arguments = function_traits<std::remove_cvref_t<F>>::argument_types;

    // type_list of queries
    using queries = type_list_filter_t<is_binding_query, arguments>;

    // changeset or std::nullptr_t
    using changeset = type_list_front_or_t<type_list_filter_t<is_binding_changeset, arguments>, std::nullptr_t>;

    // env or std::nullptr_t
    using env = type_list_front_or_t<type_list_filter_t<is_binding_env, arguments>, std::nullptr_t>;

    static_assert(type_list_size_v<arguments> > 0, "No binding function arguments found");
    static_assert(std::is_same_v<arguments, type_list_filter_t<is_binding_arg, arguments>>, "Invalid binding function arguments, expect type changeset<...>, env<...> and/or query<...>");
    static_assert(type_list_size_v<type_list_filter_t<is_binding_changeset, arguments>> <= 1, "Multiple changeset<> arguments found");
    static_assert(type_list_size_v<type_list_filter_t<is_binding_env, arguments>> <= 1, "Multiple env<> arguments found");
};

template<typename T>
struct binding_argument_signature;

template<typename Signature>
struct binding_argument_signature<changeset<Signature>>
{
    using type = Signature;
};

template<typename Signature>
struct binding_argument_signature<env<Signature>>
{
    using type = Signature;
};

template<typename... Signature>
struct binding_argument_signature<type_list<query<Signature>...>>
{
    using type = type_list<Signature...>;
};

template<typename T>
using binding_argument_signature_t = typename binding_argument_signature<T>::type;

} // namespace ant::detail
