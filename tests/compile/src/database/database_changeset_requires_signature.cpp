#include <ant/change/change_accumulator.hpp>
#include <ant/database.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

auto invalid_changeset() -> void
{
    schema_fixture<1> fixture;
    database database{std::move(fixture.schema)};
    change_accumulator accumulator{database.schema()};

    [[maybe_unused]] auto changes = database.changeset<create>(accumulator);
}

}} // namespace ant
