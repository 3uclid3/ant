#pragma once

#include <iterator>
#include <numeric>
#include <optional>

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/catalog/table.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/query/query_cursor.hpp>
#include <ant/detail/query/query_iterator.hpp>
#include <ant/detail/query/query_mapping.hpp>
#include <ant/detail/query/query_signature_traits.hpp>
#include <ant/detail/type_list.hpp>
#include <ant/entity.hpp>
#include <ant/query_fwd.hpp>

namespace ant {
namespace detail {
class query_compiler;
}

template<typename Signature>
class compiled_query final
{
public:
    using signature = Signature;
    using signature_traits = detail::query_signature_traits<Signature>;

    using row_type = query_row<Signature>;
    using iterator = detail::query_iterator<Signature>;

public:
    auto query() const noexcept -> query<Signature>;
    auto epoch() const noexcept -> std::size_t;

private:
    compiled_query(detail::vector<detail::table*>&& tables, detail::query_mapping&& mapping, std::size_t epoch);

    detail::vector<detail::table*> _tables;
    detail::query_mapping _mapping;
    std::size_t _epoch{0};

    friend class detail::query_compiler;
};

template<typename Signature>
class query final
{
public:
    using signature = Signature;
    using signature_traits = detail::query_signature_traits<Signature>;

    using row_type = query_row<Signature>;
    using iterator = detail::query_iterator<Signature>;

public:
    auto row(entity e) -> std::optional<row_type>;
    auto count_rows() const -> std::size_t;

    auto begin() -> iterator;
    auto end() -> iterator;

private:
    query(std::span<detail::table* const> tables, detail::query_mapping_view mapping);

    auto make_cursor(std::size_t table_index, std::size_t row_index) noexcept -> detail::query_cursor;

    std::span<detail::table* const> _tables;
    detail::query_mapping_view _mapping; // tables * (signature_traits::required -> signature_traits::optional)

    friend class compiled_query<Signature>;
};

template<typename Signature>
class query_row final
{
public:
    using signature = compiled_query<Signature>::signature;
    using signature_traits = compiled_query<Signature>::signature_traits;

    using iterator = compiled_query<Signature>::iterator;

    operator bool() const noexcept;

    auto entity() const noexcept -> ant::entity;

    template<typename T>
    requires(signature_traits::template is_required<T> || signature_traits::template is_required<const T>)
    auto get() const noexcept -> const T&;

    template<typename T>
    requires(signature_traits::template is_required<T>)
    auto get() noexcept -> T&;

    template<typename T>
    requires(signature_traits::template is_optional<T> || signature_traits::template is_optional<const T>)
    auto get() const noexcept -> const T*;

    template<typename T>
    requires(signature_traits::template is_optional<T>)
    auto get() noexcept -> T*;

    template<typename T>
    requires(signature_traits::template is_optional<T> || signature_traits::template is_optional<const T>)
    auto has() const noexcept -> bool;

private:
    query_row(detail::query_cursor cursor, detail::query_mapping_view mapping) noexcept;

private:
    detail::query_cursor _cursor;
    detail::query_mapping_view _mapping; // tables * (signature_traits::required -> signature_traits::optional)

    friend class query<Signature>;
    friend class detail::query_iterator<Signature>;
};

template<typename Signature>
auto compiled_query<Signature>::query() const noexcept -> ant::query<Signature>
{
    return ant::query<Signature>(_tables, _mapping);
}

template<typename Signature>
auto compiled_query<Signature>::epoch() const noexcept -> std::size_t
{
    return _epoch;
}

template<typename Signature>
compiled_query<Signature>::compiled_query(detail::vector<detail::table*>&& tables, detail::query_mapping&& mapping, std::size_t epoch)
    : _tables(std::move(tables))
    , _mapping(std::move(mapping))
    , _epoch(epoch)
{
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
            return query_row<Signature>(make_cursor(table_index, row_index), _mapping);
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

    return iterator(make_cursor(table_index, 0), _mapping);
}

template<typename Signature>
auto query<Signature>::end() -> iterator
{
    return iterator(make_cursor(_tables.size(), 0), _mapping);
}

template<typename Signature>
query<Signature>::query(std::span<detail::table* const> tables, detail::query_mapping_view mapping)
    : _tables(tables)
    , _mapping(mapping)
{
}

template<typename Signature>
auto query<Signature>::make_cursor(std::size_t table_index, std::size_t row_index) noexcept -> detail::query_cursor
{
    return detail::query_cursor{_tables, table_index, row_index};
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
requires(query_row<Signature>::signature_traits::template is_required<T> || query_row<Signature>::signature_traits::template is_required<const T>)
auto query_row<Signature>::get() const noexcept -> const T&
{
    constexpr std::size_t type_index = signature_traits::template index_of<T>;
    constexpr std::size_t type_size = signature_traits::size;

    const std::size_t column_index = _mapping[_cursor.table_index() * type_size + type_index];

    return _cursor.table().template at<T>(column_index, _cursor.row_index());
}

template<typename Signature>
template<typename T>
requires(query_row<Signature>::signature_traits::template is_required<T>)
auto query_row<Signature>::get() noexcept -> T&
{
    constexpr std::size_t type_index = signature_traits::template index_of<T>;
    constexpr std::size_t type_size = signature_traits::size;

    const std::size_t column_index = _mapping[_cursor.table_index() * type_size + type_index];

    return _cursor.table().template at<T>(column_index, _cursor.row_index());
}

template<typename Signature>
template<typename T>
requires(query_row<Signature>::signature_traits::template is_optional<T> || query_row<Signature>::signature_traits::template is_optional<const T>)
auto query_row<Signature>::get() const noexcept -> const T*
{
    constexpr std::size_t type_index = signature_traits::template index_of<T>;
    constexpr std::size_t type_size = signature_traits::size;

    const std::size_t column_index = _mapping[_cursor.table_index() * type_size + type_index];

    return column_index != detail::table::npos ? &_cursor.table().template at<T>(column_index, _cursor.row_index()) : nullptr;
}

template<typename Signature>
template<typename T>
requires(query_row<Signature>::signature_traits::template is_optional<T>)
auto query_row<Signature>::get() noexcept -> T*
{
    constexpr std::size_t type_index = signature_traits::template index_of<T>;
    constexpr std::size_t type_size = signature_traits::size;

    const std::size_t column_index = _mapping[_cursor.table_index() * type_size + type_index];

    return column_index != detail::table::npos ? &_cursor.table().template at<T>(column_index, _cursor.row_index()) : nullptr;
}

template<typename Signature>
template<typename T>
requires(query_row<Signature>::signature_traits::template is_optional<T> || query_row<Signature>::signature_traits::template is_optional<const T>)
auto query_row<Signature>::has() const noexcept -> bool
{
    constexpr std::size_t type_index = signature_traits::template index_of<T>;
    constexpr std::size_t type_size = signature_traits::size;

    const std::size_t column_index = _mapping[_cursor.table_index() * type_size + type_index];

    return column_index != detail::table::npos;
}

template<typename Signature>
query_row<Signature>::query_row(detail::query_cursor cursor, detail::query_mapping_view mapping) noexcept
    : _cursor(std::move(cursor))
    , _mapping(mapping)
{
}

} // namespace ant
