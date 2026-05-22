#include <ant/core/type_list.hpp>

namespace ant { namespace {

// size
static_assert(type_list_size_v<type_list<>> == 0);
static_assert(type_list_size_v<type_list<int>> == 1);
static_assert(type_list_size_v<type_list<int, float, double>> == 3);

// index_of
static_assert(type_list_index_of_v<int, type_list<int, float, double>> == 0);
static_assert(type_list_index_of_v<float, type_list<int, float, double>> == 1);
static_assert(type_list_index_of_v<double, type_list<int, float, double>> == 2);

// contains
static_assert(type_list_contains_v<int, type_list<int, float, double>>);
static_assert(!type_list_contains_v<short, type_list<int, float, double>>);
static_assert(!type_list_contains_v<short, type_list<>>);

// concat
using concat_result = type_list_concat_t<type_list<int, float>, type_list<double, char>>;
static_assert(std::is_same_v<concat_result, type_list<int, float, double, char>>);

// fold_concat
using fold_concat_result = type_list_fold_concat_t<type_list<int>, type_list<float, double>, type_list<char>>;
static_assert(std::is_same_v<fold_concat_result, type_list<int, float, double, char>>);

// unique
using unique_result = type_list_unique_t<type_list<int, float, double, int, float>>;
static_assert(std::is_same_v<unique_result, type_list<int, float, double>>);

// filter
using filter_result = type_list_filter_t<std::is_floating_point, type_list<int, float, double, char>>;
static_assert(std::is_same_v<filter_result, type_list<float, double>>);

}} // namespace ant
