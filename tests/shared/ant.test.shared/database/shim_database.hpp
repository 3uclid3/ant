#pragma once

#include <ant.test.shared/database/entity_types.hpp>

namespace ant::test {

struct shim_naked_database
{
    using entity_type = entity32;
    using allocator_type = std::allocator<entity_type>;
};

} // namespace ant::test
