#pragma once

#include <ant/binding.hpp>
#include <ant/changeset.hpp>
#include <ant/detail/lifecycle/lifecycle_registry.hpp>
#include <ant/detail/query/query_compiler.hpp>
#include <ant/detail/store.hpp>
#include <ant/env.hpp>
#include <ant/inspect/inspector.hpp>
#include <ant/query.hpp>
#include <ant/schema.hpp>

namespace ant {

class database
{
public:
    explicit database(ant::schema schema);

    database(const database&) = delete;
    auto operator=(const database&) -> database& = delete;

    database(database&&) = delete;
    auto operator=(database&&) -> database& = delete;

    auto schema() const noexcept -> const ant::schema&;
    auto inspect() const noexcept -> inspector;

    template<typename... Supplied, typename T>
    auto bind(T&& func) -> basic_binding<Supplied...>;

    template<typename Component, typename T>
    auto on_attach(T&& func) -> void;

    template<typename Component, typename T>
    auto on_detach(T&& func) -> void;

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
    detail::store _store;
    detail::lifecycle_registry _lifecycle{_store};
};

inline auto database::schema() const noexcept -> const ant::schema&
{
    return _store.schema;
}

inline auto database::inspect() const noexcept -> inspector
{
    return inspector(_store);
}

template<typename... Supplied, typename T>
auto database::bind(T&& func) -> basic_binding<Supplied...>
{
    return basic_binding<Supplied...>(_store, std::forward<T>(func));
}

template<typename Component, typename T>
auto database::on_attach(T&& func) -> void
{
    _lifecycle.on_attach<Component>(std::forward<T>(func));
}

template<typename Component, typename T>
auto database::on_detach(T&& func) -> void
{
    _lifecycle.on_detach<Component>(std::forward<T>(func));
}

template<typename Signature>
auto database::env() -> ant::env<Signature>
{
    static_assert(is_env_signature_v<Signature>, "expect ant::env_signature");
    return ant::env<Signature>(_store.envs);
}

template<typename... Components>
auto database::env_of() -> ant::env_of<Components...>
{
    return ant::env_of<Components...>(_store.envs);
}

template<typename Signature>
auto database::changeset(change_accumulator& accumulator) -> ant::changeset<Signature>
{
    static_assert(is_changeset_signature_v<Signature>, "expect ant::changeset_signature");
    return ant::changeset<Signature>(accumulator, _store.entities);
}

template<typename... Parameters>
auto database::changeset_of(change_accumulator& accumulator) -> ant::changeset_of<Parameters...>
{
    return ant::changeset_of<Parameters...>(accumulator, _store.entities);
}

template<typename Signature>
auto database::compile_query() -> compiled_query<Signature>
{
    static_assert(is_query_signature_v<Signature>, "expect ant::query_signature");
    return detail::query_compiler::compile<Signature>(_store.catalog);
}

template<typename... Parameters>
auto database::compile_query_of() -> compiled_query_of<Parameters...>
{
    return compile_query<query_signature<Parameters...>>();
}

template<typename Signature>
auto database::recompile_query(compiled_query<Signature>& cquery) -> void
{
    detail::query_compiler::recompile<Signature>(_store.catalog, cquery);
}

} // namespace ant
