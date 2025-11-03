#include <doctest/doctest.h>

#include <ant/database/detail/table_signature.hpp>

namespace ant::detail { namespace {

TEST_CASE("table_signature::add: updates membership")
{
    table_signature signature;

    const std::size_t zero{0};
    const std::size_t five{5};
    const std::size_t ten{10};

    CHECK(signature.empty());
    CHECK_FALSE(signature.has(zero));

    signature.add(zero);

    CHECK_FALSE(signature.empty());
    CHECK(signature.has(zero));

    signature.add(five);
    signature.add(ten);

    CHECK(signature.has(zero));
    CHECK(signature.has(five));
    CHECK(signature.has(ten));

    signature.remove(five);

    CHECK(signature.has(zero));
    CHECK_FALSE(signature.has(five));
    CHECK(signature.has(ten));
}

}} // namespace ant::detail
