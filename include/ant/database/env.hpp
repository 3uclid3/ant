#pragma once

#include <ant/database/detail/env_registry.hpp>
#include <ant/database/detail/env_signature_traits.hpp>
#include <ant/database/env_fwd.hpp>

namespace ant {

template<typename Signature>
class env
{
public:
    using signature = Signature;
    using signature_traits = detail::env_signature_traits<Signature>;

    explicit env(detail::env_registry& e) noexcept;

    env(const env&) = delete;
    auto operator=(const env&) -> env& = delete;

    env(env&&) noexcept = default;
    auto operator=(env&&) noexcept -> env& = default;

    template<typename T>
    requires(signature_traits::template contains_v<const T>)
    auto get() const noexcept -> const T&;

    template<typename T>
    requires(signature_traits::template contains_v<T>)
    auto get() noexcept -> T&;

    template<typename T>
    requires(signature_traits::template contains_v<const T*>)
    auto try_get() const noexcept -> const T*;

    template<typename T>
    requires(signature_traits::template contains_v<T*>)
    auto try_get() noexcept -> T*;

    template<typename T>
    requires(signature_traits::template contains_v<const T*> || signature_traits::template contains_v<T*>)
    auto has() const noexcept -> bool;

private:
    detail::env_registry* _env{nullptr};
};

template<typename Signature>
env<Signature>::env(detail::env_registry& e) noexcept
    : _env{&e}
{
}

template<typename Signature>
template<typename T>
requires(env<Signature>::signature_traits::template contains_v<const T>)
auto env<Signature>::get() const noexcept -> const T&
{
    const auto ptr = _env->template get<T>();
    ANT_ASSERT(ptr != nullptr, "Component not set in env");
    return *ptr;
}

template<typename Signature>
template<typename T>
requires(env<Signature>::signature_traits::template contains_v<T>)
auto env<Signature>::get() noexcept -> T&
{
    auto ptr = _env->template get<T>();
    ANT_ASSERT(ptr != nullptr, "Component not set in env");
    return *ptr;
}

template<typename Signature>
template<typename T>
requires(env<Signature>::signature_traits::template contains_v<const T*>)
auto env<Signature>::try_get() const noexcept -> const T*
{
    return _env->template get<T>();
}

template<typename Signature>
template<typename T>
requires(env<Signature>::signature_traits::template contains_v<T*>)
auto env<Signature>::try_get() noexcept -> T*
{
    return _env->template get<T>();
}

template<typename Signature>
template<typename T>
requires(env<Signature>::signature_traits::template contains_v<const T*> || env<Signature>::signature_traits::template contains_v<T*>)
auto env<Signature>::has() const noexcept -> bool
{
    return _env->template has<T>();
}

} // namespace ant
