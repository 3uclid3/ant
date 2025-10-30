#include <cstddef>
#include <cstdint>

#include <benchmark/benchmark.h>

#include <ant/core/detail/dynamic_bitset/v0/dynamic_bitset.hpp>
#include <ant/core/detail/dynamic_bitset/v1/dynamic_bitset.hpp>

namespace {

using dynamic_bitset_v0 = ant::detail::dynamic_bitset::v0::basic_dynamic_bitset<std::uint64_t, std::allocator<std::uint64_t>>;
using dynamic_bitset_v1 = ant::detail::dynamic_bitset::v1::basic_dynamic_bitset<std::uint64_t, std::allocator<std::uint64_t>>;

constexpr std::size_t min_bits = 64;
constexpr std::size_t max_bits = 1 << 16;
constexpr std::size_t bits_per_block = sizeof(std::uint64_t) * 8;

// Group A: Core comparable (v0 vs v1)

template<typename Bitset>
static void bm_set_sequential(benchmark::State& state)
{
    const std::size_t bit_count = static_cast<std::size_t>(state.range(0));
    Bitset bitset{bit_count};

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

template<typename Bitset>
static void bm_count_all_set(benchmark::State& state)
{
    const std::size_t bit_count = static_cast<std::size_t>(state.range(0));
    Bitset bitset(bit_count);
    bitset.set();

    for (auto _ : state)
    {
        benchmark::DoNotOptimize(bitset.count());
    }

    state.SetComplexityN(bit_count);
}

template<typename Bitset>
static void bm_for_each_set_sparse(benchmark::State& state)
{
    const std::size_t bit_count = static_cast<std::size_t>(state.range(0));
    Bitset bitset(bit_count);

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
template<typename Bitset>
static void bm_resize_within_capacity(benchmark::State& state)
{
    const std::size_t cap_bits = static_cast<std::size_t>(state.range(0));
    const std::size_t small_bits = cap_bits > 1 ? cap_bits / 2 : 1;

    Bitset bitset;
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
template<typename Bitset>
static void bm_resize_force_grow_realloc(benchmark::State& state)
{
    const std::size_t requested_bits = static_cast<std::size_t>(state.range(0));
    const std::size_t blocks = (requested_bits + bits_per_block - 1) / bits_per_block;
    const std::size_t pre_blocks = blocks > 0 ? (blocks - 1) : 0;
    const std::size_t pre_bits = pre_blocks * bits_per_block; // capacity strictly less than target
    const std::size_t target_bits = pre_bits + 1;             // crosses into the next block

    Bitset bitset;

    for (auto _ : state)
    {
        state.PauseTiming();
        bitset = Bitset{};       // fresh object to reset capacity
        bitset.resize(pre_bits); // ensure capacity == pre_blocks
        state.ResumeTiming();

        bitset.resize(target_bits); // must allocate every iteration
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(target_bits);
}

// force_shrink_free
// Grow to a big size then shrink to a much smaller size.
// If implementation frees on shrink, cost shows up; otherwise this should be near-free.
template<typename Bitset>
static void bm_resize_force_shrink_free(benchmark::State& state)
{
    const std::size_t big_bits = static_cast<std::size_t>(state.range(0));
    const std::size_t small_bits = bits_per_block; // shrink to 1 block

    Bitset bitset;

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

// Group B: v1-only diagnostics (SBO specific)

static void bm_v1_migrate_sbo_to_heap(benchmark::State& state)
{
    using Bitset = dynamic_bitset_v1;
    constexpr std::size_t sbo = Bitset::inplace_capacity;
    const std::size_t below = sbo > 0 ? (sbo - 1) : 0;
    const std::size_t above = sbo + 1;

    for (auto _ : state)
    {
        state.PauseTiming();
        Bitset bitset;        // fresh object each iteration
        bitset.resize(below); // ensure in-place
        state.ResumeTiming();

        bitset.resize(above); // force SBO -> heap migration
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(above);
}

static void bm_v1_migrate_heap_to_sbo(benchmark::State& state)
{
    using Bitset = dynamic_bitset_v1;
    constexpr std::size_t sbo = Bitset::inplace_capacity;
    const std::size_t below = sbo > 0 ? (sbo - 1) : 0;
    const std::size_t above = sbo + bits_per_block; // clearly heap-resident

    for (auto _ : state)
    {
        state.PauseTiming();
        Bitset bitset;        // fresh object each iteration
        bitset.resize(above); // ensure heap
        state.ResumeTiming();

        bitset.resize(below); // heap -> SBO if policy migrates back (current impl keeps heap)
        benchmark::ClobberMemory();
    }

    state.SetComplexityN(above);
}

} // namespace

// Group A registrations (both versions)
BENCHMARK(bm_set_sequential<dynamic_bitset_v0>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_count_all_set<dynamic_bitset_v0>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_for_each_set_sparse<dynamic_bitset_v0>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_within_capacity<dynamic_bitset_v0>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_force_grow_realloc<dynamic_bitset_v0>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_force_shrink_free<dynamic_bitset_v0>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();

BENCHMARK(bm_set_sequential<dynamic_bitset_v1>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_count_all_set<dynamic_bitset_v1>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_for_each_set_sparse<dynamic_bitset_v1>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_within_capacity<dynamic_bitset_v1>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_force_grow_realloc<dynamic_bitset_v1>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();
BENCHMARK(bm_resize_force_shrink_free<dynamic_bitset_v1>)->RangeMultiplier(2)->Range(min_bits, max_bits)->Complexity();

// Group B registrations (v1-only)
BENCHMARK(bm_v1_migrate_sbo_to_heap)->Complexity();
BENCHMARK(bm_v1_migrate_heap_to_sbo)->Complexity();

BENCHMARK_MAIN();
