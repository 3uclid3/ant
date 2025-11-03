#include <ant/database/detail/table.hpp>

#include <ant/core/assert.hpp>

namespace ant::detail {

table::table(table_signature signature, std::vector<table_column>&& columns) noexcept
    : _signature(std::move(signature))
    , _columns(std::move(columns))
{
}

auto table::insert(entity e) -> std::size_t
{
    ANT_ASSERT(std::ranges::find(_rows, e) == _rows.end(), "Entity already exists in table");

    _rows.push_back(e);

    for (auto& column : _columns)
    {
        column.emplace_back();

        ANT_ASSERT(_rows.size() == column.size(), "Column size mismatch after adding row");
    }

    return _rows.size() - 1;
}

auto table::erase(entity e) -> void
{
    auto it = std::ranges::find(_rows, e);

    ANT_ASSERT(it != _rows.end(), "Entity does not exist in table");

    const auto diff = std::distance(_rows.begin(), it);
    const auto index = static_cast<std::size_t>(diff);

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
