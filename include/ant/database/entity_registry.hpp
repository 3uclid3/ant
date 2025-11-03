#pragma once

#include <ant/core/container.hpp>
#include <ant/core/memory.hpp>
#include <ant/database/detail/entity_traits.hpp>
#include <ant/database/detail/table_index.hpp>
#include <ant/database/entity.hpp>

namespace ant {

template<typename Allocator>
class basic_entity_registry
{
public:
    using allocator_type = Allocator;
    using allocator_traits_type = allocator_traits<allocator_type>;
    using version_type = detail::entity_traits::version_type;

    explicit basic_entity_registry(const allocator_type& allocator = {}) noexcept;

    basic_entity_registry(basic_entity_registry&&) noexcept = default;
    auto operator=(basic_entity_registry&&) noexcept -> basic_entity_registry& = default;

    basic_entity_registry(const basic_entity_registry&) = delete;
    auto operator=(const basic_entity_registry&) noexcept -> basic_entity_registry& = delete;

    [[nodiscard]] auto contains(entity e) const noexcept -> bool;

    [[nodiscard]] auto create() -> entity;
    auto destroy(entity e) noexcept -> void;

    auto relocate(entity e, detail::table_index table, detail::row_index row) noexcept -> void;
    [[nodiscard]] auto locate(entity e) const noexcept -> detail::table_location;
    [[nodiscard]] auto version(entity e) const noexcept -> version_type;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    allocator_type _allocator;

    vector<detail::table_location, allocator_type> _location;
    vector<version_type, allocator_type> _versions;

    vector<detail::entity_traits::identifier_type, allocator_type> _free;
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
auto basic_entity_registry<Allocator>::contains(entity e) const noexcept -> bool
{
    const auto idx = detail::entity_traits::to_identifier(e);
    const auto ver = detail::entity_traits::to_version(e);

    return static_cast<std::size_t>(idx) < _versions.size() && _versions[static_cast<std::size_t>(idx)] == ver;
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::create() -> entity
{
    if (!_free.empty())
    {
        const auto idx = _free.back();
        _free.pop_back();

        const auto ver = _versions[idx];

        return detail::entity_traits::construct(idx, ver);
    }
    else
    {
        const auto idx = static_cast<detail::entity_traits::identifier_type>(_versions.size());

        _versions.emplace_back(version_type{0});
        _location.emplace_back();

        return detail::entity_traits::construct(idx, 0);
    }
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::destroy(entity e) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = detail::entity_traits::to_identifier(e);

    _versions[idx] = detail::entity_traits::to_version(detail::entity_traits::bump(e));
    _location[idx] = {};

    _free.push_back(idx);
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::relocate(entity e, detail::table_index table, detail::row_index row) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = detail::entity_traits::to_identifier(e);
    _location[idx] = {table, row};
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::locate(entity e) const noexcept -> detail::table_location
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = detail::entity_traits::to_identifier(e);
    return _location[idx];
}

template<typename Allocator>
auto basic_entity_registry<Allocator>::version(entity e) const noexcept -> version_type
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = detail::entity_traits::to_identifier(e);
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
