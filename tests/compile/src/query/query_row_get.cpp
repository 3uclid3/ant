#include <ant/query.hpp>

namespace ant { namespace {

struct component
{};

[[maybe_unused]] auto get_readonly(query_of<const component>::row_type row) -> const component&
{
    return row.get<component>();
}

[[maybe_unused]] auto get_read(query_of<component>::row_type row) -> const component&
{
    return std::as_const(row).get<component>();
}

[[maybe_unused]] auto get(query_of<component>::row_type row) -> component&
{
    return row.get<component>();
}

[[maybe_unused]] auto get_optional_readonly(query_of<const component*>::row_type row) -> const component*
{
    return row.get<component>();
}

[[maybe_unused]] auto get_optional_read(query_of<component*>::row_type row) -> const component*
{
    return std::as_const(row).get<component>();
}

[[maybe_unused]] auto get_optional(query_of<component*>::row_type row) -> component*
{
    return row.get<component>();
}

}} // namespace ant
