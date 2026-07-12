#include <ant/detail/query/query_cursor.hpp>

#include <ant/detail/assert.hpp>

namespace ant { namespace detail {

query_cursor::query_cursor(std::span<detail::table* const> tables) noexcept
    : _tables(tables)
{
}

query_cursor::query_cursor(std::span<detail::table* const> tables, std::size_t table_index, std::size_t row_index) noexcept
    : _tables(tables)
    , _table_index(table_index)
    , _row_index(row_index)
{
}

auto query_cursor::operator==(const query_cursor& other) const noexcept -> bool
{
    return _tables.data() == other._tables.data() && _table_index == other._table_index && _row_index == other._row_index;
}

auto query_cursor::advance() noexcept -> bool
{
    if (_table_index >= _tables.size())
    {
        return false;
    }

    do
    {
        ++_row_index;

        if (_row_index < _tables[_table_index]->size())
        {
            return true;
        }

        ++_table_index;
        _row_index = 0;

        if (_table_index >= _tables.size())
        {
            return false;
        }

    } while (_row_index >= _tables[_table_index]->size());

    return true;
}

auto query_cursor::is_valid() const noexcept -> bool
{
    return _table_index < _tables.size() && _row_index < _tables[_table_index]->size();
}

auto query_cursor::table() const noexcept -> const detail::table&
{
    ANT_ASSERT(_table_index < _tables.size());
    return *_tables[_table_index];
}

auto query_cursor::table() noexcept -> detail::table&
{
    return const_cast<detail::table&>(std::as_const(*this).table());
}

auto query_cursor::entity() const noexcept -> ant::entity
{
    return table().entity_at(_row_index);
}

auto query_cursor::table_index() const noexcept -> std::size_t
{
    return _table_index;
}

auto query_cursor::row_index() const noexcept -> std::size_t
{
    return _row_index;
}

}} // namespace ant::detail
