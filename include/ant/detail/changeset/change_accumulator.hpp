#pragma once

#include <variant>

#include <ant/detail/containers.hpp>
#include <ant/detail/schema/component_construct.hpp>
#include <ant/detail/schema/component_meta.hpp>
#include <ant/detail/schema/schema.hpp>
#include <ant/entity.hpp>

namespace ant::detail {

class change_accumulator
{
public:
    struct destroy_change
    {
        ant::entity entity;
    };

    struct attach_change
    {
        ant::entity entity;
        component_construct ctor;
    };

    struct detach_change
    {
        ant::entity entity;
        const component_meta* meta{nullptr};
    };

    struct set_change
    {
        component_construct ctor;
    };

    struct unset_change
    {
        const component_meta* meta{nullptr};
    };

    using change = std::variant<destroy_change, attach_change, detach_change, set_change, unset_change>;
    using value_type = change;

    using iterator = vector<value_type>::iterator;
    using const_iterator = vector<value_type>::const_iterator;

public:
    explicit change_accumulator(const schema& schema);

    change_accumulator(const change_accumulator&) = delete;
    change_accumulator& operator=(const change_accumulator&) = delete;

    change_accumulator(change_accumulator&&) = default;
    change_accumulator& operator=(change_accumulator&& other) = default;

    auto emplace_destroy(entity e) -> void;

    template<typename Component, typename... Args>
    auto emplace_attach(entity e, Args&&... args) -> void;

    template<typename Component>
    auto emplace_detach(entity e) -> void;

    template<typename Component, typename... Args>
    auto emplace_set(Args&&... args) -> void;

    template<typename Component>
    auto emplace_unset() -> void;

    auto operator[](std::size_t index) const noexcept -> const value_type&;
    auto operator[](std::size_t index) noexcept -> value_type&;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

    auto begin() const noexcept -> const_iterator;
    auto end() const noexcept -> const_iterator;

    auto begin() noexcept -> iterator;
    auto end() noexcept -> iterator;

    auto clear() noexcept -> void;

private:
    const schema* _schema;
    vector<value_type> _buffer;
};

template<typename Component, typename... Args>
auto change_accumulator::emplace_attach(entity e, Args&&... args) -> void
{
    auto is_attach = [e](const value_type& value) {
        const auto* c = std::get_if<attach_change>(&value);
        return c != nullptr && c->entity == e && c->ctor.meta->index == detail::component_index_of<Component>();
    };

    if (auto it = std::ranges::find_if(_buffer, is_attach); it != _buffer.end())
    {
        std::get<attach_change>(*it).ctor = make_component_construct<Component>(*_schema, std::forward<Args>(args)...);
    }
    else
    {
        _buffer.emplace_back(attach_change{.entity = e, .ctor = make_component_construct<Component>(*_schema, std::forward<Args>(args)...)});
    }
}

template<typename Component>
auto change_accumulator::emplace_detach(entity e) -> void
{
    _buffer.emplace_back(detach_change{.entity = e, .meta = &_schema->meta_of<Component>()});
}

template<typename Component, typename... Args>
auto change_accumulator::emplace_set(Args&&... args) -> void
{
    auto is_set = [](const value_type& value) {
        const auto* c = std::get_if<set_change>(&value);
        return c != nullptr && c->ctor.meta->index == detail::component_index_of<Component>();
    };

    if (auto it = std::ranges::find_if(_buffer, is_set); it != _buffer.end())
    {
        std::get<set_change>(*it).ctor = make_component_construct<Component>(*_schema, std::forward<Args>(args)...);
    }
    else
    {
        _buffer.emplace_back(set_change{.ctor = make_component_construct<Component>(*_schema, std::forward<Args>(args)...)});
    }
}

template<typename Component>
auto change_accumulator::emplace_unset() -> void
{
    _buffer.emplace_back(unset_change{.meta = &_schema->meta_of<Component>()});
}

} // namespace ant::detail
