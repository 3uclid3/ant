#pragma once

#include <functional>
#include <source_location>
#include <string_view>

namespace ant {

using assert_handler = std::function<void(std::string_view, std::string_view, std::source_location)>;

auto set_assert_handler(assert_handler handler) -> void;
auto unset_assert_handler() -> void;

} // namespace ant
