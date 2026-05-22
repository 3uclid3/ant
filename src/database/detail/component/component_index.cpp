#include <ant/database/detail/component/component_index.hpp>

#include <atomic>

namespace ant::detail {

auto next_component_index() noexcept -> component_index
{
    static std::atomic<component_index> value = 0;
    return value.fetch_add(1, std::memory_order_relaxed);
}

} // namespace ant::detail
