#include <ant/database.hpp>

#include <ant/detail/change/change_coalescer.hpp>
#include <ant/detail/change/change_executor.hpp>

namespace ant {

database::database(ant::schema schema)
    : _store(std::move(schema))
{
}

auto database::flush(std::span<change_accumulator> accumulators) -> void
{
    detail::change_coalescer coalescer(_store.schema, _store.entities, _store.catalog);
    for (change_accumulator& accumulator : accumulators)
    {
        coalescer.consume(accumulator);
    }

    detail::coalesced_changes changes = coalescer.coalesce();
    detail::change_executor executor(_store.entities, _store.envs, _store.catalog);
    executor.execute(changes);
}

} // namespace ant
