#include <ant/detail/env/env_signature_traits.hpp>

#include <ant.mock/component.hpp>

namespace ant::detail { namespace {

using signature = env_signature<
    const component<0>*,
    component<0>>;
using signature_traits = env_signature_traits<signature>;

[[maybe_unused]] constexpr auto _ = signature_traits::size;

}} // namespace ant::detail
