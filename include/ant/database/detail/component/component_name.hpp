#pragma once

#include <meta>
#include <string_view>

namespace ant::detail {

template<typename T>
[[nodiscard]] consteval auto component_name_of() noexcept -> std::string_view
{
    return std::meta::display_string_of(^^T);
}

} // namespace ant::detail
