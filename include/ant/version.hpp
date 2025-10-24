#pragma once

#include <string_view>

namespace ant {

struct version
{
    static constexpr std::string_view semver{ANT_VERSION_SEMVER};
    static constexpr std::size_t major{ANT_VERSION_MAJOR};
    static constexpr std::size_t minor{ANT_VERSION_MINOR};
    static constexpr std::size_t patch{ANT_VERSION_PATCH};
};

} // namespace ant
