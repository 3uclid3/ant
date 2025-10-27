#include <ant/database/detail/component_meta.hpp>

#include <ant.test.shared/database/component_types.hpp>

namespace ant::detail { namespace {

auto func() -> void
{
#ifndef ANT_COMPILE_TEST_FORCE_PASS
    auto vtable = component_vtable::of<test::with_throw_move>();
#endif
}

}} // namespace ant::detail
