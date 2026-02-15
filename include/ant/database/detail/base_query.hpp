#pragma once

#include <cstdint>
#include <vector>

#include <ant/database/detail/table.hpp>
#include <ant/database/schema.hpp>

namespace ant { namespace detail {

struct base_query
{
    // auto column_of(std::size_t table_index, std::size_t type_index) const noexcept -> std::size_t;

    const schema* _schema{nullptr};
    std::vector<table*> _tables;
    std::vector<std::uint32_t> _mapping; // tables * (signature_traits::required -> signature_traits::optional)
};

// inline auto base_query::column_of(std::size_t table_index, std::size_t type_index) const noexcept -> std::size_t
//{
//     return _mapping[(_tables.size() * table_index) + type_index];
// }

}} // namespace ant::detail