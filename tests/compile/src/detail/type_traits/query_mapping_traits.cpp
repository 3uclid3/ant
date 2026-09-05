#include <ant/detail/type_traits/query_mapping_traits.hpp>

#include <type_traits>

#include <ant.testing/component.hpp>

namespace ant::detail { namespace {

using signature = query_signature<
    const testing::component<0>*,
    exclude<testing::component<1>, testing::component<5>>,
    exclude<testing::component<7>>,
    const testing::component<2>,
    testing::component<3>*,
    testing::component<4>>;
using mapping_traits = query_mapping_traits<signature>;

static_assert(std::is_same_v<mapping_traits::ordered,
                             type_list<const testing::component<2>, testing::component<4>, const testing::component<0>, testing::component<3>>>);

}} // namespace ant::detail
