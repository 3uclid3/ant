# ant — a simple, modern ECS that swarms efficiently

[![CI Linux](https://github.com/3uclid3/ant/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/ci-linux.yml)
[![CI Windows](https://github.com/3uclid3/ant/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/ci-windows.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cdfbbcc5d562402297abaa11292d1cc5)](https://app.codacy.com/gh/3uclid3/ant/dashboard)
[![codecov](https://codecov.io/gh/3uclid3/ant/graph/badge.svg?token=sYuRqfodz0)](https://codecov.io/gh/3uclid3/ant)

`ant` is a header-only, C++23 entity component system focused on clarity, fast iteration, and predictable performance. Built and tested with LLVM + xmake.

## Prerequisites

- xmake 2.8+ with LLVM/Clang available
- A C++23-capable compiler (Clang recommended)
- Or use the provided dev container to get everything preinstalled

## Quick start (build & test)

- Configure: `xmake f -m <debug|release|coverage> [--junit_report=y|n] [--benchmarks=y|n]`
- Build: `xmake build`
- Run unit tests: `xmake test */unit`
- Run compile tests: `xmake test */compile`
- Run benchmarks: `xmake test */bench` (requires `--benchmarks=y`)
- Show test/benchmark output (stdout/stderr): `xmake test -v */unit` or `xmake test -v */bench`

## Project layout

- `include/` — header-only ECS (public API)
- `tests/` — unit, compile, benchmark, shared helpers
- `docs/uml/` — PlantUML class diagrams

## Contributing

See the Contribution Guide in `AGENTS.md` (style, commits, PRs, diagrams, tooling).

## Changelog and License

- `CHANGELOG.md` — version history
- `LICENSE` — project license
