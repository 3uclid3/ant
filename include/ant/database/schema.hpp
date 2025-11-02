#pragma once

#include <algorithm>

#include <ant/core/assert.hpp>
#include <ant/core/memory.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/detail/component_meta.hpp>

namespace ant {

template<typename Allocator>
class basic_schema_builder;

template<typename Allocator>
class basic_schema
{
public:
    using allocator_type = Allocator;
    using component_meta_type = detail::component_meta;
    using size_type = std::size_t;

public:
    static constexpr size_type npos = std::numeric_limits<size_type>::max();

    template<typename T>
    constexpr auto index_of() const noexcept -> size_type;

    template<typename T>
    constexpr auto meta_of() const noexcept -> const component_meta_type&;
    constexpr auto meta_of(size_type index) const noexcept -> const component_meta_type&;

    constexpr auto empty() const noexcept -> bool;
    constexpr auto size() const noexcept -> size_type;

private:
    constexpr basic_schema(std::vector<component_meta_type, rebind_alloc_t<component_meta_type, allocator_type>> metas,
                           std::vector<std::uint32_t, rebind_alloc_t<std::uint32_t, allocator_type>> hashes) noexcept;

    std::vector<component_meta_type, rebind_alloc_t<component_meta_type, allocator_type>> _metas;
    std::vector<std::uint32_t, rebind_alloc_t<std::uint32_t, allocator_type>> _hashes;

    friend class basic_schema_builder<allocator_type>;
};

template<typename Allocator>
template<typename T>
constexpr auto basic_schema<Allocator>::index_of() const noexcept -> size_type
{
    const std::uint32_t hash = type_hash<T>();
    const auto it = std::ranges::lower_bound(_hashes, hash);
    return it != _hashes.end() && *it == hash ? static_cast<size_type>(std::distance(_hashes.begin(), it)) : npos;
}

template<typename Allocator>
template<typename T>
constexpr auto basic_schema<Allocator>::meta_of() const noexcept -> const component_meta_type&
{
    return meta_of(index_of<T>());
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::meta_of(size_type index) const noexcept -> const component_meta_type&
{
    ANT_ASSERT(index < _metas.size(), "Component index out of bounds");
    return _metas[index];
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::empty() const noexcept -> bool
{
    return _metas.empty();
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::size() const noexcept -> size_type
{
    return static_cast<size_type>(_metas.size());
}

template<typename Allocator>
constexpr basic_schema<Allocator>::basic_schema(std::vector<component_meta_type, rebind_alloc_t<component_meta_type, allocator_type>> metas,
                                                std::vector<std::uint32_t, rebind_alloc_t<std::uint32_t, allocator_type>> hashes) noexcept
    : _metas(std::move(metas))
    , _hashes(std::move(hashes))
{
    ANT_ASSERT(std::is_sorted(_hashes.begin(), _hashes.end()), "Component hashes must be sorted");
}

} // namespace ant
