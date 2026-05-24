#include <ant/detail/query/query_signature_traits.hpp>

#include <type_traits>

#include <ant.mock/component.hpp>

namespace ant::detail { namespace {

using signature = query_signature<
    const component<0>*,
    exclude<component<1>, component<5>>,
    exclude<component<7>>,
    const component<2>,
    component<3>*,
    component<4>>;
using signature_traits = query_signature_traits<signature>;

static_assert(std::is_same_v<signature_traits::required, type_list<const component<2>, component<4>>>);
static_assert(std::is_same_v<signature_traits::optional, type_list<const component<0>, component<3>>>);
static_assert(std::is_same_v<signature_traits::excluded, type_list<component<1>, component<5>, component<7>>>);
static_assert(std::is_same_v<signature_traits::included, type_list<const component<2>, component<4>, const component<0>, component<3>>>);

}} // namespace ant::detail
