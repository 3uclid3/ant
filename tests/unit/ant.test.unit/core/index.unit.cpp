#include <doctest/doctest.h>

#include <ant/core/index.hpp>

namespace ant { namespace {

using uidx32 = basic_index<struct uidx32_tag, std::uint32_t>;
using uidx64 = basic_index<struct uidx64_tag, std::uint64_t>;

TEST_CASE_TEMPLATE("basic_index: default ctor", T, uidx32, uidx64)
{
    T default_ctor;

    CHECK_EQ(default_ctor.value(), 0);
}

TEST_CASE_TEMPLATE("basic_index: operator==", T, uidx32, uidx64)
{
    T a{42};
    T b{42};
    T c{7};

    CHECK(a == b);
    CHECK_FALSE(a == c);
}

TEST_CASE_TEMPLATE("basic_index: operator<=>", T, uidx32, uidx64)
{
    T a{1};
    T b{2};
    T c{1};

    CHECK_EQ(a <=> b, std::strong_ordering::less);
    CHECK_EQ(b <=> a, std::strong_ordering::greater);
    CHECK_EQ(a <=> c, std::strong_ordering::equal);
}

TEST_CASE_TEMPLATE("basic_index: operator+=", T, uidx32, uidx64)
{
    T idx{5};

    idx += 3;
    CHECK_EQ(idx.value(), 8);

    idx += 2;
    CHECK_EQ(idx.value(), 10);
}

TEST_CASE_TEMPLATE("basic_index: operator-=", T, uidx32, uidx64)
{
    T idx{10};

    idx -= 4;
    CHECK_EQ(idx.value(), 6);

    idx -= 1;
    CHECK_EQ(idx.value(), 5);
}

TEST_CASE_TEMPLATE("basic_index: operator++ prefix", T, uidx32, uidx64)
{
    T idx{3};

    T cur = ++idx;
    CHECK_EQ(cur.value(), 4);
    CHECK_EQ(idx.value(), 4);

    cur = ++idx;
    CHECK_EQ(cur.value(), 5);
    CHECK_EQ(idx.value(), 5);
}

TEST_CASE_TEMPLATE("basic_index: operator++ postfix", T, uidx32, uidx64)
{
    T idx{3};

    T prev = idx++;
    CHECK_EQ(prev.value(), 3);
    CHECK_EQ(idx.value(), 4);

    prev = idx++;
    CHECK_EQ(prev.value(), 4);
    CHECK_EQ(idx.value(), 5);
}

TEST_CASE_TEMPLATE("basic_index: operator-- prefix", T, uidx32, uidx64)
{
    T idx{3};

    T cur = --idx;
    CHECK_EQ(cur.value(), 2);
    CHECK_EQ(idx.value(), 2);

    cur = --idx;
    CHECK_EQ(cur.value(), 1);
    CHECK_EQ(idx.value(), 1);
}

TEST_CASE_TEMPLATE("basic_index: operator-- postfix", T, uidx32, uidx64)
{
    T idx{3};

    T prev = idx--;
    CHECK_EQ(prev.value(), 3);
    CHECK_EQ(idx.value(), 2);

    prev = idx--;
    CHECK_EQ(prev.value(), 2);
    CHECK_EQ(idx.value(), 1);
}

TEST_CASE_TEMPLATE("basic_index: conversion operator", T, uidx32, uidx64)
{
    T idx{123};

    // implicit conversion
    typename T::value_type v = idx;
    CHECK_EQ(v, static_cast<typename T::value_type>(123));

    // explicit cast
    CHECK_EQ(static_cast<typename T::value_type>(idx), static_cast<typename T::value_type>(123));
}

}} // namespace ant
