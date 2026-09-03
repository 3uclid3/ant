add_library(ant_testing STATIC EXCLUDE_FROM_ALL)
add_library(ant::testing ALIAS ant_testing)
target_link_libraries(ant_testing PRIVATE ant_warnings ant::ant)
target_sources(ant_testing
  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
        include
    FILES
      include/ant.testing/component.hpp
      include/ant.testing/schema.hpp
      include/ant.testing/system.hpp
  PRIVATE
    src/component.cpp
)
