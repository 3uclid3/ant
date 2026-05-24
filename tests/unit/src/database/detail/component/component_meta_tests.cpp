#include <ant/database/detail/component/component_meta.hpp>
#include <doctest/doctest.h>

#include <ant.mock/component.hpp>

namespace ant::detail { namespace {

TEST_CASE("component_meta_of: returns meta for component type")
{
    const component_meta meta = component_meta_of<component<0>>();

    CHECK_EQ(meta.index, component_index_of<component<0>>());
    CHECK_EQ(meta.size, sizeof(component<0>));
    CHECK_EQ(meta.alignment, alignof(component<0>));
    CHECK_EQ(meta.stride, component_meta::default_stride<component<0>>);
    CHECK_EQ(meta.stride_per_block, component_meta::default_stride_per_block<component<0>>);
    CHECK_EQ(meta.name, "ant::component<0>");
}

}} // namespace ant::detail
