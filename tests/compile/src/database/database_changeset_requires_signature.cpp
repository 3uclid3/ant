#include <ant/database.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>
#include <ant/change/change_accumulator.hpp>

namespace ant { namespace {

auto invalid_changeset() -> void
{
    database database{testing::make_indexed_schema<1>()};
    change_accumulator accumulator{database.schema()};

    [[maybe_unused]] auto changes = database.changeset<create>(accumulator);
}

}} // namespace ant
