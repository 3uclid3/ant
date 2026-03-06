#include <ant/core/type_info.hpp>

namespace ant { namespace {

struct foo
{
};

static_assert(type_hash<int>::value() != 0);
static_assert(type_name<int>::value() != "");

static_assert(type_hash<foo>::value() != 0);
static_assert(type_name<foo>::value() != "");

}} // namespace ant
