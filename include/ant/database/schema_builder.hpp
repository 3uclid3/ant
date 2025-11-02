#pragma once

#include <algorithm>
#include <string_view>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/core/memory.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/detail/component_vtable.hpp>
#include <ant/database/schema.hpp>

namespace ant {

template<typename Allocator>
class basic_schema_builder
{
public:
    using allocator_type = Allocator;

    using component_meta_type = detail::component_meta;

public:
    constexpr basic_schema_builder() noexcept = default;
    constexpr explicit basic_schema_builder(const allocator_type& alloc) noexcept;

    constexpr basic_schema_builder(basic_schema_builder&&) noexcept = default;
    constexpr basic_schema_builder(const basic_schema_builder&) = delete;

    constexpr auto operator=(basic_schema_builder&&) noexcept -> basic_schema_builder& = default;
    constexpr auto operator=(const basic_schema_builder&) -> basic_schema_builder& = delete;

    template<typename T>
    constexpr auto define(std::string_view name, std::uint16_t version = 0) -> basic_schema_builder&;

    constexpr auto build() noexcept -> basic_schema<Allocator>;

private:
    allocator_type _allocator;
    std::vector<component_meta_type, rebind_alloc_t<component_meta_type, allocator_type>> _metas;
};

template<typename Allocator>
constexpr basic_schema_builder<Allocator>::basic_schema_builder(const allocator_type& alloc) noexcept
    : _allocator(alloc)
    , _metas(rebind_alloc(_allocator))
{
}

template<typename Allocator>
template<typename T>
constexpr auto basic_schema_builder<Allocator>::define(std::string_view name, detail::component_version version) -> basic_schema_builder&
{
    ANT_ASSERT(std::ranges::none_of(_metas, [&](const auto& m) { return m.hash == type_hash<T>::value(); }), "Component type has already been defined in schema");

    _metas.emplace_back(detail::make_meta<T>(name, version));

    return *this;
}

template<typename Allocator>
constexpr auto basic_schema_builder<Allocator>::build() noexcept -> basic_schema<Allocator>
{
    std::ranges::sort(_metas, [](const auto& lhs, const auto& rhs) { return lhs.hash < rhs.hash; });

    std::vector<std::uint32_t, rebind_alloc_t<std::uint32_t, allocator_type>> hashes{rebind_alloc(_allocator)};
    hashes.reserve(_metas.size());

    for (std::size_t i = 0; i < _metas.size(); ++i)
    {
        auto& meta = _metas[i];
        meta.index = detail::component_index::cast(i);

        hashes.emplace_back(meta.hash);
    }

    return basic_schema<Allocator>(std::move(_metas), std::move(hashes));
}

} // namespace ant
