#pragma once

#include <cstddef>

namespace ant::detail {

[[nodiscard]] auto allocate(std::size_t size, std::size_t alignment) -> void*;
auto deallocate(void* ptr, std::size_t size, std::size_t alignment) noexcept -> void;

} // namespace ant::detail
