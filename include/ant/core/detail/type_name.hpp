#pragma once

#include <string_view>

#include <ant/config.hpp>
#include <ant/core/coverage.hpp>

namespace ant::detail {

template<typename T>
ANT_COVERAGE_FUNCTION_DISABLED [[nodiscard]] constexpr auto type_name() noexcept
{
#if defined ANT_PRETTY_FUNCTION
    std::string_view str{static_cast<const char*>(ANT_PRETTY_FUNCTION)};
    auto first = str.find_first_not_of(' ', str.find_first_of(ANT_PRETTY_FUNCTION_PREFIX) + 1);
    auto value = str.substr(first, str.find_last_of(ANT_PRETTY_FUNCTION_SUFFIX) - first);
    return value;
#else
    return std::string_view{""};
#endif
}

} // namespace ant::detail
