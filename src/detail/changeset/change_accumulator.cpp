#include <ant/detail/changeset/change_accumulator.hpp>

namespace ant::detail {

change_accumulator::change_accumulator(const schema& schema)
    : _schema{&schema}
{
}

auto change_accumulator::emplace_destroy(entity e) -> void
{
    _buffer.emplace_back(destroy_change{.entity = e});
}

auto change_accumulator::operator[](std::size_t index) const noexcept -> const value_type&
{
    return _buffer[index];
}

auto change_accumulator::operator[](std::size_t index) noexcept -> value_type&
{
    return _buffer[index];
}

auto change_accumulator::empty() const noexcept -> bool
{
    return _buffer.empty();
}

auto change_accumulator::size() const noexcept -> std::size_t
{
    return _buffer.size();
}

auto change_accumulator::begin() const noexcept -> const_iterator
{
    return _buffer.begin();
}

auto change_accumulator::end() const noexcept -> const_iterator
{
    return _buffer.end();
}

auto change_accumulator::begin() noexcept -> iterator
{
    return _buffer.begin();
}

auto change_accumulator::end() noexcept -> iterator
{
    return _buffer.end();
}

auto change_accumulator::clear() noexcept -> void
{
    _buffer.clear();
}

} // namespace ant::detail
