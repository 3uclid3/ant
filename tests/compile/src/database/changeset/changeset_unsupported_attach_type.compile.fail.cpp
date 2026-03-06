#include <ant/database/changeset.hpp>

namespace ant { namespace {

struct component
{};

struct other_component
{};

[[maybe_unused]] auto func(changeset_of<attach<component>>& cs) -> void
{
    entity e{0};
    cs.attach<other_component>(e);
}

}} // namespace ant
