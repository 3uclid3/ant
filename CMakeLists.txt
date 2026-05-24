cmake_minimum_required(VERSION 3.30)
project(ant VERSION 0.1.0 LANGUAGES CXX)

# warning
add_library(ant_warnings INTERFACE)
target_compile_options(ant_warnings INTERFACE
  $<$<CXX_COMPILER_ID:GNU>:-Wall -Wextra -Wpedantic -Werror>
  $<$<CXX_COMPILER_ID:Clang,AppleClang>:-Wall -Wextra -Wpedantic -Werror>
  $<$<CXX_COMPILER_ID:MSVC>:/W4 /WX>
)

# ant
add_library(ant STATIC)
set_target_properties(ant PROPERTIES CXX_EXTENSIONS OFF)
target_compile_features(ant PUBLIC cxx_std_26)
target_compile_options(ant PUBLIC -freflection) # experimental
target_link_libraries(ant PRIVATE ant_warnings)
target_sources(ant
  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
      include
    FILES
      include/ant/detail/catalog/catalog.hpp
      include/ant/detail/catalog/table.hpp
      include/ant/detail/catalog/table_column.hpp
      include/ant/detail/component/component_bitset.hpp
      include/ant/detail/component/component_index.hpp
      include/ant/detail/component/component_meta.hpp
      include/ant/detail/component/component_name.hpp
      include/ant/detail/component/component_vtable.hpp
      include/ant/detail/entity/entity_location.hpp
      include/ant/detail/entity/entity_registry.hpp
      include/ant/detail/entity/entity_traits.hpp
      include/ant/detail/env/env_registry.hpp
      include/ant/detail/env/env_signature_traits.hpp
      include/ant/detail/assert.hpp
      include/ant/detail/bitset.hpp
      include/ant/detail/schema.hpp
      include/ant/detail/signature_traits.hpp
      include/ant/detail/type_list.hpp
      include/ant/assert.hpp
      include/ant/entity.hpp
      include/ant/env.hpp
      include/ant/env_fwd.hpp
  PRIVATE
    src/detail/catalog/catalog.cpp
    src/detail/catalog/table.cpp
    src/detail/catalog/table_column.cpp
    src/detail/component/component_index.cpp
    src/detail/entity/entity_registry.cpp
    src/detail/env/env_registry.cpp
    src/detail/assert.cpp
    src/detail/schema.cpp
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
