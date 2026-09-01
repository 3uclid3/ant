#include <ant/changeset.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<set_env<testing::component<0>>> cs) -> void
{
    cs.set_env<testing::component<1>>();
}

}} // namespace ant
