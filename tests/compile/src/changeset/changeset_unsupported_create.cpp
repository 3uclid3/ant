#include <ant/changeset.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<destroy> cs) -> entity
{
    return cs.create();
}

}} // namespace ant
