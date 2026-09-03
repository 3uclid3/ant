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
add_library(ant::ant ALIAS ant)
target_link_libraries(ant PRIVATE ant_warnings)
target_compile_features(ant PUBLIC cxx_std_26)
target_compile_options(ant PUBLIC -freflection) # experimental
target_sources(ant
  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
      include
    FILES
      include/ant/assert.hpp
      include/ant/binding.hpp
      include/ant/change_accumulator.hpp
      include/ant/changeset.hpp
      include/ant/changeset_fwd.hpp
      include/ant/component.hpp
      include/ant/database.hpp
      include/ant/entity.hpp
      include/ant/env.hpp
      include/ant/env_fwd.hpp
      include/ant/inspector.hpp
      include/ant/memory.hpp
      include/ant/query.hpp
      include/ant/query_fwd.hpp
      include/ant/query_iterator.hpp
      include/ant/scheduler.hpp
      include/ant/schema.hpp
      include/ant/type_list.hpp
      include/ant/component/component_bitset.hpp
      include/ant/component/component_index.hpp
      include/ant/component/component_meta.hpp
      include/ant/component/component_name.hpp
      include/ant/component/component_vtable.hpp
      include/ant/detail/changeset/change.hpp
      include/ant/detail/changeset/change_accumulator_consumer.hpp
      include/ant/detail/changeset/change_coalescer.hpp
      include/ant/detail/changeset/change_executor.hpp
      include/ant/detail/changeset/coalesced_change.hpp
      include/ant/detail/changeset/lifecycle_registry.hpp
      include/ant/detail/component/component_construct.hpp
      include/ant/detail/component/component_index.hpp
      include/ant/detail/component/component_meta.hpp
      include/ant/detail/component/component_vtable.hpp
      include/ant/detail/core/algorithm.hpp
      include/ant/detail/core/allocator.hpp
      include/ant/detail/core/assert.hpp
      include/ant/detail/core/containers.hpp
      include/ant/detail/core/dynamic_bitset.hpp
      include/ant/detail/core/memory.hpp
      include/ant/detail/core/type_indexer.hpp
      include/ant/detail/store/catalog.hpp
      include/ant/detail/store/entity_location.hpp
      include/ant/detail/store/entity_registry.hpp
      include/ant/detail/store/entity_traits.hpp
      include/ant/detail/store/env_registry.hpp
      include/ant/detail/store/store.hpp
      include/ant/detail/store/table.hpp
      include/ant/detail/store/table_column.hpp
      include/ant/detail/query/query_compiler.hpp
      include/ant/detail/query/query_cursor.hpp
      include/ant/detail/query/query_mapping.hpp
      include/ant/detail/type_traits/binding_traits.hpp
      include/ant/detail/type_traits/changeset_signature_traits.hpp
      include/ant/detail/type_traits/function_traits.hpp
      include/ant/detail/type_traits/query_signature_traits.hpp
      include/ant/detail/type_traits/signature_traits.hpp
      include/ant/scheduler/stage.hpp
      include/ant/signature/changeset_signature.hpp
      include/ant/signature/changeset_signature_traits.hpp
      include/ant/signature/env_signature.hpp
      include/ant/signature/env_signature_traits.hpp
      include/ant/signature/query_signature.hpp
      include/ant/signature/query_signature_traits.hpp
  PRIVATE
    src/changeset/change_accumulator.cpp
    src/detail/changeset/change_accumulator_consumer.cpp
    src/detail/changeset/change_coalescer.cpp
    src/detail/changeset/change_executor.cpp
    src/detail/changeset/lifecycle_registry.cpp
    src/detail/component/component_index.cpp
    src/detail/core/assert.cpp
    src/detail/core/memory.cpp
    src/detail/store/catalog.cpp
    src/detail/store/entity_registry.cpp
    src/detail/store/env_registry.cpp
    src/detail/store/table.cpp
    src/detail/store/table_column.cpp
    src/detail/query/query_compiler.cpp
    src/detail/query/query_cursor.cpp
    src/database.cpp
    src/scheduler.cpp
    src/schema.cpp
)

# tests
if(CMAKE_PROJECT_NAME STREQUAL PROJECT_NAME)
  option(ANT_BUILD_TESTS "Build ant tests" ON)
else()
  option(ANT_BUILD_TESTS "Build ant tests" OFF)
endif()

option(ANT_TESTING "Build ant testing library" ON)

if(ANT_TESTING OR ANT_BUILD_TESTS)
  add_subdirectory(testing)
endif()

if(ANT_BUILD_TESTS)
  enable_testing()
  add_subdirectory(tests/compile)
  add_subdirectory(tests/unit)
endif()
