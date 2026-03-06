#include <ant/core/hash.hpp>

namespace ant::hash { namespace {

static_assert(compile_crc32("hello") == 0x3610a686u);
static_assert(compile_crc32("world") == 0x3A771143u);

}} // namespace ant::hash