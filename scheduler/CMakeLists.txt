add_library(ant_scheduler STATIC EXCLUDE_FROM_ALL)
add_library(ant::scheduler ALIAS ant_scheduler)

target_link_libraries(ant_scheduler
  PUBLIC
    ant::ant
  PRIVATE
    ant_warnings
)

target_sources(ant_scheduler
  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
      include
    FILES
      include/ant/scheduler.hpp
      include/ant/stage.hpp
  PRIVATE
    src/scheduler.cpp
)

if(ANT_BUILD_TESTS)
  add_subdirectory(tests)
endif()
