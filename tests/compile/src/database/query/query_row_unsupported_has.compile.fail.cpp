#include <ant/database/query.hpp>

namespace ant { namespace {

struct component
{};

struct other_component
{};

[[maybe_unused]] auto func(query_of<component*>::row_type row) -> void
{
    [[maybe_unused]] bool v = row.has<other_component>();
}

}} // namespace ant
