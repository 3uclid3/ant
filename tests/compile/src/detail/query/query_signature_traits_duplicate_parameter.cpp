#include <ant/detail/query/query_signature_traits.hpp>

#include <ant.mock/component.hpp>

namespace ant::detail { namespace {

using signature = query_signature<
    const component<0>*,
    exclude<component<0>>,
    exclude<component<0>>>;
using signature_traits = query_signature_traits<signature>;

[[maybe_unused]] constexpr auto _ = signature_traits::size;

}} // namespace ant::detail
