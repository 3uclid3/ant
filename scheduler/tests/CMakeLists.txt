add_executable(ant_scheduler_unit
  src/main.cpp
  src/scheduler_tests.cpp
)

target_compile_definitions(ant_scheduler_unit
  PRIVATE
    DOCTEST_CONFIG_USE_STD_HEADERS
)

target_link_libraries(ant_scheduler_unit
  PRIVATE
    ant_warnings
    ant::scheduler
    ant::testing
    doctest::doctest
)

target_compile_options(ant_scheduler_unit
  PRIVATE
    -fexceptions # exception for doctest REQUIRE
)

doctest_discover_tests(ant_scheduler_unit PROPERTIES LABELS unit)
