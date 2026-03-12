#pragma once

#include <ant/core/type_list.hpp>
#include <ant/database/changeset_fwd.hpp>

namespace ant::detail {

template<typename T>
struct changeset_signature_parameter_explode
{
    using type = type_list<T>;
};

template<typename... Types>
struct changeset_signature_parameter_explode<attach<Types...>>
{
    using type = type_list<attach<Types>...>;
};

template<typename... Types>
struct changeset_signature_parameter_explode<detach<Types...>>
{
    using type = type_list<detach<Types>...>;
};

template<typename... Types>
struct changeset_signature_parameter_explode<set_env<Types...>>
{
    using type = type_list<set_env<Types>...>;
};

template<typename... Types>
struct changeset_signature_parameter_explode<unset_env<Types...>>
{
    using type = type_list<unset_env<Types>...>;
};

template<typename T>
using changeset_signature_parameter_explode_t = typename changeset_signature_parameter_explode<T>::type;

template<typename Signature>
struct changeset_signature_traits;

template<typename... Parameters>
struct changeset_signature_traits<changeset_signature<Parameters...>>
{
    using raw = type_list<Parameters...>;

    using flatten = type_list_unique_t<type_list_fold_concat_t<changeset_signature_parameter_explode_t<Parameters>...>>;

    template<typename T>
    static constexpr bool contains_v = type_list_contains_v<T, flatten>;
};

} // namespace ant::detail