#include <ant/core/assert.hpp>

#include <ant.test.shared/doctest.hpp>

#if ANT_ASSERT_ENABLED

namespace ant { namespace {

TEST_CASE("assert")
{
    CHECK_NOASSERT(ANT_ASSERT(true));
    CHECK_ASSERTS(ANT_ASSERT(false));
}

}} // namespace ant

#endif // ANT_ASSERT_ENABLED
