#pragma once

#include <memory>
#include <new>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/database/schema.hpp>

namespace ant {

class env
{
public:
    explicit env(const schema& schema) noexcept;

    env(const env&) = delete;
    auto operator=(const env&) -> env& = delete;

    env(env&&) noexcept = default;
    auto operator=(env&&) noexcept -> env& = default;

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
    struct component_slot
    {
        std::unique_ptr<void, void (*)(void*)> ptr;
        std::size_t index{schema::npos};
    };

private:
    auto get_impl(std::size_t index) const -> const void*;
    auto get_impl(std::size_t index) -> void*;

    auto unset_impl(std::size_t index) -> void;

private:
    static constexpr std::size_t npos = schema::npos;

    // dense storage of component slots
    std::vector<component_slot> _slots{};

    // sparse mapping from component index to slot index
    std::vector<std::size_t> _component_to_slot{};

    const schema* _schema{nullptr};
};

template<typename T>
auto env::has() const noexcept -> bool
{
    return get<T>() != nullptr;
}

template<typename T>
auto env::get() const noexcept -> const T*
{
    const auto index = _schema->template index_of<T>();
    ANT_ASSERT(index != npos, "Component type not in schema");
    return static_cast<const T*>(get_impl(index));
}

template<typename T>
auto env::get() noexcept -> T*
{
    const auto index = _schema->template index_of<T>();
    ANT_ASSERT(index != npos, "Component type not in schema");
    return static_cast<T*>(get_impl(index));
}

template<typename T, typename... Args>
auto env::set(Args&&... args) -> T&
{
    const auto index = _schema->template index_of<T>();
    ANT_ASSERT(index != npos, "Component type not in schema");

    const auto deleter = [](void* p) { delete static_cast<T*>(p); };

    if (_component_to_slot[index] == npos)
    {
        T* ptr = new T(std::forward<Args>(args)...);

        _slots.emplace_back(component_slot{.ptr = std::unique_ptr<void, void (*)(void*)>(ptr, deleter), .index = index});

        _component_to_slot[index] = _slots.size() - 1;
    }
    else
    {
        auto& slot = _slots[_component_to_slot[index]];
        slot.ptr = std::unique_ptr<void, void (*)(void*)>(new T(std::forward<Args>(args)...), deleter);
    }

    return *static_cast<T*>(_slots[_component_to_slot[index]].ptr.get());
}

template<typename T>
auto env::unset() -> void
{
    const auto index = _schema->template index_of<T>();
    ANT_ASSERT(index != schema::npos, "Component type not in schema");
    unset_impl(index);
}

} // namespace ant
