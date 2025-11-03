#pragma once

#include <ant/core/dynamic_bitset.hpp>
#include <ant/database/detail/component_index.hpp>

namespace ant::detail {

class table_signature
{
public:
    constexpr auto has(component_index index) const noexcept -> bool;
    constexpr auto add(component_index index) noexcept -> void;
    constexpr auto remove(component_index index) noexcept -> void;

    constexpr auto empty() const noexcept -> bool;

private:
    dynamic_bitset _mask;
};

constexpr auto table_signature::has(component_index index) const noexcept -> bool
{
    return index < _mask.size() && _mask.test(index);
}

constexpr auto table_signature::add(component_index index) noexcept -> void
{
    _mask.resize(index + 1);
    _mask.set(index);
}

constexpr auto table_signature::remove(component_index index) noexcept -> void
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
