#pragma once

#include <ant/detail/core/containers.hpp>
#include <ant/entity.hpp>
#include <ant/rel.hpp>
#include <ant/rel_traits.hpp>

namespace ant::detail {

template<typename Rel, typename Role>
struct rel_member;

template<typename Rel, typename Role>
requires(rel_traits<Rel>::template end<Role>::cardinality == cardinality::one)
struct rel_member<Rel, Role>
{
    entity related;
};

template<typename Rel, typename Role>
requires(rel_traits<Rel>::template end<Role>::cardinality == cardinality::many)
struct rel_member<Rel, Role>
{
    detail::vector<ant::entity> related;
};

} // namespace ant::detail
