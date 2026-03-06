#include <ant/database/detail/component_meta.hpp>

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
