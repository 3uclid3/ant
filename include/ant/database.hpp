#pragma once

#include <ant/changeset.hpp>
#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/detail/env/env_registry.hpp>
#include <ant/detail/query/query_compiler.hpp>
#include <ant/env.hpp>
#include <ant/inspect/inspector.hpp>
#include <ant/query.hpp>
#include <ant/schema.hpp>

namespace ant {

class database
{
public:
    explicit database(ant::schema schema);

    auto schema() const noexcept -> const ant::schema&;
    auto inspect() const noexcept -> inspector;

    template<typename Signature>
    auto env() -> ant::env<Signature>;

    template<typename Signature>
    auto changeset(change_accumulator& accumulator) -> ant::changeset<Signature>;

    template<typename Signature>
    auto compile_query() -> compiled_query<Signature>;

    template<typename Signature>
    auto recompile_query(compiled_query<Signature>& cquery) -> void;

    auto flush(std::span<change_accumulator> accumulators) -> void;

private:
    ant::schema _schema;
    detail::env_registry _envs{_schema};
    detail::entity_registry _entities;
    detail::catalog _catalog{_schema};
};

inline auto database::schema() const noexcept -> const ant::schema&
{
    return _schema;
}

inline auto database::inspect() const noexcept -> inspector
{
    return inspector(&_schema, &_envs, &_entities, &_catalog);
}

template<typename Signature>
auto database::env() -> ant::env<Signature>
{
    return ant::env<Signature>(_envs);
}

template<typename Signature>
auto database::changeset(change_accumulator& accumulator) -> ant::changeset<Signature>
{
    return ant::changeset<Signature>(accumulator, _entities);
}

template<typename Signature>
auto database::compile_query() -> compiled_query<Signature>
{
    return detail::query_compiler::compile<Signature>(_catalog);
}

template<typename Signature>
auto database::recompile_query(compiled_query<Signature>& cquery) -> void
{
    detail::query_compiler::recompile<Signature>(_catalog, cquery);
}

} // namespace ant
