#include <ant/entity/entity_layout.hpp>

#include <cstdint>
#include <type_traits>

namespace ant { namespace {

struct entity_class
{
};

static_assert(std::is_same_v<entity_layout<entity_class>::value_type, std::uint32_t>);

}} // namespace ant
