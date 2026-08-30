#pragma once

#include <ant/binding.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/type_indexer.hpp>

namespace ant {

class database;

class scheduler
{
public:
    class system_handle
    {
    public:
        system_handle(scheduler& scheduler, std::size_t schedule_index, std::size_t stage_index, std::size_t system_index) noexcept;

        auto after(const system_handle& other) -> system_handle&;

    private:
        scheduler& _scheduler;
        std::size_t _schedule_index;
        std::size_t _stage_index;
        std::size_t _system_index;
    };

    class stage_handle
    {
    public:
        stage_handle(scheduler& scheduler, std::size_t schedule_index, std::size_t stage_index) noexcept;

        template<typename T>
        auto add() -> system_handle;

        template<typename T>
        auto add(T&& system) -> system_handle;

    private:
        scheduler& _scheduler;
        std::size_t _schedule_index;
        std::size_t _stage_index;
    };

    explicit scheduler(database& db);

    template<typename Schedule, typename Stage>
    auto stage() -> stage_handle;

    template<typename Schedule>
    auto compile() -> void;

    template<typename Schedule>
    auto execute() -> void;

private:
    using schedule_type_indexer = detail::basic_type_indexer<struct schedule>;
    using schedule_type_id = schedule_type_indexer::index_type;

    using stage_type_indexer = detail::basic_type_indexer<struct stage>;
    using stage_type_id = stage_type_indexer::index_type;

    using system_type_indexer = detail::basic_type_indexer<struct system>;
    using system_type_id = system_type_indexer::index_type;

    struct system_node
    {
        binding executable;
        detail::vector<std::size_t> dependencies; // system indices

        system_type_id id;
    };

    struct stage_node
    {
        auto compile() -> bool;

        detail::vector<system_node> systems;
        detail::vector<system_node*> ordered_systems;

        stage_type_id id;
    };

    struct schedule_node
    {
        detail::vector<stage_node> stages;
    };

    auto stage_impl(schedule_type_id schedule_id, stage_type_id stage_id) -> stage_handle;
    auto add_system_impl(std::size_t schedule_index, std::size_t stage_index, system_type_id system_id, binding&& executable) -> system_handle;

    auto compile_impl(schedule_type_id schedule_id) -> void;
    auto execute_impl(schedule_type_id schedule_id) -> void;

private:
    database& _db;

    detail::vector<schedule_node> _dense_schedules;
    detail::vector<std::size_t> _sparse_schedules;
};

template<typename T>
auto scheduler::stage_handle::add() -> system_handle
{
    return _scheduler.add_system_impl(_schedule_index, _stage_index, system_type_indexer::get<T>(), T());
}

template<typename T>
auto scheduler::stage_handle::add(T&& system) -> system_handle
{
    using system_type = std::remove_pointer_t<std::remove_cvref_t<T>>;
    return _scheduler.add_system_impl(_schedule_index, _stage_index, system_type_indexer::get<system_type>(), std::forward<T>(system));
}

template<typename Schedule, typename Stage>
auto scheduler::stage() -> stage_handle
{
    return stage_impl(schedule_type_indexer::get<Schedule>(), stage_type_indexer::get<Stage>());
}

template<typename Schedule>
auto scheduler::compile() -> void
{
    return compile_impl(schedule_type_indexer::get<Schedule>());
}

template<typename Schedule>
auto scheduler::execute() -> void
{
    return execute_impl(schedule_type_indexer::get<Schedule>());
}

} // namespace ant
