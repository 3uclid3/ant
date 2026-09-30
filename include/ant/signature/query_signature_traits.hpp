#pragma once

#include <ant/detail/type_traits/query_signature_traits.hpp>
#include <ant/detail/type_traits/signature_traits.hpp>
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
    using joined = type_list_filter_t<detail::is_join, flattened>;
    using excluded = type_list_transform_t<detail::remove_exclude, type_list_filter_t<detail::is_excluded, flattened>>;

    using flatten_joined = detail::flatten_joined_t<joined>;

    template<typename Rel, typename Role>
    using joined_of = detail::join_of<joined, Rel, Role>;

    template<typename Rel, typename Role>
    using joined_signature_of = detail::join_signature_of<joined, Rel, Role>;

    // Zero-based index in flatten_joined, or type_list_npos_v if absent locally.
    template<typename Rel, typename Role>
    static constexpr std::size_t joined_index_of = detail::join_index_of_v<joined, Rel, Role>;

    template<typename T>
    static constexpr bool is_required = type_list_contains_v<T, required>;

    template<typename T>
    static constexpr bool is_optional = type_list_contains_v<T, optional>;

    template<typename Rel, typename Role>
    static constexpr bool is_joined = type_list_contains_v<type_list<Rel, Role>, type_list_transform_t<detail::remove_joined_parameters, joined>>;

    template<typename T>
    static constexpr bool is_excluded = type_list_contains_v<T, excluded>;

    static_assert(std::is_same_v<flattened, type_list_unique_t<flattened>>,
                  "query_signature_traits: duplicate parameter(s) in signature");
    static_assert(detail::has_unique_component_types_v<required, optional>,
                  "query_signature_traits: duplicate type(s) with different access type in signature");
    static_assert(detail::has_unique_joined_rels_v<joined>,
                  "query_signature_traits: duplicate rel+role pair with different parameters in signature");
};

} // namespace ant
