#pragma once

#include <type_traits>

#include <ant/changeset_fwd.hpp>
#include <ant/detail/type_traits/function_traits.hpp>
#include <ant/env_fwd.hpp>
#include <ant/query_fwd.hpp>

namespace ant::detail {

template<typename Parameter>
struct is_query : std::false_type
{};

template<typename Signature>
struct is_query<query<Signature>> : std::true_type
{};

template<typename Parameter>
inline constexpr bool is_query_v = is_query<Parameter>::value;

template<typename Parameter>
struct is_env : std::false_type
{};

template<typename Signature>
struct is_env<env<Signature>> : std::true_type
{};

template<typename Parameter>
inline constexpr bool is_env_v = is_env<Parameter>::value;

template<typename Parameter>
struct is_changeset : std::false_type
{};

template<typename Signature>
struct is_changeset<changeset<Signature>> : std::true_type
{};

template<typename Parameter>
inline constexpr bool is_changeset_v = is_changeset<Parameter>::value;

template<typename Parameter>
struct is_system_parameter : std::bool_constant<is_changeset_v<Parameter> || is_env_v<Parameter> || is_query_v<Parameter>>
{};

template<typename Parameter>
inline constexpr bool is_system_parameter_v = is_system_parameter<Parameter>::value;

// clang-format off
template<typename F, typename... Supplied>
concept system_function = requires {
    typename function_traits<std::remove_cvref_t<F>>::return_type;
    typename function_traits<std::remove_cvref_t<F>>::argument_types;
} &&
    (type_list_size_v<typename function_traits<std::remove_cvref_t<F>>::argument_types> > 0) &&
    (sizeof...(Supplied) <= type_list_size_v<typename function_traits<std::remove_cvref_t<F>>::argument_types>) &&
    (type_list_size_v<type_list_drop_t<sizeof...(Supplied), typename function_traits<std::remove_cvref_t<F>>::argument_types>> == type_list_size_v<type_list_filter_t<is_system_parameter, type_list_drop_t<sizeof...(Supplied), typename function_traits<std::remove_cvref_t<F>>::argument_types>>>);
// clang-format on

template<typename F, typename... Supplied>
requires system_function<F, Supplied...>
struct system_traits
{
    using functor = std::remove_cvref_t<F>;

    using returns = function_traits<functor>::return_type;

    // all parameters
    using parameters = function_traits<functor>::argument_types;

    // supplied on invoke parameters
    using supplied_parameters = type_list<Supplied...>;

    // injected when binding is construct parameters
    using injected_parameters = type_list_drop_t<sizeof...(Supplied), parameters>;

    // type_list of queries
    using queries = type_list_filter_t<is_query, injected_parameters>;

    // changeset or std::nullptr_t
    using changeset = type_list_front_or_t<type_list_filter_t<is_changeset, injected_parameters>, std::nullptr_t>;

    // env or std::nullptr_t
    using env = type_list_front_or_t<type_list_filter_t<is_env, injected_parameters>, std::nullptr_t>;

    static constexpr bool has_changeset = !std::is_same_v<changeset, std::nullptr_t>;
    static constexpr bool has_env = !std::is_same_v<env, std::nullptr_t>;
    static constexpr bool has_queries = type_list_size_v<queries> > 0;

    static_assert(type_list_size_v<parameters> > 0, "No function parameters found");
    static_assert(std::is_same_v<injected_parameters, type_list_filter_t<is_system_parameter, injected_parameters>>, "Invalid function parameters, expect type changeset<...>, env<...> and/or query<...>");
    static_assert(type_list_size_v<type_list_filter_t<is_changeset, injected_parameters>> <= 1, "Multiple changeset<> parameters found");
    static_assert(type_list_size_v<type_list_filter_t<is_env, injected_parameters>> <= 1, "Multiple env<> parameters found");
};

template<typename T>
struct system_parameter_signature;

template<typename Signature>
struct system_parameter_signature<changeset<Signature>>
{
    using type = Signature;
};

template<typename Signature>
struct system_parameter_signature<env<Signature>>
{
    using type = Signature;
};

template<typename... Signature>
struct system_parameter_signature<type_list<query<Signature>...>>
{
    using type = type_list<Signature...>;
};

template<typename T>
using system_parameter_signature_t = typename system_parameter_signature<T>::type;

} // namespace ant::detail
