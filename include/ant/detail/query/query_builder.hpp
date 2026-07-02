#pragma once

#include <memory_resource>

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/schema/component_bitset.hpp>
#include <ant/detail/schema/schema.hpp>
#include <ant/detail/type_list.hpp>
#include <ant/query.hpp>

namespace ant { namespace detail {

class query_builder
{
public:
    query_builder(const schema& schema, catalog& catalog, std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource());

    template<typename Signature>
    auto build() -> query<Signature>;

private:
    auto build_tables(const component_bitset& required, const component_bitset& excluded) -> void;

    template<typename... IncludedTypes>
    auto build_mapping(type_list<IncludedTypes...>) -> void;

    const schema& _schema;
    catalog& _catalog;

    std::pmr::vector<table*> _tables;
    std::pmr::vector<base_query::mapping_type> _mapping;
    std::pmr::memory_resource* _memory_resource;
};

template<typename Signature>
auto query_builder::build() -> query<Signature>
{
    using signature_traits = typename query<Signature>::signature_traits;

    _tables.clear();
    _mapping.clear();

    using included_types = type_list_transform_t<std::remove_const, typename signature_traits::included>;

    build_tables(component_bitset_of<typename signature_traits::required>(_memory_resource), component_bitset_of<typename signature_traits::excluded>(_memory_resource));
    build_mapping(included_types{});

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
