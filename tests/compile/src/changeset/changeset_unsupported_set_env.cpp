#include <ant/changeset.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<create> cs) -> void
{
    cs.set_env<testing::component<0>>();
}

}} // namespace ant
