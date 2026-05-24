#pragma once

#include <cstdint>
#include <limits>

namespace ant::detail {

using component_index = std::uint32_t;

inline constexpr component_index component_npos = std::numeric_limits<component_index>::max();

[[nodiscard]] auto next_component_index() noexcept -> component_index;

template<typename T>
[[nodiscard]] auto component_index_of() noexcept -> component_index
{
    static component_index index = next_component_index();
    return index;
}

} // namespace ant::detail
