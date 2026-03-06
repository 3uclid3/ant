#define DOCTEST_CONFIG_IMPLEMENT
#include <ant.unit/doctest.hpp>

#include <ant/core/assert.hpp>

auto main(int argc, char** argv) -> int
{
    ant::assertion::set_handler([](std::string_view expr, std::string_view msg, std::source_location location) {
        throw ant::test::assert_error(expr, msg, location);
    });
    return doctest::Context(argc, argv).run();
}
