#pragma once

#include <cstdint>

namespace ant::detail {

using component_index = std::uint32_t;

[[nodiscard]] auto next_component_index() noexcept -> component_index;

} // namespace ant::detail
