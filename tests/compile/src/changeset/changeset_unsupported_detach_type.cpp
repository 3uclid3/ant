#include <ant/changeset.hpp>

#include <ant.mock/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<detach<component<0>>> cs) -> void
{
    cs.detach<component<1>>(entity{0});
}

}} // namespace ant
