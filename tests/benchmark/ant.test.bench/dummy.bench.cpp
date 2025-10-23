#include <benchmark/benchmark.h>

static void bm_some_function(benchmark::State& state)
{
    for (auto _ : state)
    {
    }
}

BENCHMARK(bm_some_function);

BENCHMARK_MAIN();
