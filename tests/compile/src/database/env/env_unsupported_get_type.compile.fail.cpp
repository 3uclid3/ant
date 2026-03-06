#include <ant/database/env.hpp>

namespace ant { namespace {

struct component
{};

struct other_component
{};

[[maybe_unused]] auto func(env_of<component> env) -> void
{
    [[maybe_unused]] other_component& ptr = env.get<other_component>();
}

}} // namespace ant
