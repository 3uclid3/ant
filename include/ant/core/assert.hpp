#pragma once

#include <exception>
#include <format>
#include <source_location>
#include <string_view>
#include <utility>

#include <ant/core/coverage.hpp>

#ifndef ANT_ASSERT_ENABLED
#ifdef NDEBUG
#define ANT_ASSERT_ENABLED 0
#else
#define ANT_ASSERT_ENABLED 1
#endif
#endif

#if ANT_ASSERT_ENABLED
#define ANT_ASSERT(condition, ...) \
    do \
    { \
        if (!(condition)) \
        { \
            ::ant::assertion::fail(#condition, std::string_view{__VA_OPT__(std::format(__VA_ARGS__))}, std::source_location::current()); \
        } \
    } while (false)
#define ANT_ASSERT_CODE(...) __VA__ARGS__
#else
#define ANT_ASSERT(condition, ...) (void)0
#define ANT_ASSERT_CODE(...) (void)0
#endif

namespace ant {

class assertion
{
public:
    using handler_type = void (*)(std::string_view expr, std::string_view msg, std::source_location location);

    static auto set_handler(handler_type handler) noexcept -> void;
    static auto reset_handler() noexcept -> void;

    [[noreturn]] static auto fail(std::string_view expr, std::string_view msg, std::source_location) -> void;

private:
    static auto default_handler(std::string_view expr, std::string_view msg, std::source_location location) -> void;

    static inline handler_type _handler{default_handler};
};

ANT_COVERAGE_FUNCTION_DISABLED inline auto assertion::set_handler(handler_type handler) noexcept -> void
{
    _handler = handler ? handler : default_handler;
}

ANT_COVERAGE_FUNCTION_DISABLED inline auto assertion::reset_handler() noexcept -> void
{
    _handler = default_handler;
}

ANT_COVERAGE_FUNCTION_DISABLED inline auto assertion::default_handler(std::string_view expr [[maybe_unused]], std::string_view msg [[maybe_unused]], std::source_location location [[maybe_unused]]) -> void
{
    std::abort();
}

ANT_COVERAGE_FUNCTION_DISABLED inline auto assertion::fail(std::string_view expr, std::string_view msg, std::source_location location) -> void
{
    _handler(expr, msg, location);

    std::unreachable();
}

} // namespace ant
