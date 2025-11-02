
#include <doctest/doctest.h>

#include <ant/database/schema.hpp>

#include <ant.test.shared/database/component_types.hpp>

namespace ant { namespace {

using allocator = std::allocator<std::byte>;
using schema_builder = basic_schema_builder<allocator>;
using schema = basic_schema<allocator>;

TEST_CASE_TEMPLATE("schema_builder::define: store component metadata correctly", T, bool, int, float, double, test::empty, test::trivial, test::non_trivial_copy, test::non_trivial)
{
    static detail::component_version version = 0;

    struct dummy_type
    {
        dummy_type() { value = -1; }
        int value;
    };

    schema_builder builder;
    builder.define<T>(type_name<T>::value(), version);

    schema built_schema = builder.build();

    const auto meta = built_schema.meta_of<T>();

    CHECK_EQ(meta.id, schema::id_of<T>());
    CHECK_EQ(meta.name, type_name<T>::value());
    CHECK_EQ(meta.version, version);
    CHECK_EQ(meta.size, sizeof(T));
    CHECK_EQ(meta.alignment, alignof(T));
    CHECK_EQ(meta.vtable, detail::component_vtable::of<T>());
    CHECK_NE(meta.vtable, detail::component_vtable::of<dummy_type>());

    ++version;
}

TEST_CASE("schema_builder::define: store components metadata correctly")
{
    schema_builder builder;
    builder.define<bool>("bool");
    builder.define<int>("int");
    builder.define<float>("float");
    builder.define<double>("double");
    builder.define<test::empty>("empty");
    builder.define<test::trivial>("trivial");
    builder.define<test::non_trivial_copy>("non_trivial_copy");
    builder.define<test::non_trivial>("non_trivial");

    schema built_schema = builder.build();

    CHECK_NE(built_schema.index_of<bool>(), detail::component_index::npos());
    CHECK_NE(built_schema.index_of<int>(), detail::component_index::npos());
    CHECK_NE(built_schema.index_of<float>(), detail::component_index::npos());
    CHECK_NE(built_schema.index_of<double>(), detail::component_index::npos());

    CHECK_NE(built_schema.index_of<test::empty>(), detail::component_index::npos());
    CHECK_NE(built_schema.index_of<test::trivial>(), detail::component_index::npos());
    CHECK_NE(built_schema.index_of<test::non_trivial_copy>(), detail::component_index::npos());
    CHECK_NE(built_schema.index_of<test::non_trivial>(), detail::component_index::npos());

    CHECK_EQ(built_schema.index_of<struct unknown>(), detail::component_index::npos());
    CHECK_EQ(built_schema.index_of<struct unknown_other>(), detail::component_index::npos());
}

}} // namespace ant
