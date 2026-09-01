#include <ant/env/env_signature_traits.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

using signature = env_signature<
    const component<0>*,
    component<0>>;
using signature_traits = env_signature_traits<signature>;

[[maybe_unused]] constexpr auto _ = signature_traits::size;

}} // namespace ant
