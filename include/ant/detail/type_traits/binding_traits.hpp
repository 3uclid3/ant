#pragma once

#include <type_traits>

#include <ant/changeset_fwd.hpp>
#include <ant/detail/type_traits/function_traits.hpp>
#include <ant/env_fwd.hpp>
#include <ant/query_fwd.hpp>

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

template<typename F, typename... Supplied>
struct binding_traits
{
    // all arguments
    using arguments = function_traits<std::remove_cvref_t<F>>::argument_types;

    // supplied on invoke arguments
    using supplied_arguments = type_list<Supplied...>;

    // injected when binding is construct arguments
    using injected_arguments = type_list_drop_t<sizeof...(Supplied), arguments>;

    // type_list of queries
    using queries = type_list_filter_t<is_binding_query, injected_arguments>;

    // changeset or std::nullptr_t
    using changeset = type_list_front_or_t<type_list_filter_t<is_binding_changeset, injected_arguments>, std::nullptr_t>;

    // env or std::nullptr_t
    using env = type_list_front_or_t<type_list_filter_t<is_binding_env, injected_arguments>, std::nullptr_t>;

    static_assert(type_list_size_v<arguments> > 0, "No binding function arguments found");
    static_assert(std::is_same_v<injected_arguments, type_list_filter_t<is_binding_arg, injected_arguments>>, "Invalid binding function arguments, expect type changeset<...>, env<...> and/or query<...>");
    static_assert(type_list_size_v<type_list_filter_t<is_binding_changeset, injected_arguments>> <= 1, "Multiple changeset<> arguments found");
    static_assert(type_list_size_v<type_list_filter_t<is_binding_env, injected_arguments>> <= 1, "Multiple env<> arguments found");
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
