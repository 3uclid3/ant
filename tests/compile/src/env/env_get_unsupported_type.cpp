#include <ant/env.hpp>

namespace ant { namespace {

struct component
{};

struct other_component
{};

[[maybe_unused]] auto func(env_of<other_component> env) -> component&
{
    return env.get<component>();
}

}} // namespace ant
