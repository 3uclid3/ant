#include <ant/env/env_signature_traits.hpp>

#include <type_traits>

#include <ant.testing/component.hpp>

namespace ant { namespace {

using signature = env_signature<
    const testing::component<0>*,
    const testing::component<2>,
    testing::component<3>*,
    testing::component<4>>;
using signature_traits = env_signature_traits<signature>;

static_assert(std::is_same_v<signature_traits::required, type_list<const testing::component<2>, testing::component<4>>>);
static_assert(std::is_same_v<signature_traits::optional, type_list<const testing::component<0>, testing::component<3>>>);

}} // namespace ant
