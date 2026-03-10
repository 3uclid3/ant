# ant 🐜 entity component system

[![Build and Test](https://github.com/3uclid3/ant/actions/workflows/build-test.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/build-test.yml)
[![Nightly](https://github.com/3uclid3/ant/actions/workflows/nightly.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/nightly.yml)
[![codecov](https://codecov.io/gh/3uclid3/ant/graph/badge.svg?token=sYuRqfodz0)](https://codecov.io/gh/3uclid3/ant)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cdfbbcc5d562402297abaa11292d1cc5)](https://app.codacy.com/gh/3uclid3/ant/dashboard)

`ant` is an elegant entity-component system designed for clarity, speed, and big swarms.

> ⚠️ **Unstable API.** Active development, pre-1.0.

## Quick start

Requires xmake ≥ 2.8 and a C++23 compiler (Clang/LLVM recommended). Tested on Linux and Windows. The dev container includes everything.

```bash
# Configure (pick one mode)
xmake f -m debug        # or release | coverage
# Optional toggles
#   --junit_report=y|n  emit JUnit XML under build/
#   --benchmarks=y|n    enable benchmark targets
#   Combine with coverage: `xmake f -m coverage --junit_report=y`

# Build all configured targets
xmake build

# Run tests
xmake test -g unit           # unit tests
xmake test -g compile        # compile-time tests
xmake test -g bench          # benchmarks (requires --benchmarks=y)
xmake test                   # everything

# See stdout/stderr from tests/benchmarks
xmake test -v -g unit
xmake test -v -g bench
```

## Documentation

- Usage stories: see `docs/stories/` (e.g., `docs/stories/query.md`).
- UML diagrams (PlantUML): see `docs/uml/class/`.

## Project layout

```txt
include/            → public API
src/                → implementation
tests/              → unit, compile, benchmark, and helpers
docs/stories/       → usage examples
docs/uml/class/     → class diagrams (PlantUML)
build/              → build artifacts and reports
xmake.lua           → root build configuration
CHANGELOG.md        → human-maintained change log
```

For contribution style, commit rules, and diagram updates, see **[AGENTS.md](AGENTS.md)**. See also **[LICENSE](LICENSE)** and **[CHANGELOG](CHANGELOG.md)**.

---

🐜 _tiny engine. big swarms._
