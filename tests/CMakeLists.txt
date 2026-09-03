include(FetchContent)

FetchContent_Declare(
  doctest
  GIT_REPOSITORY https://github.com/doctest/doctest.git
  GIT_TAG        v2.5.2
)
FetchContent_MakeAvailable(doctest)
include(${doctest_SOURCE_DIR}/scripts/cmake/doctest.cmake)

add_subdirectory(compile)
add_subdirectory(unit)
