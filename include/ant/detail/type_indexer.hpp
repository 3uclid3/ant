#pragma once

#include <cstdint>
#include <limits>

namespace ant::detail {

template<typename Tag, typename IndexType = std::uint32_t>
class basic_type_indexer
{
public:
    using index_type = IndexType;

    static constexpr index_type npos = std::numeric_limits<index_type>::max();

    template<typename T>
    static auto get() noexcept -> index_type;

private:
    static auto next() noexcept -> index_type;
};

template<typename Tag, typename IndexType>
template<typename T>
auto basic_type_indexer<Tag, IndexType>::get() noexcept -> index_type
{
    static const index_type index = next();
    return index;
}

template<typename Tag, typename IndexType>
auto basic_type_indexer<Tag, IndexType>::next() noexcept -> index_type
{
    static index_type index = 0;
    return index++;
}

} // namespace ant::detail
