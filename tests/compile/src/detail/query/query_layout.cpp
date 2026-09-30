#include <ant/detail/query/query_layout.hpp>

namespace ant::detail { namespace {

struct first;
struct second;
struct relation : rel<one<first>, many<second>>
{};

using leaf = join<relation, second, int>;
using branch = join<relation, first, int, leaf>;
using signature = query_signature<int, branch, leaf>;

static_assert(query_layout_part_count_of<signature> == 4);
static_assert(query_layout_part_index_of<signature, leaf> == 3);

[[maybe_unused]] auto sibling_views() -> void
{
    std::array<query_layout_part, 3> parts;
    query_layout_view<query_signature<int, join<relation, first, int>, leaf>> view(parts);
    auto first_view = view.sublayout<relation, first>();
    auto second_view = view.sublayout<relation, second>();
    (void)first_view;
    (void)second_view;
}

[[maybe_unused]] auto nested_views() -> void
{
    std::array<query_layout_part, 4> parts;
    query_layout_view<signature> view(parts);
    auto branch_view = view.sublayout<relation, first>();
    auto nested_view = branch_view.sublayout<relation, second>();
    auto sibling_view = view.sublayout<relation, second>();
    (void)nested_view;
    (void)sibling_view;
}

}} // namespace ant::detail
