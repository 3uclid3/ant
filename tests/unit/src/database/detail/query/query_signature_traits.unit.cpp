#include <ant/database/detail/query/query_signature_traits.hpp>

#include <ant.unit/database/component.hpp>

namespace ant::detail { namespace {

using signature = query_signature<
    const test::component<0>*,
    exclude<test::component<1>, test::component<5>>,
    const test::component<2>,
    test::component<3>*,
    test::component<4>>;
using signature_traits = query_signature_traits<signature>;

static_assert(std::is_same_v<signature_traits::flatten_parameters, type_list<const test::component<0>*, exclude<test::component<1>>, exclude<test::component<5>>, const test::component<2>, test::component<3>*, test::component<4>>>);

static_assert(std::is_same_v<signature_traits::required_parameters, type_list<const test::component<2>, test::component<4>>>);
static_assert(std::is_same_v<signature_traits::optional_parameters, type_list<const test::component<0>*, test::component<3>*>>);
static_assert(std::is_same_v<signature_traits::included_parameters, type_list<const test::component<2>, test::component<4>, const test::component<0>*, test::component<3>*>>);
static_assert(std::is_same_v<signature_traits::exclude_parameters, type_list<exclude<test::component<1>>, exclude<test::component<5>>>>);

static_assert(std::is_same_v<signature_traits::required_types, type_list<test::component<2>, test::component<4>>>);
static_assert(std::is_same_v<signature_traits::optional_types, type_list<test::component<0>, test::component<3>>>);
static_assert(std::is_same_v<signature_traits::included_types, type_list<test::component<2>, test::component<4>, test::component<0>, test::component<3>>>);
static_assert(std::is_same_v<signature_traits::excluded_types, type_list<test::component<1>, test::component<5>>>);

}} // namespace ant::detail
