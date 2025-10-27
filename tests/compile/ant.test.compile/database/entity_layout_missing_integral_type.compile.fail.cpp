#include <ant/database/entity_traits.hpp>

#include <cstdint>
#include <type_traits>

namespace ant { namespace {

struct entity_class
{
#ifdef ANT_COMPILE_TEST_FORCE_PASS
    using integral_type = std::uint32_t;
#endif
};

auto is_version = entity_traits<entity_class>::is_versioned;

}} // namespace ant
