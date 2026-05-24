#pragma once

#include <functional>
#include <memory_resource>
#include <utility>
#include <vector>

#include <ant/detail/assert.hpp>
#include <ant/detail/schema.hpp>

namespace ant::detail {

class env_registry
{
public:
    using size_type = schema::size_type;

public:
    explicit env_registry(const schema& schema, std::pmr::memory_resource* resource = std::pmr::get_default_resource());
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
    std::pmr::vector<var> _dense;
    std::pmr::vector<size_type> _sparse; // component idx to dense idx
    std::pmr::memory_resource* _resource{nullptr};
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
    const component_meta& meta = _schema.get().meta_of(detail::component_index_of<T>());

    T* result{nullptr};

    if (_sparse[meta.index] == component_npos)
    {
        _sparse[meta.index] = _dense.size();

        void* ptr = _resource->allocate(sizeof(T), alignof(T));
        result = new (ptr) T(std::forward<Args>(args)...);

        _dense.emplace_back(ptr, &meta);
    }
    else
    {
        result = static_cast<T*>(_dense[_sparse[meta.index]].ptr);
        *result = T(std::forward<Args>(args)...);
    }

    ANT_ASSERT(result != nullptr);
    return *result;
}

template<typename T>
auto env_registry::unset() -> void
{
    unset(_schema.get().meta_of(detail::component_index_of<T>()));
}

} // namespace ant::detail
