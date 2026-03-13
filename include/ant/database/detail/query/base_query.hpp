#pragma once

#include <cstdint>
#include <vector>

#include <ant/database/detail/catalog/table.hpp>
#include <ant/database/schema.hpp>

namespace ant { namespace detail {

struct base_query
{
    const schema* _schema{nullptr};
    std::vector<table*> _tables;
    std::vector<std::uint32_t> _mapping; // tables * (signature_traits::required -> signature_traits::optional)
};

}} // namespace ant::detail