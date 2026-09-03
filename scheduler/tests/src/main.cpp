#define DOCTEST_CONFIG_IMPLEMENT
#include <doctest/doctest.h>

#include <format>
#include <string>

#include <ant/assert.hpp>

auto main(int argc, char** argv) -> int
{
    ant::set_assert_handler([](std::string_view condition_str, std::string_view message, std::source_location location) {
        std::string fail_message;
        if (message.empty())
        {
            fail_message = std::format("ANT_ASSERT failed: {}\n  at {}:{}", condition_str, location.file_name(), location.line());
        }
        else
        {
            fail_message = std::format("ANT_ASSERT failed: {}\n  message: {}\n  at {}:{}", condition_str, message, location.file_name(), location.line());
        }
        FAIL(fail_message);
    });

    return doctest::Context(argc, argv).run();
}
