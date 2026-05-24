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
  src/core/bitset_tests.cpp
  src/database/detail/catalog/catalog_tests.cpp
  src/database/detail/catalog/table_tests.cpp
  src/database/detail/catalog/table_column_tests.cpp
  src/database/detail/component/component_meta_tests.cpp
  src/database/detail/component/component_vtable_tests.cpp
  src/database/detail/entity/entity_registry_tests.cpp
  src/database/detail/entity/entity_traits_tests.cpp
  src/database/detail/env/env_registry_tests.cpp
  src/database/env_tests.cpp
  src/database/schema_tests.cpp
  src/main.cpp
)
set_target_properties(ant PROPERTIES CXX_EXTENSIONS OFF)
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
