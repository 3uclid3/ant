#include <ant/detail/binding/binding_traits.hpp>

#include <ant.mock/component.hpp>
#include <ant/env.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto system(component<0>) -> void
{
}

using system_binding_traits_t = binding_traits<decltype(system)>;
static const bool _ = type_list_size_v<system_binding_traits_t::args> == 1;

}} // namespace ant::detail
