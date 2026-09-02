#include <ant/detail/lifecycle/lifecycle_registry.hpp>

namespace ant::detail {

lifecycle_registry::lifecycle_registry(store& store)
    : _store(store)
    , _attach_fns_per_components(store.schema.range())
    , _detach_fns_per_components(store.schema.range())
{
}

auto lifecycle_registry::invoke_attach_impl(change_accumulator& accumulator, entity e, component_index component, void* value) -> void
{
    ANT_ASSERT(component < _attach_fns_per_components.size(), "component index is out of range");
    invoke_attach_fns(_attach_fns_per_components[component], accumulator, e, value);
}

auto lifecycle_registry::invoke_detach_impl(change_accumulator& accumulator, entity e, component_index component, const void* value) -> void
{
    ANT_ASSERT(component < _detach_fns_per_components.size(), "component index is out of range");
    invoke_detach_fns(_detach_fns_per_components[component], accumulator, e, value);
}

auto lifecycle_registry::invoke_attach_fns(attach_fns& fns, change_accumulator& accumulator, entity e, void* value) -> void
{
    ANT_ASSERT(value != nullptr, "component value cannot be null");

    for (attach_fn& fn : fns)
    {
        fn(accumulator, e, value);
    }
}

auto lifecycle_registry::invoke_detach_fns(detach_fns& fns, change_accumulator& accumulator, entity e, const void* value) -> void
{
    ANT_ASSERT(value != nullptr, "component value cannot be null");

    for (detach_fn& fn : fns)
    {
        fn(accumulator, e, value);
    }
}

} // namespace ant::detail
