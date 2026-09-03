#pragma once

#include <ant/detail/changeset/change.hpp>
#include <ant/detail/core/containers.hpp>
#include <ant/entity.hpp>
#include <ant/schema.hpp>

namespace ant {

namespace detail {
class change_accumulator_consumer;
} // namespace detail

class change_accumulator
{
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

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    using value_type = detail::change;

    const schema* _schema;
    detail::vector<value_type> _buffer;

    friend class detail::change_accumulator_consumer;
};

template<typename Component, typename... Args>
auto change_accumulator::emplace_attach(entity e, Args&&... args) -> void
{
    auto is_attach = [e](const value_type& value) {
        const auto* c = std::get_if<detail::attach_change>(&value);
        return c != nullptr && c->entity == e && c->ctor.meta->index == component_index_of<Component>();
    };

    if (auto it = std::ranges::find_if(_buffer, is_attach); it != _buffer.end())
    {
        std::get<detail::attach_change>(*it).ctor = detail::make_component_construct<Component>(*_schema, std::forward<Args>(args)...);
    }
    else
    {
        _buffer.emplace_back(detail::attach_change{.entity = e, .ctor = detail::make_component_construct<Component>(*_schema, std::forward<Args>(args)...)});
    }
}

template<typename Component>
auto change_accumulator::emplace_detach(entity e) -> void
{
    _buffer.emplace_back(detail::detach_change{.entity = e, .meta = &_schema->meta_of<Component>()});
}

template<typename Component, typename... Args>
auto change_accumulator::emplace_set(Args&&... args) -> void
{
    auto is_set = [](const value_type& value) {
        const auto* c = std::get_if<detail::set_change>(&value);
        return c != nullptr && c->ctor.meta->index == component_index_of<Component>();
    };

    if (auto it = std::ranges::find_if(_buffer, is_set); it != _buffer.end())
    {
        std::get<detail::set_change>(*it).ctor = detail::make_component_construct<Component>(*_schema, std::forward<Args>(args)...);
    }
    else
    {
        _buffer.emplace_back(detail::set_change{.ctor = detail::make_component_construct<Component>(*_schema, std::forward<Args>(args)...)});
    }
}

template<typename Component>
auto change_accumulator::emplace_unset() -> void
{
    _buffer.emplace_back(detail::unset_change{.meta = &_schema->meta_of<Component>()});
}

} // namespace ant
