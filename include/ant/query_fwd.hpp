#pragma once

namespace ant {

inline namespace decorator {

template<typename... Types>
struct exclude
{};

} // namespace decorator

template<typename... Parameters>
class query_signature;

template<typename Signature>
class compiled_query;

template<typename Signature>
class query;

template<typename Signature>
class query_row;

template<typename... Parameters>
using query_of = query<query_signature<Parameters...>>;

template<typename... Parameters>
using query_row_of = query_row<query_signature<Parameters...>>;

} // namespace ant
