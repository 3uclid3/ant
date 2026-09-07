#pragma once

#include <type_traits>

#include <ant/detail/type_traits/rel_traits_impl.hpp>
#include <ant/rel.hpp>

namespace ant {

template<typename Rel>
struct rel_traits : rel_traits<detail::rel_base_of_t<Rel>>
{};

template<typename First, typename Second>
struct rel_traits<rel<First, Second>>
{
    using base = rel<First, Second>;

    struct first
    {
        using role = detail::role_of_t<First>;

        static constexpr ant::cardinality cardinality = detail::role_cardinality_of_v<First>;
    };

    struct second
    {
        using role = detail::role_of_t<Second>;

        static constexpr ant::cardinality cardinality = detail::role_cardinality_of_v<Second>;
    };

    template<typename Role>
    using end = std::conditional_t<std::is_same_v<Role, typename first::role>, first, second>;
};

} // namespace ant
