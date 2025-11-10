#pragma once

#include <memory_resource>
#include <span>
#include <vector>

#include <ant/core/dynamic_bitset.hpp>
#include <ant/database/detail/entity_traits.hpp>
#include <ant/database/detail/table_column.hpp>
#include <ant/database/entity.hpp>

namespace ant {
class schema;
} // namespace ant

namespace ant::detail {

class table
{
public:
    static constexpr auto npos = entity_traits::index_npos;

    table() noexcept = default;
    table(dynamic_bitset components, const schema& schema, std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource());

    table(const table&) = delete;
    table& operator=(const table&) = delete;

    table(table&&) noexcept = default;
    table& operator=(table&&) noexcept = default;

    auto contains(entity e) const noexcept -> bool;
    auto insert(entity e) -> std::size_t;
    auto splice(entity e, table& source) -> std::size_t;
    auto erase(entity e) -> bool;

    template<typename T>
    auto column_of() const noexcept -> std::size_t;
    auto column_of(std::uint32_t hash) const noexcept -> std::size_t;

    auto row_of(entity e) const noexcept -> std::size_t;

    template<typename T>
    auto at(std::size_t column_index, std::size_t row_index) const noexcept -> const T&;

    template<typename T>
    auto at(std::size_t column_index, std::size_t row_index) noexcept -> T&;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

    auto components() const noexcept -> const dynamic_bitset&;
    auto entities() const noexcept -> std::span<const entity>;

private:
    auto erase_impl(entity e, bool erase_columns = true) -> bool;

    auto ensure_sparse_capacity(std::size_t capacity) -> void;

    dynamic_bitset _components;
    std::pmr::vector<table_column> _columns;
    std::pmr::vector<entity> _rows;
    std::pmr::vector<entity_traits::index_type> _sparse;
};

template<typename T>
auto table::column_of() const noexcept -> std::size_t
{
    return column_of(type_hash<T>::value());
}

template<typename T>
auto table::at(std::size_t column_index, std::size_t row_index) const noexcept -> const T&
{
    ANT_ASSERT(column_index < _columns.size());
    ANT_ASSERT(row_index < _rows.size());
    return _columns[column_index].at<T>(row_index);
}

template<typename T>
auto table::at(std::size_t column_index, std::size_t row_index) noexcept -> T&
{
    return const_cast<T&>(std::as_const(*this).at<T>(column_index, row_index));
}

inline auto table::empty() const noexcept -> bool
{
    return size() == 0;
}

inline auto table::size() const noexcept -> std::size_t
{
    return _rows.size();
}

inline auto table::components() const noexcept -> const dynamic_bitset&
{
    return _components;
}

inline auto table::entities() const noexcept -> std::span<const entity>
{
    return _rows;
}

} // namespace ant::detail
