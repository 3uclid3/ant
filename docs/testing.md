# Testing ant

## Test organization

Core tests live under [tests/](../tests/), covering the library in `include/ant`
and `src/`. Extensions keep their tests alongside their implementation
under `<extension>/tests/`; the scheduler is the current example.

| Suite | Location | Purpose |
| --- | --- | --- |
| Core unit tests | [tests/unit/src](../tests/unit/src/) | Runtime unit tests using doctest. |
| Core compile-time API tests | [tests/compile/src](../tests/compile/src/) | Checks that supported API usage compiles and unsupported usage fails to compile. |
| Core integration tests | `tests/integration/` (to be created) | Tests of sequences of interactions across core subsystems, using doctest assertions. |
| Scheduler tests | [scheduler/tests/src](../scheduler/tests/src/) | Currently runtime unit tests using doctest. |

## Running tests

```sh
cmake --preset debug
cmake --build build
ctest --test-dir build --output-on-failure
```

Use the `release` preset for release builds and `coverage` for coverage builds.
For focused runs, select tests by name or suite label:

```sh
ctest --test-dir build -R <name> --output-on-failure
ctest --test-dir build -L unit --output-on-failure
ctest --test-dir build -L compile --output-on-failure
```

The `unit` label includes unit tests for enabled extensions.
Run the full test suite before finishing a code change.

Compile-time tests use `ant_compile_test` for successful compilation and
`ant_compile_fail_test` for expected compilation failure in
[tests/compile/CMakeLists.txt](../tests/compile/CMakeLists.txt). CTest builds these
targets when it runs the tests; they are excluded from the normal build. A
successful normal build alone does not verify the compile-time suite.

Expected-failure tests currently accept any ordinary nonzero build exit status;
they do not check the compiler diagnostic. Keep one invalid operation per file
and inspect the compiler output when adding a test to confirm that the intended
API constraint caused the failure. An unrelated build error can otherwise make
an expected-failure test appear to pass.

## Writing tests

### One behavior per unit test

A unit test should validate one observable behavior or invariant. If a failure
could represent several independent behaviors, those should generally be separate
tests.

One behavior does not necessarily mean one assertion. Several assertions can
establish different parts of the same expected outcome. The distinction is
whether they describe one behavior or combine independent responsibilities.

For example, checking that an empty query's `begin()` equals its `end()` tests one
behavior. Combining that with checks for entity lookup and optional-component
access would combine independent behaviors and should be split into separate
tests.

### Regression tests

When fixing a bug in existing code, first add a test in the appropriate suite
that reproduces the bug, and run it to confirm that it fails for the expected
reason. Then fix the bug and rerun the test to confirm that it passes. Keep the
test as a regression test.

### Integration tests

Use integration tests when the behavior under test is the interaction between
subsystems, rather than when several subsystems are merely involved in setup.
For example, exercise a sequence of systems using queries, changesets, and
environment values, with flushes between steps, to verify how those operations
work together. Include parallel execution where it is relevant to the behavior
being tested.

### File conventions

Register new test files in the relevant test suite's `CMakeLists.txt`.

In unit test files, include the tested header first, immediately followed by
doctest. Follow these with the repository's usual blank-line-separated include
groups: standard-library headers, external-library headers, `ant` and
`ant.testing` headers, then local quoted headers. Format changed C++ files with
`clang-format -i` using the repository's [.clang-format](../.clang-format).
Warnings are treated as errors; test changes must not introduce compiler warnings.

## Test helpers

The `ant::testing` library provides reusable components, schema factories, and a
system fixture through the `<ant.testing/...>` headers. Its source lives under
[testing/](../testing/).

### Indexed components and schema factories

[`testing::component<Index>`](../testing/include/ant.testing/component.hpp)
provides distinct component types without having to declare a separate struct
for each one. Each has a static `index` and a mutable `std::size_t value` that
defaults to that index. For example, `component<0>` and `component<1>` are
different types, and `component<1>{42}` has a value of `42`.

The factories in
[`<ant.testing/schema.hpp>`](../testing/include/ant.testing/schema.hpp) simplify
schema setup:

- `testing::make_schema<T...>()` builds a schema from the supplied types.
- `testing::make_indexed_schema<N>()` builds a schema containing
  `component<0>` through `component<N - 1>`.

Together, these helpers make it easy to express different component combinations
in a test without introducing application-specific types:

```cpp
auto schema = ant::testing::make_indexed_schema<2>();
```

### System fixture

[`testing::system_fixture`](../testing/include/ant.testing/system.hpp) owns a
database initialized from a supplied schema. It provides helpers to create
entities, set and retrieve environment values, inspect entity components, and
execute a system. Entity creation, environment setup, and system execution flush
their accumulated changes before returning.

### Helpers local to the core tests

Some helpers are part of the test suite rather than the exported `ant::testing`
library. For example,
[`detail::entity_creator`](../tests/unit/src/detail/store/entity_creator.hpp)
creates entities directly through the catalog and entity registry for storage
and query tests. Its `create_entity<Indices...>()` overloads use indexed
components and optionally accept initial values.

## Coverage

Coverage is monitored during early development, with exceptions allowed to keep
iteration practical. Test meaningful behavior rather than adding tests solely
to raise the coverage percentage. Stricter enforcement is planned for the 0.1.0
release.

See the [coverage workflow](../.github/workflows/coverage.yml) for how reports are
generated and [codecov.yml](../codecov.yml) for configured targets and tolerances.
