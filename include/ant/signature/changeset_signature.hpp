#pragma once

namespace ant {

struct create
{};

struct destroy
{};

template<typename... Types>
struct attach
{};

template<typename... Types>
struct detach
{};

template<typename... Types>
struct set_env
{};

template<typename... Types>
struct unset_env
{};

template<typename... Changes>
class changeset_signature;

template<typename T>
inline constexpr bool is_changeset_signature_v = false;

template<typename... Changes>
inline constexpr bool is_changeset_signature_v<changeset_signature<Changes...>> = true;

} // namespace ant
