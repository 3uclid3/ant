#include <ant/database/entity_traits.hpp>

#include <type_traits>

namespace ant { namespace {

enum class entity_enum_class : std::uint32_t
{
};

struct entity_class
{
    using integral_type = std::uint64_t;
};

static_assert(std::is_same_v<entity_layout<std::uint32_t>::value_type, std::uint32_t>);
static_assert(std::is_same_v<entity_layout<std::uint32_t>::integral_type, std::uint_least32_t>);

static_assert(std::is_same_v<entity_layout<std::uint64_t>::value_type, std::uint64_t>);
static_assert(std::is_same_v<entity_layout<std::uint64_t>::integral_type, std::uint_least64_t>);

static_assert(std::is_same_v<entity_layout<std::uint32_t>::value_type, std::uint32_t>);
static_assert(std::is_same_v<entity_layout<std::uint32_t>::integral_type, std::uint_least32_t>);

static_assert(std::is_same_v<entity_layout<entity_enum_class>::value_type, entity_enum_class>);
static_assert(std::is_same_v<entity_layout<entity_enum_class>::integral_type, std::underlying_type_t<entity_enum_class>>);

static_assert(std::is_same_v<entity_layout<entity_class>::value_type, entity_class>);
static_assert(std::is_same_v<entity_layout<entity_class>::integral_type, entity_class::integral_type>);

}} // namespace ant
