#include <ant/detail/changeset/change_queue.hpp>

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

change_queue& change_queue::operator=(change_queue&& other) noexcept
{
    if (this != &other)
    {
        clear();

        _schema = other._schema;
        _memory_resource = other._memory_resource;
        _changes = std::move(other._changes);
    }
    return *this;
}

auto change_queue::push_destroy(entity e) -> void
{
    _changes.emplace_back(destroy_change{e});
}

auto change_queue::clear() -> void
{
    auto destroy_and_deallocate = [this](const component_meta* meta, void* component) {
        if (meta->vtable.destroy != nullptr)
            meta->vtable.destroy(component);

        _memory_resource->deallocate(component, meta->size, meta->alignment);
    };

    for (const change_type& c : _changes)
    {
        if (const auto* a = std::get_if<attach_change>(&c))
        {
            destroy_and_deallocate(a->meta, a->component);
        }
        else if (const auto* s = std::get_if<set_env_change>(&c))
        {
            destroy_and_deallocate(s->meta, s->component);
        }
    }

    _changes.clear();
}

} // namespace ant::detail
