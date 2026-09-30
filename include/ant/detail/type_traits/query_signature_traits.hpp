#pragma once

#include <type_traits>

#include <ant/detail/type_traits/signature_traits.hpp>
#include <ant/rel_traits.hpp>
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
struct is_join : std::false_type
{};

template<typename Rel, typename Role, typename... Parameters>
struct is_join<join<Rel, Role, Parameters...>> : std::true_type
{};

// Flatten joins in depth-first order, preserving each complete join type.
template<typename T>
struct flatten_join
{
    using type = type_list<>;
};

template<typename Rel, typename Role, typename... Parameters>
struct flatten_join<join<Rel, Role, Parameters...>>
{
    using type = type_list_fold_concat_t<type_list<join<Rel, Role, Parameters...>>, typename flatten_join<Parameters>::type...>;
};

template<typename Joins>
struct flatten_joined;

template<typename... Joins>
struct flatten_joined<type_list<Joins...>>
{
    using type = type_list_fold_concat_t<typename flatten_join<Joins>::type...>;
};

template<typename Joins>
using flatten_joined_t = typename flatten_joined<Joins>::type;

template<typename T>
struct is_excluded : std::false_type
{};

template<typename... Types>
struct is_excluded<exclude<Types...>> : std::true_type
{};

template<typename T>
struct is_required<exclude<T>> : std::false_type
{};

template<typename Rel, typename Role, typename... Parameters>
struct is_required<join<Rel, Role, Parameters...>> : std::false_type
{};

template<typename T>
struct is_optional<exclude<T>> : std::false_type
{};

template<typename Rel, typename Role, typename... Parameters>
struct is_optional<join<Rel, Role, Parameters...>> : std::false_type
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

template<typename Lhs, typename Rhs>
using concat_remove_const_t = type_list_transform_t<std::remove_const, type_list_concat_t<Lhs, Rhs>>;

template<typename Lhs, typename Rhs>
static constexpr bool has_unique_component_types_v =
    type_list_size_v<concat_remove_const_t<Lhs, Rhs>> == type_list_size_v<type_list_unique_t<concat_remove_const_t<Lhs, Rhs>>>;

template<typename Joined>
struct remove_joined_parameters;

template<typename Rel, typename Role, typename... Parameters>
struct remove_joined_parameters<join<Rel, Role, Parameters...>>
{
    using type = type_list<Rel, Role>;
};

template<typename Joins>
static constexpr bool has_unique_joined_rels_v =
    type_list_size_v<Joins> == type_list_size_v<type_list_unique_t<type_list_transform_t<remove_joined_parameters, Joins>>>;

// Match the key while preserving the complete join, including its parameters.
template<typename Join, typename Rel, typename Role>
struct is_join_rel : std::false_type
{};

template<typename Rel, typename Role, typename... Parameters>
struct is_join_rel<join<Rel, Role, Parameters...>, Rel, Role> : std::true_type
{};

template<typename Rel, typename Role>
struct join_rel_predicate
{
    template<typename Join>
    using type = is_join_rel<Join, Rel, Role>;
};

template<typename Joins, typename Rel, typename Role>
using join_of = type_list_filter_one_t<join_rel_predicate<Rel, Role>::template type, Joins>;

// Match direct joins only; preceding siblings contribute their entire subtree.
template<typename Joins, typename Rel, typename Role, std::size_t Offset = 0>
struct join_index_of;

template<typename Rel, typename Role, std::size_t Offset>
struct join_index_of<type_list<>, Rel, Role, Offset> : std::integral_constant<std::size_t, type_list_npos_v>
{};

template<typename Head, typename... Tail, typename Rel, typename Role, std::size_t Offset>
struct join_index_of<type_list<Head, Tail...>, Rel, Role, Offset>
    : std::conditional_t<is_join_rel<Head, Rel, Role>::value,
                         std::integral_constant<std::size_t, Offset>,
                         join_index_of<type_list<Tail...>, Rel, Role, Offset + type_list_size_v<typename flatten_join<Head>::type>>>
{};

template<typename Joins, typename Rel, typename Role>
inline constexpr std::size_t join_index_of_v = join_index_of<Joins, Rel, Role>::value;

template<typename Join>
struct join_signature;

template<typename Rel, typename Role, typename... Parameters>
struct join_signature<join<Rel, Role, Parameters...>>
{
    using type = query_signature<Parameters...>;
};

template<>
struct join_signature<std::nullptr_t>
{
    using type = std::nullptr_t;
};

template<typename Joins, typename Rel, typename Role>
using join_signature_of = typename join_signature<join_of<Joins, Rel, Role>>::type;

template<typename Rel, typename Role>
static constexpr bool is_cardinality_one_v = std::is_same_v<typename rel_traits<Rel>::first::role, one<Role>>
                                             || std::is_same_v<typename rel_traits<Rel>::second::role, one<Role>>;

} // namespace ant::detail
