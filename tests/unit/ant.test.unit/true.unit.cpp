#include <doctest/doctest.h>

#include <ant/true.hpp>

namespace ant { namespace {

TEST_CASE("true")
{
    CHECK(return_true());
}

}} // namespace ant
