#pragma once

#include <ant/changeset/changeset_signature.hpp>

namespace ant {

template<typename Signature>
class changeset;

template<typename... Changes>
using changeset_of = changeset<changeset_signature<Changes...>>;

} // namespace ant
