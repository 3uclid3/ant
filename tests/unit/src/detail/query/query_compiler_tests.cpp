#include <ant/query.hpp>
#include <doctest/doctest.h>

#include <ant/detail/query/query_compiler.hpp>

#include <ant.mock/component.hpp>
#include <ant.mock/detail/catalog.hpp>

namespace ant { namespace detail { namespace {

struct fixture : catalog_fixture<4>
{
    template<typename Signature>
    auto compile_query() -> compiled_query<Signature>
    {
        return query_compiler::compile<Signature>(catalog);
    }
    template<typename Signature>
    auto recompile_query(compiled_query<Signature>& cq) -> void
    {
        query_compiler::recompile<Signature>(catalog, cq);
    }
};

TEST_CASE_FIXTURE(fixture, "query_compiler::compile: supports sequential query construction")
{
    const entity e0 = create_entity<0>();
    const entity e1 = create_entity<1>();
    const entity e2 = create_entity<0, 1>();

    using signature0 = query_signature<component<0>>;
    using signature1 = query_signature<component<1>>;
    using signature01 = query_signature<component<0>, exclude<component<1>>>;

    compiled_query cquery0 = compile_query<signature0>();
    compiled_query cquery1 = compile_query<signature1>();
    compiled_query cquery01 = compile_query<signature01>();

    query query0 = cquery0.query();
    query query1 = cquery1.query();
    query query01 = cquery01.query();

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

TEST_CASE_FIXTURE(fixture, "query_compiler::recompile: recompiles query when catalog changes")
{
    using signature = query_signature<component<0>>;

    const entity _ = create_entity<0>();

    compiled_query cquery = compile_query<signature>();
    const auto epoch = cquery.epoch();

    const entity _ = create_entity<0, 1>();

    recompile_query<signature>(cquery);

    CHECK_NE(cquery.epoch(), epoch);
}

}}} // namespace ant::detail
