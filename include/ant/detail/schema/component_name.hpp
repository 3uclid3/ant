#pragma once

#ifndef ANT_COMPONENT_NAME_ENABLED
#    ifdef NDEBUG
#        define ANT_COMPONENT_NAME_ENABLED 0
#    else
#        define ANT_COMPONENT_NAME_ENABLED 1
#    endif
#endif

#if ANT_COMPONENT_NAME_ENABLED

#include <meta>
#include <string_view>

namespace ant::detail {

template<typename T>
[[nodiscard]] consteval auto component_name_of() noexcept -> std::string_view
{
    return std::meta::display_string_of(^^T);
}

} // namespace ant::detail

#endif
