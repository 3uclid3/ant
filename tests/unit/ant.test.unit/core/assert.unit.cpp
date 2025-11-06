#include <doctest/doctest.h>

#include <ant/core/assert.hpp>

#if ANT_ASSERT_ENABLED

#include <ant.test.shared/doctest/check.hpp>

namespace ant { namespace {

TEST_CASE("assert")
{
    CHECK_NOASSERT(ANT_ASSERT(true));
    CHECK_ASSERTS(ANT_ASSERT(false));
}

}} // namespace ant

#endif // ANT_ASSERT_ENABLED
