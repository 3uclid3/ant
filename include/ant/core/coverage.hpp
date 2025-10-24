#pragma once

// disable function coverage
#if defined(__clang__)
#define ANT_COVERAGE_FUNCTION_DISABLED __attribute__((no_profile_instrument_function))
#else
#define ANT_COVERAGE_FUNCTION_DISABLED
#endif
