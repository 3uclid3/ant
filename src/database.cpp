#include <ant/database.hpp>

#include <ant/detail/changeset/change_coalescer.hpp>
#include <ant/detail/changeset/change_executor.hpp>

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

    detail::change_executor executor(_store, _lifecycle);
    change_accumulator lifecycle_accumulator(_store.schema);

    while (true)
    {
        detail::coalesced_changes changes = coalescer.coalesce();
        executor.execute(changes, lifecycle_accumulator);

        if (lifecycle_accumulator.empty())
        {
            break;
        }

        coalescer.consume(lifecycle_accumulator);
    }
}

} // namespace ant
