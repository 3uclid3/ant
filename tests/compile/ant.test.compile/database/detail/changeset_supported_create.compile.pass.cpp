#include <ant/database/changeset.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<create>& cs) -> void
{
    [[maybe_unused]] entity e = cs.create();
}

}} // namespace ant
