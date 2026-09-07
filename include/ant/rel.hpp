#pragma once

namespace ant {

enum class cardinality
{
    one,
    many
};

template<typename Role>
struct one
{
};

template<typename Role>
struct many
{
};

template<typename First, typename Second>
struct rel
{
};

} // namespace ant
