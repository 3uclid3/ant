#pragma once

#include <algorithm>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/detail/component_meta.hpp>

namespace ant {

class schema
{
public:
    using component_meta_type = detail::component_meta;
    using size_type = std::size_t;

public:
    static constexpr size_type npos = std::numeric_limits<size_type>::max();

    schema() = delete;

    schema(const schema&) = delete;
    schema& operator=(const schema&) = delete;

    schema(schema&&) noexcept = default;
    schema& operator=(schema&&) noexcept = default;

    template<typename T>
    constexpr auto index_of() const noexcept -> size_type;

    template<typename T>
    constexpr auto meta_of() const noexcept -> const component_meta_type&;
    constexpr auto meta_of(size_type index) const noexcept -> const component_meta_type&;

    constexpr auto empty() const noexcept -> bool;
    constexpr auto size() const noexcept -> size_type;

private:
    constexpr schema(std::vector<component_meta_type> metas, std::vector<std::uint32_t> hashes) noexcept;

    std::vector<component_meta_type> _metas;
    std::vector<std::uint32_t> _hashes;

    friend class schema_builder;
};

template<typename T>
constexpr auto schema::index_of() const noexcept -> size_type
{
    const std::uint32_t hash = type_hash<T>();
    const auto it = std::ranges::lower_bound(_hashes, hash);
    return it != _hashes.end() && *it == hash ? static_cast<size_type>(std::distance(_hashes.begin(), it)) : npos;
}

template<typename T>
constexpr auto schema::meta_of() const noexcept -> const component_meta_type&
{
    return meta_of(index_of<T>());
}

constexpr auto schema::meta_of(size_type index) const noexcept -> const component_meta_type&
{
    ANT_ASSERT(index < _metas.size(), "Component index out of bounds");
    return _metas[index];
}

constexpr auto schema::empty() const noexcept -> bool
{
    return _metas.empty();
}

constexpr auto schema::size() const noexcept -> size_type
{
    return static_cast<size_type>(_metas.size());
}

constexpr schema::schema(std::vector<component_meta_type> metas, std::vector<std::uint32_t> hashes) noexcept
    : _metas(std::move(metas))
    , _hashes(std::move(hashes))
{
    ANT_ASSERT(std::is_sorted(_hashes.begin(), _hashes.end()), "Component hashes must be sorted");
}

} // namespace ant
