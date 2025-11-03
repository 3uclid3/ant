#include <ant/database/detail/entity_registry.hpp>

#include <ant/core/assert.hpp>

namespace ant::detail {

auto entity_registry::contains(entity e) const noexcept -> bool
{
    const auto idx = entity_traits::to_identifier(e);
    const auto ver = entity_traits::to_version(e);

    return static_cast<std::size_t>(idx) < _versions.size() && _versions[static_cast<std::size_t>(idx)] == ver;
}

auto entity_registry::create() -> entity
{
    if (!_free.empty())
    {
        const auto idx = _free.back();
        _free.pop_back();

        const auto ver = _versions[idx];

        return entity_traits::construct(idx, ver);
    }
    else
    {
        const auto idx = static_cast<entity_traits::identifier_type>(_versions.size());

        _versions.emplace_back(version_type{0});
        _location.emplace_back();

        return entity_traits::construct(idx, 0);
    }
}

auto entity_registry::destroy(entity e) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = entity_traits::to_identifier(e);

    _versions[idx] = entity_traits::to_version(entity_traits::bump(e));
    _location[idx] = {};

    _free.push_back(idx);
}

auto entity_registry::relocate(entity e, table_index table, row_index row) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = entity_traits::to_identifier(e);
    _location[idx] = {table, row};
}

auto entity_registry::locate(entity e) const noexcept -> table_location
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = entity_traits::to_identifier(e);
    return _location[idx];
}

auto entity_registry::version(entity e) const noexcept -> version_type
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto idx = entity_traits::to_identifier(e);
    return _versions[idx];
}

auto entity_registry::empty() const noexcept -> bool
{
    return size() == 0;
}

auto entity_registry::size() const noexcept -> std::size_t
{
    return _versions.size() - _free.size();
}

} // namespace ant::detail
