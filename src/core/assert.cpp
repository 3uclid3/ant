#include <ant/core/assert.hpp>

#include <iostream>
#include <string>

namespace ant {
namespace detail {

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

static assert_handler& get_current_assert_handler()
{
    static assert_handler handler = default_assert_handler;
    return handler;
}

auto invoke_assert_handler(std::string_view condition_str, std::string_view message, std::source_location location) -> void
{
    get_current_assert_handler()(condition_str, message, location);
}

} // namespace detail

auto set_assert_handler(assert_handler handler) -> void
{
    detail::get_current_assert_handler() = std::move(handler);
}

auto unset_assert_handler() -> void
{
    detail::get_current_assert_handler() = detail::default_assert_handler;
}

} // namespace ant
