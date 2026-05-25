#pragma once

#include <ant/detail/signature_traits.hpp>
#include <ant/detail/type_list.hpp>
#include <ant/env_fwd.hpp>

namespace ant::detail {

template<typename Signature>
struct env_signature_traits;

template<typename... Parameters>
struct env_signature_traits<env_signature<Parameters...>>
{
    using flatten = type_list<Parameters...>;

    using required = type_list_filter_t<is_required, flatten>;
    using optional = type_list_transform_t<std::remove_pointer, type_list_filter_t<is_optional, flatten>>;

    template<typename T>
    static constexpr bool is_required = type_list_contains_v<T, required>;

    template<typename T>
    static constexpr bool is_optional = type_list_contains_v<T, optional>;

    static constexpr std::size_t size = type_list_size_v<flatten>;

    static_assert(std::is_same_v<flatten, type_list_unique_t<flatten>>, "env_signature_traits: duplicate parameter(s) in signature");
    static_assert(std::is_same_v<type_list_transform_t<std::remove_const, type_list_concat_t<required, optional>>,
                                 type_list_unique_t<type_list_transform_t<std::remove_const, type_list_concat_t<required, optional>>>>,
                  "env_signature_traits: duplicate type(s) with different access type in signature");
};

} // namespace ant::detail
