#include <ant/database/detail/component_meta.hpp>

#include <ant.test.shared/database/component_types.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto func() -> void
{
    [[maybe_unused]] auto vtable = component_vtable::of<test::with_throw_move>();
}

}} // namespace ant::detail
