#pragma once

#include <functional>

#include <ant/binding.hpp>
#include <ant/component/component_index.hpp>
#include <ant/detail/assert.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/store.hpp>

namespace ant::detail {

class lifecycle_registry
{
public:
    explicit lifecycle_registry(store& store);

    lifecycle_registry(const lifecycle_registry&) = delete;
    auto operator=(const lifecycle_registry&) -> lifecycle_registry& = delete;

    lifecycle_registry(lifecycle_registry&&) = delete;
    auto operator=(lifecycle_registry&&) -> lifecycle_registry& = delete;

    template<typename Component, typename F>
    auto on_attach(F&& func) -> void;

    template<typename Component, typename F>
    auto on_detach(F&& func) -> void;

    template<typename Component>
    auto invoke_attach(change_accumulator& accumulator, entity e, Component& value) -> void;

    template<typename Component>
    auto invoke_detach(change_accumulator& accumulator, entity e, const Component& value) -> void;

private:
    using attach_fn = std::move_only_function<void(change_accumulator&, entity, void*)>;
    using attach_fns = vector<attach_fn>;

    using detach_fn = std::move_only_function<void(change_accumulator&, entity, const void*)>;
    using detach_fns = vector<detach_fn>;

    template<typename Component, typename F>
    auto make_attach_callback(F&& func) -> attach_fn;

    template<typename Component, typename F>
    auto make_detach_callback(F&& func) -> detach_fn;

    auto invoke_attach_impl(change_accumulator& accumulator, entity e, component_index component, void* value) -> void;
    auto invoke_detach_impl(change_accumulator& accumulator, entity e, component_index component, const void* value) -> void;

    static auto invoke_attach_fns(attach_fns& fns, change_accumulator& accumulator, entity e, void* value) -> void;
    static auto invoke_detach_fns(detach_fns& fns, change_accumulator& accumulator, entity e, const void* value) -> void;

    store& _store;
    vector<attach_fns> _attach_fns_per_components;
    vector<detach_fns> _detach_fns_per_components;
};

template<typename Component, typename F>
auto lifecycle_registry::on_attach(F&& func) -> void
{
    const component_index index = component_index_of<Component>();
    ANT_ASSERT(_store.schema.is_defined(index), "component is not defined in schema");
    _attach_fns_per_components[index].emplace_back(make_attach_callback<Component>(std::forward<F>(func)));
}

template<typename Component, typename F>
auto lifecycle_registry::on_detach(F&& func) -> void
{
    const component_index index = component_index_of<Component>();
    ANT_ASSERT(_store.schema.is_defined(index), "component is not defined in schema");
    _detach_fns_per_components[index].emplace_back(make_detach_callback<Component>(std::forward<F>(func)));
}

template<typename Component, typename F>
auto lifecycle_registry::make_attach_callback(F&& func) -> attach_fn
{
    basic_binding<entity, Component&> executable(_store, std::forward<F>(func));

    return [executable = std::move(executable)](change_accumulator& accumulator, entity e, void* value) mutable {
        if (executable.is_ready())
        {
            executable.invoke(accumulator, e, *static_cast<Component*>(value));
        }
    };
}

template<typename Component, typename F>
auto lifecycle_registry::make_detach_callback(F&& func) -> detach_fn
{
    basic_binding<entity, const Component&> executable(_store, std::forward<F>(func));

    return [executable = std::move(executable)](change_accumulator& accumulator, entity e, const void* value) mutable {
        if (executable.is_ready())
        {
            executable.invoke(accumulator, e, *static_cast<const Component*>(value));
        }
    };
}

template<typename Component>
auto lifecycle_registry::invoke_attach(change_accumulator& accumulator, entity e, Component& value) -> void
{
    invoke_attach_impl(accumulator, e, component_index_of<Component>(), &value);
}

template<typename Component>
auto lifecycle_registry::invoke_detach(change_accumulator& accumulator, entity e, const Component& value) -> void
{
    invoke_detach_impl(accumulator, e, component_index_of<Component>(), &value);
}

} // namespace ant::detail
