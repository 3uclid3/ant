#include <doctest/doctest.h>

#include <ant/core/assert.hpp>

#if ANT_ASSERT_ENABLED

#include <ant.test.shared/assert_error.hpp>

namespace ant { namespace {

TEST_CASE("assert")
{
    CHECK_NOTHROW(ANT_ASSERT(true));
    CHECK_THROWS_AS(ANT_ASSERT(false), ant::assert_error);
}

}} // namespace ant

#endif // ANT_ASSERT_ENABLED
