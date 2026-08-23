#pragma once

namespace ant {

inline namespace decorator {

template<typename... Types>
struct exclude
{};

} // namespace decorator

template<typename... Parameters>
class query_signature;

} // namespace ant
