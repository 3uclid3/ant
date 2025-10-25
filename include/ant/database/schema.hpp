#pragma once

#include <algorithm>
#include <memory>
#include <numeric>
#include <string_view>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>

namespace ant {

template<typename Allocator>
class basic_schema
{
public:
    using meta_type = detail::component_meta;
    using id_type = detail::component_id;
    using version_type = detail::component_version;

    using ids_type = std::vector<id_type, typename std::allocator_traits<Allocator>::template rebind_alloc<id_type>>;
    using metas_type = std::vector<meta_type, typename std::allocator_traits<Allocator>::template rebind_alloc<meta_type>>;

    using size_type = std::underlying_type_t<component_index>;

    using const_iterator = typename metas_type::const_iterator;
    using const_reverse_iterator = typename metas_type::const_reverse_iterator;

    using iterator = const_iterator;
    using reverse_iterator = const_reverse_iterator;

public:
    template<typename T>
    static constexpr auto id_of() noexcept -> id_type;

    constexpr basic_schema(ids_type ids, metas_type metas) noexcept;

    template<typename T>
    constexpr auto contains() const noexcept -> bool;

    template<typename T>
    constexpr auto index_of() const noexcept -> component_index;

    template<typename T>
    constexpr auto meta_of() const noexcept -> const meta_type&;
    constexpr auto meta_of(component_index idx) const noexcept -> const meta_type&;

    constexpr auto empty() const noexcept -> bool;
    constexpr auto size() const noexcept -> size_type;

    constexpr auto begin() const noexcept -> const_iterator;
    constexpr auto end() const noexcept -> const_iterator;

    constexpr auto rbegin() const noexcept -> const_reverse_iterator;
    constexpr auto rend() const noexcept -> const_reverse_iterator;

private:
    ids_type _ids;
    metas_type _metas;
};

template<typename Allocator>
class basic_schema_builder
{
public:
    using allocator_type = Allocator;

    using schema_type = basic_schema<allocator_type>;

    using meta_type = schema_type::meta_type;
    using id_type = schema_type::id_type;
    using version_type = schema_type::version_type;

    using metas_type = typename schema_type::metas_type;
    using ids_type = typename schema_type::ids_type;

public:
    constexpr explicit basic_schema_builder(const allocator_type& alloc = allocator_type{}) noexcept;

    constexpr basic_schema_builder(basic_schema_builder&&) noexcept = default;
    constexpr auto operator=(basic_schema_builder&&) noexcept -> basic_schema_builder& = default;

    constexpr basic_schema_builder(const basic_schema_builder&) = delete;
    constexpr auto operator=(const basic_schema_builder&) -> basic_schema_builder& = delete;

    template<typename T>
    constexpr auto define(std::string_view name, version_type version = 0) -> basic_schema_builder&;

    constexpr auto build() noexcept -> schema_type;

private:
    allocator_type _allocator;
    metas_type _metas;
};
template<typename Allocator>
template<typename T>
constexpr auto basic_schema<Allocator>::id_of() noexcept -> id_type
{
    return static_cast<id_type>(type_hash<T>::value());
}

template<typename Allocator>
constexpr basic_schema<Allocator>::basic_schema(ids_type ids, metas_type metas) noexcept
    : _ids(std::move(ids))
    , _metas(std::move(metas))
{
}

template<typename Allocator>
template<typename T>
constexpr auto basic_schema<Allocator>::contains() const noexcept -> bool
{
    return index_of<T>() != component_index::npos;
}

template<typename Allocator>
template<typename T>
constexpr auto basic_schema<Allocator>::index_of() const noexcept -> component_index
{
    const id_type id = id_of<T>();

    auto it = std::ranges::lower_bound(_ids, id);

    return it != _ids.end() && *it == id ? static_cast<component_index>(std::distance(_ids.begin(), it)) : component_index::npos;
}

template<typename Allocator>
template<typename T>
constexpr auto basic_schema<Allocator>::meta_of() const noexcept -> const meta_type&
{
    return meta_of(index_of<T>());
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::meta_of(component_index idx) const noexcept -> const meta_type&
{
    const std::size_t raw_index = static_cast<std::size_t>(idx);
    ANT_ASSERT(raw_index < _metas.size(), "Component index out of bounds");
    return _metas[raw_index];
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
constexpr auto basic_schema<Allocator>::begin() const noexcept -> const_iterator
{
    return _metas.cbegin();
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::end() const noexcept -> const_iterator
{
    return _metas.cend();
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::rbegin() const noexcept -> const_reverse_iterator
{
    return _metas.crbegin();
}

template<typename Allocator>
constexpr auto basic_schema<Allocator>::rend() const noexcept -> const_reverse_iterator
{
    return _metas.crend();
}

template<typename Allocator>
constexpr basic_schema_builder<Allocator>::basic_schema_builder(const allocator_type& alloc) noexcept
    : _allocator(alloc)
    , _metas(typename metas_type::allocator_type{_allocator})
{
}

template<typename Allocator>
template<typename T>
constexpr auto basic_schema_builder<Allocator>::define(std::string_view name, version_type version) -> basic_schema_builder&
{
    ANT_ASSERT(std::ranges::none_of(_metas, [&](const auto& m) { return m.id == schema_type::template id_of<T>(); }), "Component type has already been defined in schema");

    _metas.emplace_back(detail::component_meta::make<T>(name, version));

    return *this;
}

template<typename Allocator>
constexpr auto basic_schema_builder<Allocator>::build() noexcept -> schema_type
{
    std::ranges::sort(_metas, [](const auto& lhs, const auto& rhs) { return lhs.id < rhs.id; });

    ids_type ids(typename ids_type::allocator_type{_allocator});
    ids.reserve(_metas.size());

    for (const auto& meta : _metas)
    {
        ids.emplace_back(meta.id);
    }

    return schema_type(std::move(ids), std::move(_metas));
}

} // namespace ant
