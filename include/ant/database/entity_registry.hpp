#pragma once

#include <ant/core/container.hpp>
#include <ant/database/entity_traits.hpp>
#include <ant/database/table_index.hpp>

namespace ant {

template<typename Database>
class basic_entity_registry
{
public:
    using traits = entity_traits<typename Database::entity_type>;

    using allocator_type = typename Database::allocator_type;
    using entity_type = typename Database::entity_type;
    using version_type = typename traits::version_type;

    explicit basic_entity_registry(const allocator_type& allocator = {}) noexcept;

    basic_entity_registry(basic_entity_registry&&) noexcept = default;
    auto operator=(basic_entity_registry&&) noexcept -> basic_entity_registry& = default;

    basic_entity_registry(const basic_entity_registry&) = delete;
    auto operator=(const basic_entity_registry&) noexcept -> basic_entity_registry& = delete;

    [[nodiscard]] auto contains(entity_type entity) const noexcept -> bool;

    [[nodiscard]] auto create() -> entity_type;
    auto destroy(entity_type entity) noexcept -> void;

    auto relocate(entity_type entity, table_index table, row_index row) noexcept -> void;
    [[nodiscard]] auto locate(entity_type entity) const noexcept -> table_location;
    [[nodiscard]] auto version(entity_type entity) const noexcept -> version_type;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    using index_type = typename traits::identifier_type;

    allocator_type _allocator;

    vector<table_location, allocator_type> _location;
    vector<version_type, allocator_type> _versions;

    vector<index_type, allocator_type> _free;
};

template<typename Database>
basic_entity_registry<Database>::basic_entity_registry(const allocator_type& allocator) noexcept
    : _allocator{allocator}
    , _location{rebind_allocator(_allocator)}
    , _versions{rebind_allocator(_allocator)}
    , _free{rebind_allocator(_allocator)}
{
}

template<typename Database>
auto basic_entity_registry<Database>::contains(entity_type entity) const noexcept -> bool
{
    const auto idx = traits::to_identifier(entity);
    const auto ver = traits::to_version(entity);

    return static_cast<std::size_t>(idx) < _versions.size() && _versions[static_cast<std::size_t>(idx)] == ver;
}

template<typename Database>
auto basic_entity_registry<Database>::create() -> entity_type
{
    if (!_free.empty())
    {
        const auto idx = _free.back();
        _free.pop_back();

        const auto ver = _versions[idx];

        return traits::construct(idx, ver);
    }
    else
    {
        const auto idx = static_cast<index_type>(_versions.size());

        _versions.emplace_back(version_type{0});
        _location.emplace_back();

        return traits::construct(idx, 0);
    }
}

template<typename Database>
auto basic_entity_registry<Database>::destroy(entity_type entity) noexcept -> void
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);

    _versions[idx] = traits::to_version(traits::bump(entity));
    _location[idx] = {};

    _free.push_back(idx);
}

template<typename Database>
auto basic_entity_registry<Database>::relocate(entity_type entity, table_index table, row_index row) noexcept -> void
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    _location[idx] = {table, row};
}

template<typename Database>
auto basic_entity_registry<Database>::locate(entity_type entity) const noexcept -> table_location
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    return _location[idx];
}

template<typename Database>
auto basic_entity_registry<Database>::version(entity_type entity) const noexcept -> version_type
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    return _versions[idx];
}

template<typename Database>
auto basic_entity_registry<Database>::empty() const noexcept -> bool
{
    return size() == 0;
}

template<typename Database>
auto basic_entity_registry<Database>::size() const noexcept -> std::size_t
{
    return _versions.size() - _free.size();
}

} // namespace ant
