#include <ant/database/changeset.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto func(changeset_of<create>& cs) -> void
{
    entity e{0};
    cs.detach<component>(e);
}

}} // namespace ant
