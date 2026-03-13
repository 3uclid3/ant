#include <ant/database/detail/query/query_cursor.hpp>

#include <ant/core/assert.hpp>

namespace ant { namespace detail {

auto query_cursor::advance() -> bool
{
    ANT_ASSERT(query != nullptr);

    if (table_index >= query->_tables.size())
    {
        return false;
    }

    do
    {
        ++row_index;

        if (row_index < query->_tables[table_index]->size())
        {
            return true;
        }

        ++table_index;
        row_index = 0;

        if (table_index >= query->_tables.size())
        {
            return false;
        }

    } while (row_index >= query->_tables[table_index]->size());

    return true;
}

auto query_cursor::is_valid() const noexcept -> bool
{
    return query != nullptr && table_index < query->_tables.size() && row_index < query->_tables[table_index]->size();
}

auto query_cursor::table() const noexcept -> const detail::table&
{
    ANT_ASSERT(query != nullptr && table_index < query->_tables.size());
    return *query->_tables[table_index];
}

auto query_cursor::table() noexcept -> detail::table&
{
    return const_cast<detail::table&>(std::as_const(*this).table());
}

auto query_cursor::entity() const noexcept -> ant::entity
{
    return table().entity_at(row_index);
}

}} // namespace ant::detail