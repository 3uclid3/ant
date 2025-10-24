# ant - a simple, modern ECS that swarms efficiently

`ant` is a header-only, C++23 entity component system focused on clarity, fast iteration, and predictable performance. The project leans on a modern LLVM + xmake toolchain and keeps tests first-class so changes remain easy to validate.

## Prerequisites

- [xmake](https://xmake.io/) 2.8+ with the LLVM toolchain available.
- A C++23-capable compiler (LLVM/Clang is the curated default).

Running inside the provided devcontainer automatically satisfies these requirements.

## Build and Test

```bash
# configure for debug (default) or release (-m release)
xmake f -m debug

# build the library and supporting test artifacts
xmake build

# run unit tests (produces doctest output)
xmake run ant.test.unit

# optional: generate JUnit XML alongside test runs
xmake f --junit_report=y
xmake run ant.test.unit
```

Compile-time checks are modelled as build targets. You can validate them with:

```bash
xmake build ant.some_feature.test.compile.pass
```

Targets ending in `.compile.fail` are expected to fail to build; xmake will mark them as passed when compilation stops with an error.

## Benchmarks

Benchmark targets are gated behind an optional configuration so the `benchmark` dependency is only fetched when needed:

```bash
xmake f --benchmarks=y
xmake build ant.my_benchmark.test.bench
xmake run ant.my_benchmark.test.bench
```

## Contributing

The [AGENTS Contribution Guide](AGENTS.md) in this repository captures additional expectations for reviews and commit formatting.
