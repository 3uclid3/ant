#pragma once

#include <ant/core/dynamic_bitset.hpp>

namespace ant::detail {

class table_signature
{
public:
    constexpr auto has(std::size_t index) const noexcept -> bool;
    constexpr auto add(std::size_t index) noexcept -> void;
    constexpr auto remove(std::size_t index) noexcept -> void;

    constexpr auto empty() const noexcept -> bool;

private:
    dynamic_bitset _mask;
};

constexpr auto table_signature::has(std::size_t index) const noexcept -> bool
{
    return index < _mask.size() && _mask.test(index);
}

constexpr auto table_signature::add(std::size_t index) noexcept -> void
{
    _mask.resize(index + 1);
    _mask.set(index);
}

constexpr auto table_signature::remove(std::size_t index) noexcept -> void
{
    if (index < _mask.size())
    {
        _mask.reset(index);
    }
}

constexpr auto table_signature::empty() const noexcept -> bool
{
    return _mask.none();
}

} // namespace ant::detail
