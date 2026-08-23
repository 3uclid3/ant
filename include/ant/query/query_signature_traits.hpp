#pragma once

#include <ant/detail/query/query_signature_traits.hpp>
#include <ant/detail/signature_traits.hpp>
#include <ant/meta/type_list.hpp>
#include <ant/query/fwd.hpp>
#include <ant/schema.hpp>

namespace ant {

template<typename Signature>
struct query_signature_traits;

template<typename... Parameters>
struct query_signature_traits<query_signature<Parameters...>>
{
    using flatten = type_list_fold_concat_t<detail::query_signature_explode_t<Parameters>...>;

    using required = type_list_filter_t<detail::is_required, flatten>;
    using optional = type_list_transform_t<std::remove_pointer, type_list_filter_t<detail::is_optional, flatten>>;
    using excluded = type_list_transform_t<detail::remove_exclude, type_list_filter_t<detail::is_excluded, flatten>>;
    using included = type_list_concat_t<required, optional>;

    using read = type_list_transform_t<std::remove_const, type_list_filter_t<detail::is_read, type_list_concat_t<required, optional>>>;
    using write = type_list_filter_t<detail::is_write, type_list_concat_t<required, optional>>;

    template<typename T>
    static constexpr bool is_required = type_list_contains_v<T, required>;

    template<typename T>
    static constexpr bool is_optional = type_list_contains_v<T, optional>;

    template<typename T>
    static constexpr bool is_excluded = type_list_contains_v<T, excluded>;

    template<typename T>
    static constexpr std::size_t index_of = type_list_index_of_v<T, type_list_transform_t<std::remove_const, included>>;
    static constexpr std::size_t size = type_list_size_v<included>;

    static_assert(std::is_same_v<flatten, type_list_unique_t<flatten>>, "query_signature_traits: duplicate parameter(s) in signature");
    static_assert(std::is_same_v<type_list_transform_t<std::remove_const, included>,
                                 type_list_unique_t<type_list_transform_t<std::remove_const, included>>>,
                  "query_signature_traits: duplicate type(s) with different access type in signature");
};

} // namespace ant
