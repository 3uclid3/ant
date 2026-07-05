#include <ant/detail/memory.hpp>
#include <ant/memory.hpp>

#include <new>

#include <ant/detail/assert.hpp>

namespace ant {
namespace detail {

namespace {
auto default_allocate(std::size_t size, std::size_t alignment) -> void*
{
    return ::operator new(size, std::align_val_t{alignment});
}

auto default_deallocate(void* ptr, std::size_t size, std::size_t alignment) noexcept -> void
{
    ::operator delete(ptr, size, std::align_val_t{alignment});
}

allocate_fn allocate_hook = &default_allocate;
deallocate_fn deallocate_hook = &default_deallocate;
} // namespace

namespace pmr {
auto get_default_resource() -> std::pmr::memory_resource*
{
    struct impl : std::pmr::memory_resource
    {
        auto do_allocate(std::size_t bytes, std::size_t alignment) -> void* override
        {
            return ant::detail::allocate(bytes, alignment);
        }

        auto do_deallocate(void* ptr, std::size_t bytes, std::size_t alignment) -> void override
        {
            ant::detail::deallocate(ptr, bytes, alignment);
        }

        auto do_is_equal(const std::pmr::memory_resource& other) const noexcept -> bool override
        {
            return this == &other;
        }
    };

    static impl default_resource;
    return &default_resource;
}
} // namespace pmr

auto allocate(std::size_t size, std::size_t alignment) -> void*
{
    return allocate_hook(size, alignment);
}

auto deallocate(void* ptr, std::size_t size, std::size_t alignment) noexcept -> void
{
    deallocate_hook(ptr, size, alignment);
}

} // namespace detail

auto set_allocator(allocate_fn allocate, deallocate_fn deallocate) noexcept -> void
{
    ANT_ASSERT(allocate != nullptr);
    ANT_ASSERT(deallocate != nullptr);

    detail::allocate_hook = allocate;
    detail::deallocate_hook = deallocate;
}

auto unset_allocator() noexcept -> void
{
    detail::allocate_hook = &detail::default_allocate;
    detail::deallocate_hook = &detail::default_deallocate;
}

} // namespace ant
