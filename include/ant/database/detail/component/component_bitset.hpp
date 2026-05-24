#pragma once

#include <ant/core/bitset.hpp>
#include <ant/core/type_list.hpp>

#include <ant/database/detail/component/component_index.hpp>

namespace ant::detail {

using component_bitset = bitset;

template<typename... T>
constexpr auto component_bitset_of(type_list<T...>) noexcept -> component_bitset
{
    component_bitset bitset;
    (bitset.push(component_index_of<T>()), ...);
    return bitset;
}

template<typename TypeList>
requires(is_type_list_v<TypeList>)
constexpr auto component_bitset_of() noexcept -> component_bitset
{
    return component_bitset_of(TypeList{});
}

template<typename... T>
requires(... && !is_type_list_v<T>)
constexpr auto component_bitset_of() noexcept -> detail::component_bitset
{
    return component_bitset_of(type_list<T...>{});
}

} // namespace ant::detail
