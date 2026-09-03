#include <ant/detail/changeset/change_accumulator_consumer.hpp>

#include <ant/change_accumulator.hpp>

namespace ant::detail {

auto change_accumulator_consumer::changes(const change_accumulator& accumulator) noexcept -> std::span<const change>
{
    return accumulator._buffer;
}

auto change_accumulator_consumer::changes(change_accumulator& accumulator) noexcept -> std::span<change>
{
    return accumulator._buffer;
}

auto change_accumulator_consumer::clear(change_accumulator& accumulator) noexcept -> void
{
    accumulator._buffer.clear();
}

} // namespace ant::detail
