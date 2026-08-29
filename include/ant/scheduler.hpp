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
        system_handle(scheduler& scheduler, std::size_t stage_index, std::size_t system_index) noexcept;

        auto after(const system_handle& other) -> system_handle&;

    private:
        scheduler& _scheduler;
        std::size_t _stage_index;
        std::size_t _system_index;
    };

    class stage_handle
    {
    public:
        stage_handle(scheduler& scheduler, std::size_t stage_index) noexcept;

        template<typename T>
        auto add() -> system_handle;

        template<typename T>
        auto add(T&& system) -> system_handle;

    private:
        scheduler& _scheduler;
        std::size_t _stage_index;
    };

    explicit scheduler(database& db);

    template<typename T>
    auto stage() -> stage_handle;

    auto execute() -> void;

private:
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

    auto stage_impl(stage_type_id type_id) -> stage_handle;
    auto add_system_impl(std::size_t stage_index, system_type_id type_id, binding&& executable) -> system_handle;

private:
    database& _db;

    detail::vector<stage_node> _stages;
    bool _dirty{false};
};

template<typename T>
auto scheduler::stage_handle::add() -> system_handle
{
    return _scheduler.add_system_impl(_stage_index, system_type_indexer::get<T>(), T());
}

template<typename T>
auto scheduler::stage_handle::add(T&& system) -> system_handle
{
    using system_type = std::remove_pointer_t<std::remove_cvref_t<T>>;
    return _scheduler.add_system_impl(_stage_index, system_type_indexer::get<system_type>(), std::forward<T>(system));
}

template<typename T>
auto scheduler::stage() -> stage_handle
{
    return stage_impl(stage_type_indexer::get<T>());
}

} // namespace ant
