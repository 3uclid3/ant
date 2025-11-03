#include <ant/database/env.hpp>

namespace ant {

env::env(const schema& schema) noexcept
    : _schema{&schema}
{
    // Pre-size sparse mapping to the full schema size to eliminate per-set resize branches
    _component_to_slot.resize(_schema->size(), schema::npos);
}

auto env::get_impl(std::size_t idx) const -> const void*
{
    if (idx >= _component_to_slot.size())
    {
        return nullptr;
    }

    const auto slot_idx = _component_to_slot[idx];

    if (slot_idx == npos)
    {
        return nullptr;
    }

    return _slots[slot_idx].ptr.get();
}

auto env::get_impl(std::size_t idx) -> void*
{
    return const_cast<void*>(std::as_const(*this).get_impl(idx));
}

auto env::unset_impl(std::size_t idx) -> void
{
    const auto slot_idx = _component_to_slot[idx];
    if (slot_idx == npos)
    {
        return;
    }

    // if not last, move last to freed slot
    const bool is_last = slot_idx + 1 == _slots.size();
    if (!is_last)
    {
        auto& last_slot = _slots.back();

        _slots[slot_idx] = std::move(last_slot);
        _component_to_slot[_slots[slot_idx].index] = slot_idx;
    }

    _slots.pop_back();
    _component_to_slot[idx] = npos;
}

} // namespace ant
