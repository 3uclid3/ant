# tpl-cpp

A modern C++ template scaffolded around the [xmake](https://xmake.io) build system. It provides a minimal application entry point, a modular library layout, and pre-wired unit, fuzz, and benchmark harnesses so new projects can focus on domain logic immediately.

## Features

- C++23 toolchain with LLVM, extra warnings, and warnings-as-errors enabled by default.
- Separated `app/` and `lib/` targets to encourage layered architecture.
- Testing skeletons for doctest-based unit tests, fuzz targets, and benchmarks.
- Continuous integration friendly layout with generated `compile_commands.json`.

## Prerequisites

- [xmake](https://xmake.io) (tested with 2.8+).
- LLVM toolchain (`clang`, `clang++`, `lld`) available on `PATH`.
- A C++ standard library providing static runtimes (`libc++` on Linux by default).

## Getting Started

```bash
git clone <your-new-repo-url> project-name
cd project-name
xmake f -m debug   # configure for debug (or release/coverage)
xmake              # build all default targets
```

### Run the Sample Application

```bash
xmake run tpl-cpp
```

The default `main.cpp` simply returns success. Replace it with your application logic under `app/tpl-cpp/`.

### Execute Tests

- Run unit tests: `xmake run tpl-cpp.core.tests.unit`
- Enable JUnit output: `xmake run tpl-cpp.core.tests.unit --reporters=junit --out=report.xml`
- Add fuzz or benchmark targets under `tests/fuzz/` and `tests/benchmark/`, then invoke with `xmake run <target-name>`.

## Project Layout

- `app/` – application entry points grouped by executable.
- `lib/` – reusable libraries (`tpl-cpp.core` is the default static library target).
- `tests/` – doctest-based unit tests plus optional fuzz and benchmark targets.
- `build/` – generated artifacts (ignored from version control).
- `AGENTS.md` – contribution expectations for humans and AI collaborators.

## Development Environment

- A ready-to-use devcontainer lives in `.devcontainer/devcontainer.json`; open the repository in VS Code or GitHub Codespaces to get the curated toolchain automatically.
- For local Docker builds, use `.devcontainer/local/devcontainer.json`, which reuses the included `Dockerfile` to match CI defaults.
- Both devcontainer definitions mount `${HOME}/.codex` into the container, enabling Codex CLI authentication and tooling required by this template.
- If you work outside the devcontainer, replicate its dependencies (LLVM, xmake, Codex CLI) and confirm commands still succeed.

## Development Tips

- Use `xmake f --menu` for an interactive configuration UI.
- Generate compilation database (auto-enabled) under `build/compile_commands.json` for editor tooling.
- Extend `lib/core` with headers and source files; they are exported to dependents automatically.
- Keep tests close to the code they exercise for discoverability.

## Contributing

Follow the workflow, style, and commit conventions defined in `AGENTS.md`. In short:

- Use descriptive branch names and conventional commits.
- Document tooling and manual verification steps in pull requests.
- Add or update tests for every behavior change.
- Run Codex CLI within the provided devcontainer (or identical setup) when submitting AI-assisted changes.

## License

GPL-3.0-or-later. See [`LICENSE`](LICENSE) for full terms.
