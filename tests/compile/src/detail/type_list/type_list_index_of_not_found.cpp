#include <ant/detail/type_list.hpp>

namespace ant::detail { namespace {

static_assert(type_list_index_of_v<short, type_list<int, float, double>> == 0);

}} // namespace ant::detail
