#pragma once

#include <ant/changeset_fwd.hpp>
#include <ant/detail/type_list.hpp>

namespace ant::detail {

template<typename T>
struct changeset_signature_explode
{
    using type = type_list<T>;
};

template<typename... Types>
struct changeset_signature_explode<attach<Types...>>
{
    using type = type_list<attach<Types>...>;
};

template<typename... Types>
struct changeset_signature_explode<detach<Types...>>
{
    using type = type_list<detach<Types>...>;
};

template<typename... Types>
struct changeset_signature_explode<set_env<Types...>>
{
    using type = type_list<set_env<Types>...>;
};

template<typename... Types>
struct changeset_signature_explode<unset_env<Types...>>
{
    using type = type_list<unset_env<Types>...>;
};

template<typename T>
using changeset_signature_explode_t = typename changeset_signature_explode<T>::type;

template<typename T>
struct is_attach : std::false_type
{};

template<typename... Types>
struct is_attach<attach<Types...>> : std::true_type
{};

template<typename T>
struct is_detach : std::false_type
{};

template<typename... Types>
struct is_detach<detach<Types...>> : std::true_type
{};

template<typename T>
struct is_set_env : std::false_type
{};

template<typename... Types>
struct is_set_env<set_env<Types...>> : std::true_type
{};

template<typename T>
struct is_unset_env : std::false_type
{};

template<typename... Types>
struct is_unset_env<unset_env<Types...>> : std::true_type
{};

template<typename T>
struct remove_attach
{
    using type = T;
};

template<typename T>
struct remove_attach<attach<T>>
{
    using type = T;
};

template<typename T>
struct remove_detach
{
    using type = T;
};

template<typename T>
struct remove_detach<detach<T>>
{
    using type = T;
};

template<typename T>
struct remove_set_env
{
    using type = T;
};

template<typename T>
struct remove_set_env<set_env<T>>
{
    using type = T;
};

template<typename T>
struct remove_unset_env
{
    using type = T;
};

template<typename T>
struct remove_unset_env<unset_env<T>>
{
    using type = T;
};

template<typename Signature>
struct changeset_signature_traits;

template<typename... Parameters>
struct changeset_signature_traits<changeset_signature<Parameters...>>
{
    using flatten = type_list_fold_concat_t<changeset_signature_explode_t<Parameters>...>;

    using attach = type_list_transform_t<remove_attach, type_list_filter_t<is_attach, flatten>>;
    using detach = type_list_transform_t<remove_detach, type_list_filter_t<is_detach, flatten>>;
    using set_env = type_list_transform_t<remove_set_env, type_list_filter_t<is_set_env, flatten>>;
    using unset_env = type_list_transform_t<remove_unset_env, type_list_filter_t<is_unset_env, flatten>>;

    static constexpr bool can_create = type_list_contains_v<create, flatten>;
    static constexpr bool can_destroy = type_list_contains_v<destroy, flatten>;

    template<typename T>
    static constexpr bool can_attach = type_list_contains_v<T, attach>;

    template<typename T>
    static constexpr bool can_detach = type_list_contains_v<T, detach>;

    template<typename T>
    static constexpr bool can_set_env = type_list_contains_v<T, set_env>;

    template<typename T>
    static constexpr bool can_unset_env = type_list_contains_v<T, unset_env>;

    static_assert(std::is_same_v<flatten, type_list_unique_t<flatten>>, "changeset_signature_traits: duplicate parameter(s) in signature");
};

} // namespace ant::detail
