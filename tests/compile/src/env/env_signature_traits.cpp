#include <ant/env/env_signature_traits.hpp>

#include <type_traits>

#include <ant.testing/component.hpp>

namespace ant { namespace {

using signature = env_signature<
    const component<0>*,
    const component<2>,
    component<3>*,
    component<4>>;
using signature_traits = env_signature_traits<signature>;

static_assert(std::is_same_v<signature_traits::required, type_list<const component<2>, component<4>>>);
static_assert(std::is_same_v<signature_traits::optional, type_list<const component<0>, component<3>>>);

}} // namespace ant
