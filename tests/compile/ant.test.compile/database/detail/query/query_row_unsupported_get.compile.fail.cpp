#include <ant/database/query.hpp>

#include <ant.test.shared/database/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(query_of<test::component<0>>::row_type row) -> void
{
    [[maybe_unused]] test::component<1>& v = row.get<test::component<1>>();
}

}} // namespace ant
