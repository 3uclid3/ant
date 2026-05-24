#include <ant/env.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto get_readonly(env_of<const component> env) -> const component&
{
    return env.get<component>();
}

[[maybe_unused]] auto get_read(env_of<component> env) -> const component&
{
    return std::as_const(env).get<component>();
}

[[maybe_unused]] auto get(env_of<component> env) -> component&
{
    return env.get<component>();
}

[[maybe_unused]] auto get_optional_readonly(env_of<const component*> env) -> const component*
{
    return env.get<component>();
}

[[maybe_unused]] auto get_optional_read(env_of<component*> env) -> const component*
{
    return std::as_const(env).get<component>();
}

[[maybe_unused]] auto get_optional(env_of<component*> env) -> component*
{
    return env.get<component>();
}

}} // namespace ant
