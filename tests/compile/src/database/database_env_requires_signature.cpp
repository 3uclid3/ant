#include <ant/database.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

auto invalid_env() -> void
{
    database database{testing::make_indexed_schema<1>()};

    [[maybe_unused]] auto environment = database.env<testing::component<0>>();
}

}} // namespace ant
