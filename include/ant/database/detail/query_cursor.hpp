#pragma once

#include <ant/database/detail/base_query.hpp>
#include <ant/database/entity.hpp>
#include <ant/database/query_fwd.hpp>

namespace ant { namespace detail {

struct query_cursor
{
    auto operator==(const query_cursor& other) const noexcept -> bool = default;
    auto operator!=(const query_cursor& other) const noexcept -> bool = default;

    auto advance() -> bool;

    auto is_valid() const noexcept -> bool;

    auto table() const noexcept -> const detail::table&;
    auto table() noexcept -> detail::table&;

    auto entity() const noexcept -> ant::entity;

    base_query* query{nullptr};
    std::size_t table_index{0};
    std::size_t row_index{0};
};

/*

template<typename Signature>
template<typename T>
auto query_cursor<Signature>::has_value() const -> bool
{
    using signature_traits = typename ant::query<Signature>::signature_traits;

    constexpr std::size_t index = type_list_index_of_v<T, typename signature_traits::included>;
    const std::size_t mapping_index = base::query->_mapping[base::query->_tables.size() * table_index + index];

    return mapping_index != detail::table::npos;
}

template<typename Signature>
template<typename T>
auto query_cursor<Signature>::value() const -> const std::remove_pointer_t<std::decay_t<T>>&
{
    return base::query->_tables[table_index]->template at<std::remove_pointer_t<std::decay_t<T>>>(column_of<T>(), row_index);
}

template<typename Signature>
template<typename T>
auto query_cursor<Signature>::value() -> std::remove_pointer_t<std::decay_t<T>>&
{
    return base::query->_tables[table_index]->template at<std::remove_pointer_t<std::decay_t<T>>>(column_of<T>(), row_index);
}

template<typename Signature>
auto query_cursor<Signature>::entity() const noexcept -> ant::entity
{
    return base::query->_tables[table_index]->entity_at(row_index);
}

template<typename Signature>
auto query_cursor<Signature>::query() const noexcept -> const ant::query<Signature>&
{
    return *static_cast<const ant::query<Signature>*>(base::query);
}

template<typename Signature>
auto query_cursor<Signature>::query() noexcept -> ant::query<Signature>&
{
    return *static_cast<ant::query<Signature>*>(base::query);
}

template<typename Signature>
auto query_cursor<Signature>::is_valid() const noexcept -> bool
{
    return base::query != nullptr && table_index < query()->_tables.size() && row_index < query()->_tables[table_index]->size();
}

template<typename Signature>
template<typename T>
auto query_cursor<Signature>::column_of() const -> std::size_t
{
    using signature_traits = typename ant::query<Signature>::signature_traits;

    constexpr std::size_t index = type_list_index_of_v<T, typename signature_traits::included>;
    return base::query->_mapping[base::query->_tables.size() * table_index + index];
}
*/

}} // namespace ant::detail