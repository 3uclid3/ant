cmake_minimum_required(VERSION 3.30)
project(ant VERSION 0.1.0 LANGUAGES CXX)

#
set(CXX_EXTENSIONS OFF)
set(CMAKE_CXX_SCAN_FOR_MODULES OFF)

# warning
add_library(ant_warnings INTERFACE)
target_compile_options(ant_warnings INTERFACE
  $<$<CXX_COMPILER_ID:GNU>:-Wall -Wextra -Wpedantic -Werror>
  $<$<CXX_COMPILER_ID:Clang,AppleClang>:-Wall -Wextra -Wpedantic -Werror>
  $<$<CXX_COMPILER_ID:MSVC>:/W4 /WX>
)

# ant
add_library(ant STATIC)
target_link_libraries(ant PRIVATE ant_warnings)
target_compile_features(ant PUBLIC cxx_std_26)
target_compile_options(ant PUBLIC -freflection) # experimental
target_sources(ant
  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
      include
    FILES
      include/ant/detail/catalog/catalog.hpp
      include/ant/detail/catalog/table.hpp
      include/ant/detail/catalog/table_column.hpp
      include/ant/detail/changeset/change_queue.hpp
      include/ant/detail/changeset/changeset_signature_traits.hpp
      include/ant/detail/entity/entity_location.hpp
      include/ant/detail/entity/entity_registry.hpp
      include/ant/detail/entity/entity_traits.hpp
      include/ant/detail/env/env_registry.hpp
      include/ant/detail/env/env_signature_traits.hpp
      include/ant/detail/query/base_query.hpp
      include/ant/detail/query/query_builder.hpp
      include/ant/detail/query/query_cursor.hpp
      include/ant/detail/query/query_signature_traits.hpp
      include/ant/detail/schema/component_bitset.hpp
      include/ant/detail/schema/component_index.hpp
      include/ant/detail/schema/component_meta.hpp
      include/ant/detail/schema/component_name.hpp
      include/ant/detail/schema/component_vtable.hpp
      include/ant/detail/schema/schema.hpp
      include/ant/detail/assert.hpp
      include/ant/detail/algorithm.hpp
      include/ant/detail/dynamic_bitset.hpp
      include/ant/detail/signature_traits.hpp
      include/ant/detail/type_list.hpp
      include/ant/assert.hpp
      include/ant/changeset_fwd.hpp
      include/ant/entity.hpp
      include/ant/env.hpp
      include/ant/env_fwd.hpp
  PRIVATE
    src/detail/catalog/catalog.cpp
    src/detail/catalog/table.cpp
    src/detail/catalog/table_column.cpp
    src/detail/changeset/change_queue.cpp
    src/detail/entity/entity_registry.cpp
    src/detail/env/env_registry.cpp
    src/detail/query/query_builder.cpp
    src/detail/query/query_cursor.cpp
    src/detail/schema/component_index.cpp
    src/detail/schema/schema.cpp
    src/detail/assert.cpp
)

# tests
if(CMAKE_PROJECT_NAME STREQUAL PROJECT_NAME)
  option(ANT_BUILD_TESTS "Build ant tests" ON)
else()
  option(ANT_BUILD_TESTS "Build ant tests" OFF)
endif()

if(ANT_BUILD_TESTS)
  enable_testing()
  add_subdirectory(tests/mock)
  add_subdirectory(tests/compile)
  add_subdirectory(tests/unit)
endif()
