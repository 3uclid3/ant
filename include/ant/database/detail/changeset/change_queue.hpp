#pragma once

#include <memory_resource>
#include <variant>
#include <vector>

#include <ant/database/detail/schema/component_meta.hpp>
#include <ant/database/entity.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail {

struct destroy_change
{
    entity entity;
};

struct attach_change
{
    entity entity;
    void* component{nullptr};
    const component_meta* meta{nullptr};
};

struct detach_change
{
    entity entity;
    const component_meta* meta{nullptr};
};

class change_queue
{
public:
    using change_type = std::variant<destroy_change, attach_change, detach_change>;

    change_queue(const schema& schema, std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource());
    ~change_queue();

    change_queue(const change_queue&) = delete;
    change_queue& operator=(const change_queue&) = delete;

    change_queue(change_queue&&) noexcept = default;
    change_queue& operator=(change_queue&&) noexcept = default;

    auto push_destroy(entity e) -> void;

    template<typename Component, typename... Args>
    auto push_attach(entity e, Args&&... args) -> void;

    template<typename Component>
    auto push_detach(entity e) -> void;

    template<typename F>
    auto consume_all(F&& f) -> void;

    auto clear() -> void;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

    auto front() const -> const change_type&;

private:
    const schema* _schema;
    std::pmr::memory_resource* _memory_resource;
    std::pmr::vector<change_type> _changes;
};

template<typename Component, typename... Args>
auto change_queue::push_attach(entity e, Args&&... args) -> void
{
    Component* component = static_cast<Component*>(_memory_resource->allocate(sizeof(Component), alignof(Component)));
    ::new (component) Component(std::forward<Args>(args)...);

    _changes.emplace_back(attach_change{e, component, &_schema->meta_of<Component>()});
}

template<typename Component>
auto change_queue::push_detach(entity e) -> void
{
    _changes.emplace_back(detach_change{e, &_schema->meta_of<Component>()});
}

template<typename F>
auto change_queue::consume_all(F&& f) -> void
{
    for (auto& change : _changes)
    {
        std::visit(std::forward<F>(f), change);
    }

    clear();
}

inline auto change_queue::empty() const noexcept -> bool
{
    return _changes.empty();
}

inline auto change_queue::size() const noexcept -> std::size_t
{
    return _changes.size();
}

inline auto change_queue::front() const -> const change_type&
{
    return _changes.front();
}

} // namespace ant::detail
