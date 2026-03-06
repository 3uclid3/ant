#include <ant/database/query.hpp>

#include <ant.test.shared/database/component.hpp>

namespace ant { namespace {

[[maybe_unused]] auto func(query_of<const test::component<0>>::row_type row) -> void
{
    [[maybe_unused]] const test::component<0>& v = row.get<test::component<0>>();
}

}} // namespace ant
