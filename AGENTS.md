# Repository Guidelines

## Project Structure & Module Organization

- `include/`: Header-only ECS implementation exposed to consumers.
- `tests/`: Split into `unit/`, `compile/`, `benchmark/`, and `shared/` helpers; each folder has its own `xmake.lua`.
- `build/`: Generated artifacts, including optional JUnit XML when enabled.
- `xmake.lua`: Root build configuration; references submodules under `tests/`.

## Build, Test, and Development Commands

- `xmake f -m debug`: Configure the project (debug by default; pass `-m release` for optimized builds).
- `xmake build`: Build all configured targets, including headers and tests.
- `xmake run ant.test.unit`: Execute doctest-based unit tests; pass `--junit_report=y` during configure to emit XML into `build/`.
- `xmake build ant.some_feature.test.compile.pass`: Validate compile-time expectations; `.fail` variants should fail to build.
- `xmake f --benchmarks=y && xmake run ant.my_feature.test.bench`: Enable and run optional Google Benchmark targets.

## Coding Style & Naming Conventions

- C++23 with Clang/LLVM toolchain; warnings are errors (`-Wall -Wextra` via xmake).
- Four-space indentation; avoid tabs.
- Use `snake_case` for all identifiers (files, directories, namespaces, types, functions, variables); reserve `UPPER_SNAKE_CASE` for macros.
- Always use trailing return types for free functions, member functions, and lambdas.
- Separate declarations (headers) from definitions (sources) for every class and function, even when inline definitions seem shorter.
- Document rationale, not implementation; keep public headers self-explanatory.

## Testing Guidelines

- Unit tests rely on doctest; add new suites under `tests/unit`.
- Compile tests live in `tests/compile/` and should be isolated per feature.
- Benchmarks belong in `tests/benchmark/` and require the `benchmarks` option enabled.
- Run `xmake test` before pushing; capture manual notes if automation cannot cover a change.

## Commit & Pull Request Guidelines

- Follow Conventional Commits (`feat:`, `fix:`, `build:`, etc.); keep commits focused.
- All changes to `main` require a pull request; do not push directly.
- Include verification steps and tool usage notes in every PR description.
- AI-assisted contributions must be prepared via the Codex CLI and reviewed by a human maintainer before merge.

## Branch Naming

- Format: `type/short-description`. `type` must be a Conventional Commits type: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`. Examples: `feat/new-login`, `fix/header-styling`.
- Lowercase and hyphen-separated: use lowercase and hyphens for words (e.g., `feat/new-login`).
- Alphanumeric characters: only letters, numbers, and hyphens. Avoid spaces, punctuation, and underscores.
- No continuous hyphens: avoid sequences like `feature--new-login`.
- No trailing hyphens: do not end names with a hyphen (e.g., `feature-new-login-`).
- Descriptive: keep the description concise and reflective of the change.

## Agent-Specific Notes

- Operate inside the provided devcontainer for consistent LLVM/xmake tooling.
- Record any generators, formatters, or analysis tools invoked while preparing a change.
