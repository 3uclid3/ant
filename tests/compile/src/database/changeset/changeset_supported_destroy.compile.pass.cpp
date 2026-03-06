#include <ant/database/changeset.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(changeset_of<destroy>& cs) -> void
{
    cs.destroy(entity{0});
}

}} // namespace ant
