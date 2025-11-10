#include <ant/database/detail/component_meta.hpp>

#include <ant.test.shared/database/component_types.hpp>

namespace ant::detail { namespace {

struct with_throw_move
{
    with_throw_move() noexcept = default;
    with_throw_move(const with_throw_move&) noexcept = default;
    with_throw_move(with_throw_move&& other) noexcept(false) = default;
};

auto func() -> void
{
    auto vtable = component_vtable::of<with_throw_move>();
}

}} // namespace ant::detail
