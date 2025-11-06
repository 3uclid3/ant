#include <ant.test.shared/core/assert_error.hpp>

#include <format>

namespace ant::test {

assert_error::assert_error(std::string_view expr, std::string_view msg, std::source_location location)
    : std::logic_error(format_message(expr, msg, location))
    , _expression(expr)
    , _message(msg)
    , _location(location)
{
}

auto assert_error::format_message(std::string_view expr, std::string_view msg, std::source_location location) -> std::string
{
    if (msg.empty())
    {
        return std::format("assert failed {} at {} ({})", expr, location.file_name(), location.line());
    }
    else
    {
        return std::format("assert failed {} at {} ({}): {}", expr, location.file_name(), location.line(), msg);
    }
}
} // namespace ant::test