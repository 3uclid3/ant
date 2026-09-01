#pragma once

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/detail/env/env_registry.hpp>
#include <ant/schema.hpp>

namespace ant {

class inspector
{
public:
    inspector(const ant::schema* schema, const detail::env_registry* envs, const detail::entity_registry* entities, const detail::catalog* catalog) noexcept;

public:
    [[nodiscard]] auto schema() const noexcept -> const ant::schema&;

public:
    template<typename T>
    [[nodiscard]] auto has_env() const noexcept -> bool;

    template<typename T>
    [[nodiscard]] auto get_env() const noexcept -> const T*;

public:
    [[nodiscard]] auto contains(entity e) const noexcept -> bool;

    template<typename T>
    [[nodiscard]] auto has(entity e) const noexcept -> bool;

    template<typename T>
    [[nodiscard]] auto get(entity e) const noexcept -> const T*;

private:
    const ant::schema* _schema{nullptr};
    const detail::env_registry* _envs{nullptr};
    const detail::entity_registry* _entities{nullptr};
    const detail::catalog* _catalog{nullptr};
};

inline inspector::inspector(const ant::schema* schema, const detail::env_registry* envs, const detail::entity_registry* entities, const detail::catalog* catalog) noexcept
    : _schema(schema)
    , _envs(envs)
    , _entities(entities)
    , _catalog(catalog) {}

inline auto inspector::schema() const noexcept -> const ant::schema&
{
    return *_schema;
}

template<typename T>
auto inspector::has_env() const noexcept -> bool
{
    return _envs->has<T>();
}

template<typename T>
auto inspector::get_env() const noexcept -> const T*
{
    return _envs->get<T>();
}

inline auto inspector::contains(entity e) const noexcept -> bool
{
    return _entities->contains(e);
}

template<typename T>
auto inspector::has(entity e) const noexcept -> bool
{
    const auto location = _entities->locate(e);
    if (location == detail::entity_location::invalid)
    {
        return false;
    }

    const auto& table = _catalog->at(location.table);
    return table.components().test(component_index_of<T>());
}

template<typename T>
auto inspector::get(entity e) const noexcept -> const T*
{
    const auto location = _entities->locate(e);
    if (location == detail::entity_location::invalid)
    {
        return nullptr;
    }

    const auto& table = _catalog->at(location.table);
    if (!table.components().test(component_index_of<T>()))
    {
        return nullptr;
    }

    return &_catalog->at(location.table).at<T>(location.row);
}

} // namespace ant
