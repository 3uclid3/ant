#pragma once

#include <ant/signature/query_signature.hpp>

namespace ant {

template<typename Signature>
class compiled_query;

template<typename Signature>
class query;

template<typename Signature>
class query_row;

template<typename... Parameters>
using compiled_query_of = compiled_query<query_signature<Parameters...>>;

template<typename... Parameters>
using query_of = query<query_signature<Parameters...>>;

template<typename... Parameters>
using query_row_of = query_row<query_signature<Parameters...>>;

} // namespace ant
