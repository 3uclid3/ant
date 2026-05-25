#include <ant/changeset.hpp>

#include <ant.mock/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<attach<component<0>>> cs) -> void
{
    cs.attach<component<1>>(entity{0});
}

}} // namespace ant
