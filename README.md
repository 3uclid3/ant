# ant - a simple, modern ECS that swarms efficiently

[![CI Linux](https://github.com/3uclid3/ant/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/ci-linux.yml)
[![CI Windows](https://github.com/3uclid3/ant/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/ci-windows.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cdfbbcc5d562402297abaa11292d1cc5)](https://app.codacy.com/gh/3uclid3/ant/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![codecov](https://codecov.io/gh/3uclid3/ant/graph/badge.svg?token=sYuRqfodz0)](https://codecov.io/gh/3uclid3/ant)

`ant` is a header-only, C++23 entity component system focused on clarity, fast iteration, and predictable performance. The project leans on a modern LLVM + xmake toolchain and keeps tests first-class so changes remain easy to validate.

## Prerequisites

- [xmake](https://xmake.io/) 2.8+ with the LLVM toolchain available.
- A C++23-capable compiler (LLVM/Clang is the curated default).

Running inside the provided devcontainer automatically satisfies these requirements.

## Build and Test

```bash
xmake f -m <debug|release>
xmake build
xmake test */<unit|compile>
```

## Contributing

The [AGENTS Contribution Guide](AGENTS.md) in this repository captures additional expectations for reviews and commit formatting.
