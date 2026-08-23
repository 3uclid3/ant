#pragma once

#include <span>

#include <ant/detail/containers.hpp>
#include <ant/detail/entity/entity_traits.hpp>

namespace ant::detail {

using query_mapping = vector<entity_traits::index_type>;
using query_mapping_view = std::span<const query_mapping::value_type>;

static inline constexpr query_mapping::value_type query_mapping_npos{entity_traits::index_npos};

} // namespace ant::detail
