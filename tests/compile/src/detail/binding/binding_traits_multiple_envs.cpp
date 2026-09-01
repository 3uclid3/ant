#include <ant/detail/binding/binding_traits.hpp>

#include <ant.testing/component.hpp>
#include <ant/env.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto system(
    env_of<component<0>*>,
    env_of<component<1>>) -> void
{
}

using system_binding_traits_t = binding_traits<decltype(system)>;
static const bool _ = is_binding_env_v<system_binding_traits_t::changeset>;

}} // namespace ant::detail
