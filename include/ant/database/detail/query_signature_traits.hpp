#pragma once

#include <type_traits>

#include <ant/core/type_list.hpp>
#include <ant/database/component_bitset.hpp>
#include <ant/database/detail/signature_traits.hpp>
#include <ant/database/query_fwd.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail {

// Explode exclude<Types...> into type_list<exclude<Types>...>
template<typename T>
struct query_signature_parameter_explode
{
    using type = type_list<T>;
};

template<typename... Types>
struct query_signature_parameter_explode<exclude<Types...>>
{
    using type = type_list<exclude<Types>...>;
};

template<typename T>
using query_signature_parameter_explode_t = typename query_signature_parameter_explode<T>::type;

template<typename T>
struct is_excluded : std::false_type
{};

template<typename... Types>
struct is_excluded<exclude<Types...>> : std::true_type
{};

template<typename T>
struct is_included : negate<T, is_excluded>
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
    // Flatten the parameter list by exploding Decorator<Types...> into Decorator<Types>... and removing duplicates
    using flatten_parameters = type_list_unique_t<type_list_fold_concat_t<query_signature_parameter_explode_t<Parameters>...>>;

    // The required, optional, and excluded parameters as they appear in the signature, with decorators preserved
    using required_parameters = type_list_filter_t<is_required, flatten_parameters>;
    using optional_parameters = type_list_filter_t<is_optional, flatten_parameters>;
    using included_parameters = type_list_concat_t<required_parameters, optional_parameters>;
    using exclude_parameters = type_list_filter_t<is_excluded, flatten_parameters>;

    // The required, optional, and excluded types with decorators removed and const/pointer qualifiers removed
    using required_types = type_list_transform_t<query_signature_parameter_decay, required_parameters>;
    using optional_types = type_list_transform_t<query_signature_parameter_decay, optional_parameters>;
    using included_types = type_list_transform_t<query_signature_parameter_decay, included_parameters>;
    using excluded_types = type_list_transform_t<remove_exclude, exclude_parameters>;

    static constexpr auto make_required_bitset(const schema& schema) -> component_bitset;
    static constexpr auto make_optional_bitset(const schema& schema) -> component_bitset;
    static constexpr auto make_excluded_bitset(const schema& schema) -> component_bitset;
};

template<typename... Parameters>
constexpr auto query_signature_traits<query_signature<Parameters...>>::make_required_bitset(const schema& schema) -> component_bitset
{
    return schema.bitset_for<required_types>();
}

template<typename... Parameters>
constexpr auto query_signature_traits<query_signature<Parameters...>>::make_optional_bitset(const schema& schema) -> component_bitset
{
    return schema.bitset_for<optional_types>();
}

template<typename... Parameters>
constexpr auto query_signature_traits<query_signature<Parameters...>>::make_excluded_bitset(const schema& schema) -> component_bitset
{
    return schema.bitset_for<excluded_types>();
}

} // namespace ant::detail