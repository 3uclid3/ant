#pragma once

#include <ant/detail/type_traits/query_signature_traits.hpp>
#include <ant/detail/type_traits/signature_traits.hpp>
#include <ant/query_fwd.hpp>
#include <ant/schema.hpp>
#include <ant/type_list.hpp>

namespace ant {

template<typename Signature>
struct query_signature_traits;

template<typename... Parameters>
struct query_signature_traits<query_signature<Parameters...>>
{
    using flattened = type_list_fold_concat_t<detail::query_signature_explode_t<Parameters>...>;

    using required = type_list_filter_t<detail::is_required, flattened>;
    using optional = type_list_transform_t<std::remove_pointer, type_list_filter_t<detail::is_optional, flattened>>;
    using excluded = type_list_transform_t<detail::remove_exclude, type_list_filter_t<detail::is_excluded, flattened>>;

    template<typename T>
    static constexpr bool is_required = type_list_contains_v<T, required>;

    template<typename T>
    static constexpr bool is_optional = type_list_contains_v<T, optional>;

    template<typename T>
    static constexpr bool is_excluded = type_list_contains_v<T, excluded>;

    static_assert(std::is_same_v<flattened, type_list_unique_t<flattened>>,
                  "query_signature_traits: duplicate parameter(s) in signature");
    static_assert(std::is_same_v<type_list_transform_t<std::remove_const, type_list_concat_t<required, optional>>,
                                 type_list_unique_t<type_list_transform_t<std::remove_const, type_list_concat_t<required, optional>>>>,
                  "query_signature_traits: duplicate type(s) with different access type in signature");
};

} // namespace ant
