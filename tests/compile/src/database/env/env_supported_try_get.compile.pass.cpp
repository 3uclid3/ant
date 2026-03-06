#include <ant/database/env.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto func(env_of<component*> env) -> void
{
    [[maybe_unused]] component* ptr = env.try_get<component>();
}

}} // namespace ant
