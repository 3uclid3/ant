#include <ant/query.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto func(query_of<component>::row_type row) -> component*
{
    return row.get<component>();
}

}} // namespace ant
