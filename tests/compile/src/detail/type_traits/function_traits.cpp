#include <ant/detail/type_traits/function_traits.hpp>

namespace ant::detail { namespace {

[[maybe_unused]] auto func(char, double) -> int
{
    return 0;
}

using func_ptr = int (*)(char, double);

struct callable
{
    auto operator()(char, float) -> int
    {
        return 0;
    }
};

struct const_callable
{
    auto operator()(char, float) const -> int
    {
        return 0;
    }
};

struct noexcept_callable
{
    auto operator()(char, float) noexcept -> int
    {
        return 0;
    }
};

struct const_noexcept_callable
{
    auto operator()(char, float) const noexcept -> int
    {
        return 0;
    }
};

[[maybe_unused]] auto lambda = [](char, float) -> int { return 0; };

static_assert(std::is_same_v<function_traits<decltype(func)>::return_type, int>);
static_assert(std::is_same_v<function_traits<decltype(func)>::argument_types, type_list<char, double>>);

static_assert(std::is_same_v<function_traits<func_ptr>::return_type, int>);
static_assert(std::is_same_v<function_traits<func_ptr>::argument_types, type_list<char, double>>);

static_assert(std::is_same_v<function_traits<decltype(callable{})>::return_type, int>);
static_assert(std::is_same_v<function_traits<decltype(callable{})>::argument_types, type_list<char, float>>);

static_assert(std::is_same_v<function_traits<decltype(const_callable{})>::return_type, int>);
static_assert(std::is_same_v<function_traits<decltype(const_callable{})>::argument_types, type_list<char, float>>);

static_assert(std::is_same_v<function_traits<decltype(noexcept_callable{})>::return_type, int>);
static_assert(std::is_same_v<function_traits<decltype(noexcept_callable{})>::argument_types, type_list<char, float>>);

static_assert(std::is_same_v<function_traits<decltype(const_noexcept_callable{})>::return_type, int>);
static_assert(std::is_same_v<function_traits<decltype(const_noexcept_callable{})>::argument_types, type_list<char, float>>);

static_assert(std::is_same_v<function_traits<decltype(lambda)>::return_type, int>);
static_assert(std::is_same_v<function_traits<decltype(lambda)>::argument_types, type_list<char, float>>);

}} // namespace ant::detail
