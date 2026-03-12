#include <ant/database/detail/query/query_builder.hpp>

namespace ant::detail {

query_builder::query_builder(const schema& schema, catalog& catalog)
    : _schema(schema)
    , _catalog(catalog)
{
}

auto query_builder::build_tables(const component_bitset& required, const component_bitset& excluded) -> void
{
    _catalog.for_each(required, [this, &excluded](auto, table& table) {
        const bool is_excluded = (table.components() & excluded).any();

        if (is_excluded)
            return;

        _tables.push_back(&table);
    });
}

} // namespace ant::detail