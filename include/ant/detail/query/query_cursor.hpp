#pragma once

#include <span>

#include <ant/detail/catalog/table.hpp>
#include <ant/entity.hpp>

namespace ant { namespace detail {

class query_cursor
{
public:
    query_cursor() = default;
    query_cursor(const query_cursor&) = default;
    query_cursor& operator=(const query_cursor&) = default;
    query_cursor(query_cursor&&) = default;
    query_cursor& operator=(query_cursor&&) = default;

    explicit query_cursor(std::span<detail::table* const> tables) noexcept;
    query_cursor(std::span<detail::table* const> tables, std::size_t table_index, std::size_t row_index) noexcept;

    auto operator==(const query_cursor& other) const noexcept -> bool;
    auto operator!=(const query_cursor& other) const noexcept -> bool = default;

    auto advance() noexcept -> bool;

    auto is_valid() const noexcept -> bool;

    auto table() const noexcept -> const detail::table&;
    auto table() noexcept -> detail::table&;

    auto entity() const noexcept -> ant::entity;

    auto table_index() const noexcept -> std::size_t;
    auto row_index() const noexcept -> std::size_t;

private:
    std::span<detail::table* const> _tables;
    std::size_t _table_index{0};
    std::size_t _row_index{0};
};

}} // namespace ant::detail
