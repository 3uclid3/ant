#pragma once

#ifndef ANT_COMPONENT_BITSET_INPLACE_CAPACITY
#    define ANT_COMPONENT_BITSET_INPLACE_CAPACITY 256
#endif

#include <ant/detail/dynamic_bitset.hpp>
#include <ant/detail/schema/component_index.hpp>
#include <ant/detail/type_list.hpp>

namespace ant::detail {

using component_bitset = dynamic_bitset<ANT_COMPONENT_BITSET_INPLACE_CAPACITY>;

template<typename... T>
constexpr auto component_bitset_of(type_list<T...>) -> component_bitset
{
    component_index max = 0;
    ([&max, i = component_index_of<T>()] { max = std::max(max, i); }(), ...);

    component_bitset bitset;
    bitset.resize(max + 1);
    (bitset.set(component_index_of<T>()), ...);
    return bitset;
}

template<typename TypeList>
requires(is_type_list_v<TypeList>)
constexpr auto component_bitset_of() -> component_bitset
{
    return component_bitset_of(TypeList{});
}

template<typename... T>
requires(... && !is_type_list_v<T>)
constexpr auto component_bitset_of() -> detail::component_bitset
{
    return component_bitset_of(type_list<T...>{});
}

} // namespace ant::detail
