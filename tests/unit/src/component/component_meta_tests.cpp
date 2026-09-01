#include <ant/detail/component/component_meta.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>

namespace ant::detail { namespace {

TEST_CASE("make_component_meta: returns meta for component type")
{
    const component_meta meta = make_component_meta<testing::component<0>>();

    CHECK_EQ(meta.index, component_index_of<testing::component<0>>());
    CHECK_EQ(meta.size, sizeof(testing::component<0>));
    CHECK_EQ(meta.alignment, alignof(testing::component<0>));
    CHECK_EQ(meta.stride, component_meta::default_stride<testing::component<0>>);
    CHECK_EQ(meta.stride_per_block, component_meta::default_stride_per_block<testing::component<0>>);
#if ANT_COMPONENT_NAME_ENABLED
    CHECK_EQ(meta.name, "ant::testing::component<0>");
#endif
}

}} // namespace ant::detail
