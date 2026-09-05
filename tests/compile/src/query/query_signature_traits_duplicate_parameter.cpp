#include <ant/signature/query_signature_traits.hpp>

#include <ant.testing/component.hpp>

namespace ant { namespace {

using signature = query_signature<
    const testing::component<0>*,
    exclude<testing::component<0>>,
    exclude<testing::component<0>>>;
using signature_traits = query_signature_traits<signature>;

using t = signature_traits::flattened;

}} // namespace ant
