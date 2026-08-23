#pragma once

#include <functional>

#include <ant/component.hpp>
#include <ant/database.hpp>
#include <ant/detail/binding/binding_traits.hpp>
#include <ant/meta/type_list.hpp>

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

class binding_context
{
public:
    binding_context(database& db, change_accumulator& accumulator) noexcept;

    template<typename Signature>
    auto env() noexcept -> ant::env<Signature>;

    template<typename Signature>
    auto changeset() noexcept -> ant::changeset<Signature>;

    template<typename Signature>
    auto recompile_query(ant::compiled_query<Signature>& cquery) -> void;

private:
    database& _db;
    change_accumulator& _accumulator;
};

class binding
{
public:
    template<typename F>
    binding(F&& func);

    binding(binding&&) = default;
    binding& operator=(binding&&) = default;

    binding(const binding&) = delete;
    binding& operator=(const binding&) = delete;

    auto invoke(binding_context& ctx) -> void;
    auto descriptor() const noexcept -> const binding_descriptor&;

private:
    using fn = std::move_only_function<void(binding_context&)>;

    template<typename T>
    struct fn_argument;

    template<typename Signature>
    struct fn_argument<changeset<Signature>>
    {
        auto get(binding_context& ctx) -> changeset<Signature>;
    };

    template<typename Signature>
    struct fn_argument<env<Signature>>
    {
        auto get(binding_context& ctx) -> env<Signature>;
    };

    template<typename Signature>
    struct fn_argument<query<Signature>>
    {
        auto get(binding_context& ctx) -> query<Signature>;

        compiled_query<Signature> cquery;
    };

private:
    template<typename F>
    static auto make_fn(F&& func) -> fn;

    template<typename F>
    static auto make_fn_args();

    template<typename... T>
    static auto make_fn_args(type_list<T...>) -> std::tuple<fn_argument<T>...>;

    template<typename F, typename... T>
    static auto invoke_fn(F& func, binding_context& ctx, std::tuple<fn_argument<T>...>& tuple) -> void;

    template<typename F, typename... T, std::size_t... I>
    static auto invoke_fn(F& func, binding_context& ctx, std::tuple<fn_argument<T>...>& tuple, std::index_sequence<I...>) -> void;

private:
    binding_descriptor _descriptor;
    fn _fn;
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

inline binding_context::binding_context(database& db, change_accumulator& accumulator) noexcept
    : _db(db)
    , _accumulator(accumulator)
{
}

template<typename Signature>
auto binding_context::env() noexcept -> ant::env<Signature>
{
    return _db.env<Signature>();
}

template<typename Signature>
auto binding_context::changeset() noexcept -> ant::changeset<Signature>
{
    return _db.changeset<Signature>(_accumulator);
}

template<typename Signature>
auto binding_context::recompile_query(ant::compiled_query<Signature>& cquery) -> void
{
    _db.recompile_query(cquery);
}

template<typename Signature>
auto binding::fn_argument<changeset<Signature>>::get(binding_context& ctx) -> changeset<Signature>
{
    return ctx.changeset<Signature>();
}

template<typename Signature>
auto binding::fn_argument<env<Signature>>::get(binding_context& ctx) -> env<Signature>
{
    return ctx.env<Signature>();
}

template<typename Signature>
auto binding::fn_argument<query<Signature>>::get(binding_context& ctx) -> query<Signature>
{
    ctx.recompile_query(cquery);
    return cquery.query();
}

template<typename F>
binding::binding(F&& func)
    : _descriptor(binding_descriptor::describe<F>())
    , _fn(make_fn(std::forward<F>(func)))
{
}

inline auto binding::invoke(binding_context& ctx) -> void
{
    _fn(ctx);
}

inline auto binding::descriptor() const noexcept -> const binding_descriptor&
{
    return _descriptor;
}

template<typename F>
auto binding::make_fn(F&& func) -> fn
{
    return [func = std::forward<F>(func), args = make_fn_args<F>()](binding_context& ctx) mutable {
        invoke_fn(func, ctx, args);
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
auto binding::invoke_fn(F& func, binding_context& ctx, std::tuple<fn_argument<T>...>& tuple) -> void
{
    invoke_fn(func, ctx, tuple, std::make_index_sequence<sizeof...(T)>());
}

template<typename F, typename... T, std::size_t... I>
auto binding::invoke_fn(F& func, binding_context& ctx, std::tuple<fn_argument<T>...>& tuple, std::index_sequence<I...>) -> void
{
    func(std::get<I>(tuple).get(ctx)...);
}

} // namespace ant
