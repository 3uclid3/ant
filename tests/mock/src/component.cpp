#include <ant.mock/component.hpp>

namespace ant {

component_fixture::component_fixture()
{
    component_tracker::reset();
}

auto component_tracker::reset() -> void
{
    tracks().clear();
}

auto component_tracker::tracks() -> std::vector<component_track>&
{
    static std::vector<component_track> instance;
    return instance;
}

auto operator<<(std::ostream& os, const component_track& track) -> std::ostream&
{
    return os << std::format("{{ ctor: {}, dtor: {}, move: {}, copy: {} }}", track.ctor, track.dtor, track.move, track.copy);
}

} // namespace ant
