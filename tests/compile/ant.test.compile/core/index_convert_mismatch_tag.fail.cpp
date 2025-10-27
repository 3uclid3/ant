#include <ant/core/index.hpp>

namespace ant { namespace {

using uidx32 = basic_index<struct uidx32_tag, std::uint32_t>;
using uidx64 = basic_index<struct uidx64_tag, std::uint64_t>;

auto func32(uidx32 idx) -> uidx32
{
    return idx++;
}

auto func() -> uidx32
{
    uidx64 id{42};
    return func32(id); // should fail: cannot convert uidx64 to uidx32
}

}} // namespace ant