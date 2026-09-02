#pragma once

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/detail/env/env_registry.hpp>
#include <ant/schema.hpp>

namespace ant::detail {

struct store
{
    store(ant::schema&& s) noexcept;

    store(const store&) = delete;
    auto operator=(const store&) -> store& = delete;

    store(store&&) = delete;
    auto operator=(store&&) -> store& = delete;

    ant::schema schema;
    ant::detail::env_registry envs{schema};
    ant::detail::entity_registry entities;
    ant::detail::catalog catalog{schema};
};

inline store::store(ant::schema&& s) noexcept
    : schema(std::move(s))
{
}

} // namespace ant::detail
