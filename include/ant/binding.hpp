#pragma once

#include <functional>

#include <ant/change_accumulator.hpp>
#include <ant/changeset.hpp>
#include <ant/component.hpp>
#include <ant/detail/query/query_compiler.hpp>
#include <ant/detail/store/store.hpp>
#include <ant/detail/type_traits/binding_traits.hpp>
#include <ant/env.hpp>
#include <ant/query.hpp>
#include <ant/type_list.hpp>

namespace ant {

struct binding_descriptor
{
    struct changeset_descriptor
    {
        template<typename Signature>
        static constexpr auto describe() -> changeset_descriptor;

        auto is_valid() const noexcept -> bool;

        component_bitset attaches;
        component_bitset detaches;

        component_bitset sets;
        component_bitset unsets;

        bool create{false};
        bool destroy{false};
    };

    struct env_descriptor
    {
        template<typename Signature>
        static constexpr auto describe() -> env_descriptor;

        auto is_valid() const noexcept -> bool;

        component_bitset reads;
        component_bitset writes;

        component_bitset requireds;
    };

    struct queries_descriptor
    {
        template<typename Signatures>
        static constexpr auto describe() -> queries_descriptor;

        template<typename... Signatures>
        static constexpr auto describe(type_list<Signatures...>) -> queries_descriptor;

        auto is_valid() const noexcept -> bool;

        component_bitset reads;
        component_bitset writes;
        component_bitset excludes;
    };

    template<typename F, typename... Supplied>
    static constexpr auto describe() -> binding_descriptor;

    auto is_valid() const noexcept -> bool;

    changeset_descriptor changeset;
    env_descriptor env;
    queries_descriptor queries;
};

template<typename... Supplied>
class basic_binding
{
public:
    template<typename F>
    basic_binding(detail::store& store, F&& func);

    basic_binding(basic_binding&&) = default;
    basic_binding& operator=(basic_binding&&) = default;

    basic_binding(const basic_binding&) = delete;
    basic_binding& operator=(const basic_binding&) = delete;

    auto is_ready() const noexcept -> bool;
    auto invoke(change_accumulator& accumulator, Supplied... supplied) -> void;
    auto descriptor() const noexcept -> const binding_descriptor&;

private:
    using fn = std::move_only_function<void(detail::store& store, change_accumulator&, Supplied&&...)>;

    template<typename T>
    struct fn_argument;

    template<typename Signature>
    struct fn_argument<changeset<Signature>>
    {
        auto get(detail::store& store, change_accumulator& accumulator) -> changeset<Signature>;
    };

    template<typename Signature>
    struct fn_argument<env<Signature>>
    {
        auto get(detail::store& store, change_accumulator& accumulator) -> env<Signature>;
    };

    template<typename Signature>
    struct fn_argument<query<Signature>>
    {
        auto get(detail::store& store, change_accumulator& accumulator) -> query<Signature>;

        compiled_query<Signature> compiled;
    };

private:
    template<typename F>
    static auto make_fn(F&& func) -> fn;

    template<typename F>
    static auto make_fn_args();

    template<typename... T>
    static auto make_fn_args(type_list<T...>) -> std::tuple<fn_argument<T>...>;

    template<typename F, typename... T>
    static auto invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, Supplied&&... supplied, std::tuple<fn_argument<T>...>& tuple) -> void;

    template<typename F, typename... T, std::size_t... I>
    static auto invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, Supplied&&... supplied, std::tuple<fn_argument<T>...>& tuple, std::index_sequence<I...>) -> void;

private:
    binding_descriptor _descriptor;
    fn _fn;
    detail::store* _store{nullptr};
};

using binding = basic_binding<>;

template<typename Signature>
constexpr auto binding_descriptor::changeset_descriptor::describe() -> binding_descriptor::changeset_descriptor
{
    using signature_traits = changeset_signature_traits<Signature>;

    binding_descriptor::changeset_descriptor descriptor;

    descriptor.attaches = component_bitset_of<typename signature_traits::attach>();
    descriptor.detaches = component_bitset_of<typename signature_traits::detach>();

    descriptor.sets = component_bitset_of<typename signature_traits::set_env>();
    descriptor.unsets = component_bitset_of<typename signature_traits::unset_env>();

    descriptor.create = signature_traits::can_create;
    descriptor.destroy = signature_traits::can_destroy;

    return descriptor;
}

template<typename Signature>
constexpr auto binding_descriptor::env_descriptor::describe() -> binding_descriptor::env_descriptor
{
    using signature_traits = env_signature_traits<Signature>;

    binding_descriptor::env_descriptor descriptor;

    descriptor.reads = component_bitset_of<typename signature_traits::read>();
    descriptor.writes = component_bitset_of<typename signature_traits::write>();

    descriptor.requireds = component_bitset_of<type_list_transform_t<std::remove_const, typename signature_traits::required>>();

    return descriptor;
}

template<typename Signatures>
constexpr auto binding_descriptor::queries_descriptor::describe() -> binding_descriptor::queries_descriptor
{
    return describe(Signatures());
}

template<typename... Signature>
constexpr auto binding_descriptor::queries_descriptor::describe(type_list<Signature...>) -> binding_descriptor::queries_descriptor
{
    binding_descriptor::queries_descriptor descriptor;
    ([&descriptor] {
        using signature_traits = query_signature_traits<Signature>;
        using included = type_list_concat_t<typename signature_traits::required, typename signature_traits::optional>;

        using read_types = type_list_transform_t<std::remove_const, type_list_filter_t<detail::is_read, included>>;
        using write_types = type_list_filter_t<detail::is_write, included>;
        using excluded_types = typename signature_traits::excluded;

        descriptor.reads |= component_bitset_of<read_types>();
        descriptor.writes |= component_bitset_of<write_types>();
        descriptor.excludes |= component_bitset_of<excluded_types>();
    }(),
     ...);
    return descriptor;
}

inline auto binding_descriptor::changeset_descriptor::is_valid() const noexcept -> bool
{
    return create || destroy || attaches.any() || detaches.any() || sets.any() || unsets.any();
}

inline auto binding_descriptor::env_descriptor::is_valid() const noexcept -> bool
{
    return reads.any() || writes.any();
}

inline auto binding_descriptor::queries_descriptor::is_valid() const noexcept -> bool
{
    return reads.any() || writes.any();
}

template<typename F, typename... Supplied>
constexpr auto binding_descriptor::describe() -> binding_descriptor
{
    using traits = detail::binding_traits<F, Supplied...>;

    binding_descriptor descriptor;

    if constexpr (detail::is_binding_changeset_v<typename traits::changeset>)
    {
        using signature = detail::binding_argument_signature_t<typename traits::changeset>;

        descriptor.changeset = changeset_descriptor::describe<signature>();
    }

    if constexpr (detail::is_binding_env_v<typename traits::env>)
    {
        using signature = detail::binding_argument_signature_t<typename traits::env>;

        descriptor.env = env_descriptor::describe<signature>();
    }

    if constexpr (type_list_size_v<typename traits::queries> > 0)
    {
        using signatures = detail::binding_argument_signature_t<typename traits::queries>;

        descriptor.queries = queries_descriptor::describe<signatures>();
    }

    return descriptor;
}

inline auto binding_descriptor::is_valid() const noexcept -> bool
{
    return changeset.is_valid() || env.is_valid() || queries.is_valid();
}

template<typename... Supplied>
template<typename Signature>
auto basic_binding<Supplied...>::fn_argument<changeset<Signature>>::get(detail::store& store, change_accumulator& accumulator) -> changeset<Signature>
{
    return changeset<Signature>(accumulator, store.entities);
}

template<typename... Supplied>
template<typename Signature>
auto basic_binding<Supplied...>::fn_argument<env<Signature>>::get(detail::store& store, [[maybe_unused]] change_accumulator& accumulator) -> env<Signature>
{
    return env<Signature>(store.envs);
}

template<typename... Supplied>
template<typename Signature>
auto basic_binding<Supplied...>::fn_argument<query<Signature>>::get(detail::store& store, [[maybe_unused]] change_accumulator& accumulator) -> query<Signature>
{
    detail::query_compiler::recompile<Signature>(store.catalog, compiled);
    return compiled.query();
}

template<typename... Supplied>
template<typename F>
basic_binding<Supplied...>::basic_binding(detail::store& store, F&& func)
    : _descriptor(binding_descriptor::describe<F, Supplied...>())
    , _fn(make_fn(std::forward<F>(func)))
    , _store(&store)
{
}

template<typename... Supplied>
auto basic_binding<Supplied...>::is_ready() const noexcept -> bool
{
    return _descriptor.env.requireds.none() || _store->envs.contains(_descriptor.env.requireds);
}

template<typename... Supplied>
auto basic_binding<Supplied...>::invoke(change_accumulator& accumulator, Supplied... supplied) -> void
{
    _fn(*_store, accumulator, std::forward<Supplied>(supplied)...);
}

template<typename... Supplied>
auto basic_binding<Supplied...>::descriptor() const noexcept -> const binding_descriptor&
{
    return _descriptor;
}

template<typename... Supplied>
template<typename F>
auto basic_binding<Supplied...>::make_fn(F&& func) -> fn
{
    return [func = std::forward<F>(func), args = make_fn_args<F>()](detail::store& store, change_accumulator& accumulator, Supplied&&... supplied) mutable {
        invoke_fn(func, store, accumulator, std::forward<Supplied>(supplied)..., args);
    };
}

template<typename... Supplied>
template<typename F>
auto basic_binding<Supplied...>::make_fn_args()
{
    return make_fn_args(typename detail::binding_traits<F, Supplied...>::injected_arguments{});
}

template<typename... Supplied>
template<typename... T>
auto basic_binding<Supplied...>::make_fn_args(type_list<T...>) -> std::tuple<fn_argument<T>...>
{
    return std::make_tuple(fn_argument<T>()...);
}

template<typename... Supplied>
template<typename F, typename... T>
auto basic_binding<Supplied...>::invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, Supplied&&... supplied, std::tuple<fn_argument<T>...>& tuple) -> void
{
    invoke_fn(func, store, accumulator, std::forward<Supplied>(supplied)..., tuple, std::make_index_sequence<sizeof...(T)>());
}

template<typename... Supplied>
template<typename F, typename... T, std::size_t... I>
auto basic_binding<Supplied...>::invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, Supplied&&... supplied, std::tuple<fn_argument<T>...>& tuple, std::index_sequence<I...>) -> void
{
    func(std::forward<Supplied>(supplied)..., std::get<I>(tuple).get(store, accumulator)...);
}

} // namespace ant
