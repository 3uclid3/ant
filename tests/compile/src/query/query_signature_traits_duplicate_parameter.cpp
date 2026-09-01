#include <ant/query/query_signature_traits.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

using signature = query_signature<
    const component<0>*,
    exclude<component<0>>,
    exclude<component<0>>>;
using signature_traits = query_signature_traits<signature>;

[[maybe_unused]] constexpr auto _ = signature_traits::size;

}} // namespace ant
