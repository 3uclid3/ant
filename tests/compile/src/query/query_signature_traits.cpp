#include <ant/signature/query_signature_traits.hpp>

#include <type_traits>

#include <ant.testing/component.hpp>

namespace ant { namespace {

using signature = query_signature<
    const testing::component<0>*,
    exclude<testing::component<1>, testing::component<5>>,
    exclude<testing::component<7>>,
    const testing::component<2>,
    testing::component<3>*,
    testing::component<4>>;
using signature_traits = query_signature_traits<signature>;

static_assert(std::is_same_v<signature_traits::required, type_list<const testing::component<2>, testing::component<4>>>);
static_assert(std::is_same_v<signature_traits::optional, type_list<const testing::component<0>, testing::component<3>>>);
static_assert(std::is_same_v<signature_traits::excluded, type_list<testing::component<1>, testing::component<5>, testing::component<7>>>);

}} // namespace ant
