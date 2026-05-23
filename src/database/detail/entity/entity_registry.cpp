#include <ant/database/detail/entity/entity_registry.hpp>

#include <ant/core/assert.hpp>

namespace ant::detail {

entity_registry::entity_registry(std::pmr::memory_resource* resource) noexcept
    : _entries(resource)
    , _free(resource)
{
}

auto entity_registry::contains(value_type e) const noexcept -> bool
{
    const std::size_t index = static_cast<std::size_t>(entity_traits::to_index(e));
    return index < _entries.size() && _entries[index].version == entity_traits::to_version(e);
}

auto entity_registry::create() -> value_type
{
    if (!_free.empty())
    {
        const index_type index = _free.back();

        _free.pop_back();
        _entries[index].location = entity_location::invalid;

        return entity_traits::construct(index, _entries[index].version);
    }
    else
    {
        const index_type index = static_cast<index_type>(_entries.size());
        const version_type version = 0U;

        _entries.emplace_back(entry{entity_location::invalid, version});

        return entity_traits::construct(index, version);
    }
}

auto entity_registry::destroy(value_type e) -> void
{
    ANT_ASSERT(contains(e), "e does not exist");

    const index_type index = entity_traits::to_index(e);
    _entries[index].version = entity_traits::to_version(entity_traits::bump(e));
    _free.push_back(index);
}

auto entity_registry::relocate(value_type e, location_type location) noexcept -> void
{
    ANT_ASSERT(contains(e), "e does not exist");
    _entries[entity_traits::to_index(e)].location = location;
}

auto entity_registry::locate(value_type e) const noexcept -> location_type
{
    ANT_ASSERT(contains(e), "e does not exist");
    return _entries[entity_traits::to_index(e)].location;
}

auto entity_registry::version(value_type e) const noexcept -> version_type
{
    ANT_ASSERT(contains(e), "e does not exist");
    return _entries[entity_traits::to_index(e)].version;
}

auto entity_registry::empty() const noexcept -> bool
{
    return size() == 0;
}

auto entity_registry::size() const noexcept -> std::size_t
{
    ANT_ASSERT(_entries.size() >= _free.size(), "size is negative");
    return _entries.size() - _free.size();
}

} // namespace ant::detail
