#pragma once

#include <ant/core/type_list.hpp>
#include <ant/database/detail/signature_traits.hpp>
#include <ant/database/env_fwd.hpp>

namespace ant::detail {

template<typename Signature>
struct env_signature_traits;

template<typename... Components>
struct env_signature_traits<env_signature<Components...>>
{
    using raw = type_list<Components...>;

    using flatten = raw;
    using required = type_list_filter_t<is_required, flatten>;
    using optional = type_list_filter_t<is_optional, flatten>;

    template<typename T>
    static constexpr bool contains_v = type_list_contains_v<T, flatten>;
};

} // namespace ant::detail
