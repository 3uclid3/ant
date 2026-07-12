#pragma once

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/query/query_mapping.hpp>
#include <ant/detail/schema/component_bitset.hpp>
#include <ant/detail/schema/schema.hpp>
#include <ant/detail/type_list.hpp>
#include <ant/query.hpp>

namespace ant { namespace detail {

auto epoch(const catalog& catalog) -> std::size_t;

class query_compiler
{
public:
    template<typename Signature>
    static auto compile(catalog& catalog) -> compiled_query<Signature>;

    template<typename Signature>
    static auto recompile(catalog& catalog, compiled_query<Signature>& cq) -> void;

private:
    static auto compile_tables(catalog& catalog, const component_bitset& required, const component_bitset& excluded) -> vector<table*>;

    template<typename... IncludedTypes>
    static auto compile_mapping(const vector<table*>& tables, type_list<IncludedTypes...>) -> query_mapping;
};

template<typename Signature>
auto query_compiler::compile(catalog& catalog) -> compiled_query<Signature>
{
    using signature_traits = typename compiled_query<Signature>::signature_traits;

    using required_types = typename signature_traits::required;
    using excluded_types = typename signature_traits::excluded;
    using included_types = type_list_transform_t<std::remove_const, typename signature_traits::included>;

    vector<table*> tables = compile_tables(catalog, component_bitset_of<required_types>(), component_bitset_of<excluded_types>());
    query_mapping mapping = compile_mapping(tables, included_types{});

    return compiled_query<Signature>(std::move(tables), std::move(mapping), epoch(catalog));
}

template<typename Signature>
auto query_compiler::recompile(catalog& catalog, compiled_query<Signature>& cq) -> void
{
    if (cq.epoch() == epoch(catalog))
    {
        return;
    }

    // TODO optim: epoch is tables size, we just need to check the new tables if they matches

    cq = compile<Signature>(catalog);
}

template<typename... IncludedTypes>
auto query_compiler::compile_mapping(const vector<table*>& tables, type_list<IncludedTypes...>) -> query_mapping
{
    query_mapping mapping;
    mapping.reserve(tables.size() * sizeof...(IncludedTypes));

    for (std::size_t i = 0; i < tables.size(); ++i)
    {
        const table& t = *tables[i];
        (mapping.push_back(t.column_of<IncludedTypes>()), ...);
    }
    return mapping;
}

}} // namespace ant::detail
