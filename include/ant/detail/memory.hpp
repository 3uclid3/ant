#pragma once

#include <cstddef>
#include <memory_resource>

namespace ant::detail {

namespace pmr {
auto get_default_resource() -> std::pmr::memory_resource*;
} // namespace pmr

[[nodiscard]] auto allocate(std::size_t size, std::size_t alignment) -> void*;
auto deallocate(void* ptr, std::size_t size, std::size_t alignment) noexcept -> void;

} // namespace ant::detail
