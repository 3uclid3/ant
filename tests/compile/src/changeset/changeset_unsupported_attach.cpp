#include <ant/changeset.hpp>

#include <ant.mock/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<create> cs) -> void
{
    cs.attach<component<0>>(entity{0});
}

}} // namespace ant
