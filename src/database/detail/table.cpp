#include <ant/database/detail/table.hpp>

#include <algorithm> // for std::ranges::lower_bound

#include <ant/core/assert.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail {

table::table(dynamic_bitset components, const schema& schema)
    : _components(std::move(components))
{
    _columns.reserve(_components.count());
    _components.for_each_set([this, &schema](std::size_t index) {
        _columns.emplace_back(schema.meta_of(index));
    });

    ensure_sparse_capacity(8);
}

auto table::contains(entity e) const noexcept -> bool
{
    const auto index = entity_traits::to_index(e);
    return index < _sparse.size() && _sparse[index] != npos;
}

auto table::insert(entity e) -> std::size_t
{
    const auto index = entity_traits::to_index(e);
    ANT_ASSERT(index != npos, "invalid entity");

    ensure_sparse_capacity(index + 1);

    // return existing row if already present
    if (_sparse[index] != npos)
    {
        return _sparse[index];
    }

    _sparse[index] = _rows.size();
    _rows.push_back(e);

    for (auto& column : _columns)
    {
        column.emplace_back();

        ANT_ASSERT(_rows.size() == column.size(), "column size mismatch after adding row");
    }

    return _sparse[index];
}

auto table::splice(entity e, table& source) -> std::size_t
{
    ANT_ASSERT(source.contains(e));

    const auto index = entity_traits::to_index(e);
    ANT_ASSERT(index != npos, "invalid entity");

    ensure_sparse_capacity(index + 1);

    // TODO support existing row
    ANT_ASSERT(_sparse[index] == npos, "insertion from source does not support existing rows yet");

    _sparse[index] = _rows.size();
    _rows.push_back(e);

    for (table_column& column : _columns)
    {
        if (source._components.test(column.meta().index))
        {
            // Find matching source column by component index using a projection to meta().index
            auto it = std::ranges::lower_bound(source._columns, column.meta().index, {}, [](const table_column& c) { return c.meta().index; });
            ANT_ASSERT(it != source._columns.end() && it->meta().index == column.meta().index, "missing source column");
            column.splice_back(*it, source._sparse[index]);
        }
        else
        {
            column.emplace_back();
        }

        ANT_ASSERT(_rows.size() == column.size(), "column size mismatch after adding row");
    }

    constexpr bool erase_columns = false;
    source.erase_impl(e, erase_columns);

    return _sparse[index];
}

auto table::erase(entity e) -> bool
{
    return erase_impl(e, true);
}

auto table::column_of(std::uint32_t hash) const noexcept -> std::size_t
{
    auto it = std::ranges::lower_bound(_columns, hash, {}, [](const table_column& c) { return c.meta().hash; });
    return it != _columns.end() && it->meta().hash == hash ? std::distance(_columns.begin(), it) : npos;
}

auto table::row_of(entity e) const noexcept -> std::size_t
{
    const auto index = entity_traits::to_index(e);
    ANT_ASSERT(index != npos, "Invalid entity index");
    return index < _sparse.size() ? _sparse[index] : npos;
}

auto table::erase_impl(entity e, bool erase_columns) -> bool
{
    const auto index = entity_traits::to_index(e);

    ANT_ASSERT(index != npos, "Invalid entity index");

    if (index >= _sparse.size() || _sparse[index] == npos)
    {
        return false;
    }

    const auto row_index = _sparse[index];

    if (erase_columns)
    {
        for (auto& column : _columns)
        {
            column.swap_and_pop(row_index);
        }
    }

    const auto last_row_index = _rows.size() - 1;
    if (row_index != last_row_index)
    {
        _rows[row_index] = _rows.back();
        _sparse[entity_traits::to_index(_rows[last_row_index])] = row_index;
    }

    _sparse[index] = npos;
    _rows.pop_back();

    return true;
}

auto table::ensure_sparse_capacity(std::size_t capacity) -> void
{
    if (capacity > _sparse.size())
    {
        _sparse.resize(capacity, npos);
    }
}

} // namespace ant::detail
