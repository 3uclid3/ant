function(ant_compile_test name path)
  set(target ant_compile.${name})
  if(path STREQUAL "")
    set(src_file src/${name}.cpp)
  else()
    set(src_file src/${path}/${name}.cpp)
  endif()
  add_library(${target} OBJECT ${src_file})
  target_link_libraries(${target} PRIVATE ant::ant ant_mock ant_warnings)
  set_target_properties(${target} PROPERTIES EXCLUDE_FROM_ALL TRUE)
  add_test(NAME ${name} COMMAND ${CMAKE_COMMAND} --build ${CMAKE_BINARY_DIR} --target ${target})
  set_tests_properties(${name} PROPERTIES LABELS compile)
endfunction()

function(ant_compile_fail_test name path)
  set(target ant_compile.${name}.fail)
  if(path STREQUAL "")
    set(src_file src/${name}.cpp)
  else()
    set(src_file src/${path}/${name}.cpp)
  endif()
  add_library(${target} OBJECT ${src_file})
  target_link_libraries(${target} PRIVATE ant::ant ant_mock ant_warnings)
  set_target_properties(${target} PROPERTIES EXCLUDE_FROM_ALL TRUE)
  add_test(NAME ${name} COMMAND ${CMAKE_COMMAND} --build ${CMAKE_BINARY_DIR} --target ${target})
  set_tests_properties(${name}
    PROPERTIES
      WILL_FAIL TRUE
      LABELS compile
  )
endfunction()

# core

## typelist
ant_compile_test(type_list meta)
ant_compile_fail_test(type_list_index_of_not_found meta)

## function_traits
ant_compile_test(function_traits detail)

# database

ant_compile_fail_test(database_changeset_requires_signature database)
ant_compile_fail_test(database_env_requires_signature database)
ant_compile_fail_test(database_query_requires_signature database)

## binding
ant_compile_test(binding_traits detail/binding)
ant_compile_fail_test(binding_traits_multiple_changesets detail/binding)
ant_compile_fail_test(binding_traits_multiple_envs detail/binding)
ant_compile_fail_test(binding_traits_no_args detail/binding)
ant_compile_fail_test(binding_traits_unsupported_type detail/binding)

## changeset
ant_compile_test(changeset changeset)
ant_compile_fail_test(changeset_unsupported_create changeset)
ant_compile_fail_test(changeset_unsupported_destroy changeset)
ant_compile_fail_test(changeset_unsupported_attach changeset)
ant_compile_fail_test(changeset_unsupported_attach_type changeset)
ant_compile_fail_test(changeset_unsupported_detach changeset)
ant_compile_fail_test(changeset_unsupported_detach_type changeset)
ant_compile_fail_test(changeset_unsupported_set_env changeset)
ant_compile_fail_test(changeset_unsupported_set_env_type changeset)
ant_compile_fail_test(changeset_unsupported_unset_env changeset)
ant_compile_fail_test(changeset_unsupported_unset_env_type changeset)

## env signature
ant_compile_test(env_signature_traits env)
ant_compile_fail_test(env_signature_traits_duplicate_type env)

## env
ant_compile_test(env_has env)
ant_compile_test(env_get env)
ant_compile_fail_test(env_has_unsupported_required env)
ant_compile_fail_test(env_has_unsupported_type env)
ant_compile_fail_test(env_get_optional_unsupported_access env)
ant_compile_fail_test(env_get_optional_unsupported_optional env)
ant_compile_fail_test(env_get_optional_unsupported_type env)
ant_compile_fail_test(env_get_unsupported_access env)
ant_compile_fail_test(env_get_unsupported_required env)
ant_compile_fail_test(env_get_unsupported_type env)

## query signature
ant_compile_test(query_signature_traits query)
ant_compile_fail_test(query_signature_traits_duplicate_parameter query)
ant_compile_fail_test(query_signature_traits_duplicate_type query)

## query row
ant_compile_test(query_row_has query)
ant_compile_test(query_row_get query)
ant_compile_fail_test(query_row_has_unsupported_required query)
ant_compile_fail_test(query_row_has_unsupported_type query)
ant_compile_fail_test(query_row_get_optional_unsupported_access query)
ant_compile_fail_test(query_row_get_optional_unsupported_optional query)
ant_compile_fail_test(query_row_get_optional_unsupported_type query)
ant_compile_fail_test(query_row_get_unsupported_access query)
ant_compile_fail_test(query_row_get_unsupported_required query)
ant_compile_fail_test(query_row_get_unsupported_type query)
