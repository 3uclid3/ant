#include <ant/database/schema_builder.hpp>

#include <ant.test.shared/database/component.hpp>
#include <ant.test.shared/doctest.hpp>

namespace ant { namespace {

TEST_CASE_TEMPLATE("schema_builder::define: store component metadata correctly", T, test::trivial_component<24>, test::component<42>)
{
    constexpr std::uint16_t version = T::id; // use the id as version

    schema_builder builder;
    builder.define<T>(type_name<T>(), version);

    schema built_schema = builder.build();

    const detail::component_meta& meta = built_schema.meta_of<T>();

    CHECK_EQ(built_schema.index_of<T>(), meta.index);

    CHECK_EQ(meta.hash, type_hash<T>());
    CHECK_EQ(meta.name, type_name<T>());
    CHECK_EQ(meta.version, version);
    CHECK_EQ(meta.size, sizeof(T));
    CHECK_EQ(meta.alignment, alignof(T));
    CHECK_EQ(meta.vtable, detail::component_vtable::of<T>());
}

}} // namespace ant
