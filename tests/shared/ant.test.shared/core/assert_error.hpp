#pragma once

#include <format>
#include <source_location>
#include <stdexcept>
#include <string>
#include <string_view>

namespace ant {

class assert_error : public std::logic_error
{
public:
    assert_error(std::string_view expr, std::string_view msg, std::source_location location);

private:
    static auto format_message(std::string_view expr, std::string_view msg, std::source_location location) -> std::string;
};

inline assert_error::assert_error(std::string_view expr, std::string_view msg, std::source_location location)
    : std::logic_error(format_message(expr, msg, location))
{
}

inline auto assert_error::format_message(std::string_view expr, std::string_view msg, std::source_location location) -> std::string
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

} // namespace ant
