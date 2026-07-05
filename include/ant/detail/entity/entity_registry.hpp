#pragma once

#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_location.hpp>
#include <ant/detail/entity/entity_traits.hpp>
#include <ant/entity.hpp>

namespace ant::detail {

class entity_registry
{
public:
    using value_type = entity;
    using location_type = entity_location;
    using version_type = entity_traits::version_type;

public:
    entity_registry() noexcept = default;

    entity_registry(entity_registry&&) = default;
    auto operator=(entity_registry&&) -> entity_registry& = default;

    entity_registry(const entity_registry&) = delete;
    auto operator=(const entity_registry&) -> entity_registry& = delete;

    [[nodiscard]] auto contains(value_type e) const noexcept -> bool;

    [[nodiscard]] auto create() -> value_type;
    auto destroy(value_type e) -> void;

    auto relocate(value_type e, location_type location) noexcept -> void;
    [[nodiscard]] auto locate(value_type e) const noexcept -> location_type;
    [[nodiscard]] auto version(value_type e) const noexcept -> version_type;

    [[nodiscard]] auto empty() const noexcept -> bool;
    [[nodiscard]] auto size() const noexcept -> std::size_t;

private:
    using index_type = entity_traits::index_type;

    struct entry
    {
        location_type location;
        version_type version;
    };

private:
    vector<entry> _entries;
    vector<index_type> _free;
};

} // namespace ant::detail
