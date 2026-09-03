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
  src/changeset/change_accumulator_tests.cpp
  src/component/component_meta_tests.cpp
  src/component/component_vtable_tests.cpp
  src/detail/changeset/change_coalescer_tests.cpp
  src/detail/changeset/change_executor_tests.cpp
  src/detail/changeset/lifecycle_registry_tests.cpp
  src/detail/core/dynamic_bitset_tests.cpp
  src/detail/store/catalog_tests.cpp
  src/detail/store/entity_creator.hpp
  src/detail/store/entity_registry_tests.cpp
  src/detail/store/entity_traits_tests.cpp
  src/detail/store/env_registry_tests.cpp
  src/detail/store/table_column_tests.cpp
  src/detail/store/table_tests.cpp
  src/detail/query/query_compiler_tests.cpp
  src/detail/query/query_cursor_tests.cpp
  src/binding_tests.cpp
  src/changeset_tests.cpp
  src/database_tests.cpp
  src/env_tests.cpp
  src/query_tests.cpp
  src/scheduler_tests.cpp
  src/schema_tests.cpp

  src/main.cpp
)
target_compile_definitions(ant_unit PRIVATE DOCTEST_CONFIG_USE_STD_HEADERS)

target_link_libraries(ant_unit
    PRIVATE
      ant_warnings
      ant::ant
      ant::ant_testing
      doctest::doctest
)

target_compile_options(ant_unit
  PRIVATE
  -fexceptions # exception for doctest REQUIRE
)

# discover tests
include(${doctest_SOURCE_DIR}/scripts/cmake/doctest.cmake)
doctest_discover_tests(ant_unit PROPERTIES LABELS unit)
