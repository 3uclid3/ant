#include <ant/detail/binding/binding_traits.hpp>

#include <ant.testing/component.hpp>
#include <ant/changeset.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto system(
    changeset_of<set_env<component<0>>>,
    changeset_of<set_env<component<1>>>) -> void
{
}

using system_binding_traits_t = binding_traits<decltype(system)>;
static const bool _ = is_binding_changeset_v<system_binding_traits_t::changeset>;

}} // namespace ant::detail
