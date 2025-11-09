#pragma once

#include <cstddef>
#include <format>
#include <iostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include <ant/database/detail/component_meta.hpp>

namespace ant::test {

template<std::size_t Id>
struct trivial_component
{
    static constexpr std::size_t id{Id};
    static inline const std::string name{std::format("trivial_component_{}", id)};

    auto get_id() const noexcept -> std::size_t;
    auto get_name() const noexcept -> std::string_view;

    std::size_t value;
};
static_assert(detail::component_vtable::of<trivial_component<0>>().default_construct == nullptr);
static_assert(detail::component_vtable::of<trivial_component<0>>().relocate == nullptr);
static_assert(detail::component_vtable::of<trivial_component<0>>().clone == nullptr);
static_assert(detail::component_vtable::of<trivial_component<0>>().destroy == nullptr);

template<std::size_t Id>
struct component
{
    static constexpr std::size_t id{Id};
    static inline const std::string name{std::format("component_{}", id)};

    static inline int ctor_count{0};
    static inline int copy_count{0};
    static inline int move_count{0};
    static inline int dtor_count{0};

    component() noexcept;
    explicit component(std::size_t value) noexcept;
    component(const component& other) noexcept;
    component(component&& other) noexcept;
    ~component() noexcept;

    auto get_id() const noexcept -> std::size_t;
    auto get_name() const noexcept -> std::string_view;

    std::size_t value{id};
};

struct component_fixture
{
    component_fixture();
};

struct component_track
{
    constexpr auto operator==(const component_track& other) const noexcept -> bool = default;

    std::size_t ctor{0};
    std::size_t dtor{0};
    std::size_t move{0};
    std::size_t copy{0};
};

constexpr auto operator<<(std::ostream& os, const component_track& track) -> std::ostream&;

class component_tracker
{
public:
    template<typename T>
    static auto track() -> const component_track&;

    template<typename T>
    static auto ctor() -> void;

    template<typename T>
    static auto dtor() -> void;

    template<typename T>
    static auto move() -> void;

    template<typename T>
    static auto copy() -> void;

    static auto reset() -> void;

private:
    template<typename T>
    static auto ensure_track() -> component_track&;

    static auto tracks() -> std::vector<component_track>&;
};

template<std::size_t Id>
auto trivial_component<Id>::get_id() const noexcept -> std::size_t
{
    return id;
}

template<std::size_t Id>
auto trivial_component<Id>::get_name() const noexcept -> std::string_view
{
    return name;
}

template<std::size_t Id>
component<Id>::component() noexcept
{
    component_tracker::ctor<component<Id>>();
}

template<std::size_t Id>
component<Id>::component(std::size_t value) noexcept
    : value(value)
{
    component_tracker::ctor<component<Id>>();
}

template<std::size_t Id>
component<Id>::component(const component& other) noexcept
    : value(other.value)
{
    component_tracker::copy<component<Id>>();
}

template<std::size_t Id>
component<Id>::component(component&& other) noexcept
    : value(std::exchange(other.value, 0))
{
    component_tracker::move<component<Id>>();
}

template<std::size_t Id>
component<Id>::~component() noexcept
{
    component_tracker::dtor<component<Id>>();
}

template<std::size_t Id>
auto component<Id>::get_id() const noexcept -> std::size_t
{
    return id;
}

template<std::size_t Id>
auto component<Id>::get_name() const noexcept -> std::string_view
{
    return name;
}

constexpr auto operator<<(std::ostream& os, const component_track& track) -> std::ostream&
{
    return os << std::format("{{ ctor: {}, dtor: {}, move: {}, copy: {} }}", track.ctor, track.dtor, track.move, track.copy);
}

template<typename T>
auto component_tracker::track() -> const component_track&
{
    return ensure_track<T>();
}

template<typename T>
auto component_tracker::ctor() -> void
{
    ensure_track<T>().ctor++;
}

template<typename T>
auto component_tracker::dtor() -> void
{
    ensure_track<T>().dtor++;
}

template<typename T>
auto component_tracker::move() -> void
{
    ensure_track<T>().move++;
}

template<typename T>
auto component_tracker::copy() -> void
{
    ensure_track<T>().copy++;
}

template<typename T>
auto component_tracker::ensure_track() -> component_track&
{
    auto& all = tracks();
    if (T::id >= all.size())
    {
        all.resize(T::id + 1);
    }
    return all[T::id];
}

} // namespace ant::test
