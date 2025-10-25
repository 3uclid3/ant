#include <doctest/doctest.h>

#include <ant/core/type_info.hpp>

namespace ant {

struct foo
{
};

namespace {

TEST_CASE("type_hash")
{
    CHECK_EQ(type_hash<int>::value(), type_hash<int>::value());
    CHECK_EQ(type_hash<foo>::value(), type_hash<foo>::value());

    CHECK_NE(type_hash<int>::value(), type_hash<foo>::value());
    CHECK_NE(type_hash<int>::value(), type_hash<int&&>::value());
    CHECK_NE(type_hash<int>::value(), type_hash<int&>::value());

    CHECK_EQ(type_hash<int>::value(), type_hash<int>());
    CHECK_EQ(type_hash<foo>::value(), type_hash<foo>());
}

TEST_CASE("type_name")
{
    CHECK_EQ(type_name<int>::value(), "int");
    CHECK_EQ(type_name<foo>::value(), "ant::foo");

    CHECK_EQ(type_name<int>::value(), type_name<int>());
    CHECK_EQ(type_name<foo>::value(), type_name<foo>());
}

TEST_CASE("type_info")
{
    CHECK_EQ(type_id<int>().hash(), type_hash<int>());
    CHECK_EQ(type_id<int>().name(), type_name<int>());
}

} // namespace
} // namespace ant
