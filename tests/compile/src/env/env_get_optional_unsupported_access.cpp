#include <ant/env.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto func(env_of<const component*> env) -> component*
{
   return env.get<component>();
}

}} // namespace ant
