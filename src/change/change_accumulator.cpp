#include <ant/change/change_accumulator.hpp>

namespace ant {

change_accumulator::change_accumulator(const schema& schema)
    : _schema{&schema}
{
}

auto change_accumulator::emplace_destroy(entity e) -> void
{
    _buffer.emplace_back(detail::destroy_change{.entity = e});
}

auto change_accumulator::empty() const noexcept -> bool
{
    return _buffer.empty();
}

auto change_accumulator::size() const noexcept -> std::size_t
{
    return _buffer.size();
}

} // namespace ant
