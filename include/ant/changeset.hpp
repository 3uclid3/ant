#pragma once

#include <ant/changeset_fwd.hpp>
#include <ant/detail/catalog/table.hpp>
#include <ant/detail/changeset/change_accumulator.hpp>
#include <ant/detail/changeset/changeset_signature_traits.hpp>
#include <ant/detail/entity/entity_registry.hpp>
#include <ant/entity.hpp>

namespace ant {

// every change except create is asynchronous
template<typename Signature>
class changeset final
{
public:
    using signature = Signature;
    using signature_traits = detail::changeset_signature_traits<Signature>;

    changeset(detail::change_accumulator& accumulator, detail::entity_registry& entity_registry) noexcept
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
    detail::change_accumulator* _accumulator{nullptr};
    detail::entity_registry* _entity_registry{nullptr};
};

} // namespace ant
