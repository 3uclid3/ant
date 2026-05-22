#pragma once

#include <cstdint>

namespace ant::detail {

using component_index = std::uint32_t;

[[nodiscard]] auto next_component_index() noexcept -> component_index;

template<typename T>
[[nodiscard]] auto component_index_of() noexcept -> component_index
{
    static component_index index = next_component_index();
    return index;
}

} // namespace ant::detail
