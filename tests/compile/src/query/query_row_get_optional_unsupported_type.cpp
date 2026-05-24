#include <ant/query.hpp>

namespace ant { namespace {

struct component
{};

struct other_component
{};

[[maybe_unused]] auto func(query_of<other_component*>::row_type row) -> component*
{
    return row.get<component>();
}

}} // namespace ant
