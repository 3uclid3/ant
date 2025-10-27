
#include <doctest/doctest.h>

#include <ant/database/schema.hpp>

#include <ant.test.shared/database/component_types.hpp>
#include <ant.test.shared/database/shim_database.hpp>

namespace ant { namespace {

using schema_builder = basic_schema_builder<test::shim_naked_database>;
using schema = basic_schema<test::shim_naked_database>;

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

    CHECK_NE(built_schema.index_of<bool>(), component_index::npos());
    CHECK_NE(built_schema.index_of<int>(), component_index::npos());
    CHECK_NE(built_schema.index_of<float>(), component_index::npos());
    CHECK_NE(built_schema.index_of<double>(), component_index::npos());

    CHECK_NE(built_schema.index_of<test::empty>(), component_index::npos());
    CHECK_NE(built_schema.index_of<test::trivial>(), component_index::npos());
    CHECK_NE(built_schema.index_of<test::non_trivial_copy>(), component_index::npos());
    CHECK_NE(built_schema.index_of<test::non_trivial>(), component_index::npos());

    CHECK_EQ(built_schema.index_of<struct unknown>(), component_index::npos());
    CHECK_EQ(built_schema.index_of<struct unknown_other>(), component_index::npos());
}

}} // namespace ant
