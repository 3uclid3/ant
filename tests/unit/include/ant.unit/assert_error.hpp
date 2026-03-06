#pragma once

#include <source_location>
#include <stdexcept>
#include <string>
#include <string_view>

namespace ant::test {

class assert_error : public std::logic_error
{
public:
    assert_error(std::string_view expr, std::string_view msg, std::source_location location);

    auto expression() const noexcept -> std::string_view;
    auto message() const noexcept -> std::string;
    auto location() const noexcept -> const std::source_location&;

private:
    static auto format_message(std::string_view expr, std::string_view msg, std::source_location location) -> std::string;

    std::string _expression;
    std::string _message;
    std::source_location _location;
};

inline auto assert_error::expression() const noexcept -> std::string_view
{
    return _expression;
}

inline auto assert_error::message() const noexcept -> std::string
{
    return _message;
}

inline auto assert_error::location() const noexcept -> const std::source_location&
{
    return _location;
}

} // namespace ant::test
