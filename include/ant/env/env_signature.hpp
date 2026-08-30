#pragma once

namespace ant {

template<typename... Components>
class env_signature;

template<typename T>
inline constexpr bool is_env_signature_v = false;

template<typename... Changes>
inline constexpr bool is_env_signature_v<env_signature<Changes...>> = true;

} // namespace ant
