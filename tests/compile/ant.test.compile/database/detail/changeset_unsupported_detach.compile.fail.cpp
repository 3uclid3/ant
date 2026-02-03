#include <ant/database/changeset.hpp>

#include <ant.test.shared/database/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<create>& cs) -> void
{
    entity e{0};
    cs.detach<test::component<0>>(e);
}

}} // namespace ant
