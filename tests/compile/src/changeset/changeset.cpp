#include <ant/changeset.hpp>

#include <ant.mock/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto create(changeset_of<create> cs) -> entity
{
    return cs.create();
}

[[maybe_unused]] auto destroy(changeset_of<destroy> cs) -> void
{
    cs.destroy(entity{0});
}

[[maybe_unused]] auto attach(changeset_of<attach<component<0>>> cs) -> void
{
    cs.attach<component<0>>(entity{0});
}

[[maybe_unused]] auto detach(changeset_of<detach<component<0>>> cs) -> void
{
    cs.detach<component<0>>(entity{0});
}

[[maybe_unused]] auto set_env(changeset_of<set_env<component<0>>> cs) -> void
{
    cs.set_env<component<0>>();
}

[[maybe_unused]] auto unset_env(changeset_of<unset_env<component<0>>> cs) -> void
{
    cs.unset_env<component<0>>();
}

}} // namespace ant
