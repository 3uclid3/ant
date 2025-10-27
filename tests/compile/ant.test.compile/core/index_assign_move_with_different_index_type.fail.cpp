#include <ant/core/index.hpp>

#include <utility>

namespace ant { namespace {

using uidx32 = basic_index<struct uidx32_tag, std::uint32_t>;
using uidx32_other = basic_index<struct uidx32_other_tag, std::uint32_t>;

[[maybe_unused]] auto func() -> void
{
    uidx32 id0{42};
    uidx32_other id1 = std::move(id0); // should fail: cannot convert to different index type
}

}} // namespace ant