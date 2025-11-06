#include <ant/core/assert.hpp>

#include <cstdlib>
#include <utility>

namespace ant {

ANT_COVERAGE_FUNCTION_DISABLED auto assertion::set_handler(handler_type handler) noexcept -> void
{
    _handler = handler != nullptr ? handler : default_handler;
}

ANT_COVERAGE_FUNCTION_DISABLED auto assertion::reset_handler() noexcept -> void
{
    _handler = default_handler;
}

ANT_COVERAGE_FUNCTION_DISABLED auto assertion::default_handler(std::string_view expr [[maybe_unused]], std::string_view msg [[maybe_unused]], std::source_location location [[maybe_unused]]) -> void
{
    std::abort();
}

ANT_COVERAGE_FUNCTION_DISABLED auto assertion::fail(std::string_view expr, std::string_view msg, std::source_location location) -> void
{
    _handler(expr, msg, location);

    std::unreachable();
}

} // namespace ant