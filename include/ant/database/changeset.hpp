#pragma once

#include <ant/database/changeset_fwd.hpp>
#include <ant/database/detail/changeset_queue.hpp>
#include <ant/database/detail/changeset_signature_traits.hpp>
#include <ant/database/detail/entity_registry.hpp>
#include <ant/database/detail/table.hpp>
#include <ant/database/entity.hpp>

namespace ant {

// every changes except create is asynchroneous
template<typename Signature>
class changeset final
{
public:
    using signature = Signature;
    using signature_traits = detail::changeset_signature_traits<Signature>;

    changeset(detail::changeset_queue& queue, detail::entity_registry& entity_registry) noexcept;

    // clang-format off
    auto create() -> entity requires(signature_traits::template contains_v<create>);
    auto destroy(entity e) -> void requires(signature_traits::template contains_v<destroy>);
    // clang-format on

    template<typename Component, typename... Args>
    requires(signature_traits::template contains_v<attach<Component>>)
    auto attach(entity e, Args&&... args) -> void;

    template<typename Component>
    requires(signature_traits::template contains_v<detach<Component>>)
    auto detach(entity e) -> void;

private:
    detail::changeset_queue* _queue{nullptr};
    detail::entity_registry* _entity_registry{nullptr};
};

template<typename Signature>
changeset<Signature>::changeset(detail::changeset_queue& queue, detail::entity_registry& entity_registry) noexcept
    : _queue{&queue}
    , _entity_registry{&entity_registry}
{}

template<typename Signature>
auto changeset<Signature>::create() -> entity
requires(signature_traits::template contains_v<ant::create>)
{
    return _entity_registry->create();
}

template<typename Signature>
auto changeset<Signature>::destroy(entity e) -> void
requires(signature_traits::template contains_v<ant::destroy>)
{
    _queue->push_destroy(e);
}

template<typename Signature>
template<typename Component, typename... Args>
requires(changeset<Signature>::signature_traits::template contains_v<attach<Component>>)
auto changeset<Signature>::attach(entity e, Args&&... args) -> void
{
    _queue->push_attach<Component>(e, std::forward<Args>(args)...);
}

template<typename Signature>
template<typename Component>
requires(changeset<Signature>::signature_traits::template contains_v<detach<Component>>)
auto changeset<Signature>::detach(entity e) -> void
{
    _queue->push_detach<Component>(e);
}

} // namespace ant
