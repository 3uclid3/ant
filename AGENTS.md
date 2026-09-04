# AGENTS.md

## Project overview

`ant` is an experimental, database-oriented Entity Component System library for C++26. Its public API is under `include/ant`, implementation files are under `src`, and tests are under `tests`.

## Build and test

The project requires CMake 3.30+, Ninja, and a C++26 compiler with reflection support (currently GCC 16+ with `-freflection`).

```sh
cmake --preset debug
cmake --build build
ctest --test-dir build --output-on-failure
```

Use the `release` preset for release builds and `coverage` for coverage builds. Run a focused test or test suite with:

```sh
ctest --test-dir build -R <name> --output-on-failure
ctest --test-dir build -L unit --output-on-failure
ctest --test-dir build -L compile --output-on-failure
```

## Code conventions

- Follow the repository `.clang-format`; format changed C++ files with `clang-format -i`.
- Keep function declarations and definitions separate, even in headers. Explicitly defaulted functions may remain in the enclosing class or struct, and valid correctness-driven exceptions are allowed.
- Keep out-of-class definitions in declaration order: define nested class and struct methods first, each in their declaration order, then define the enclosing type's methods in declaration order.
- Order includes in library files as follows, with one blank line between groups: standard-library headers, external-library headers, `ant`/`ant.testing` headers, then local quoted headers.
- Keep public headers in `include/ant` and implementation details in `include/ant/detail` or `src/detail`.
- Add new library source and public header files to `target_sources` in `CMakeLists.txt`.
- Preserve the typed-signature design around `env`, `query`, and `changeset`.
- Treat warnings as errors and avoid introducing compiler warnings.

## Tests

- Add runtime unit tests under `tests/unit/src` using doctest.
- Add compile-time API checks under `tests/compile/src`; this suite intentionally includes tests that must fail to compile.
- Test files place the tested file first, immediately followed by doctest, then use the same blank-line-separated include groups.
- Update the relevant test `CMakeLists.txt` when adding a test file.
- Build and run the full test suite before finishing a code change.

Keep changes focused, and update `README.md` when public usage or requirements change.
