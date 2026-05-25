#pragma once

#include <ant/detail/env/env_registry.hpp>
#include <ant/detail/env/env_signature_traits.hpp>
#include <ant/env_fwd.hpp>

namespace ant {

template<typename Signature>
class env final
{
public:
    using signature = Signature;
    using signature_traits = detail::env_signature_traits<Signature>;

    explicit env(detail::env_registry& e) noexcept
        : _env{&e}
    {
    }

    env(const env&) = delete;
    auto operator=(const env&) -> env& = delete;

    env(env&&) noexcept = default;
    auto operator=(env&&) noexcept -> env& = default;

    template<typename T>
    requires(signature_traits::template is_required<T> || signature_traits::template is_required<const T>)
    auto get() const noexcept -> const T&
    {
        const T* ptr = _env->template get<T>();
        ANT_ASSERT(ptr != nullptr, "Component not set in env");
        return *ptr;
    }

    template<typename T>
    requires(signature_traits::template is_required<T>)
    auto get() noexcept -> T&
    {
        T* ptr = _env->template get<T>();
        ANT_ASSERT(ptr != nullptr, "Component not set in env");
        return *ptr;
    }

    template<typename T>
    requires(signature_traits::template is_optional<T> || signature_traits::template is_optional<const T>)
    auto get() const noexcept -> const T*
    {
        return _env->template get<T>();
    }

    template<typename T>
    requires(signature_traits::template is_optional<T>)
    auto get() noexcept -> T*
    {
        return _env->template get<T>();
    }

    template<typename T>
    requires(signature_traits::template is_optional<T> || signature_traits::template is_optional<const T>)
    auto has() const noexcept -> bool
    {
        return _env->template has<T>();
    }

private:
    detail::env_registry* _env{nullptr};
};

} // namespace ant
