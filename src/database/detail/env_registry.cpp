#include <ant/database/detail/env_registry.hpp>

namespace ant::detail {

auto env_registry::slot_deleter::operator()(void* p) noexcept -> void
{
    if (_meta->vtable.destroy != nullptr)
    {
        _meta->vtable.destroy(p);
    }

    _memory_resource->deallocate(p, _meta->size, _meta->alignment);
}

env_registry::env_registry(const schema& schema, std::pmr::memory_resource* memory_resource) noexcept
    : _slots{memory_resource}
    , _sparse{memory_resource}
    , _memory_resource{memory_resource}
    , _schema{&schema}
{
    // Pre-size sparse mapping to the full schema size to eliminate per-set resize branches
    _sparse.resize(_schema->size(), schema::npos);
}

auto env_registry::at_raw(std::size_t index) const -> const void*
{
    ANT_ASSERT(index < _sparse.size(), "index out of bounds");
    const auto slot_index = _sparse[index];
    return slot_index != npos ? _slots[slot_index].ptr.get() : nullptr;
}

auto env_registry::at_raw(std::size_t index) -> void*
{
    return const_cast<void*>(std::as_const(*this).at_raw(index));
}

auto env_registry::unset_at(std::size_t index) -> void
{
    const auto slot_index = _sparse[index];
    if (slot_index == npos)
    {
        return;
    }

    // if not last, move last to freed slot
    const bool is_last = slot_index + 1 == _slots.size();
    if (!is_last)
    {
        slot& last_slot = _slots.back();
        _slots[slot_index] = std::move(last_slot);
        _sparse[_slots[slot_index].index] = slot_index;
    }

    _slots.pop_back();
    _sparse[index] = npos;
}

} // namespace ant::detail
