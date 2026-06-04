#include <ant/query.hpp>
#include <doctest/doctest.h>

#include <ant/detail/query/query_builder.hpp>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>

namespace ant { namespace detail { namespace {

struct fixture : catalog_fixture<4>
{
    template<typename Signature>
    auto make_query() -> query<Signature>
    {
        return builder.build<Signature>();
    }

    query_builder builder{schema, catalog};
};

TEST_CASE_FIXTURE(fixture, "query_builder::build: supports sequential query construction")
{
    const entity e0 = create_entity<0>();
    const entity e1 = create_entity<1>();
    const entity e2 = create_entity<0, 1>();

    using signature0 = query_signature<component<0>>;
    using signature1 = query_signature<component<1>>;
    using signature01 = query_signature<component<0>, exclude<component<1>>>;

    query query0 = make_query<signature0>();
    query query1 = make_query<signature1>();
    query query01 = make_query<signature01>();

    CHECK(query0.row(e0).has_value());
    CHECK_FALSE(query0.row(e1).has_value());
    CHECK(query0.row(e2).has_value());
    CHECK_EQ(query0.count_rows(), 2);

    CHECK_FALSE(query1.row(e0).has_value());
    CHECK(query1.row(e1).has_value());
    CHECK(query1.row(e2).has_value());
    CHECK_EQ(query1.count_rows(), 2);

    CHECK(query01.row(e0).has_value());
    CHECK_FALSE(query01.row(e1).has_value());
    CHECK_FALSE(query01.row(e2).has_value());
    CHECK_EQ(query01.count_rows(), 1);
}

}}} // namespace ant::detail
