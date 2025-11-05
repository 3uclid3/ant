#pragma once

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
    table(dynamic_bitset components, const schema& schema);

    auto contains(entity e) const noexcept -> bool;
    auto insert(entity e) -> std::size_t;
    auto splice(entity e, table& source) -> std::size_t;
    auto erase(entity e) -> bool;

    auto columns() const noexcept -> std::span<const table_column>;
    auto rows() const noexcept -> std::span<const entity>;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    auto erase_impl(entity e, bool erase_columns = true) -> bool;

    auto ensure_sparse_capacity(std::size_t capacity) -> void;

    dynamic_bitset _components;
    std::vector<table_column> _columns;
    std::vector<entity> _rows;
    std::vector<entity_traits::index_type> _sparse;
};

inline auto table::columns() const noexcept -> std::span<const table_column>
{
    return _columns;
}

inline auto table::rows() const noexcept -> std::span<const entity>
{
    return _rows;
}

inline auto table::empty() const noexcept -> bool
{
    return size() == 0;
}

inline auto table::size() const noexcept -> std::size_t
{
    return _rows.size();
}

} // namespace ant::detail
