function(ant_compile_test name path)
  set(target ant_compile.${name})
  if(path STREQUAL "")
    set(src_file src/${name}.cpp)
  else()
    set(src_file src/${path}/${name}.cpp)
  endif()
  add_library(${target} OBJECT ${src_file})
  target_link_libraries(${target} PRIVATE ant ant_warnings)
  set_target_properties(${target} PROPERTIES EXCLUDE_FROM_ALL TRUE)
  add_test(NAME ${name} COMMAND ${CMAKE_COMMAND} --build ${CMAKE_BINARY_DIR} --target ${target})
endfunction()

function(ant_compile_fail_test name path)
  set(target ant_compile.${name}.fail)
  if(path STREQUAL "")
    set(src_file src/${name}.cpp)
  else()
    set(src_file src/${path}/${name}.cpp)
  endif()
  add_library(${target} OBJECT ${src_file})
  target_link_libraries(${target} PRIVATE ant ant_warnings)
  set_target_properties(${target} PROPERTIES EXCLUDE_FROM_ALL TRUE)
  add_test(NAME ${name} COMMAND ${CMAKE_COMMAND} --build ${CMAKE_BINARY_DIR} --target ${target})
  set_tests_properties(${name} PROPERTIES WILL_FAIL TRUE)
endfunction()

## core

# typelist
ant_compile_test(type_list core)
ant_compile_fail_test(type_list_index_of_not_found core)

## database

# env
ant_compile_test(env_has database/env)
ant_compile_test(env_get database/env)

ant_compile_fail_test(env_has_unsupported_required database/env)
ant_compile_fail_test(env_has_unsupported_type database/env)
ant_compile_fail_test(env_get_optional_unsupported_access database/env)
ant_compile_fail_test(env_get_optional_unsupported_optional database/env)
ant_compile_fail_test(env_get_optional_unsupported_type database/env)
ant_compile_fail_test(env_get_unsupported_access database/env)
ant_compile_fail_test(env_get_unsupported_required database/env)
ant_compile_fail_test(env_get_unsupported_type database/env)
