#pragma once

#include <ant/database/component_bitset.hpp>

namespace ant {

template<typename Database>
class basic_table_signature
{
public:
    using bitset_type = dynamic_bitset;
    using allocator_type = typename bitset_type::allocator_type;

    constexpr explicit basic_table_signature(const allocator_type& allocator = allocator_type{}) noexcept;

    constexpr auto has(component_index index) const noexcept -> bool;
    constexpr auto add(component_index index) noexcept -> void;
    constexpr auto remove(component_index index) noexcept -> void;

    constexpr auto empty() const noexcept -> bool;

private:
    bitset_type _mask;
};

template<typename Database>
constexpr basic_table_signature<Database>::basic_table_signature(const allocator_type& allocator) noexcept
    : _mask(allocator_type(allocator))
{
}

template<typename Database>
constexpr auto basic_table_signature<Database>::has(component_index index) const noexcept -> bool
{
    return index < _mask.size() && _mask.test(index);
}

template<typename Database>
constexpr auto basic_table_signature<Database>::add(component_index index) noexcept -> void
{
    _mask.resize(index + 1);
    _mask.set(index);
}

template<typename Database>
constexpr auto basic_table_signature<Database>::remove(component_index index) noexcept -> void
{
    if (index < _mask.size())
    {
        _mask.reset(index);
    }
}

template<typename Database>
constexpr auto basic_table_signature<Database>::empty() const noexcept -> bool
{
    return _mask.none();
}

} // namespace ant
