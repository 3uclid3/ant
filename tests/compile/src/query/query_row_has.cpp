#include <ant/query.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto has_readonly(query_of<const component*>::row_type row) -> bool
{
    return row.has<component>();
}

[[maybe_unused]] auto has(query_of<const component*>::row_type row) -> bool
{
    return row.has<component>();
}

}} // namespace ant
