#pragma once

#include <vector>

#include <ant/core/allocator.hpp>
#include <ant/database/entity_traits.hpp>
#include <ant/database/table_index.hpp>

namespace ant {

template<typename Database>
class basic_entity_index
{
public:
    using traits = entity_traits<typename Database::entity_type>;

    using allocator_type = typename Database::allocator_type;
    using entity_type = typename Database::entity_type;
    using version_type = typename traits::version_type;

    explicit basic_entity_index(const allocator_type& allocator = {}) noexcept;

    basic_entity_index(basic_entity_index&&) noexcept = default;
    auto operator=(basic_entity_index&&) noexcept -> basic_entity_index& = default;

    basic_entity_index(const basic_entity_index&) = delete;
    auto operator=(const basic_entity_index&) noexcept -> basic_entity_index& = delete;

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

    std::vector<table_location, rebind_allocator_t<table_location, allocator_type>> _location;
    std::vector<version_type, rebind_allocator_t<version_type, allocator_type>> _versions;

    std::vector<index_type, rebind_allocator_t<index_type, allocator_type>> _free;
};

template<typename Database>
basic_entity_index<Database>::basic_entity_index(const allocator_type& allocator) noexcept
    : _allocator{allocator}
    , _location{rebind_allocator<table_location>(_allocator)}
    , _versions{rebind_allocator<version_type>(_allocator)}
    , _free{rebind_allocator<index_type>(_allocator)}
{
}

template<typename Database>
auto basic_entity_index<Database>::contains(entity_type entity) const noexcept -> bool
{
    const auto idx = traits::to_identifier(entity);
    const auto ver = traits::to_version(entity);

    return static_cast<std::size_t>(idx) < _versions.size() && _versions[static_cast<std::size_t>(idx)] == ver;
}

template<typename Database>
auto basic_entity_index<Database>::create() -> entity_type
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
auto basic_entity_index<Database>::destroy(entity_type entity) noexcept -> void
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);

    _versions[idx] = traits::to_version(traits::bump(entity));
    _location[idx] = {};

    _free.push_back(idx);
}

template<typename Database>
auto basic_entity_index<Database>::relocate(entity_type entity, table_index table, row_index row) noexcept -> void
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    _location[idx] = {table, row};
}

template<typename Database>
auto basic_entity_index<Database>::locate(entity_type entity) const noexcept -> table_location
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    return _location[idx];
}

template<typename Database>
auto basic_entity_index<Database>::version(entity_type entity) const noexcept -> version_type
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    return _versions[idx];
}

template<typename Database>
auto basic_entity_index<Database>::empty() const noexcept -> bool
{
    return size() == 0;
}

template<typename Database>
auto basic_entity_index<Database>::size() const noexcept -> std::size_t
{
    return _versions.size() - _free.size();
}

} // namespace ant
