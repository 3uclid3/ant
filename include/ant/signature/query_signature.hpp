#pragma once

namespace ant {

template<typename... Types>
struct exclude
{};

template<typename... Parameters>
class query_signature;

template<typename T>
inline constexpr bool is_query_signature_v = false;

template<typename... Changes>
inline constexpr bool is_query_signature_v<query_signature<Changes...>> = true;

} // namespace ant
