#include <ant/database/detail/query_cursor.hpp>

#include <ant/core/assert.hpp>

namespace ant { namespace detail {

auto query_cursor::advance() -> bool
{
    ++row_index;

    if (table_index < query->_tables.size())
    {
        if (row_index < query->_tables[table_index]->size())
        {
            return true;
        }

        ++table_index;
        row_index = 0;
    }

    return false;
}

auto query_cursor::is_valid() const noexcept -> bool
{
    return query != nullptr && table_index < query->_tables.size() && row_index < query->_tables[table_index]->size();
}

auto query_cursor::table() const noexcept -> const detail::table&
{
    ANT_ASSERT(is_valid());
    return *query->_tables[table_index];
}

auto query_cursor::table() noexcept -> detail::table&
{
    ANT_ASSERT(is_valid());
    return *query->_tables[table_index];
}

auto query_cursor::entity() const noexcept -> ant::entity
{
    return table().entity_at(row_index);
}

}} // namespace ant::detail