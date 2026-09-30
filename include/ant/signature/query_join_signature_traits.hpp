#pragma once

#include <ant/signature/query_signature_traits.hpp>

namespace ant {

template<typename Signature>
struct query_join_signature_traits;

template<typename Rel, typename Role, typename... Parameters>
struct query_join_signature_traits<join<Rel, Role, Parameters...>> : query_signature_traits<query_signature<Parameters...>>
{
    using rel = Rel;
    using role = Role;
    using signature = query_signature<Parameters...>;
};

} // namespace ant
