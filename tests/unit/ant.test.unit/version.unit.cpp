#include <doctest/doctest.h>

#include <ant/version.hpp>

namespace ant { namespace {

TEST_CASE("version")
{
    CHECK_EQ(version::semver, ANT_VERSION_SEMVER);
    CHECK_EQ(version::major, ANT_VERSION_MAJOR);
    CHECK_EQ(version::minor, ANT_VERSION_MINOR);
    CHECK_EQ(version::patch, ANT_VERSION_PATCH);
}

}} // namespace ant
