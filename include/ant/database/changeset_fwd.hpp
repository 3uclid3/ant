#pragma once

namespace ant {

inline namespace decorator {
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
} // namespace decorator

template<typename... Changes>
class changeset_signature;

template<typename Signature>
class changeset;

template<typename... Changes>
using changeset_of = changeset<changeset_signature<Changes...>>;

} // namespace ant
