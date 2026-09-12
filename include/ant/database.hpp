#pragma once

#include <ant/binding.hpp>
#include <ant/changeset.hpp>
#include <ant/detail/changeset/lifecycle_registry.hpp>
#include <ant/detail/core/assert.hpp>
#include <ant/detail/store/store.hpp>
#include <ant/detail/system/system_arguments.hpp>
#include <ant/env.hpp>
#include <ant/inspector.hpp>
#include <ant/query.hpp>
#include <ant/schema.hpp>

namespace ant {

class database
{
public:
    explicit database(ant::schema schema);

    database(const database&) = delete;
    auto operator=(const database&) -> database& = delete;

    database(database&&) = delete;
    auto operator=(database&&) -> database& = delete;

    auto schema() const noexcept -> const ant::schema&;
    auto inspect() const noexcept -> inspector;

    template<typename Component, typename T>
    auto on_attach(T&& func) -> void;

    template<typename Component, typename T>
    auto on_detach(T&& func) -> void;

    template<typename T>
    auto bind(T&& func) -> binding;

    template<typename T>
    auto execute(T&& func) -> typename detail::function_traits<T>::return_type;

    template<typename T>
    auto execute(T&& func, change_accumulator& accumulator) -> detail::function_traits<T>::return_type;

    auto flush(std::span<change_accumulator> accumulators) -> void;

private:
    detail::store _store;
    detail::lifecycle_registry _lifecycle{_store.schema.range()};
};

inline auto database::schema() const noexcept -> const ant::schema&
{
    return _store.schema;
}

inline auto database::inspect() const noexcept -> inspector
{
    return inspector(_store);
}

template<typename Component, typename T>
auto database::on_attach(T&& func) -> void
{
    ANT_ASSERT(_store.schema.is_defined<Component>(), "component is not defined in schema");
    _lifecycle.on_attach<Component>(basic_binding<entity, Component&>(_store, std::forward<T>(func)));
}

template<typename Component, typename T>
auto database::on_detach(T&& func) -> void
{
    ANT_ASSERT(_store.schema.is_defined<Component>(), "component is not defined in schema");
    _lifecycle.on_detach<Component>(basic_binding<entity, const Component&>(_store, std::forward<T>(func)));
}

template<typename T>
auto database::bind(T&& func) -> binding
{
    return binding(_store, std::forward<T>(func));
}

template<typename T>
auto database::execute(T&& func) -> typename detail::function_traits<T>::return_type
{
    detail::system_arguments<typename detail::function_traits<T>::argument_types> arguments;
    return arguments.invoke(_store, std::forward<T>(func));
}

template<typename T>
auto database::execute(T&& func, change_accumulator& accumulator) -> detail::function_traits<T>::return_type
{
    detail::system_arguments<typename detail::function_traits<T>::argument_types> arguments;
    return arguments.invoke(_store, std::forward<T>(func), accumulator);
}

} // namespace ant
