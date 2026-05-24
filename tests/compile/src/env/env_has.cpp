#include <ant/env.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto has_readonly(env_of<const component*> env) -> bool
{
    return env.has<component>();
}

[[maybe_unused]] auto has(env_of<component*> env) -> bool
{
    return env.has<component>();
}

}} // namespace ant
