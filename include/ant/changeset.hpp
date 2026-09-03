#pragma once

#include <ant/change_accumulator.hpp>
#include <ant/changeset_fwd.hpp>
#include <ant/detail/store/entity_registry.hpp>
#include <ant/detail/store/table.hpp>
#include <ant/entity.hpp>
#include <ant/signature/changeset_signature_traits.hpp>

namespace ant {

// every change except create is asynchronous
template<typename Signature>
class changeset final
{
public:
    using signature = Signature;
    using signature_traits = changeset_signature_traits<Signature>;

    changeset(change_accumulator& accumulator, detail::entity_registry& entity_registry) noexcept
        : _accumulator{&accumulator}
        , _entity_registry{&entity_registry}
    {}

    [[nodiscard]] auto create() -> entity
    requires(signature_traits::can_create)
    {
        return _entity_registry->create();
    }

    auto destroy(entity e) -> void
    requires(signature_traits::can_destroy)
    {
        _accumulator->emplace_destroy(e);
    }

    template<typename Component, typename... Args>
    requires(signature_traits::template can_attach<Component>)
    auto attach(entity e, Args&&... args) -> void
    {
        _accumulator->emplace_attach<Component>(e, std::forward<Args>(args)...);
    }

    template<typename Component>
    requires(signature_traits::template can_detach<Component>)
    auto detach(entity e) -> void
    {
        _accumulator->emplace_detach<Component>(e);
    }

    template<typename Component, typename... Args>
    requires(signature_traits::template can_set_env<Component>)
    auto set_env(Args&&... args) -> void
    {
        _accumulator->emplace_set<Component>(std::forward<Args>(args)...);
    }

    template<typename Component>
    requires(signature_traits::template can_unset_env<Component>)
    auto unset_env() -> void
    {
        _accumulator->emplace_unset<Component>();
    }

private:
    change_accumulator* _accumulator{nullptr};
    detail::entity_registry* _entity_registry{nullptr};
};

} // namespace ant
