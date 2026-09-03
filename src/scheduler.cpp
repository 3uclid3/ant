#include <ant/scheduler.hpp>

#include <ant/detail/core/assert.hpp>

namespace ant {

scheduler::system_handle::system_handle(scheduler& scheduler, std::size_t schedule_index, std::size_t stage_index, std::size_t system_index) noexcept
    : _scheduler(scheduler)
    , _schedule_index(schedule_index)
    , _stage_index(stage_index)
    , _system_index(system_index)
{
}

auto scheduler::system_handle::after(const system_handle& other) -> system_handle&
{
    ANT_ASSERT(_stage_index == other._stage_index);

    stage_node& stage = _scheduler._dense_schedules[_schedule_index].stages[_stage_index];

    stage.ordered_systems.clear();
    stage.systems[_system_index].dependencies.emplace_back(other._system_index);

    return *this;
}

scheduler::stage_handle::stage_handle(scheduler& scheduler, std::size_t schedule_index, std::size_t stage_index) noexcept
    : _scheduler(scheduler)
    , _schedule_index(schedule_index)
    , _stage_index(stage_index)
{
}

auto scheduler::stage_node::compile() -> bool
{
    ordered_systems.clear();
    ordered_systems.reserve(systems.size());

    // todo: topologically sort systems
    for (system_node& system : systems)
    {
        ordered_systems.emplace_back(&system);
    }

    return true;
}

scheduler::scheduler(database& db)
    : _db(db)
{
}

auto scheduler::stage_impl(schedule_type_id schedule_id, stage_type_id type_id) -> stage_handle
{
    if (schedule_id >= _sparse_schedules.size())
    {
        _sparse_schedules.resize(schedule_id + 1, schedule_type_indexer::npos);
        _sparse_schedules[schedule_id] = _dense_schedules.size();

        _dense_schedules.emplace_back();
    }

    const std::size_t schedule_index = _sparse_schedules[schedule_id];
    schedule_node& schedule = _dense_schedules[schedule_index];

    auto it = std::ranges::find_if(schedule.stages, [type_id](const stage_node& stage) {
        return stage.id == type_id;
    });

    if (it != schedule.stages.end())
    {
        return stage_handle(*this, schedule_index, std::distance(schedule.stages.begin(), it));
    }

    stage_node& stage = schedule.stages.emplace_back();
    stage.id = type_id;
    return stage_handle(*this, schedule_index, schedule.stages.size() - 1);
}

auto scheduler::add_system_impl(std::size_t schedule_index, std::size_t stage_index, system_type_id type_id, binding&& executable) -> system_handle
{
    ANT_ASSERT(schedule_index < _dense_schedules.size());

    schedule_node& schedule = _dense_schedules[schedule_index];

    stage_node& stage = schedule.stages[stage_index];
    stage.ordered_systems.clear(); // ensure no dangling pointer

    ANT_ASSERT(std::ranges::none_of(stage.systems, [type_id](const system_node& system) {
        return system.id == type_id;
    }));

    system_node& system = stage.systems.emplace_back(std::move(executable));
    system.id = type_id;

    return system_handle(*this, schedule_index, stage_index, stage.systems.size() - 1);
}

auto scheduler::compile_impl(schedule_type_id schedule_id) -> void
{
    ANT_ASSERT(schedule_id < _sparse_schedules.size());
    ANT_ASSERT(_sparse_schedules[schedule_id] < _dense_schedules.size());

    schedule_node& schedule = _dense_schedules[_sparse_schedules[schedule_id]];

    for (stage_node& stage : schedule.stages)
    {
        stage.compile();
    }
}

auto scheduler::execute_impl(schedule_type_id schedule_id) -> void
{
    ANT_ASSERT(schedule_id < _sparse_schedules.size());
    ANT_ASSERT(_sparse_schedules[schedule_id] < _dense_schedules.size());

    schedule_node& schedule = _dense_schedules[_sparse_schedules[schedule_id]];

    for (stage_node& stage : schedule.stages)
    {
        change_accumulator accumulator{_db.schema()};

        for (system_node* system : stage.ordered_systems)
        {
            if (system->executable.is_ready())
            {
                system->executable.invoke(accumulator);
            }
        }

        _db.flush(std::span(&accumulator, 1));
    }
}

} // namespace ant
