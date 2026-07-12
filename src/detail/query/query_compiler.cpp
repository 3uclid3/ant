#include <ant/detail/query/query_compiler.hpp>

namespace ant::detail {

auto epoch(const catalog& catalog) -> std::size_t
{
    return catalog.size();
}

auto query_compiler::compile_tables(catalog& catalog, const component_bitset& required, const component_bitset& excluded) -> vector<table*>
{
    vector<table*> tables;
    catalog.for_each(required, [&tables, &excluded](auto, table& table) {
        const bool is_excluded = (table.components() & excluded).any();

        if (is_excluded)
            return;

        tables.push_back(&table);
    });
    return tables;
}

} // namespace ant::detail
