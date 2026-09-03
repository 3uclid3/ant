#pragma once

#include <ant/detail/store/store.hpp>

namespace ant {

class inspector
{
public:
    explicit inspector(const detail::store& store) noexcept;

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
    const detail::store& _store;
};

inline inspector::inspector(const detail::store& store) noexcept
    : _store(store)
{}

inline auto inspector::schema() const noexcept -> const ant::schema&
{
    return _store.schema;
}

template<typename T>
auto inspector::has_env() const noexcept -> bool
{
    return _store.envs.has<T>();
}

template<typename T>
auto inspector::get_env() const noexcept -> const T*
{
    return _store.envs.get<T>();
}

inline auto inspector::contains(entity e) const noexcept -> bool
{
    return _store.entities.contains(e);
}

template<typename T>
auto inspector::has(entity e) const noexcept -> bool
{
    const auto location = _store.entities.locate(e);
    if (location == detail::entity_location::invalid)
    {
        return false;
    }

    const auto& table = _store.catalog.at(location.table);
    return table.components().test(component_index_of<T>());
}

template<typename T>
auto inspector::get(entity e) const noexcept -> const T*
{
    const auto location = _store.entities.locate(e);
    if (location == detail::entity_location::invalid)
    {
        return nullptr;
    }

    const auto& table = _store.catalog.at(location.table);
    if (!table.components().test(component_index_of<T>()))
    {
        return nullptr;
    }

    return &table.at<T>(location.row);
}

} // namespace ant
