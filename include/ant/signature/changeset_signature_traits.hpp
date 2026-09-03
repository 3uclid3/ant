#pragma once

#include <ant/changeset_fwd.hpp>
#include <ant/detail/type_traits/changeset_signature_traits.hpp>
#include <ant/type_list.hpp>

namespace ant {

template<typename Signature>
struct changeset_signature_traits;

template<typename... Parameters>
struct changeset_signature_traits<changeset_signature<Parameters...>>
{
    using flatten = type_list_fold_concat_t<detail::changeset_signature_explode_t<Parameters>...>;

    using attach = type_list_transform_t<detail::remove_attach, type_list_filter_t<detail::is_attach, flatten>>;
    using detach = type_list_transform_t<detail::remove_detach, type_list_filter_t<detail::is_detach, flatten>>;
    using set_env = type_list_transform_t<detail::remove_set_env, type_list_filter_t<detail::is_set_env, flatten>>;
    using unset_env = type_list_transform_t<detail::remove_unset_env, type_list_filter_t<detail::is_unset_env, flatten>>;

    static constexpr bool can_create = type_list_contains_v<create, flatten>;
    static constexpr bool can_destroy = type_list_contains_v<destroy, flatten>;

    template<typename T>
    static constexpr bool can_attach = type_list_contains_v<T, attach>;

    template<typename T>
    static constexpr bool can_detach = type_list_contains_v<T, detach>;

    template<typename T>
    static constexpr bool can_set_env = type_list_contains_v<T, set_env>;

    template<typename T>
    static constexpr bool can_unset_env = type_list_contains_v<T, unset_env>;

    static_assert(std::is_same_v<flatten, type_list_unique_t<flatten>>, "changeset_signature_traits: duplicate parameter(s) in signature");
};

} // namespace ant
