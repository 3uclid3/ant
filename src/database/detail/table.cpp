#include <ant/database/detail/table.hpp>

#include <ant/core/assert.hpp>

namespace ant::detail {

table::table(table_signature signature, std::vector<table_column>&& columns) noexcept
    : _signature(std::move(signature))
    , _columns(std::move(columns))
{
}

auto table::add_row(entity e) -> row_index
{
    ANT_ASSERT(std::ranges::find(_rows, e) == _rows.end(), "Entity already exists in table");

    _rows.push_back(e);

    for (auto& column : _columns)
    {
        column.emplace_back();

        ANT_ASSERT(_rows.size() == column.size(), "Column size mismatch after adding row");
    }

    return row_index::cast(_rows.size() - 1);
}

auto table::remove_row(entity e) -> void
{
    auto it = std::ranges::find(_rows, e);

    ANT_ASSERT(it != _rows.end(), "Entity does not exist in table");

    const auto diff = std::distance(_rows.begin(), it);
    remove_row(row_index{static_cast<row_index::value_type>(diff)});
}

auto table::remove_row(row_index index) -> void
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

auto table::signature() const noexcept -> const table_signature&
{
    return _signature;
}

auto table::columns() const noexcept -> std::span<const table_column>
{
    return _columns;
}

auto table::rows() const noexcept -> std::span<const entity>
{
    return _rows;
}

} // namespace ant::detail
