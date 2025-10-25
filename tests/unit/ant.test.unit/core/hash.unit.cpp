#include <doctest/doctest.h>

#include <ant/core/hash.hpp>

namespace ant::hash { namespace {

TEST_CASE("crc32")
{
    CHECK_EQ(crc32("hello"), 0x3610a686u);
    CHECK_EQ(crc32("world"), 0x3A771143u);
    CHECK_EQ(crc32("hello"), "hello"_crc32);
    CHECK_EQ(crc32("world"), "world"_crc32);
}

}} // namespace ant::hash