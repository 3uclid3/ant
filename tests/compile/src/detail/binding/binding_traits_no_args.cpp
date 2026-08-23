#include <ant/detail/binding/binding_traits.hpp>

#include <ant.mock/component.hpp>
#include <ant/changeset.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto system() -> void
{
}

using system_binding_traits_t = binding_traits<decltype(system)>;
static const bool _ = type_list_size_v<system_binding_traits_t::args> == 0;

}} // namespace ant::detail
