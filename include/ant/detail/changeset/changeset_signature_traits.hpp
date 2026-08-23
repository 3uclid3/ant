#pragma once

#include <ant/changeset/fwd.hpp>
#include <ant/meta/type_list.hpp>

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

} // namespace ant::detail
