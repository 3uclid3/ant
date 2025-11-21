#include <ant/database/env.hpp>

#include <ant.test.shared/database/schema.hpp>

namespace ant { namespace {

struct fixture : test::schema_fixture<4>
{
    auto func() -> void
    {
        env_of<test::component<0>> e{registry};
        [[maybe_unused]] auto ptr = e.try_get<test::component<0>>();
    }

    detail::env_registry registry{schema};
};

}} // namespace ant
