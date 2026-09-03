#pragma once

#include <ant/signature/env_signature.hpp>

namespace ant {

template<typename Signature>
class env;

template<typename... Components>
using env_of = env<env_signature<Components...>>;

} // namespace ant
