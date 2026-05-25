#include <ant/detail/changeset/change_queue.hpp>

namespace ant::detail {

change_queue::change_queue(const schema& schema, std::pmr::memory_resource* memory_resource)
    : _schema{&schema}
    , _changes{memory_resource}
{
}

auto change_queue::push_destroy(entity e) -> void
{
    _changes.emplace_back(destroy_change{e});
}

auto change_queue::clear() -> void
{
    _changes.clear();
}

} // namespace ant::detail
