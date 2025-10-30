#pragma once

#ifndef ANT_ENTITY_TYPE
#include <cstdint>
#define ANT_ENTITY_TYPE std::uint32_t
#endif

#ifndef ANT_PRETTY_FUNCTION
#if defined __clang__ || defined __GNUC__
#define ANT_PRETTY_FUNCTION __PRETTY_FUNCTION__
#define ANT_PRETTY_FUNCTION_PREFIX '='
#define ANT_PRETTY_FUNCTION_SUFFIX ']'
#elif defined _MSC_VER
#define ANT_PRETTY_FUNCTION __FUNCSIG__
#define ANT_PRETTY_FUNCTION_PREFIX '<'
#define ANT_PRETTY_FUNCTION_SUFFIX '>'
#else
#define ANT_PRETTY_FUNCTION
#define ANT_PRETTY_FUNCTION_PREFIX
#define ANT_PRETTY_FUNCTION_SUFFIX
#endif
#endif

#if __has_cpp_attribute(no_unique_address)
#define ANT_NO_UNIQUE_ADDRESS [[no_unique_address]]
#elif __has_cpp_attribute(msvc::no_unique_address)
#define ANT_NO_UNIQUE_ADDRESS [[msvc::no_unique_address]]
#else
#define ANT_NO_UNIQUE_ADDRESS
#endif
