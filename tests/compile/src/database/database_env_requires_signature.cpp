#include <ant/database.hpp>

#include <ant/mock/component.hpp>
#include <ant/mock/schema.hpp>

namespace ant { namespace {

auto invalid_env() -> void
{
    schema_fixture<1> fixture;
    database database{std::move(fixture.schema)};

    [[maybe_unused]] auto environment = database.env<component<0>>();
}

}} // namespace ant
