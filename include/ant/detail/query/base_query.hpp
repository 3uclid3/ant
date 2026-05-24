#pragma once

#include <cstdint>
#include <vector>

#include <ant/detail/catalog/table.hpp>
#include <ant/detail/schema.hpp>

namespace ant { namespace detail {

struct base_query
{
    const schema* _schema{nullptr};
    std::pmr::vector<table*> _tables;
    std::pmr::vector<std::uint32_t> _mapping; // tables * (signature_traits::required -> signature_traits::optional)
};

}} // namespace ant::detail
