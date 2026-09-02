#include <ant/detail/lifecycle/lifecycle_registry.hpp>

namespace ant::detail {

lifecycle_registry::lifecycle_registry(component_index component_range)
    : _attach_fns_per_components(component_range)
    , _detach_fns_per_components(component_range)
{
}

auto lifecycle_registry::invoke_attach(lifecycle_event event) -> void
{
    ANT_ASSERT(event.component < _attach_fns_per_components.size(), "component index is out of range");
    invoke_attach_fns(_attach_fns_per_components[event.component], event);
}

auto lifecycle_registry::invoke_detach(lifecycle_event event) -> void
{
    ANT_ASSERT(event.component < _detach_fns_per_components.size(), "component index is out of range");
    invoke_detach_fns(_detach_fns_per_components[event.component], event);
}

auto lifecycle_registry::invoke_attach_fns(attach_fns& fns, lifecycle_event event) -> void
{
    for (attach_fn& fn : fns)
    {
        fn(event);
    }
}

auto lifecycle_registry::invoke_detach_fns(detach_fns& fns, lifecycle_event event) -> void
{
    for (detach_fn& fn : fns)
    {
        fn(event);
    }
}

} // namespace ant::detail
