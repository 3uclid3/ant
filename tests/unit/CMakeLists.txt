# doctest
include(FetchContent)
FetchContent_Declare(
      doctest
      GIT_REPOSITORY https://github.com/doctest/doctest.git
      GIT_TAG        v2.5.2
  )
FetchContent_MakeAvailable(doctest)

# ant_unit
add_executable(ant_unit
  src/detail/catalog/catalog_tests.cpp
  src/detail/catalog/table_column_tests.cpp
  src/detail/catalog/table_tests.cpp
  src/detail/entity/entity_registry_tests.cpp
  src/detail/entity/entity_traits_tests.cpp
  src/detail/env/env_registry_tests.cpp
  src/detail/query/query_builder_tests.cpp
  src/detail/query/query_cursor_tests.cpp
  src/detail/schema/component_meta_tests.cpp
  src/detail/schema/component_vtable_tests.cpp
  src/detail/schema/schema_tests.cpp
  src/detail/bitset_tests.cpp
  src/env_tests.cpp
  src/query_tests.cpp

  src/main.cpp
)
target_compile_definitions(ant_unit PRIVATE DOCTEST_CONFIG_USE_STD_HEADERS)

target_link_libraries(ant_unit
    PRIVATE
        ant
        ant_mock
        ant_warnings
        doctest::doctest
)

target_compile_options(ant_unit
  PRIVATE
  -fexceptions # exception for doctest REQUIRE
)

# discover tests
include(${doctest_SOURCE_DIR}/scripts/cmake/doctest.cmake)
doctest_discover_tests(ant_unit)
