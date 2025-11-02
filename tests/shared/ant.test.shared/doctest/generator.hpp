#pragma once

#include <array>
#include <format>
#include <initializer_list>
#include <iterator>
#include <optional>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

#include <doctest/doctest.h>

namespace ant::test::detail {

template<class T>
struct is_init_list : std::false_type
{};

template<class T>
struct is_init_list<std::initializer_list<T>> : std::true_type
{};

template<class T>
inline constexpr bool is_init_list_v = is_init_list<std::decay_t<T>>::value;

template<class T>
requires std::ranges::range<T> && (!is_init_list_v<T>)
constexpr auto make_range(T&& range)
{
    return std::forward<T>(range);
}

template<class T>
constexpr auto make_range(std::initializer_list<T> il) -> std::vector<T>
{
    return {il.begin(), il.end()};
}

template<class... Ts>
requires(sizeof...(Ts) >= 1)
constexpr auto make_range(Ts&&... xs)
{
    using common_type_t = std::common_type_t<std::decay_t<Ts>...>;
    return std::array{common_type_t(std::forward<Ts>(xs))...};
}

} // namespace ant::test::detail

// Usage:
//   auto a = GENERATE({0, 1, 2});
//   std::vector<int> v{3, 4}; auto b = GENERATE(v);
//   auto c = GENERATE(std::array{5, 6});
//   auto d = GENERATE(7, 8, 9);
//   auto e = GENERATE("x");            // single value
//   auto f = GENERATE("x", "y");       // multiple values

#define GENERATE(...) \
    ([&]() { \
        auto gen_range = ::ant::test::detail::make_range(__VA_ARGS__); \
        using gen_val_t = std::decay_t<decltype(*std::ranges::begin(gen_range))>; \
        std::optional<gen_val_t> gen_value; \
        std::size_t gen_idx = 0; \
        for (const auto& gen_in : gen_range) \
        { \
            std::string gen_subcase_name = std::format("{{{}}}[{}]", #__VA_ARGS__, gen_idx++); \
            DOCTEST_SUBCASE(gen_subcase_name.c_str()) \
            { \
                gen_value = gen_in; \
            } \
        } \
        if (!gen_value.has_value()) \
        { \
            DOCTEST_FAIL("GENERATE(...) was called with an empty range or no values."); \
        } \
        return *gen_value; \
    }())