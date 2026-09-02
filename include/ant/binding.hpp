#pragma once

#include <functional>

#include <ant/change/change_accumulator.hpp>
#include <ant/changeset.hpp>
#include <ant/component.hpp>
#include <ant/detail/binding/binding_traits.hpp>
#include <ant/detail/query/query_compiler.hpp>
#include <ant/detail/store.hpp>
#include <ant/env.hpp>
#include <ant/meta/type_list.hpp>
#include <ant/query.hpp>

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

    template<typename F>
    static constexpr auto describe() -> binding_descriptor;

    auto is_valid() const noexcept -> bool;

    changeset_descriptor changeset;
    env_descriptor env;
    queries_descriptor queries;
};

class binding
{
public:
    template<typename F>
    binding(detail::store& store, F&& func);

    binding(binding&&) = default;
    binding& operator=(binding&&) = default;

    binding(const binding&) = delete;
    binding& operator=(const binding&) = delete;

    auto is_ready() const noexcept -> bool;
    auto invoke(change_accumulator& accumulator) -> void;
    auto descriptor() const noexcept -> const binding_descriptor&;

private:
    using fn = std::move_only_function<void(detail::store& store, change_accumulator&)>;

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
    static auto invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, std::tuple<fn_argument<T>...>& tuple) -> void;

    template<typename F, typename... T, std::size_t... I>
    static auto invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, std::tuple<fn_argument<T>...>& tuple, std::index_sequence<I...>) -> void;

private:
    binding_descriptor _descriptor;
    fn _fn;
    detail::store* _store{nullptr};
};

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

        descriptor.reads |= component_bitset_of<typename signature_traits::read>();
        descriptor.writes |= component_bitset_of<typename signature_traits::write>();
        descriptor.excludes |= component_bitset_of<typename signature_traits::excluded>();
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

template<typename F>
constexpr auto binding_descriptor::describe() -> binding_descriptor
{
    using traits = detail::binding_traits<F>;

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

template<typename Signature>
auto binding::fn_argument<changeset<Signature>>::get(detail::store& store, change_accumulator& accumulator) -> changeset<Signature>
{
    return changeset<Signature>(accumulator, store.entities);
}

template<typename Signature>
auto binding::fn_argument<env<Signature>>::get(detail::store& store, [[maybe_unused]] change_accumulator& accumulator) -> env<Signature>
{
    return env<Signature>(store.envs);
}

template<typename Signature>
auto binding::fn_argument<query<Signature>>::get(detail::store& store, [[maybe_unused]] change_accumulator& accumulator) -> query<Signature>
{
    detail::query_compiler::recompile<Signature>(store.catalog, compiled);
    return compiled.query();
}

template<typename F>
binding::binding(detail::store& store, F&& func)
    : _descriptor(binding_descriptor::describe<F>())
    , _fn(make_fn(std::forward<F>(func)))
    , _store(&store)
{
}

inline auto binding::is_ready() const noexcept -> bool
{
    return _descriptor.env.requireds.none() || _store->envs.contains(_descriptor.env.requireds);
}

inline auto binding::invoke(change_accumulator& accumulator) -> void
{
    _fn(*_store, accumulator);
}

inline auto binding::descriptor() const noexcept -> const binding_descriptor&
{
    return _descriptor;
}

template<typename F>
auto binding::make_fn(F&& func) -> fn
{
    return [func = std::forward<F>(func), args = make_fn_args<F>()](detail::store& store, change_accumulator& accumulator) mutable {
        invoke_fn(func, store, accumulator, args);
    };
}

template<typename F>
auto binding::make_fn_args()
{
    return make_fn_args(typename detail::binding_traits<F>::arguments{});
}

template<typename... T>
auto binding::make_fn_args(type_list<T...>) -> std::tuple<fn_argument<T>...>
{
    return std::make_tuple(fn_argument<T>()...);
}

template<typename F, typename... T>
auto binding::invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, std::tuple<fn_argument<T>...>& tuple) -> void
{
    invoke_fn(func, store, accumulator, tuple, std::make_index_sequence<sizeof...(T)>());
}

template<typename F, typename... T, std::size_t... I>
auto binding::invoke_fn(F& func, detail::store& store, change_accumulator& accumulator, std::tuple<fn_argument<T>...>& tuple, std::index_sequence<I...>) -> void
{
    func(std::get<I>(tuple).get(store, accumulator)...);
}

} // namespace ant
