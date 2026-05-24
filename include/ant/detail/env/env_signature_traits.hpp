#pragma once

#include <ant/detail/signature_traits.hpp>
#include <ant/detail/type_list.hpp>
#include <ant/env_fwd.hpp>

namespace ant::detail {

template<typename Signature>
struct env_signature_traits;

template<typename... Components>
struct env_signature_traits<env_signature<Components...>>
{
    using required = type_list_filter_t<is_required, type_list<Components...>>;
    using optional = type_list_transform_t<std::remove_pointer, type_list_filter_t<is_optional, type_list<Components...>>>;

    template<typename T>
    static constexpr bool is_required_v = type_list_contains_v<T, required>;

    template<typename T>
    static constexpr bool is_optional_v = type_list_contains_v<T, optional>;
};

} // namespace ant::detail
