
add_library(ant_mock STATIC)
target_link_libraries(ant_mock PRIVATE ant ant_warnings)
target_sources(ant_mock
  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
        include
    FILES
      include/ant.mock/detail/catalog.hpp
      include/ant.mock/detail/table.hpp
      include/ant.mock/detail/schema.hpp
      include/ant.mock/component.hpp
  PRIVATE
    src/component.cpp
)
