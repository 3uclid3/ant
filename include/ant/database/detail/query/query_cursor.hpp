#pragma once

#include <ant/database/detail/query/base_query.hpp>
#include <ant/database/entity.hpp>
#include <ant/database/query_fwd.hpp>

namespace ant { namespace detail {

struct query_cursor
{
    auto operator==(const query_cursor& other) const noexcept -> bool = default;
    auto operator!=(const query_cursor& other) const noexcept -> bool = default;

    auto advance() -> bool;

    auto is_valid() const noexcept -> bool;

    auto table() const noexcept -> const detail::table&;
    auto table() noexcept -> detail::table&;

    auto entity() const noexcept -> ant::entity;

    base_query* query{nullptr};
    std::size_t table_index{0};
    std::size_t row_index{0};
};

}} // namespace ant::detail