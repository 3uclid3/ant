#pragma once

#include <cstring>
#include <memory>
#include <vector>

#include <ant/database/detail/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/detail/table_index.hpp>

namespace ant::detail {

class table_column
{
public:
    explicit table_column(const component_meta& meta) noexcept;
    ~table_column();

    table_column(const table_column& other) = delete;
    auto operator=(const table_column& other) -> table_column& = delete;

    table_column(table_column&& other) noexcept = default;
    auto operator=(table_column&& other) noexcept -> table_column& = default;

    auto emplace_back() -> row_index;
    auto swap_and_pop(row_index idx) noexcept -> void;

    auto row(row_index idx) const noexcept -> const void*;
    auto row(row_index idx) noexcept -> void*;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    struct block_loc
    {
        std::size_t idx;
        std::size_t off;
    };

    auto to_loc(row_index idx) const noexcept -> block_loc;

    std::vector<std::unique_ptr<std::byte[]>> _blocks;
    std::size_t _size{0};

    const component_meta* _meta{nullptr};
};

} // namespace ant::detail
