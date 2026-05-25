#include <ant/changeset.hpp>

#include <ant.mock/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<set_env<component<0>>> cs) -> void
{
    cs.set_env<component<1>>();
}

}} // namespace ant
