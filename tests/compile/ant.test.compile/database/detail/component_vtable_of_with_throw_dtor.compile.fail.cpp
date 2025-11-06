#include <ant/database/detail/component_meta.hpp>

#include <ant.test.shared/database/component_types.hpp>

namespace ant::detail { namespace {

struct with_throw_dtor
{
    ~with_throw_dtor() noexcept(false) = default;
};

auto func() -> void
{
    auto vtable = component_vtable::of<with_throw_dtor>();
}

}} // namespace ant::detail
