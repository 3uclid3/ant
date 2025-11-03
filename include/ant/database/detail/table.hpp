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

    auto insert(entity e) -> std::size_t;
    auto erase(entity e) -> void;

    auto signature() const noexcept -> const table_signature&;
    auto columns() const noexcept -> std::span<const table_column>;
    auto rows() const noexcept -> std::span<const entity>;

private:
    table_signature _signature;
    std::vector<table_column> _columns;
    std::vector<entity> _rows;
};

} // namespace ant::detail
