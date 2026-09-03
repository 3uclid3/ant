#include <ant/detail/type_traits/binding_traits.hpp>

#include <ant.testing/component.hpp>
#include <ant/changeset.hpp>
#include <ant/env.hpp>
#include <ant/query.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto system(
    env_of<testing::component<0>*>,
    changeset_of<set_env<testing::component<0>>>,
    query_of<testing::component<0>*, testing::component<1>>,
    query_of<testing::component<0>, testing::component<1>*, exclude<testing::component<2>>>) -> void
{
}

[[maybe_unused]] auto system_env_only(env_of<testing::component<0>>) -> void
{
}

[[maybe_unused]] auto system_changeset_only(changeset_of<set_env<testing::component<0>>>) -> void
{
}

[[maybe_unused]] auto system_query_only(query_of<testing::component<0>>) -> void
{
}

struct system_callable_object
{
    auto operator()(env_of<testing::component<0>>) const -> void
    {
    }
};

[[maybe_unused]] auto system_lambda = [](changeset_of<set_env<testing::component<0>>>) -> void {
};

using system_binding_traits_t = binding_traits<decltype(system)>;
static_assert(std::is_same_v<system_binding_traits_t::changeset, changeset_of<set_env<testing::component<0>>>>);
static_assert(std::is_same_v<system_binding_traits_t::env, env_of<testing::component<0>*>>);
static_assert(type_list_size_v<system_binding_traits_t::queries> == 2);
static_assert(std::is_same_v<type_list_at_t<0, system_binding_traits_t::queries>, query_of<testing::component<0>*, testing::component<1>>>);
static_assert(std::is_same_v<type_list_at_t<1, system_binding_traits_t::queries>, query_of<testing::component<0>, testing::component<1>*, exclude<testing::component<2>>>>);

using system_env_only_binding_traits_t = binding_traits<decltype(system_env_only)>;
static_assert(std::is_same_v<system_env_only_binding_traits_t::changeset, std::nullptr_t>);
static_assert(std::is_same_v<system_env_only_binding_traits_t::env, env_of<testing::component<0>>>);
static_assert(type_list_size_v<system_env_only_binding_traits_t::queries> == 0);

using system_changeset_only_binding_traits_t = binding_traits<decltype(system_changeset_only)>;
static_assert(std::is_same_v<system_changeset_only_binding_traits_t::changeset, changeset_of<set_env<testing::component<0>>>>);
static_assert(std::is_same_v<system_changeset_only_binding_traits_t::env, std::nullptr_t>);
static_assert(type_list_size_v<system_changeset_only_binding_traits_t::queries> == 0);

using system_query_only_binding_traits_t = binding_traits<decltype(system_query_only)>;
static_assert(std::is_same_v<system_query_only_binding_traits_t::changeset, std::nullptr_t>);
static_assert(std::is_same_v<system_query_only_binding_traits_t::env, std::nullptr_t>);
static_assert(type_list_size_v<system_query_only_binding_traits_t::queries> == 1);
static_assert(std::is_same_v<type_list_at_t<0, system_query_only_binding_traits_t::queries>, query_of<testing::component<0>>>);

using system_callable_object_binding_traits_t = binding_traits<system_callable_object>;
static_assert(std::is_same_v<system_callable_object_binding_traits_t::changeset, std::nullptr_t>);
static_assert(std::is_same_v<system_callable_object_binding_traits_t::env, env_of<testing::component<0>>>);
static_assert(type_list_size_v<system_callable_object_binding_traits_t::queries> == 0);

using system_lambda_binding_traits_t = binding_traits<decltype(system_lambda)>;
static_assert(std::is_same_v<system_lambda_binding_traits_t::changeset, changeset_of<set_env<testing::component<0>>>>);
static_assert(std::is_same_v<system_lambda_binding_traits_t::env, std::nullptr_t>);
static_assert(type_list_size_v<system_lambda_binding_traits_t::queries> == 0);

}} // namespace ant::detail
