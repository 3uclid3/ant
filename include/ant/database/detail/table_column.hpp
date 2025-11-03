#pragma once

#include <cstring>
#include <memory>
#include <vector>

#include <ant/database/detail/component_meta.hpp>

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

    auto emplace_back() -> std::size_t;
    auto swap_and_pop(std::size_t index) noexcept -> void;

    auto row(std::size_t index) const noexcept -> const void*;
    auto row(std::size_t index) noexcept -> void*;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    std::vector<std::unique_ptr<std::byte[]>> _blocks;
    std::size_t _size{0};

    const component_meta* _meta{nullptr};
};

} // namespace ant::detail
