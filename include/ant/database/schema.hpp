#pragma once

#include <algorithm>
#include <string_view>

#include <ant/core/assert.hpp>
#include <ant/core/container.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>

namespace ant {

template<typename Database>
class basic_schema
{
public:
    using allocator_type = typename Database::allocator_type;

    using component_meta_type = detail::component_meta;
    using component_id_type = detail::component_id;

    using component_metas_type = vector<component_meta_type, allocator_type>;
    using component_ids_type = vector<component_id_type, allocator_type>;

    using size_type = component_index::value_type;

    using const_iterator = typename component_metas_type::const_iterator;
    using const_reverse_iterator = typename component_metas_type::const_reverse_iterator;

    using iterator = const_iterator;
    using reverse_iterator = const_reverse_iterator;

public:
    template<typename T>
    static constexpr auto id_of() noexcept -> component_id_type;

    constexpr basic_schema(component_metas_type metas, component_ids_type ids) noexcept;

    template<typename T>
    constexpr auto contains() const noexcept -> bool;

    template<typename T>
    constexpr auto index_of() const noexcept -> component_index;

    template<typename T>
    constexpr auto meta_of() const noexcept -> const component_meta_type&;
    constexpr auto meta_of(component_index index) const noexcept -> const component_meta_type&;

    constexpr auto empty() const noexcept -> bool;
    constexpr auto size() const noexcept -> size_type;

    constexpr auto begin() const noexcept -> const_iterator;
    constexpr auto end() const noexcept -> const_iterator;

    constexpr auto rbegin() const noexcept -> const_reverse_iterator;
    constexpr auto rend() const noexcept -> const_reverse_iterator;

private:
    component_metas_type _metas;
    component_ids_type _ids;
};

template<typename Database>
class basic_schema_builder
{
public:
    using allocator_type = Database::allocator_type;

    using component_meta_type = detail::component_meta;
    using component_id_type = detail::component_id;

    using component_metas_type = vector<component_meta_type, allocator_type>;
    using component_ids_type = vector<component_id_type, allocator_type>;

    using component_version_type = detail::component_version;

public:
    constexpr explicit basic_schema_builder(const allocator_type& alloc = allocator_type{}) noexcept;

    constexpr basic_schema_builder(basic_schema_builder&&) noexcept = default;
    constexpr auto operator=(basic_schema_builder&&) noexcept -> basic_schema_builder& = default;

    constexpr basic_schema_builder(const basic_schema_builder&) = delete;
    constexpr auto operator=(const basic_schema_builder&) -> basic_schema_builder& = delete;

    template<typename T>
    constexpr auto define(std::string_view name, component_version_type version = 0) -> basic_schema_builder&;

    constexpr auto build() noexcept -> basic_schema<Database>;

private:
    allocator_type _allocator;
    component_metas_type _metas;
};

template<typename Database>
template<typename T>
constexpr auto basic_schema<Database>::id_of() noexcept -> component_id_type
{
    return static_cast<component_id_type>(type_hash<T>::value());
}

template<typename Database>
constexpr basic_schema<Database>::basic_schema(component_metas_type metas, component_ids_type ids) noexcept
    : _metas(std::move(metas))
    , _ids(std::move(ids))
{
}

template<typename Database>
template<typename T>
constexpr auto basic_schema<Database>::contains() const noexcept -> bool
{
    return index_of<T>() != component_index::npos();
}

template<typename Database>
template<typename T>
constexpr auto basic_schema<Database>::index_of() const noexcept -> component_index
{
    const component_id_type id = id_of<T>();

    auto it = std::ranges::lower_bound(_ids, id);

    return it != _ids.end() && *it == id ? component_index::cast(std::distance(_ids.begin(), it)) : component_index::npos();
}

template<typename Database>
template<typename T>
constexpr auto basic_schema<Database>::meta_of() const noexcept -> const component_meta_type&
{
    return meta_of(index_of<T>());
}

template<typename Database>
constexpr auto basic_schema<Database>::meta_of(component_index index) const noexcept -> const component_meta_type&
{
    const auto raw_index = static_cast<component_metas_type::size_type>(index);
    ANT_ASSERT(raw_index < _metas.size(), "Component index out of bounds");
    return _metas[raw_index];
}

template<typename Database>
constexpr auto basic_schema<Database>::empty() const noexcept -> bool
{
    return _metas.empty();
}

template<typename Database>
constexpr auto basic_schema<Database>::size() const noexcept -> size_type
{
    return static_cast<size_type>(_metas.size());
}

template<typename Database>
constexpr auto basic_schema<Database>::begin() const noexcept -> const_iterator
{
    return _metas.cbegin();
}

template<typename Database>
constexpr auto basic_schema<Database>::end() const noexcept -> const_iterator
{
    return _metas.cend();
}

template<typename Database>
constexpr auto basic_schema<Database>::rbegin() const noexcept -> const_reverse_iterator
{
    return _metas.crbegin();
}

template<typename Database>
constexpr auto basic_schema<Database>::rend() const noexcept -> const_reverse_iterator
{
    return _metas.crend();
}

template<typename Database>
constexpr basic_schema_builder<Database>::basic_schema_builder(const allocator_type& alloc) noexcept
    : _allocator(alloc)
    , _metas(rebind_alloc(_allocator))
{
}

template<typename Database>
template<typename T>
constexpr auto basic_schema_builder<Database>::define(std::string_view name, component_version_type version) -> basic_schema_builder&
{
    ANT_ASSERT(std::ranges::none_of(_metas, [&](const auto& m) { return m.id == basic_schema<Database>::template id_of<T>(); }), "Component type has already been defined in schema");

    _metas.emplace_back(detail::component_meta::make<T>(name, version));

    return *this;
}

template<typename Database>
constexpr auto basic_schema_builder<Database>::build() noexcept -> basic_schema<Database>
{
    std::ranges::sort(_metas, [](const auto& lhs, const auto& rhs) { return lhs.id < rhs.id; });

    component_ids_type ids{rebind_alloc(_allocator)};
    ids.reserve(_metas.size());

    // for (const auto& meta : _metas)
    for (std::size_t i = 0; i < _metas.size(); ++i)
    {
        auto& meta = _metas[i];
        meta.index = component_index::cast(i);

        ids.emplace_back(meta.id);
    }

    return basic_schema<Database>(std::move(_metas), std::move(ids));
}

} // namespace ant
