#include <ant/database/query.hpp>

namespace ant { namespace {

struct component
{};

struct other_component
{};

[[maybe_unused]] auto func(query_of<const component>::row_type row) -> void
{
    [[maybe_unused]] const other_component& v = row.get<other_component>();
}

}} // namespace ant
