#include <ant/core/assert.hpp>

#include <iostream>
#include <string>

// GCOV_EXCL_START
namespace ant {
namespace detail {
#if ANT_ASSERT_ENABLED
namespace {
auto default_assert_handler(std::string_view condition_str, std::string_view message, std::source_location location) -> void
{
    std::string full_message = "Assertion failed: ";
    full_message += condition_str;
    if (!message.empty())
    {
        full_message += " | Message: ";
        full_message += message;
    }
    full_message += " | Location: " + std::string(location.file_name()) + ":" + std::to_string(location.line()) + " in function " + location.function_name();

    std::cerr << full_message << std::endl;

    std::abort();
}

static assert_handler& get_handler()
{
    static assert_handler handler = default_assert_handler;
    return handler;
}
} // namespace
#endif

auto invoke_assert_handler(std::string_view condition_str [[maybe_unused]], std::string_view message [[maybe_unused]], std::source_location location [[maybe_unused]]) -> void
{
    ANT_ASSERT_CODE(get_handler()(condition_str, message, location));
}

} // namespace detail

auto set_assert_handler(assert_handler handler [[maybe_unused]]) -> void
{
    ANT_ASSERT_CODE(detail::get_handler() = std::move(handler));
}

auto unset_assert_handler() -> void
{
    ANT_ASSERT_CODE(detail::get_handler() = detail::default_assert_handler);
}
} // namespace ant
// GCOV_EXCL_STOP
