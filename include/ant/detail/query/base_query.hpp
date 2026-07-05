#pragma once

#include <ant/detail/catalog/table.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_traits.hpp>
#include <ant/detail/schema/schema.hpp>

namespace ant { namespace detail {

struct base_query
{
    using mapping_type = entity_traits::index_type;

    static constexpr auto npos{entity_traits::index_npos};

    const schema* _schema{nullptr};
    vector<table*> _tables;
    vector<mapping_type> _mapping; // tables * (signature_traits::required -> signature_traits::optional)
};

}} // namespace ant::detail
