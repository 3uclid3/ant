#include <ant/database/env.hpp>

namespace ant {

auto env::slot_deleter::operator()(void* p) -> void
{
    _memory_resource->deallocate(p, _meta->size, _meta->alignment);
}

env::env(const schema& schema, std::pmr::memory_resource* memory_resource) noexcept
    : _slots{memory_resource}
    , _sparse{memory_resource}
    , _memory_resource{memory_resource}
    , _schema{&schema}
{
    // Pre-size sparse mapping to the full schema size to eliminate per-set resize branches
    _sparse.resize(_schema->size(), schema::npos);
}

auto env::at_raw(std::size_t index) const -> const void*
{
    const auto slot_index = _sparse[index];
    return slot_index != npos ? _slots[slot_index].ptr.get() : nullptr;
}

auto env::at_raw(std::size_t index) -> void*
{
    return const_cast<void*>(std::as_const(*this).at_raw(index));
}

auto env::unset_at(std::size_t index) -> void
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

} // namespace ant
