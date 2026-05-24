#pragma once

#include <source_location>
#include <string_view>

#ifndef ANT_ASSERT_ENABLED
#    ifdef NDEBUG
#        define ANT_ASSERT_ENABLED 0
#    else
#        define ANT_ASSERT_ENABLED 1
#    endif
#endif

#if ANT_ASSERT_ENABLED
#    include <format>
#    include <string>
#    define ANT_ASSERT(condition, ...) \
        do \
        { \
            if (!(condition)) \
            { \
                std::string message{__VA_OPT__(std::format(__VA_ARGS__))}; \
                ::ant::detail::invoke_assert_handler(#condition, message); \
            } \
        } while (false)
#    define ANT_ASSERT_CODE(...) __VA_ARGS__
#else
#    define ANT_ASSERT(condition, ...) (void)0
#    define ANT_ASSERT_CODE(...)
#endif

namespace ant::detail {

auto invoke_assert_handler(std::string_view condition_str, std::string_view message, std::source_location location = std::source_location::current()) -> void;

} // namespace ant::detail
