#pragma once

#include <algorithm>
#include <array>
#include <format>
#include <initializer_list>
#include <iterator>
#include <ranges>
#include <sstream>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

#include <doctest/doctest.h>

// Usage:
//   auto a = GENERATE({0, 1, 2});
//   std::vector<int> v{3, 4}; auto b = GENERATE(v);
//   auto c = GENERATE(std::array{5, 6});
//   auto d = GENERATE(7, 8, 9);
//   auto e = GENERATE("x");            // single value
//   auto f = GENERATE("x", "y");       // multiple values

#define GENERATE(...) \
    ([&]() { \
        auto gen_range = ::ant::test::generator::make_range(__VA_ARGS__); \
        using gen_val_t = std::decay_t<decltype(*std::ranges::begin(gen_range))>; \
        gen_val_t* gen_value{nullptr}; \
        std::size_t gen_idx = 0; \
        for (auto& gen_in : gen_range) \
        { \
            std::string gen_subcase_name = std::format("{{{}}}[{}]", #__VA_ARGS__, gen_idx++); \
            DOCTEST_SUBCASE(gen_subcase_name.c_str()) \
            { \
                gen_value = &gen_in; \
            } \
        } \
        if (gen_value == nullptr) \
        { \
            DOCTEST_FAIL("GENERATE(...) was called with an empty range or no values."); \
        } \
        if constexpr (std::is_copy_constructible_v<gen_val_t>) \
        { \
            return *gen_value; \
        } \
        else \
        { \
            return std::move(*gen_value); \
        } \
    }())

namespace ant::test {

// use for outputting comparison results of two vectors ignoring order
template<typename T>
struct equivalent_result
{
    constexpr operator bool() const noexcept
    {
        return value;
    }

    const std::vector<T>& lhs;
    const std::vector<T>& rhs;
    bool value;
};

template<typename T>
auto equivalent(const std::vector<T>& lhs, const std::vector<T>& rhs) -> equivalent_result<T>
{
    if (lhs.size() != rhs.size())
    {
        return {lhs, rhs, false};
    }

    for (const auto& item : lhs)
    {
        if (std::ranges::find(rhs, item) == rhs.end())
        {
            return {lhs, rhs, false};
        }
    }
    return {lhs, rhs, true};
}

template<typename T>
auto to_string(const std::vector<T>& in, std::ostringstream& stream) -> void
{
    stream << "[";
    for (std::size_t i = 0; i < in.size(); ++i)
    {
        if (i != 0) { stream << ", "; }
        stream << in[i];
    }
    stream << "]";
}

template<typename T>
auto to_string(const std::vector<T>& in) -> std::string
{
    std::ostringstream stream;
    to_string(in, stream);
    return stream.str();
}

template<typename T>
auto to_string(const equivalent_result<T>& in) -> std::string
{
    std::ostringstream stream;

    stream << "lhs: ";
    to_string(in.lhs, stream);

    stream << ", rhs: ";
    to_string(in.rhs, stream);

    return stream.str();
}

namespace generator {

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

} // namespace generator
} // namespace ant::test

template<typename T>
struct doctest::StringMaker<std::vector<T>>
{
    static auto convert(const std::vector<T>& in) -> doctest::String
    {
        return ant::test::to_string(in).c_str();
    }
};

template<typename T>
struct doctest::StringMaker<ant::test::equivalent_result<T>>
{
    static auto convert(const ant::test::equivalent_result<T>& in) -> doctest::String
    {
        return ant::test::to_string(in).c_str();
    }
};
