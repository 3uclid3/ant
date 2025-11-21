#pragma once

#include <memory>
#include <memory_resource>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail {

class env_registry
{
public:
    explicit env_registry(const schema& schema, std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource()) noexcept;

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
    struct slot_deleter
    {
        auto operator()(void* p) noexcept -> void;

        std::pmr::memory_resource* _memory_resource{nullptr};
        const component_meta* _meta{nullptr};
    };

    using slot_ptr = std::unique_ptr<void, slot_deleter>;

    struct slot
    {
        slot_ptr ptr;
        std::size_t index{schema::npos};
    };

private:
    template<typename T, typename... Args>
    auto make_slot(Args&&... args) -> slot_ptr;

    auto at_raw(std::size_t index) const -> const void*;
    auto at_raw(std::size_t index) -> void*;

    auto unset_at(std::size_t index) -> void;

private:
    static constexpr std::size_t npos = schema::npos;

    std::pmr::vector<slot> _slots;
    std::pmr::vector<std::size_t> _sparse;

    std::pmr::memory_resource* _memory_resource{nullptr};
    const schema* _schema{nullptr};
};

template<typename T>
auto env_registry::has() const noexcept -> bool
{
    return get<T>() != nullptr;
}

template<typename T>
auto env_registry::get() const noexcept -> const T*
{
    const auto index = _schema->template index_of<T>();
    ANT_ASSERT(index != npos, "Component type not in schema");
    return static_cast<const T*>(at_raw(index));
}

template<typename T>
auto env_registry::get() noexcept -> T*
{
    return const_cast<T*>(std::as_const(*this).template get<T>());
}

template<typename T, typename... Args>
auto env_registry::set(Args&&... args) -> T&
{
    const std::size_t sparse_index = _schema->template index_of<T>();
    ANT_ASSERT(sparse_index != npos, "Component type not in schema");

    if (_sparse[sparse_index] == npos)
    {
        _sparse[sparse_index] = _slots.size();
        _slots.emplace_back(slot{.ptr = make_slot<T>(std::forward<Args>(args)...), .index = sparse_index});
    }
    else
    {
        const std::size_t index = _sparse[sparse_index];
        _slots[index].ptr = make_slot<T>(std::forward<Args>(args)...);
    }

    const std::size_t index = _sparse[sparse_index];
    return *static_cast<T*>(_slots[index].ptr.get());
}

template<typename T>
auto env_registry::unset() -> void
{
    const std::size_t sparse_index = _schema->template index_of<T>();
    ANT_ASSERT(sparse_index != schema::npos, "Component type not in schema");
    unset_at(sparse_index);
}

template<typename T, typename... Args>
auto env_registry::make_slot(Args&&... args) -> slot_ptr
{
    void* raw_ptr = _memory_resource->allocate(sizeof(T), alignof(T));
    T* ptr = new (raw_ptr) T(std::forward<Args>(args)...);
    slot_deleter deleter = {
        ._memory_resource = _memory_resource,
        ._meta = &_schema->template meta_of<T>()};
    return slot_ptr(ptr, deleter);
}

} // namespace ant::detail
