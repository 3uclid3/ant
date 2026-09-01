#pragma once

#include <cstddef>

namespace ant::testing {

template<std::size_t Index>
struct component
{
    static constexpr std::size_t index{Index};

    std::size_t value{index};
};

} // namespace ant::testing
