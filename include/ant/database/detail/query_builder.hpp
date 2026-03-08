#pragma once

#include <ant/database/component_bitset.hpp>
#include <ant/database/query.hpp>

namespace ant { namespace detail {

class query_builder
{
public:
    query_builder(const schema& schema, catalog& catalog);

    template<typename Signature>
    auto build() -> query<Signature>;

private:
    auto build_tables(const component_bitset& required, const component_bitset& excluded) -> void;

    template<typename... IncludedTypes>
    auto build_mapping(type_list<IncludedTypes...>) -> void;

    const schema& _schema;
    catalog& _catalog;

    std::vector<table*> _tables;
    std::vector<std::uint32_t> _mapping;
};

template<typename Signature>
auto query_builder::build() -> query<Signature>
{
    using signature_traits = typename query<Signature>::signature_traits;

    _tables.clear();
    _mapping.clear();

    component_bitset required = signature_traits::make_required_bitset(_schema);
    component_bitset excluded = signature_traits::make_excluded_bitset(_schema);

    build_tables(required, excluded);
    build_mapping(typename signature_traits::included_types{});

    return query<Signature>(_schema, std::move(_tables), std::move(_mapping));
}

template<typename... IncludedTypes>
auto query_builder::build_mapping(type_list<IncludedTypes...>) -> void
{
    _mapping.reserve(_tables.size() * sizeof...(IncludedTypes));

    for (std::size_t i = 0; i < _tables.size(); ++i)
    {
        const table& t = *_tables[i];
        (_mapping.push_back(t.column_of<IncludedTypes>()), ...);
    }
}

}} // namespace ant::detail