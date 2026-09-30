#include <ant/detail/query/query_layout.hpp>
#include <doctest/doctest.h>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant::detail { namespace {

struct parent;
struct child;
struct relation : rel<one<parent>, many<child>>
{};

template<std::size_t Index>
using component = testing::component<Index>;

struct fixture
{
    schema _schema{testing::make_schema<component<0>, component<1>, component<2>, component<3>, relation>()};
    catalog _catalog{_schema};
};

TEST_CASE_FIXTURE(fixture, "query_layout::build: requires membership and rejects excluded tables")
{
    using membership = rel_member<relation, child>;
    using signature = query_signature<const component<0>, exclude<component<1>>, join<relation, child, component<2>>>;

    _catalog.ensure_of(component_bitset_of<component<0>>());
    _catalog.ensure_of(component_bitset_of<component<0>, component<1>, membership>());
    const auto selected = _catalog.ensure_of(component_bitset_of<component<0>, membership>());

    query_layout<signature> layout;
    layout.build(_catalog);

    CHECK_EQ(layout.view().table(0), &_catalog.at(selected));
}

TEST_CASE_FIXTURE(fixture, "query_layout::column: maps components and membership for each table")
{
    using membership = rel_member<relation, child>;
    using signature = query_signature<const component<0>, const component<1>*, join<relation, child, component<2>>>;
    const auto absent = _catalog.ensure_of(component_bitset_of<component<0>, membership>());
    const auto present = _catalog.ensure_of(component_bitset_of<component<0>, component<1>, membership>());

    query_layout<signature> layout;
    layout.build(_catalog);

    const auto view = layout.view();
    bool saw_absent = false;
    bool saw_present = false;
    for (std::size_t i = 0; i < 2; ++i)
    {
        const auto* table = view.table(i);
        saw_absent |= table == &_catalog.at(absent);
        saw_present |= table == &_catalog.at(present);
        CHECK_EQ(view.column<component<0>>(i), table->column_of<component<0>>());
        CHECK_EQ(view.column<component<1>>(i), table->column_of<component<1>>());
        CHECK_EQ(view.column<membership>(i), table->column_of<membership>());
    }
    CHECK(saw_absent);
    CHECK(saw_present);
}

TEST_CASE_FIXTURE(fixture, "query_layout::sublayout: selects nested subtrees and following siblings")
{
    using membership = rel_member<relation, child>;
    using nested = join<relation, child, component<2>>;
    using signature = query_signature<component<0>,
                                      join<relation, parent, component<1>, nested>,
                                      join<relation, child, component<3>>>;
    const auto branch_table = _catalog.ensure_of(component_bitset_of<component<1>, membership>());
    const auto nested_table = _catalog.ensure_of(component_bitset_of<component<2>>());
    const auto sibling_table = _catalog.ensure_of(component_bitset_of<component<3>>());

    query_layout<signature> layout;
    layout.build(_catalog);

    const auto branch = layout.view().sublayout<relation, parent>();
    const auto descendant = branch.sublayout<relation, child>();
    const auto sibling = layout.view().sublayout<relation, child>();

    CHECK_EQ(branch.table(0), &_catalog.at(branch_table));
    CHECK_EQ(branch.column<membership>(0), _catalog.at(branch_table).column_of<membership>());
    CHECK_EQ(descendant.table(0), &_catalog.at(nested_table));
    CHECK_EQ(descendant.column<component<2>>(0), _catalog.at(nested_table).column_of<component<2>>());
    CHECK_EQ(sibling.table(0), &_catalog.at(sibling_table));
    CHECK_EQ(sibling.column<component<3>>(0), _catalog.at(sibling_table).column_of<component<3>>());
}

TEST_CASE_FIXTURE(fixture, "query_layout::build: rebuilds column mappings after catalog growth")
{
    using signature = query_signature<component<0>, component<1>*>;
    _catalog.ensure_of(component_bitset_of<component<0>>());

    query_layout<signature> layout;
    layout.build(_catalog);
    _catalog.ensure_of(component_bitset_of<component<0>, component<1>>());
    layout.build(_catalog);

    const auto view = layout.view();
    CHECK_NE(view.table(0), view.table(1));
    for (std::size_t i = 0; i < 2; ++i)
    {
        CHECK_EQ(view.column<component<0>>(i), view.table(i)->column_of<component<0>>());
        CHECK_EQ(view.column<component<1>>(i), view.table(i)->column_of<component<1>>());
    }
}

}} // namespace ant::detail
