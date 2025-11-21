#pragma once

#include <type_traits>

namespace ant {

template<typename... Types>
struct type_list
{};

// get size of type_list
template<typename TypeList>
struct type_list_size;

template<typename... Types>
struct type_list_size<type_list<Types...>> : std::integral_constant<std::size_t, sizeof...(Types)>
{};

template<typename TypeList>
static inline constexpr std::size_t type_list_size_v = type_list_size<TypeList>::value;

// get the index of a type in type_list
template<typename T, typename TypeList>
struct type_list_index_of;

template<typename T>
struct type_list_index_of<T, type_list<>>
{
    static_assert(!std::is_same_v<T, T>, "type_list_index_of: type not found in type_list");
};

template<typename T, typename... Types>
struct type_list_index_of<T, type_list<T, Types...>> : std::integral_constant<std::size_t, 0>
{};

template<typename T, typename U, typename... Types>
struct type_list_index_of<T, type_list<U, Types...>> : std::integral_constant<std::size_t, 1 + type_list_index_of<T, type_list<Types...>>::value>
{};

template<typename T, typename TypeList>
static inline constexpr std::size_t type_list_index_of_v = type_list_index_of<T, TypeList>::value;

// check if type_list contains a type T
template<typename T, typename TypeList>
struct type_list_contains;

template<typename T, typename... Types>
struct type_list_contains<T, type_list<Types...>> : std::bool_constant<(std::is_same_v<T, Types> || ...)>
{};

template<typename T, typename TypeList>
static inline constexpr bool type_list_contains_v = type_list_contains<T, TypeList>::value;

// concatenate two type_lists
template<typename Lhs, typename Rhs>
struct type_list_concat;

template<typename... Lhs, typename... Rhs>
struct type_list_concat<type_list<Lhs...>, type_list<Rhs...>>
{
    using type = type_list<Lhs..., Rhs...>;
};

template<typename Lhs, typename Rhs>
using type_list_concat_t = typename type_list_concat<Lhs, Rhs>::type;

// fold concatenate multiple type_lists
template<typename... TypeLists>
struct type_list_fold_concat;

template<>
struct type_list_fold_concat<>
{
    using type = type_list<>;
};

template<typename L>
struct type_list_fold_concat<L>
{
    using type = L;
};

template<typename L, typename R, typename... Rest>
struct type_list_fold_concat<L, R, Rest...>
{
    using type = typename type_list_fold_concat<type_list_concat_t<L, R>, Rest...>::type;
};

template<typename... TypeLists>
using type_list_fold_concat_t = typename type_list_fold_concat<TypeLists...>::type;

// unique: removes duplicate types from a type_list
template<typename In, typename Out = type_list<>>
struct type_list_unique;

template<typename Out>
struct type_list_unique<type_list<>, Out>
{
    using type = Out;
};

template<typename H, typename... T, typename... Us>
struct type_list_unique<type_list<H, T...>, type_list<Us...>> : std::conditional_t<type_list_contains_v<H, type_list<Us...>>,
                                                                                   type_list_unique<type_list<T...>, type_list<Us...>>,
                                                                                   type_list_unique<type_list<T...>, type_list<Us..., H>>>
{};

template<typename TypeList>
using type_list_unique_t = typename type_list_unique<TypeList>::type;

// filter: accepts any predicate template with ::value convertible to bool
// e.g. std::is_pointer, std::is_const, custom_trait< T >
template<template<typename> typename Pred, typename List>
struct type_list_filter;

template<template<typename> typename Pred>
struct type_list_filter<Pred, type_list<>>
{
    using type = type_list<>;
};

template<template<typename> typename Pred, typename Head, typename... Tail>
struct type_list_filter<Pred, type_list<Head, Tail...>>
{
    using type = std::conditional_t<
        static_cast<bool>(Pred<Head>::value),
        type_list_concat_t<type_list<Head>, typename type_list_filter<Pred, type_list<Tail...>>::type>,
        typename type_list_filter<Pred, type_list<Tail...>>::type>;
};

template<template<typename> typename Pred, typename List>
using type_list_filter_t = typename type_list_filter<Pred, List>::type;

} // namespace ant
