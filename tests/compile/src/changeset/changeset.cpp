#include <ant/changeset.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto create(changeset_of<create> cs) -> entity
{
    return cs.create();
}

[[maybe_unused]] auto destroy(changeset_of<destroy> cs) -> void
{
    cs.destroy(entity{0});
}

[[maybe_unused]] auto attach(changeset_of<attach<testing::component<0>>> cs) -> void
{
    cs.attach<testing::component<0>>(entity{0});
}

[[maybe_unused]] auto detach(changeset_of<detach<testing::component<0>>> cs) -> void
{
    cs.detach<testing::component<0>>(entity{0});
}

[[maybe_unused]] auto set_env(changeset_of<set_env<testing::component<0>>> cs) -> void
{
    cs.set_env<testing::component<0>>();
}

[[maybe_unused]] auto unset_env(changeset_of<unset_env<testing::component<0>>> cs) -> void
{
    cs.unset_env<testing::component<0>>();
}

}} // namespace ant
