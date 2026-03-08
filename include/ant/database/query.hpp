#pragma once

#include <algorithm>
#include <iterator>
#include <optional>

#include <ant/core/type_list.hpp>
#include <ant/database/detail/base_query.hpp>
#include <ant/database/detail/catalog.hpp>
#include <ant/database/detail/query_cursor.hpp>
#include <ant/database/detail/query_signature_traits.hpp>
#include <ant/database/detail/table.hpp>
#include <ant/database/entity.hpp>
#include <ant/database/query_fwd.hpp>

namespace ant {
namespace detail {
class query_builder;
}

template<typename Signature>
class query final : detail::base_query
{
public:
    using signature = Signature;
    using signature_traits = detail::query_signature_traits<Signature>;

    using row_type = query_row<Signature>;

public:
    class iterator
    {
    public:
        auto operator==(const iterator& other) const noexcept -> bool = default;
        auto operator!=(const iterator& other) const noexcept -> bool = default;

        auto operator++() -> iterator&;
        auto operator++(int) -> iterator;
        auto operator*() const -> row_type;

    private:
        iterator(detail::query_cursor cursor) noexcept;

        detail::query_cursor _cursor;

        friend class query<Signature>;
    };

public:
    auto row(entity e) -> std::optional<row_type>;
    auto count_rows() const -> std::size_t;

    auto begin() -> iterator;
    auto end() -> iterator;

private:
    query(const schema& schema, std::vector<detail::table*>&& tables, std::vector<std::uint32_t>&& mapping);

    auto make_cursor(std::size_t table_index, std::size_t row_index) noexcept -> detail::query_cursor;

    template<typename T>
    auto column_of(std::size_t table_index) const noexcept -> std::size_t;

    friend class detail::query_builder;
};

template<typename Signature>
class query_row final
{
public:
    using signature = typename query<Signature>::signature;
    using signature_traits = typename query<Signature>::signature_traits;

    operator bool() const noexcept;

    auto entity() const noexcept -> ant::entity;

    template<typename T>
    requires(type_list_contains_v<const T, typename signature_traits::required_parameters> || type_list_contains_v<T, typename signature_traits::required_parameters>)
    auto get() const noexcept -> const T&;

    template<typename T>
    requires(type_list_contains_v<T, typename signature_traits::required_parameters>)
    auto get() noexcept -> T&;

    template<typename T>
    requires(type_list_contains_v<const T*, typename signature_traits::optional_parameters> || type_list_contains_v<T*, typename signature_traits::optional_parameters>)
    auto try_get() const noexcept -> const T*;

    template<typename T>
    requires(type_list_contains_v<T*, typename signature_traits::optional_parameters>)
    auto try_get() noexcept -> T*;

    template<typename T>
    requires(type_list_contains_v<const T*, typename signature_traits::optional_parameters> || type_list_contains_v<T*, typename signature_traits::optional_parameters>)
    auto has() const noexcept -> bool;

private:
    query_row(detail::query_cursor cursor) noexcept;

private:
    detail::query_cursor _cursor;

    friend class query<Signature>;
};

template<typename Signature>
query<Signature>::iterator::iterator(detail::query_cursor cursor) noexcept
    : _cursor(std::move(cursor))
{
}

template<typename Signature>
auto query<Signature>::iterator::operator++() -> iterator&
{
    _cursor.advance();

    return *this;
}

template<typename Signature>
auto query<Signature>::iterator::operator++(int) -> iterator
{
    iterator temp = *this;
    ++(*this);
    return temp;
}

template<typename Signature>
auto query<Signature>::iterator::operator*() const -> row_type
{
    return row_type(_cursor);
}

template<typename Signature>
auto query<Signature>::row(entity e) -> std::optional<row_type>
{
    for (std::size_t table_index = 0; table_index < _tables.size(); ++table_index)
    {
        const detail::table* table = _tables[table_index];
        const std::size_t row_index = table->row_of(e);

        if (row_index != detail::table::npos)
        {
            return query_row<Signature>{make_cursor(table_index, row_index)};
        }
    }

    return std::nullopt;
}

template<typename Signature>
auto query<Signature>::count_rows() const -> std::size_t
{
    return std::accumulate(std::begin(_tables), std::end(_tables), std::size_t{0}, [](std::size_t count, const detail::table* table) {
        return count + table->size();
    });
}

template<typename Signature>
auto query<Signature>::begin() -> iterator
{
    std::size_t table_index = 0;

    while (table_index < _tables.size() && _tables[table_index]->empty())
    {
        ++table_index;
    }

    return iterator(make_cursor(table_index, 0));
}

template<typename Signature>
auto query<Signature>::end() -> iterator
{
    return iterator(make_cursor(_tables.size(), 0));
}

template<typename Signature>
query<Signature>::query(const schema& schema, std::vector<detail::table*>&& tables, std::vector<std::uint32_t>&& mapping)
{
    _schema = &schema;
    _tables = std::move(tables);
    _mapping = std::move(mapping);
}

template<typename Signature>
auto query<Signature>::make_cursor(std::size_t table_index, std::size_t row_index) noexcept -> detail::query_cursor
{
    return detail::query_cursor{this, table_index, row_index};
}

template<typename Signature>
query_row<Signature>::operator bool() const noexcept
{
    return _cursor.is_valid();
}

template<typename Signature>
auto query_row<Signature>::entity() const noexcept -> ant::entity
{
    return _cursor.entity();
}

template<typename Signature>
template<typename T>
requires(type_list_contains_v<const T, typename query_row<Signature>::signature_traits::required_parameters> || type_list_contains_v<T, typename query_row<Signature>::signature_traits::required_parameters>)
auto query_row<Signature>::get() const noexcept -> const T&
{
    using included_types = signature_traits::included_types;

    constexpr std::size_t type_index = type_list_index_of_v<T, included_types>;
    constexpr std::size_t type_size = type_list_size_v<included_types>;

    const std::size_t column_index = _cursor.query->_mapping[_cursor.table_index * type_size + type_index];

    return _cursor.table().template at<T>(column_index, _cursor.row_index);
}

template<typename Signature>
template<typename T>
requires(type_list_contains_v<T, typename query_row<Signature>::signature_traits::required_parameters>)
auto query_row<Signature>::get() noexcept -> T&
{
    using included_types = signature_traits::included_types;

    constexpr std::size_t type_index = type_list_index_of_v<T, included_types>;
    constexpr std::size_t type_size = type_list_size_v<included_types>;

    const std::size_t column_index = _cursor.query->_mapping[_cursor.table_index * type_size + type_index];

    return _cursor.table().template at<T>(column_index, _cursor.row_index);
}

template<typename Signature>
template<typename T>
requires(type_list_contains_v<const T*, typename query_row<Signature>::signature_traits::optional_parameters> || type_list_contains_v<T*, typename query_row<Signature>::signature_traits::optional_parameters>)
auto query_row<Signature>::try_get() const noexcept -> const T*
{
    using included_types = signature_traits::included_types;

    constexpr std::size_t type_index = type_list_index_of_v<T, included_types>;
    constexpr std::size_t type_size = type_list_size_v<included_types>;

    const std::size_t column_index = _cursor.query->_mapping[_cursor.table_index * type_size + type_index];

    return column_index != detail::table::npos ? &_cursor.table().template at<T>(column_index, _cursor.row_index) : nullptr;
}

template<typename Signature>
template<typename T>
requires(type_list_contains_v<T*, typename query_row<Signature>::signature_traits::optional_parameters>)
auto query_row<Signature>::try_get() noexcept -> T*
{
    using included_types = signature_traits::included_types;

    constexpr std::size_t type_index = type_list_index_of_v<T, included_types>;
    constexpr std::size_t type_size = type_list_size_v<included_types>;

    const std::size_t column_index = _cursor.query->_mapping[_cursor.table_index * type_size + type_index];

    return column_index != detail::table::npos ? &_cursor.table().template at<T>(column_index, _cursor.row_index) : nullptr;
}

template<typename Signature>
template<typename T>
requires(type_list_contains_v<const T*, typename query_row<Signature>::signature_traits::optional_parameters> || type_list_contains_v<T*, typename query_row<Signature>::signature_traits::optional_parameters>)
auto query_row<Signature>::has() const noexcept -> bool
{
    using included_types = signature_traits::included_types;

    constexpr std::size_t type_index = type_list_index_of_v<T, included_types>;
    constexpr std::size_t type_size = type_list_size_v<included_types>;

    const std::size_t column_index = _cursor.query->_mapping[_cursor.table_index * type_size + type_index];

    return column_index != detail::table::npos;
}

template<typename Signature>
query_row<Signature>::query_row(detail::query_cursor cursor) noexcept
    : _cursor(std::move(cursor))
{
}

} // namespace ant
