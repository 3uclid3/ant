#include <ant/database/env.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto func(env_of<component> env) -> bool
{
    return env.has<component>();
}

}} // namespace ant
