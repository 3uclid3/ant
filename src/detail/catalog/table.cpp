#include <ant/detail/catalog/table.hpp>

#include <algorithm>

#include <ant/detail/assert.hpp>
#include <ant/detail/schema.hpp>

namespace ant::detail {

table::table(bitset components, const schema& schema, std::pmr::memory_resource* memory_resource)
    : _components(std::move(components))
    , _columns(memory_resource)
    , _sparse_columns(memory_resource)
    , _rows(memory_resource)
    , _sparse_rows(memory_resource)
{
    _columns.reserve(_components.count());
    _sparse_columns.resize(schema.range(), npos);

    _components.for_each_set([&](std::size_t index) {
        _sparse_columns[index] = _columns.size();
        _columns.emplace_back(schema.meta_of(index), memory_resource);
    });
}

auto table::contains(entity e) const noexcept -> bool
{
    const auto index = entity_traits::to_index(e);
    return index < _sparse_rows.size() && _sparse_rows[index] != npos;
}

auto table::insert(entity e) -> std::size_t
{
    const auto index = entity_traits::to_index(e);
    ANT_ASSERT(index != npos, "invalid entity");

    ensure_sparse_capacity(index + 1);

    if (_sparse_rows[index] != npos)
    {
        return _sparse_rows[index];
    }

    _sparse_rows[index] = _rows.size();
    _rows.push_back(e);

    for (auto& column : _columns)
        column.emplace_back();

    ANT_ASSERT(std::ranges::all_of(_columns, [this](const table_column& c) { return c.size() == _rows.size(); }), "column size mismatch after adding row");

    return _sparse_rows[index];
}

auto table::splice(entity e, table& source) -> std::size_t
{
    ANT_ASSERT(source.contains(e));

    const auto index = entity_traits::to_index(e);
    ANT_ASSERT(index != npos, "invalid entity");

    ensure_sparse_capacity(index + 1);

    // TODO support existing row
    ANT_ASSERT(_sparse_rows[index] == npos, "insertion from source does not support existing rows yet");

    _sparse_rows[index] = _rows.size();
    _rows.push_back(e);

    for (table_column& column : _columns)
    {
        const auto src_col_idx = source.column_of(column.meta().index);
        if (src_col_idx != npos)
        {
            column.splice_back(source._columns[src_col_idx], source._sparse_rows[index]);
        }
        else
        {
            column.emplace_back();
        }
    }

    for (table_column& src_column : source._columns)
    {
        if (!_components.test(src_column.meta().index))
            src_column.swap_and_pop(source._sparse_rows[index]);
    }

    constexpr bool erase_columns = false;
    source.erase_impl(e, erase_columns);

    ANT_ASSERT(std::ranges::all_of(_columns, [this](const table_column& c) { return c.size() == _rows.size(); }), "column size mismatch after splicing row");

    return _sparse_rows[index];
}

auto table::erase(entity e) -> bool
{
    return erase_impl(e, true);
}

auto table::column_of(component_index index) const noexcept -> std::size_t
{
    return index < _sparse_columns.size() ? _sparse_columns[index] : npos;
}

auto table::row_of(entity e) const noexcept -> std::size_t
{
    const auto index = entity_traits::to_index(e);
    ANT_ASSERT(index != npos, "Invalid entity index");
    return index < _sparse_rows.size() ? _sparse_rows[index] : npos;
}

auto table::entity_at(std::size_t row_index) const noexcept -> entity
{
    return _rows[row_index];
}

auto table::erase_impl(entity e, bool erase_columns) -> bool
{
    const auto index = entity_traits::to_index(e);

    ANT_ASSERT(index != npos, "Invalid entity index");

    if (index >= _sparse_rows.size() || _sparse_rows[index] == npos)
    {
        return false;
    }

    const auto row_index = _sparse_rows[index];

    if (erase_columns)
    {
        for (auto& column : _columns)
        {
            column.swap_and_pop(row_index);
        }
    }

    ANT_ASSERT(!_rows.empty(), "rows cannot be empty when an entity is registered");
    const auto last_row_index = _rows.size() - 1;
    if (row_index != last_row_index)
    {
        _rows[row_index] = _rows.back();
        _sparse_rows[entity_traits::to_index(_rows[last_row_index])] = row_index;
    }

    _sparse_rows[index] = npos;
    _rows.pop_back();

    return true;
}

auto table::ensure_sparse_capacity(std::size_t capacity) -> void
{
    if (capacity > _sparse_rows.size())
    {
        _sparse_rows.resize(capacity, npos);
    }
}

} // namespace ant::detail
