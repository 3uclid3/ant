# ant 🐜 — a tiny, fast ECS for Modern C++

[![Build and Test](https://github.com/3uclid3/ant/actions/workflows/build-test.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/build-test.yml)
[![Nightly](https://github.com/3uclid3/ant/actions/workflows/nightly.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/nightly.yml)
[![codecov](https://codecov.io/gh/3uclid3/ant/graph/badge.svg?token=sYuRqfodz0)](https://codecov.io/gh/3uclid3/ant)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cdfbbcc5d562402297abaa11292d1cc5)](https://app.codacy.com/gh/3uclid3/ant/dashboard)

> ⚠️ **Unstable API.** Active development, pre-1.0.
---
`ant` is an elegant header-only entity-component system designed for clarity, speed, and big swarms.

## Setup & quick start

**Requires:** xmake ≥ 2.8 and a C++23-capable compiler (Clang recommended).  
You can also use the provided dev container which has everything preinstalled.

```bash
# Configure (pick one mode)
xmake f -m debug        # or release | coverage
# Optional toggles
#   --junit_report=y|n  emit JUnit XML under build/
#   --benchmarks=y|n    enable benchmark targets

# Build all configured targets
xmake build

# Run tests
xmake test */unit            # unit tests
xmake test */compile         # compile-time tests
xmake test */bench           # benchmarks (requires --benchmarks=y)
xmake test                   # everything

# See stdout/stderr from tests/benchmarks
xmake test -v */unit
xmake test -v */bench
```

## Project layout

```txt
include/   → public ECS API (header-only)
tests/     → unit, compile, benchmark, and helpers
docs/uml/  → class diagrams (PlantUML)
```

For contribution style, commit rules, and diagram updates, see **[AGENTS.md](AGENTS.md)**.

---

🐜 _Tiny engine. Big swarms._
