#define DOCTEST_CONFIG_IMPLEMENT
#include <doctest/doctest.h>

#include <ant.test.shared/core/assert_error.hpp>
#include <ant/core/assert.hpp>

auto main(int argc, char** argv) -> int
{
    ant::assertion::set_handler([](std::string_view expr, std::string_view msg, std::source_location location) {
        throw ant::assert_error(expr, msg, location);
    });
    return doctest::Context(argc, argv).run();
}
