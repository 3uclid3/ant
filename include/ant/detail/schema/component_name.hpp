#pragma once

#include <meta>
#include <string_view>

namespace ant::detail {

template<typename T>
[[nodiscard]] consteval auto component_name_of() noexcept -> std::string_view
{
#if defined(__GNUC__) && !defined(__clang__)
    return std::meta::display_string_of(^^T);
#else
    return "unsupported by clangd";
#endif
}

} // namespace ant::detail
