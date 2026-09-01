#include <ant/database.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

auto invalid_query() -> void
{
    database database{testing::make_indexed_schema<1>()};

    [[maybe_unused]] auto query = database.compile_query<testing::component<0>>();
}

}} // namespace ant
