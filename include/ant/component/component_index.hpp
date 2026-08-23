#pragma once

#include <limits>

#include <ant/detail/component/component_index.hpp>

namespace ant {

using component_index = detail::component_index;

inline constexpr component_index component_npos = std::numeric_limits<component_index>::max();

template<typename T>
[[nodiscard]] auto component_index_of() noexcept -> component_index
{
    static component_index index = detail::next_component_index();
    return index;
}

} // namespace ant
