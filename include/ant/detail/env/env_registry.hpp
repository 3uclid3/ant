#pragma once

#include <functional>
#include <utility>

#include <ant/detail/assert.hpp>
#include <ant/detail/schema/component_construct.hpp>
#include <ant/detail/schema/schema.hpp>
#include <ant/detail/containers.hpp>

namespace ant::detail {

class env_registry
{
public:
    using size_type = schema::size_type;

public:
    explicit env_registry(const schema& schema);
    ~env_registry();

    env_registry(const env_registry&) = delete;
    auto operator=(const env_registry&) -> env_registry& = delete;

    env_registry(env_registry&&) noexcept = default;
    auto operator=(env_registry&&) noexcept -> env_registry& = default;

    template<typename T>
    auto has() const noexcept -> bool;

    template<typename T>
    auto get() const noexcept -> const T*;

    template<typename T>
    auto get() noexcept -> T*;

    template<typename T, typename... Args>
    auto set(Args&&... args) -> T&;
    auto set(component_construct ctor) -> void;

    template<typename T>
    auto unset() -> void;
    auto unset(const component_meta& meta) -> void;

private:
    struct var
    {
        void* ptr{nullptr};
        const component_meta* meta{nullptr};
    };

private:
    auto at_raw(size_type index) const noexcept -> const void*;
    auto at_raw(size_type index) noexcept -> void*;

private:
    std::reference_wrapper<const schema> _schema;
    vector<var> _dense;
    vector<size_type> _sparse; // component idx to dense idx
};

template<typename T>
auto env_registry::has() const noexcept -> bool
{
    return get<T>() != nullptr;
}

template<typename T>
auto env_registry::get() const noexcept -> const T*
{
    return static_cast<const T*>(at_raw(detail::component_index_of<T>()));
}

template<typename T>
auto env_registry::get() noexcept -> T*
{
    return static_cast<T*>(at_raw(detail::component_index_of<T>()));
}

template<typename T, typename... Args>
auto env_registry::set(Args&&... args) -> T&
{
    const schema& sch = _schema.get();
    set(make_component_construct<T>(sch, std::forward<Args>(args)...));

    const component_meta& meta = sch.meta_of(detail::component_index_of<T>());
    return *static_cast<T*>(_dense[_sparse[meta.index]].ptr);
}

template<typename T>
auto env_registry::unset() -> void
{
    unset(_schema.get().meta_of(detail::component_index_of<T>()));
}

} // namespace ant::detail
