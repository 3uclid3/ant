#pragma once

#ifndef ANT_COMPONENT_BITSET_INPLACE_CAPACITY
#    define ANT_COMPONENT_BITSET_INPLACE_CAPACITY 256
#endif

#include <memory_resource>

#include <ant/detail/dynamic_bitset.hpp>
#include <ant/detail/schema/component_index.hpp>
#include <ant/detail/type_list.hpp>

namespace ant::detail {

using component_bitset = dynamic_bitset<ANT_COMPONENT_BITSET_INPLACE_CAPACITY>;

template<typename... T>
constexpr auto component_bitset_of(type_list<T...>, std::pmr::memory_resource* memory_resource) noexcept -> component_bitset
{
    component_index max = 0;
    ([&max, i = component_index_of<T>()] { max = std::max(max, i); }(), ...);

    component_bitset bitset{memory_resource};
    bitset.resize(max + 1);
    (bitset.set(component_index_of<T>()), ...);
    return bitset;
}

template<typename TypeList>
requires(is_type_list_v<TypeList>)
constexpr auto component_bitset_of(std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource()) noexcept -> component_bitset
{
    return component_bitset_of(TypeList{}, memory_resource);
}

template<typename... T>
requires(... && !is_type_list_v<T>)
constexpr auto component_bitset_of(std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource()) noexcept -> detail::component_bitset
{
    return component_bitset_of(type_list<T...>{}, memory_resource);
}

} // namespace ant::detail
