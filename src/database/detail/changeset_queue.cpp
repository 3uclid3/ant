#include <ant/database/detail/changeset_queue.hpp>

namespace ant::detail {

changeset_queue::changeset_queue(const schema& schema, std::pmr::memory_resource* memory_resource)
    : _schema{&schema}
    , _memory_resource{memory_resource}
    , _changes{memory_resource}
{
}

changeset_queue::~changeset_queue()
{
    clear();
}

auto changeset_queue::push_destroy(entity e) -> void
{
    _changes.emplace_back(destroy_change{e});
}

auto changeset_queue::clear() -> void
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
