#pragma once

#include <ant/core/container.hpp>
#include <ant/core/memory.hpp>
#include <ant/database/entity_traits.hpp>
#include <ant/database/table_index.hpp>

namespace ant {

template<typename Allocator>
class basic_entity_registry
{
public:
    using allocator_type = Allocator;
    using allocator_traits_type = allocator_traits<allocator_type>;
    using entity_type = typename allocator_traits_type::value_type;
    using traits = entity_traits<entity_type>;
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

template<typename Allocator>
basic_entity_registry<Allocator>::basic_entity_registry(const allocator_type& allocator) noexcept
    : _allocator{allocator}
    , _location{rebind_alloc(_allocator)}
    , _versions{rebind_alloc(_allocator)}
    , _free{rebind_alloc(_allocator)}
{
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::contains(entity_type entity) const noexcept -> bool
{
    const auto idx = traits::to_identifier(entity);
    const auto ver = traits::to_version(entity);

    return static_cast<std::size_t>(idx) < _versions.size() && _versions[static_cast<std::size_t>(idx)] == ver;
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::create() -> entity_type
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

template<typename Allocator>
auto basic_entity_registry<Allocator>::destroy(entity_type entity) noexcept -> void
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);

    _versions[idx] = traits::to_version(traits::bump(entity));
    _location[idx] = {};

    _free.push_back(idx);
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::relocate(entity_type entity, table_index table, row_index row) noexcept -> void
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    _location[idx] = {table, row};
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::locate(entity_type entity) const noexcept -> table_location
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    return _location[idx];
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::version(entity_type entity) const noexcept -> version_type
{
    ANT_ASSERT(contains(entity), "entity does not exist");

    const auto idx = traits::to_identifier(entity);
    return _versions[idx];
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::empty() const noexcept -> bool
{
    return size() == 0;
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::size() const noexcept -> std::size_t
{
    return _versions.size() - _free.size();
}

} // namespace ant
