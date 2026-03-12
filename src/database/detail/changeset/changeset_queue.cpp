#include <ant/database/detail/changeset/change_queue.hpp>

namespace ant::detail {

change_queue::change_queue(const schema& schema, std::pmr::memory_resource* memory_resource)
    : _schema{&schema}
    , _memory_resource{memory_resource}
    , _changes{memory_resource}
{
}

change_queue::~change_queue()
{
    clear();
}

auto change_queue::push_destroy(entity e) -> void
{
    _changes.emplace_back(destroy_change{e});
}

auto change_queue::clear() -> void
{
    for (const change_type& c : _changes)
    {
        const auto* attach = std::get_if<attach_change>(&c);

        if (attach == nullptr)
            continue;

        if (attach->meta->vtable.destroy != nullptr)
        {
            attach->meta->vtable.destroy(attach->component);
        }

        _memory_resource->deallocate(attach->component, attach->meta->size, attach->meta->alignment);
    }

    _changes.clear();
}

} // namespace ant::detail
