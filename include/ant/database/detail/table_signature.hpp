#pragma once

#include <ant/core/memory.hpp>
#include <ant/database/detail/component_bitset.hpp>

namespace ant::detail {

template<typename Allocator>
class basic_table_signature
{
public:
    using allocator_type = Allocator;
    using bitset_type = component_bitset<rebind_alloc_t<std::uint64_t, allocator_type>>;
    using bitset_allocator_type = typename bitset_type::allocator_type;

    constexpr explicit basic_table_signature(const allocator_type& allocator = allocator_type{}) noexcept;

    constexpr auto has(component_index index) const noexcept -> bool;
    constexpr auto add(component_index index) noexcept -> void;
    constexpr auto remove(component_index index) noexcept -> void;

    constexpr auto empty() const noexcept -> bool;

private:
    bitset_type _mask;
};

template<typename Allocator>
constexpr basic_table_signature<Allocator>::basic_table_signature(const allocator_type& allocator) noexcept
    : _mask(bitset_allocator_type(allocator))
{
}

template<typename Allocator>
constexpr auto basic_table_signature<Allocator>::has(component_index index) const noexcept -> bool
{
    return index < _mask.size() && _mask.test(index);
}

template<typename Allocator>
constexpr auto basic_table_signature<Allocator>::add(component_index index) noexcept -> void
{
    _mask.resize(index + 1);
    _mask.set(index);
}

template<typename Allocator>
constexpr auto basic_table_signature<Allocator>::remove(component_index index) noexcept -> void
{
    if (index < _mask.size())
    {
        _mask.reset(index);
    }
}

template<typename Allocator>
constexpr auto basic_table_signature<Allocator>::empty() const noexcept -> bool
{
    return _mask.none();
}

} // namespace ant::detail
