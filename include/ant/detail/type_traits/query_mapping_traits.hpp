#pragma once

#include <ant/signature/query_signature_traits.hpp>

namespace ant::detail {

template<typename Signature>
struct query_mapping_traits
{
    using ordered = type_list_concat_t<typename query_signature_traits<Signature>::required, typename query_signature_traits<Signature>::optional>;

    template<typename T>
    static constexpr std::size_t index_of = type_list_index_of_v<T, type_list_transform_t<std::remove_const, ordered>>;
    static constexpr std::size_t size = type_list_size_v<ordered>;
};

} // namespace ant::detail
