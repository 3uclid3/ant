#pragma once

#include <vector>

#include <ant/database/detail/entity_traits.hpp>
#include <ant/database/detail/table_index.hpp>
#include <ant/database/entity.hpp>

namespace ant::detail {

class entity_registry
{
public:
    using version_type = entity_traits::version_type;

    entity_registry() noexcept = default;

    entity_registry(entity_registry&&) noexcept = default;
    auto operator=(entity_registry&&) noexcept -> entity_registry& = default;

    entity_registry(const entity_registry&) = delete;
    auto operator=(const entity_registry&) noexcept -> entity_registry& = delete;

    [[nodiscard]] auto contains(entity e) const noexcept -> bool;

    [[nodiscard]] auto create() -> entity;
    auto destroy(entity e) noexcept -> void;

    auto relocate(entity e, table_index table, row_index row) noexcept -> void;
    [[nodiscard]] auto locate(entity e) const noexcept -> table_location;
    [[nodiscard]] auto version(entity e) const noexcept -> version_type;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    std::vector<table_location> _location;
    std::vector<version_type> _versions;

    std::vector<entity_traits::identifier_type> _free;
};

} // namespace ant::detail
