#pragma once

#include <algorithm>
#include <string_view>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/detail/component_vtable.hpp>
#include <ant/database/schema.hpp>

namespace ant {

class schema_builder
{
public:
    using component_meta_type = detail::component_meta;

public:
    constexpr schema_builder() noexcept = default;

    constexpr schema_builder(schema_builder&&) noexcept = default;
    constexpr schema_builder(const schema_builder&) = delete;

    constexpr auto operator=(schema_builder&&) noexcept -> schema_builder& = default;
    constexpr auto operator=(const schema_builder&) -> schema_builder& = delete;

    template<typename T>
    constexpr auto define(std::string_view name, std::uint16_t version = 0) -> schema_builder&;

    constexpr auto build() noexcept -> schema;

private:
    std::vector<component_meta_type> _metas;
};

template<typename T>
constexpr auto schema_builder::define(std::string_view name, std::uint16_t version) -> schema_builder&
{
    ANT_ASSERT(std::ranges::none_of(_metas, [hash = type_hash<T>::value()](const auto& m) { return m.hash == hash; }), "Component type has already been defined in schema");

    _metas.emplace_back(detail::make_meta<T>(name, version));

    return *this;
}

constexpr auto schema_builder::build() noexcept -> schema
{
    std::ranges::sort(_metas, [](const auto& lhs, const auto& rhs) { return lhs.hash < rhs.hash; });

    std::vector<std::uint32_t> hashes;
    hashes.reserve(_metas.size());

    for (std::size_t i = 0; i < _metas.size(); ++i)
    {
        auto& meta = _metas[i];
        meta.index = detail::component_index::cast(i);

        hashes.emplace_back(meta.hash);
    }

    return schema(std::move(_metas), std::move(hashes));
}

} // namespace ant
