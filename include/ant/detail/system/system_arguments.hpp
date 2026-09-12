#pragma once

#include <ant/changeset.hpp>
#include <ant/detail/query/query_compiler.hpp>
#include <ant/detail/store/store.hpp>
#include <ant/detail/type_traits/function_traits.hpp>
#include <ant/detail/type_traits/system_traits.hpp>
#include <ant/env.hpp>
#include <ant/query.hpp>

namespace ant::detail {

template<typename Signature>
class system_arguments;

template<typename... Parameters>
class system_arguments<type_list<Parameters...>>
{
public:
    template<typename F, typename... Supplied>
    requires(!system_traits<F, Supplied...>::has_changeset)
    auto invoke(store& store, F&& func, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns;

    template<typename F, typename... Supplied>
    requires(system_traits<F, Supplied...>::has_changeset)
    auto invoke(store& store, F&& func, change_accumulator& accumulator, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns;

private:
    template<typename F, std::size_t... I, typename... Supplied>
    requires(!system_traits<F, Supplied...>::has_changeset)
    auto invoke_impl(store& store, F&& func, std::index_sequence<I...>, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns;

    template<typename F, std::size_t... I, typename... Supplied>
    requires(system_traits<F, Supplied...>::has_changeset)
    auto invoke_impl(store& store, F&& func, change_accumulator& accumulator, std::index_sequence<I...>, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns;

    template<typename T>
    struct argument;

    template<typename ArgumentSignature>
    struct argument<changeset<ArgumentSignature>>
    {
        static const bool require_accumulator = true;

        auto get(detail::store& store, change_accumulator& accumulator) -> changeset<ArgumentSignature>;
    };

    template<typename ArgumentSignature>
    struct argument<env<ArgumentSignature>>
    {
        static const bool require_accumulator = false;

        auto get(detail::store& store) -> env<ArgumentSignature>;
    };

    template<typename ArgumentSignature>
    struct argument<query<ArgumentSignature>>
    {
        static const bool require_accumulator = false;

        auto get(detail::store& store) -> query<ArgumentSignature>;

        compiled_query<ArgumentSignature> compiled;
    };

private:
    using arguments = std::tuple<argument<Parameters>...>;

    [[no_unique_address]] arguments _tuple;
};

template<typename... Parameters>
template<typename ArgumentSignature>
auto system_arguments<type_list<Parameters...>>::argument<changeset<ArgumentSignature>>::get(detail::store& store, change_accumulator& accumulator) -> changeset<ArgumentSignature>
{
    return changeset<ArgumentSignature>(accumulator, store.entities);
}

template<typename... Parameters>
template<typename ArgumentSignature>
auto system_arguments<type_list<Parameters...>>::argument<env<ArgumentSignature>>::get(detail::store& store) -> env<ArgumentSignature>
{
    return env<ArgumentSignature>(store.envs);
}

template<typename... Parameters>
template<typename ArgumentSignature>
auto system_arguments<type_list<Parameters...>>::argument<query<ArgumentSignature>>::get(detail::store& store) -> query<ArgumentSignature>
{
    query_compiler::recompile<ArgumentSignature>(store.catalog, compiled);
    return compiled.query();
}

template<typename... Parameters>
template<typename F, typename... Supplied>
requires(!system_traits<F, Supplied...>::has_changeset)
auto system_arguments<type_list<Parameters...>>::invoke(store& store, F&& func, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns
{
    constexpr auto injected_parameter_count = type_list_size_v<typename system_traits<F, Supplied...>::injected_parameters>;
    return invoke_impl(store, std::forward<F>(func), std::make_index_sequence<injected_parameter_count>{}, std::forward<Supplied>(supplied)...);
}

template<typename... Parameters>
template<typename F, typename... Supplied>
requires(system_traits<F, Supplied...>::has_changeset)
auto system_arguments<type_list<Parameters...>>::invoke(store& store, F&& func, change_accumulator& accumulator, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns
{
    constexpr auto injected_parameter_count = type_list_size_v<typename system_traits<F, Supplied...>::injected_parameters>;
    return invoke_impl(store, std::forward<F>(func), accumulator, std::make_index_sequence<injected_parameter_count>{}, std::forward<Supplied>(supplied)...);
}

template<typename... Parameters>
template<typename F, std::size_t... I, typename... Supplied>
requires(!system_traits<F, Supplied...>::has_changeset)
auto system_arguments<type_list<Parameters...>>::invoke_impl(store& store, F&& func, std::index_sequence<I...>, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns
{
    return std::forward<F>(func)(std::forward<Supplied>(supplied)..., [&]() {
        auto& parameter = std::get<I>(_tuple);
        static_assert(!std::tuple_element_t<I, arguments>::require_accumulator);
        return parameter.get(store);
    }()...);
}

template<typename... Parameters>
template<typename F, std::size_t... I, typename... Supplied>
requires(system_traits<F, Supplied...>::has_changeset)
auto system_arguments<type_list<Parameters...>>::invoke_impl(store& store, F&& func, change_accumulator& accumulator, std::index_sequence<I...>, Supplied&&... supplied) -> system_traits<F, Supplied...>::returns
{
    return std::forward<F>(func)(std::forward<Supplied>(supplied)..., [&]() {
        auto& parameter = std::get<I>(_tuple);
        if constexpr (std::tuple_element_t<I, arguments>::require_accumulator)
            return parameter.get(store, accumulator);
        else
            return parameter.get(store);
    }()...);
}

} // namespace ant::detail
