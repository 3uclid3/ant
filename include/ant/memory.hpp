#pragma once

#include <cstddef>

namespace ant {

using allocate_fn = void* (*)(std::size_t size, std::size_t alignment);
using deallocate_fn = void (*)(void* ptr, std::size_t size, std::size_t alignment) noexcept;

auto set_allocator(allocate_fn allocate, deallocate_fn deallocate) noexcept -> void;
auto unset_allocator() noexcept -> void;

} // namespace ant
