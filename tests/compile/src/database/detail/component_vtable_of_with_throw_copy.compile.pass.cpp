#include <ant/database/detail/component_meta.hpp>

namespace ant::detail { namespace {

struct with_throw_copy
{
    with_throw_copy() noexcept = default;
    with_throw_copy(const with_throw_copy&) noexcept(false) = default;
    with_throw_copy(with_throw_copy&& other) noexcept = default;
};

[[maybe_unused]] auto vtable = component_vtable::of<with_throw_copy>();

}} // namespace ant::detail
