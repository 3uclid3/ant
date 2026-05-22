#pragma once

#include <functional>
#include <utility>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail {

class env_registry
{
public:
    using size_type = schema::size_type;

public:
    explicit env_registry(const schema& schema);

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

    template<typename T>
    auto unset() -> void;

private:
    using var_unique_ptr = std::unique_ptr<void, void (*)(void*)>;

    struct var
    {
        var_unique_ptr ptr;
        size_type index;
    };

private:
    template<typename T, typename... Args>
    auto make_var(Args&&... args) -> var_unique_ptr;

    auto at_raw(size_type index) const noexcept -> const void*;
    auto at_raw(size_type index) noexcept -> void*;

    auto unset_at(size_type index) -> void;

private:
    std::reference_wrapper<const schema> _schema;
    std::vector<var> _dense;
    std::vector<size_type> _sparse; // component idx to dense idx
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
    return const_cast<T*>(std::as_const(*this).template get<T>());
}

template<typename T, typename... Args>
auto env_registry::set(Args&&... args) -> T&
{
    ANT_ASSERT(_schema.get().is_defined<T>());

    const component_index index = detail::component_index_of<T>();

    if (_sparse[index] == component_npos)
    {
        _sparse[index] = _dense.size();
        _dense.emplace_back(make_var<T>(std::forward<Args>(args)...), index);
    }
    else
    {
        *static_cast<T*>(_dense[_sparse[index]].ptr.get()) = T(std::forward<Args>(args)...);
    }
    return *static_cast<T*>(_dense[_sparse[index]].ptr.get());
}

template<typename T>
auto env_registry::unset() -> void
{
    ANT_ASSERT(_schema.get().is_defined<T>());
    unset_at(detail::component_index_of<T>());
}

template<typename T, typename... Args>
auto env_registry::make_var(Args&&... args) -> var_unique_ptr
{
    return var_unique_ptr(new T(std::forward<Args>(args)...), [](void* p) { delete static_cast<T*>(p); });
}

} // namespace ant::detail
