#pragma once

#include <functional>
#include <utility>

#include <ant/binding.hpp>
#include <ant/component/component_index.hpp>
#include <ant/detail/assert.hpp>
#include <ant/detail/catalog/table.hpp>
#include <ant/detail/containers.hpp>

namespace ant::detail {

struct lifecycle_event
{
    change_accumulator& accumulator;
    entity target;
    table& storage;
    std::size_t row;
    component_index component;
};

class lifecycle_registry
{
public:
    explicit lifecycle_registry(component_index component_range);

    lifecycle_registry(const lifecycle_registry&) = delete;
    auto operator=(const lifecycle_registry&) -> lifecycle_registry& = delete;

    lifecycle_registry(lifecycle_registry&&) = delete;
    auto operator=(lifecycle_registry&&) -> lifecycle_registry& = delete;

    template<typename Component>
    auto on_attach(basic_binding<entity, Component&> executable) -> void;

    template<typename Component>
    auto on_detach(basic_binding<entity, const Component&> executable) -> void;

    template<typename Component>
    auto invoke_attach(change_accumulator& accumulator, entity e, table& storage, std::size_t row) -> void;
    auto invoke_attach(lifecycle_event event) -> void;

    template<typename Component>
    auto invoke_detach(change_accumulator& accumulator, entity e, table& storage, std::size_t row) -> void;
    auto invoke_detach(lifecycle_event event) -> void;

private:
    using attach_fn = std::move_only_function<void(lifecycle_event)>;
    using attach_fns = vector<attach_fn>;

    using detach_fn = std::move_only_function<void(lifecycle_event)>;
    using detach_fns = vector<detach_fn>;

    static auto invoke_attach_fns(attach_fns& fns, lifecycle_event event) -> void;
    static auto invoke_detach_fns(detach_fns& fns, lifecycle_event event) -> void;

    vector<attach_fns> _attach_fns_per_components;
    vector<detach_fns> _detach_fns_per_components;
};

template<typename Component>
auto lifecycle_registry::on_attach(basic_binding<entity, Component&> executable) -> void
{
    const component_index index = component_index_of<Component>();
    ANT_ASSERT(index < _attach_fns_per_components.size(), "component index is out of range");

    _attach_fns_per_components[index].emplace_back([executable = std::move(executable)](lifecycle_event event) mutable {
        if (executable.is_ready())
        {
            executable.invoke(event.accumulator, event.target, event.storage.at<Component>(event.row));
        }
    });
}

template<typename Component>
auto lifecycle_registry::on_detach(basic_binding<entity, const Component&> executable) -> void
{
    const component_index index = component_index_of<Component>();
    ANT_ASSERT(index < _detach_fns_per_components.size(), "component index is out of range");

    _detach_fns_per_components[index].emplace_back([executable = std::move(executable)](lifecycle_event event) mutable {
        if (executable.is_ready())
        {
            executable.invoke(event.accumulator, event.target, std::as_const(event.storage).at<Component>(event.row));
        }
    });
}

template<typename Component>
auto lifecycle_registry::invoke_attach(change_accumulator& accumulator, entity e, table& storage, std::size_t row) -> void
{
    invoke_attach({accumulator, e, storage, row, component_index_of<Component>()});
}

template<typename Component>
auto lifecycle_registry::invoke_detach(change_accumulator& accumulator, entity e, table& storage, std::size_t row) -> void
{
    invoke_detach({accumulator, e, storage, row, component_index_of<Component>()});
}

} // namespace ant::detail
