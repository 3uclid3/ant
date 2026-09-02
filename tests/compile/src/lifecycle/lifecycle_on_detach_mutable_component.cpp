#include <ant/database.hpp>

#include <ant.testing/component.hpp>
#include <ant.testing/schema.hpp>

namespace ant { namespace {

[[maybe_unused]] auto register_callback() -> void
{
    database db{testing::make_indexed_schema<1>()};
    db.on_detach<testing::component<0>>([](entity, testing::component<0>&) {});
}

}} // namespace ant
