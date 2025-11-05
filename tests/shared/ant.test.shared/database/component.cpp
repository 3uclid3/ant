#include <ant.test.shared/database/component.hpp>

namespace ant::test {

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

} // namespace ant::test
