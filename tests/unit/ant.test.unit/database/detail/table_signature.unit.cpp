#include <doctest/doctest.h>

#include <ant/database/detail/table_signature.hpp>

#include <ant/database/detail/component_index.hpp>

namespace ant::detail { namespace {

using table_signature = basic_table_signature<std::allocator<std::byte>>;

TEST_CASE("table_signature::add: updates membership")
{
    table_signature signature;

    const detail::component_index zero{0};
    const detail::component_index five{5};
    const detail::component_index ten{10};

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
