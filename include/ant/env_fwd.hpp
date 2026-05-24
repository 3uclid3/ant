#pragma once

namespace ant {

template<typename... Components>
class env_signature;

template<typename Signature>
class env;

template<typename... Components>
using env_of = env<env_signature<Components...>>;

} // namespace ant
