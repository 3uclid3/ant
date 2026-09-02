#include <ant/meta/type_list.hpp>

namespace ant {
namespace {

using result = type_list_drop_t<4, type_list<int, float, double>>;

}} // namespace ant
