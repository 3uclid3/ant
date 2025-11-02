#pragma once

#include <algorithm>
#include <span>
#include <utility>

#include <ant/core/assert.hpp>
#include <ant/core/container.hpp>
#include <ant/database/detail/column.hpp>
#include <ant/database/detail/table_index.hpp>
#include <ant/database/detail/table_signature.hpp>

namespace ant::detail {

template<typename Entity, typename Allocator>
class basic_table
{
public:
    using allocator_type = Allocator;
    using entity_type = Entity;
    using signature_type = basic_table_signature<allocator_type>;
    using column_type = basic_column<allocator_type>;

    using columns_type = vector<column_type, allocator_type>;
    using rows_type = vector<entity_type, allocator_type>;

public:
    basic_table(signature_type signature, columns_type columns, const allocator_type& allocator = allocator_type{}) noexcept;

    auto add_row(entity_type entity) -> row_index;
    auto remove_row(entity_type entity) -> void;
    auto remove_row(row_index index) -> void;

    auto signature() const noexcept -> const signature_type&;
    auto columns() const noexcept -> std::span<const column_type>;
    auto rows() const noexcept -> std::span<const entity_type>;

private:
    signature_type _signature;
    columns_type _columns;
    rows_type _rows;
};

template<typename Entity, typename Allocator>
basic_table<Entity, Allocator>::basic_table(signature_type signature, columns_type columns, const allocator_type& allocator) noexcept
    : _signature(std::move(signature))
    , _columns(std::move(columns))
    , _rows(rebind_alloc(allocator))
{
}

template<typename Entity, typename Allocator>
auto basic_table<Entity, Allocator>::add_row(entity_type entity) -> row_index
{
    ANT_ASSERT(std::ranges::find(_rows, entity) == _rows.end(), "Entity already exists in table");

    _rows.push_back(entity);

    for (auto& column : _columns)
    {
        column.emplace_back();

        ANT_ASSERT(_rows.size() == column.size(), "Column size mismatch after adding row");
    }

    return row_index::cast(_rows.size() - 1);
}

template<typename Entity, typename Allocator>
auto basic_table<Entity, Allocator>::remove_row(entity_type entity) -> void
{
    auto it = std::ranges::find(_rows, entity);

    ANT_ASSERT(it != _rows.end(), "Entity does not exist in table");

    const auto diff = std::distance(_rows.begin(), it);
    remove_row(row_index{static_cast<row_index::value_type>(diff)});
}

template<typename Entity, typename Allocator>
auto basic_table<Entity, Allocator>::remove_row(row_index index) -> void
{
    ANT_ASSERT(index < _rows.size(), "Invalid row index");

    for (auto& column : _columns)
    {
        column.swap_and_pop(index);
    }

    const bool is_last = (index == _rows.size() - 1);
    if (!is_last)
    {
        _rows[index] = _rows.back();
    }

    _rows.pop_back();
}

template<typename Entity, typename Allocator>
auto basic_table<Entity, Allocator>::signature() const noexcept -> const signature_type&
{
    return _signature;
}

template<typename Entity, typename Allocator>
auto basic_table<Entity, Allocator>::columns() const noexcept -> std::span<const column_type>
{
    return std::span<const column_type>{_columns.data(), _columns.size()};
}

template<typename Entity, typename Allocator>
auto basic_table<Entity, Allocator>::rows() const noexcept -> std::span<const entity_type>
{
    return std::span<const entity_type>{_rows.data(), _rows.size()};
}

} // namespace ant::detail
