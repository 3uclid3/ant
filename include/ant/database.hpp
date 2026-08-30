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

    template<typename... Components>
    auto env_of() -> ant::env_of<Components...>;

    template<typename Signature>
    auto changeset(change_accumulator& accumulator) -> ant::changeset<Signature>;

    template<typename... Parameters>
    auto changeset_of(change_accumulator& accumulator) -> ant::changeset_of<Parameters...>;

    template<typename Signature>
    auto compile_query() -> compiled_query<Signature>;

    template<typename... Parameters>
    auto compile_query_of() -> compiled_query_of<Parameters...>;

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
    static_assert(is_env_signature_v<Signature>, "expect ant::env_signature");
    return ant::env<Signature>(_envs);
}

template<typename... Components>
auto database::env_of() -> ant::env_of<Components...>
{
    return ant::env_of<Components...>(_envs);
}

template<typename Signature>
auto database::changeset(change_accumulator& accumulator) -> ant::changeset<Signature>
{
    static_assert(is_changeset_signature_v<Signature>, "expect ant::changeset_signature");
    return ant::changeset<Signature>(accumulator, _entities);
}

template<typename... Parameters>
auto database::changeset_of(change_accumulator& accumulator) -> ant::changeset_of<Parameters...>
{
    return ant::changeset_of<Parameters...>(accumulator, _entities);
}

template<typename Signature>
auto database::compile_query() -> compiled_query<Signature>
{
    static_assert(is_query_signature_v<Signature>, "expect ant::query_signature");
    return detail::query_compiler::compile<Signature>(_catalog);
}

template<typename... Parameters>
auto database::compile_query_of() -> compiled_query_of<Parameters...>
{
    return compile_query<query_signature<Parameters...>>();
}

template<typename Signature>
auto database::recompile_query(compiled_query<Signature>& cquery) -> void
{
    detail::query_compiler::recompile<Signature>(_catalog, cquery);
}

} // namespace ant
