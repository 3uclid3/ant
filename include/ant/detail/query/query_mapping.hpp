#pragma once

#include <span>

#include <ant/detail/catalog/catalog.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_traits.hpp>
#include <ant/detail/query/query_signature_traits.hpp>
#include <ant/detail/schema/component_bitset.hpp>

namespace ant::detail {

using query_mapping = vector<entity_traits::index_type>;
using query_mapping_view = std::span<const query_mapping::value_type>;

static inline constexpr query_mapping::value_type query_mapping_npos{entity_traits::index_npos};

} // namespace ant::detail
