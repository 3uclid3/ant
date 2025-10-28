#include <doctest/doctest.h>

#include <ant/core/type_info.hpp>

namespace ant {

struct foo
{
};

namespace {

TEST_CASE("type_hash::value: stable per type")
{
    CHECK_EQ(type_hash<int>::value(), type_hash<int>::value());
    CHECK_EQ(type_hash<foo>::value(), type_hash<foo>::value());

    CHECK_NE(type_hash<int>::value(), type_hash<foo>::value());
    CHECK_NE(type_hash<int>::value(), type_hash<int&&>::value());
    CHECK_NE(type_hash<int>::value(), type_hash<int&>::value());

    CHECK_EQ(type_hash<int>::value(), type_hash<int>());
    CHECK_EQ(type_hash<foo>::value(), type_hash<foo>());
}

TEST_CASE("type_name::value: matches expected string")
{
    CHECK_EQ(type_name<int>::value(), "int");
    CHECK_EQ(type_name<foo>::value(), "ant::foo");

    CHECK_EQ(type_name<int>::value(), type_name<int>());
    CHECK_EQ(type_name<foo>::value(), type_name<foo>());
}

TEST_CASE("type_info::hash: matches type_hash")
{
    CHECK_EQ(type_id<int>().hash(), type_hash<int>());
    CHECK_EQ(type_id<int>().name(), type_name<int>());
}

TEST_CASE("type_info::operator<=>: returns equal for same type")
{
    const auto result = type_id<int>() <=> type_id<int>();

    CHECK_EQ(result, std::strong_ordering::equal);
}

} // namespace
} // namespace ant
