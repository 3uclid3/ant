#include <ant/scheduler.hpp>

#include <ant/detail/assert.hpp>

namespace ant {

scheduler::system_handle::system_handle(scheduler& scheduler, std::size_t stage_index, std::size_t system_index) noexcept
    : _scheduler(scheduler)
    , _stage_index(stage_index)
    , _system_index(system_index)
{
}

auto scheduler::system_handle::after(const system_handle& other) -> system_handle&
{
    ANT_ASSERT(_stage_index == other._stage_index);

    stage_node& stage = _scheduler._stages[_stage_index];
    stage.ordered_systems.clear();
    stage.systems[_system_index].dependencies.emplace_back(other._system_index);

    return *this;
}

scheduler::stage_handle::stage_handle(scheduler& scheduler, std::size_t stage_index) noexcept
    : _scheduler(scheduler)
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

auto scheduler::execute() -> void
{
    if (_dirty)
    {
        for (stage_node& stage : _stages)
        {
            stage.compile();
        }
        _dirty = false;
    }

    for (stage_node& stage : _stages)
    {
        change_accumulator accumulator{_db.schema()};

        for (system_node* system : stage.ordered_systems)
        {
            binding_context context{_db, accumulator};
            system->executable.invoke(context);
        }

        _db.flush(std::span(&accumulator, 1));
    }
}

auto scheduler::stage_impl(stage_type_id type_id) -> stage_handle
{
    auto it = std::ranges::find_if(_stages, [type_id](const stage_node& stage) {
        return stage.id == type_id;
    });

    if (it != _stages.end())
    {
        return stage_handle(*this, std::distance(_stages.begin(), it));
    }

    stage_node& stage = _stages.emplace_back();
    stage.id = type_id;
    return stage_handle(*this, _stages.size() - 1);
}

auto scheduler::add_system_impl(std::size_t stage_index, system_type_id type_id, binding&& executable) -> system_handle
{
    _dirty = true;

    stage_node& stage = _stages[stage_index];
    stage.ordered_systems.clear();

    ANT_ASSERT(std::ranges::none_of(stage.systems, [type_id](const system_node& system) {
        return system.id == type_id;
    }));

    system_node& system = stage.systems.emplace_back(std::move(executable));
    system.id = type_id;

    return system_handle(*this, stage_index, stage.systems.size() - 1);
}

} // namespace ant
