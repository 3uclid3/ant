#pragma once

#include <type_traits>

#include <ant/detail/schema/component_bitset.hpp>
#include <ant/detail/schema/schema.hpp>
#include <ant/detail/signature_traits.hpp>
#include <ant/detail/type_list.hpp>
#include <ant/query_fwd.hpp>

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

template<typename Signature>
struct query_signature_traits;

template<typename T>
struct query_signature_parameter_decay
{
    using type = std::remove_const_t<std::remove_pointer_t<T>>;
};

template<typename T>
using query_signature_parameter_decay_t = typename query_signature_parameter_decay<T>::type;

template<typename... Parameters>
struct query_signature_traits<query_signature<Parameters...>>
{
    using flatten = type_list_fold_concat_t<query_signature_explode_t<Parameters>...>;

    using required = type_list_filter_t<is_required, flatten>;
    using optional = type_list_transform_t<std::remove_pointer, type_list_filter_t<is_optional, flatten>>;
    using excluded = type_list_transform_t<remove_exclude, type_list_filter_t<is_excluded, flatten>>;
    using included = type_list_concat_t<required, optional>;

    template<typename T>
    static constexpr bool is_required_v = type_list_contains_v<T, required>;

    template<typename T>
    static constexpr bool is_optional_v = type_list_contains_v<T, optional>;

    template<typename T>
    static constexpr bool is_excluded_v = type_list_contains_v<T, excluded>;

    template<typename T>
    static constexpr std::size_t index_of = type_list_index_of_v<T, type_list_transform_t<std::remove_const, included>>;
    static constexpr std::size_t size = type_list_size_v<included>;

    static inline const auto required_bitset = component_bitset_of<type_list_transform_t<std::remove_const, required>>();
    static inline const auto optional_bitset = component_bitset_of<type_list_transform_t<std::remove_const, optional>>();
    static inline const auto excluded_bitset = component_bitset_of<type_list_transform_t<std::remove_const, excluded>>();
    static inline const auto included_bitset = component_bitset_of<type_list_transform_t<std::remove_const, included>>();

    static_assert(std::is_same_v<flatten, type_list_unique_t<flatten>>, "query_signature_traits: duplicate parameter(s) in signature");
    static_assert(std::is_same_v<type_list_transform_t<std::remove_const, included>,
                                 type_list_unique_t<type_list_transform_t<std::remove_const, included>>>,
                  "query_signature_traits: duplicate type(s) with different access type in signature");
};

} // namespace ant::detail
