#include <ant/core/index.hpp>

namespace ant { namespace {

using uidx32 = basic_index<struct uidx32_tag, std::uint32_t>;
using uidx64 = basic_index<struct uidx64_tag, std::uint64_t>;

[[maybe_unused]] auto func() -> bool
{
    uidx64 id0{42};
    uidx32 id1{42};
    return id0 <=> id1; // should fail: cannot compare with different index type
}

}} // namespace ant