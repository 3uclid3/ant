#pragma once

#include <span>

#include <ant/detail/changeset/change.hpp>

namespace ant {

class change_accumulator;

namespace detail {

class change_accumulator_consumer
{
public:
    static auto changes(const change_accumulator& accumulator) noexcept -> std::span<const change>;
    static auto changes(change_accumulator& accumulator) noexcept -> std::span<change>;
    static auto clear(change_accumulator& accumulator) noexcept -> void;
};

} // namespace detail
} // namespace ant
