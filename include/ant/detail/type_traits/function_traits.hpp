#pragma once

#include <ant/type_list.hpp>

namespace ant::detail {

template<typename F>
struct function_traits;

template<typename Return, typename... Args>
struct function_traits<Return(Args...)>
{
    using return_type = Return;
    using argument_types = type_list<Args...>;
};

template<typename Return, typename... Args>
struct function_traits<Return (*)(Args...)>
{
    using return_type = Return;
    using argument_types = type_list<Args...>;
};

template<typename Return, typename Class, typename... Args>
struct function_traits<Return (Class::*)(Args...)>
{
    using return_type = Return;
    using argument_types = type_list<Args...>;
};

template<typename Return, typename Class, typename... Args>
struct function_traits<Return (Class::*)(Args...) noexcept>
{
    using return_type = Return;
    using argument_types = type_list<Args...>;
};

template<typename Return, typename Class, typename... Args>
struct function_traits<Return (Class::*)(Args...) const>
{
    using return_type = Return;
    using argument_types = type_list<Args...>;
};

template<typename Return, typename Class, typename... Args>
struct function_traits<Return (Class::*)(Args...) const noexcept>
{
    using return_type = Return;
    using argument_types = type_list<Args...>;
};

template<typename T>
requires requires { &T::operator(); }
struct function_traits<T> : function_traits<decltype(&T::operator())>
{
};

}; // namespace ant::detail
