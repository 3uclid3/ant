#pragma once

#include <algorithm>
#include <span>
#include <utility>

#include <ant/database/detail/table_column.hpp>
#include <ant/database/detail/table_signature.hpp>
#include <ant/database/entity.hpp>

namespace ant::detail {

class table
{
public:
    table() noexcept = default;
    table(table_signature signature, std::vector<table_column>&& columns) noexcept;

    auto add_row(entity e) -> row_index;
    auto remove_row(entity e) -> void;
    auto remove_row(row_index index) -> void;

    auto signature() const noexcept -> const table_signature&;
    auto columns() const noexcept -> std::span<const table_column>;
    auto rows() const noexcept -> std::span<const entity>;

private:
    table_signature _signature;
    std::vector<table_column> _columns;
    std::vector<entity> _rows;
};

} // namespace ant::detail
