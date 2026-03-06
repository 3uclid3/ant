#include <cstddef>
#include <cstdint>

#include <benchmark/benchmark.h>

#include <ant/core/dynamic_bitset.hpp>

namespace ant { namespace {

constexpr std::size_t min_bits = 64;
constexpr std::size_t max_bits = 1 << 16;
constexpr std::size_t bits_per_block = sizeof(std::uint64_t) * 8;

// Group A: Core comparable (v0 vs v1)

static void bm_set_sequential(benchmark::State& state)
{
    const std::size_t bit_count = static_cast<std::size_t>(state.range(0));
    dynamic_bitset bitset{bit_count};

    for (auto _ : state)
    {
        state.PauseTiming();
        bitset.reset();
        state.ResumeTiming();

        for (std::size_t i = 0; i < bit_count; ++i)
        {
            bitset.set(i);
        }
    }

    state.SetComplexityN(bit_count);
}

static void bm_count_all_set(benchmark::State& state)
{
    const std::size_t bit_count = static_cast<std::size_t>(state.range(0));
    dynamic_bitset bitset(bit_count);
    bitset.set();

    for (auto _ : state)
    {
        benchmark::DoNotOptimize(bitset.count());
    }

    state.SetComplexityN(bit_count);
}

static void bm_for_each_set_sparse(benchmark::State& state)
{
    const std::size_t bit_count = static_cast<std::size_t>(state.range(0));
    dynamic_bitset bitset(bit_count);

    for (std::size_t i = 0; i < bit_count; i += 2)
    {
        bitset.set(i);
    }

    for (auto _ : state)
    {
        std::size_t visited = 0;
        bitset.for_each_set([&](std::size_t idx) {
            visited += idx;
        });
        benchmark::DoNotOptimize(visited);
    }

    state.SetComplexityN(bit_count);
}

// within_capacity
// Pre-reserve capacity by first resizing to cap_bits, then bounce between two sizes <= capacity.
static void bm_resize_within_capacity(benchmark::State& state)
{
    const std::size_t cap_bits = static_cast<std::size_t>(state.range(0));
    const std::size_t small_bits = cap_bits > 1 ? cap_bits / 2 : 1;

    dynamic_bitset bitset;
    bitset.resize(cap_bits);

    for (auto _ : state)
    {
        bitset.resize(small_bits);
        bitset.resize(cap_bits);
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(cap_bits);
}

// force_grow_realloc
// Start just below a block boundary, grow across it to guarantee reallocation.
static void bm_resize_force_grow_realloc(benchmark::State& state)
{
    const std::size_t requested_bits = static_cast<std::size_t>(state.range(0));
    const std::size_t blocks = (requested_bits + bits_per_block - 1) / bits_per_block;
    const std::size_t pre_blocks = blocks > 0 ? (blocks - 1) : 0;
    const std::size_t pre_bits = pre_blocks * bits_per_block; // capacity strictly less than target
    const std::size_t target_bits = pre_bits + 1;             // crosses into the next block

    dynamic_bitset bitset;

    for (auto _ : state)
    {
        state.PauseTiming();
        bitset = dynamic_bitset{}; // fresh object to reset capacity
        bitset.resize(pre_bits);   // ensure capacity == pre_blocks
        state.ResumeTiming();

        bitset.resize(target_bits); // must allocate every iteration
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(target_bits);
}

// force_shrink_free
// Grow to a big size then shrink to a much smaller size.
// If implementation frees on shrink, cost shows up; otherwise this should be near-free.
static void bm_resize_force_shrink_free(benchmark::State& state)
{
    const std::size_t big_bits = static_cast<std::size_t>(state.range(0));
    const std::size_t small_bits = bits_per_block; // shrink to 1 block

    dynamic_bitset bitset;

    for (auto _ : state)
    {
        state.PauseTiming();
        bitset.resize(big_bits);
        state.ResumeTiming();

        bitset.resize(small_bits);
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(big_bits);
}

static void bm_migrate_sbo_to_heap(benchmark::State& state)
{
    constexpr std::size_t sbo = dynamic_bitset::inplace_capacity;
    const std::size_t below = sbo > 0 ? (sbo - 1) : 0;
    const std::size_t above = sbo + 1;

    for (auto _ : state)
    {
        state.PauseTiming();
        dynamic_bitset bitset; // fresh object each iteration
        bitset.resize(below);  // ensure in-place
        state.ResumeTiming();

        bitset.resize(above); // force SBO -> heap migration
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(above);
}

BENCHMARK(bm_set_sequential)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_count_all_set)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_for_each_set_sparse)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_within_capacity)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_force_grow_realloc)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_force_shrink_free)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_migrate_sbo_to_heap)->Complexity();

}} // namespace ant

BENCHMARK_MAIN();
