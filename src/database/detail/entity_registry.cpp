#include <ant/database/detail/entity_registry.hpp>

#include <ant/core/assert.hpp>

namespace ant::detail {

auto entity_registry::contains(entity e) const noexcept -> bool
{
    const auto index = entity_traits::to_index(e);
    const auto ver = entity_traits::to_version(e);

    return static_cast<std::size_t>(index) < _versions.size() && _versions[static_cast<std::size_t>(index)] == ver;
}

auto entity_registry::create() -> entity
{
    if (!_free.empty())
    {
        const auto index = _free.back();

        _free.pop_back();
        _location[index] = entity_location::invalid();

        return entity_traits::construct(index, _versions[index]);
    }
    else
    {
        const auto index = static_cast<entity_traits::index_type>(_versions.size());

        _versions.emplace_back(version_type{0});
        _location.emplace_back(entity_location::invalid());

        return entity_traits::construct(index, 0);
    }
}

auto entity_registry::destroy(entity e) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto index = entity_traits::to_index(e);

    _versions[index] = entity_traits::to_version(entity_traits::bump(e));

    _free.push_back(index);
}

auto entity_registry::relocate(entity e, entity_location location) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto index = entity_traits::to_index(e);
    _location[index] = location;
}

auto entity_registry::locate(entity e) const noexcept -> entity_location
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto index = entity_traits::to_index(e);
    return _location[index];
}

auto entity_registry::version(entity e) const noexcept -> version_type
{
    ANT_ASSERT(contains(e), "e does not exist");

    const auto index = entity_traits::to_index(e);
    return _versions[index];
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
