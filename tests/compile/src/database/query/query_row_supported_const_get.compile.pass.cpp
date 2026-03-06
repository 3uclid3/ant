#include <ant/database/query.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto func(query_of<const component>::row_type row) -> void
{
    [[maybe_unused]] const component& v = row.get<component>();
}

}} // namespace ant
