#pragma once

#include <type_traits>

#include <ant/rel.hpp>

namespace ant::detail {

// determine if a type is a one-to-one relation
template<typename T>
struct is_one : std::false_type
{
};

template<typename Role>
struct is_one<one<Role>> : std::true_type
{
};

// determine if a type is a one-to-many relation
template<typename T>
struct is_many : std::false_type
{
};

template<typename Role>
struct is_many<many<Role>> : std::true_type
{
};

// determine the role of a type
template<typename T>
struct role_of;

template<typename Role>
struct role_of<one<Role>>
{
    using type = Role;
};

template<typename Role>
struct role_of<many<Role>>
{
    using type = Role;
};

template<typename T>
using role_of_t = typename role_of<T>::type;

// determine the cardinality of a role
template<typename T>
struct role_cardinality_of;

template<typename Role>
struct role_cardinality_of<one<Role>>
{
    static constexpr cardinality value = cardinality::one;
};

template<typename Role>
struct role_cardinality_of<many<Role>>
{
    static constexpr cardinality value = cardinality::many;
};

template<typename T>
constexpr cardinality role_cardinality_of_v = role_cardinality_of<T>::value;

// retrieve the base type of a relation
template<typename T>
struct rel_base_of_impl
{
    template<typename First, typename Second>
    static auto get_rel_base_of(const rel<First, Second>*) -> rel<First, Second>;
    static auto get_rel_base_of(...) -> std::nullptr_t;

    using type = decltype(get_rel_base_of(std::declval<T*>()));
};

template<typename T>
struct rel_base_of
{
    using type = typename rel_base_of_impl<T>::type;

    static_assert(!std::is_same_v<type, std::nullptr_t>, "T is not a relation");
};

template<typename T>
using rel_base_of_t = typename rel_base_of<T>::type;

// determine if a type is a relation
template<typename T>
struct is_rel : std::bool_constant<
                    !std::is_same_v<typename rel_base_of_impl<T>::type, std::nullptr_t>
                    && !std::is_same_v<T, typename rel_base_of_impl<T>::type>>
{};

template<typename T>
constexpr bool is_rel_v = is_rel<T>::value;

} // namespace ant::detail
