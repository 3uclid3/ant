#pragma once

#include <ant/binding.hpp>
#include <ant/change/change_accumulator.hpp>
#include <ant/database.hpp>
#include <ant/inspect/inspector.hpp>

namespace ant::testing {

struct system_fixture
{
    explicit system_fixture(ant::schema&& schema)
        : _database(std::move(schema))
    {
    }

    template<typename T>
    auto get_env() -> T&
    {
        return _database.env_of<T>().template get<T>();
    }

    template<typename... T>
    auto set_env() -> void
    {
        change_accumulator accumulator{_database.schema()};
        changeset cs = _database.changeset_of<ant::set_env<T...>>(accumulator);

        (cs.template set_env<T>(), ...);

        _database.flush(std::span{&accumulator, 1});
    }

    template<typename... T>
    auto set_env(T&&... args) -> void
    {
        ant::change_accumulator accumulator{_database.schema()};
        ant::changeset cs = _database.changeset_of<ant::set_env<std::decay_t<T>...>>(accumulator);

        (cs.template set_env<std::decay_t<T>>(std::forward<T>(args)), ...);

        _database.flush(std::span{&accumulator, 1});
    }

    [[nodiscard]] auto contains(entity e) const noexcept -> bool
    {
        return _database.inspect().contains(e);
    }

    template<typename T>
    [[nodiscard]] auto has(entity e) const noexcept -> bool
    {
        return _database.inspect().has<T>(e);
    }

    template<typename T>
    [[nodiscard]] auto get(entity e) const noexcept -> const T*
    {
        return _database.inspect().get<T>(e);
    }

    template<typename... T>
    auto create_entity() -> ant::entity
    {
        ant::change_accumulator accumulator{_database.schema()};
        ant::changeset cs = _database.changeset_of<ant::create, ant::attach<T...>>(accumulator);

        ant::entity e = cs.create();
        (cs.template attach<T>(e), ...);

        _database.flush(std::span{&accumulator, 1});

        return e;
    }

    template<typename... T>
    auto create_entity(T&&... args) -> ant::entity
    {
        change_accumulator accumulator{_database.schema()};
        changeset cs = _database.changeset_of<ant::create, ant::attach<std::decay_t<T>...>>(accumulator);

        entity e = cs.create();
        (cs.template attach<std::decay_t<T>>(e, std::forward<T>(args)), ...);

        _database.flush(std::span{&accumulator, 1});

        return e;
    }

    template<typename T>
    auto execute() -> void
    {
        execute(T());
    }

    template<typename T>
    auto execute(T&& system) -> void
    {
        change_accumulator accumulator{_database.schema()};
        _database.bind<T>(std::forward<T>(system)).invoke(accumulator);
        _database.flush(std::span{&accumulator, 1});
    }

    database _database;
};

} // namespace ant::testing
