#include <ant/changeset.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<attach<testing::component<0>>> cs) -> void
{
    cs.attach<testing::component<1>>(entity{0});
}

}} // namespace ant
