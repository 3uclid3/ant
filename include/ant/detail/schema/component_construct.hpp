#pragma once

#include <functional>
#include <tuple>

#include <ant/detail/schema/component_meta.hpp>
#include <ant/detail/schema/schema.hpp>

namespace ant::detail {

using component_construct_fn = std::move_only_function<void(void*)>;

struct component_construct
{
    component_construct_fn fn{};
    const component_meta* meta{nullptr};
};

template<typename T, typename... Args>
auto make_component_construct(const schema& schema, Args&&... args) -> component_construct
{
    if constexpr (sizeof...(Args) == 0)
    {
        return {
            .fn = nullptr, // handled by meta.vtable
            .meta = &schema.meta_of<T>(),
        };
    }
    else
    {
        return {
            .fn = [tuple = std::make_tuple(std::forward<Args>(args)...)](void* ptr) {
                std::apply([ptr](auto&&... arg) { std::construct_at(static_cast<T*>(ptr), std::move(arg)...); }, tuple);
            },
            .meta = &schema.meta_of<T>(),
        };
    }
}

} // namespace ant::detail
