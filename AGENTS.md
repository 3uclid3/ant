# Contribution Guide (for humans and AI)

This page keeps the essentials short and easy to scan. If you follow these bullets, you’re aligned.

## Project layout

- `include/` — Header-only ECS library (public API).
- `tests/` — `unit/`, `compile/`, `benchmark/`, `shared/` (each has its own `xmake.lua`).
- `build/` — Artifacts and reports. `build/<platform>/x64/{debug,release,coverage}/`. JUnit XML (when enabled) is emitted under `build/`.
- `docs/` — Documentation. UML diagrams live in `docs/uml/` (PlantUML `.pu`).
- `xmake.lua` — Root build config, includes test submodules.
- `Dockerfile` — Dev container with LLVM/xmake.
- `codecov.yml` — Coverage config.
- `README.md`, `LICENSE` — Overview and licensing.
- `CHANGELOG.md` — Human-maintained change log.

## Build and test (quick start)

- Configure: `xmake f -m <debug|release|coverage> [--junit_report=y|n] [--benchmarks=y|n]`
- Build all configured targets: `xmake build`
- Run unit tests: `xmake test -g unit`
- Run compile tests: `xmake test -g compile` (the only correct way)
- Run benchmarks: `xmake test -g bench` (requires `--benchmarks=y`)
- Run all tests: `xmake test`

## Code style

- C++23, Clang/LLVM; warnings are errors (`-Wall -Wextra`).
- Formatting: follow the repository’s `.clang-format` (run clang-format before committing).
- Naming: `snake_case` for everything; `UPPER_SNAKE_CASE` for macros; template parameters use `PascalCase` (e.g., `Value`, `Index`).
- Always use trailing return types for functions and lambdas.
- Prefer header declarations with separate source definitions.
- Document intent/rationale; keep public headers self-explanatory.

## Tests

- Unit tests use doctest; add suites under `tests/unit`.
- Naming for unit tests: `Class::Method: Description` (keep it short and imperative).
  - Examples: `basic_bitset::for_each_set: visits set bits`, `basic_bitset::resize: shrinks`.
  - Group tests by Method within a file (keep related cases together, e.g., all `resize` cases adjacent).
- Keep unit test cases narrowly scoped—exercise one observable behavior per test so failures stay precise.
- Compile tests live in `tests/compile/`, isolated per feature.
- Benchmarks in `tests/benchmark/` (enable with `--benchmarks=y`).
- Run tests before pushing; note any gaps automation can’t cover.
- Show test/benchmark output (stdout/stderr): `xmake test -v -g unit` or `xmake test -v -g bench`

## Versioning and changelog

- Keep `CHANGELOG.md` using Keep a Changelog with an `Unreleased` section; follow Conventional Commits.
- For any user-visible change, add a concise entry under `Unreleased` (group by Added/Changed/Fixed/Removed/etc.).
- Release checklist:
  - Bump version in `xmake.lua`.
  - Move `Unreleased` entries to a new version section with date (YYYY-MM-DD).
  - Create a matching git tag.
  - Ensure CI and coverage pass; publish artifacts/reports as needed.

## Commits and pull requests

- Use Conventional Commits (e.g., `feat:`, `fix:`, `docs:`, `test:`, etc.). Add `!` or a `BREAKING CHANGE:` footer for breaking APIs.
- All changes to `main` go through a PR (no direct pushes).
- Update `CHANGELOG.md` and UML diagrams when public APIs change—or state explicitly that no diagram update is needed.
- Write clear PR descriptions with purpose and scope.
- AI-generated changes must be reviewed by a human before merge. Record any generators/formatters/analysis tools used.

## Branch naming

- Format: `type[optional-scope]/short-description`
- Allowed types: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`
- Use lowercase and hyphens; alphanumeric and `-` only.
- Avoid repeated or trailing hyphens (e.g., no `new--thing`, no `name-`).
- Keep descriptions short and specific. Examples: `feat/new-login`, `fix/header-styling`.

## UML class diagrams

- Location: `docs/uml/class/**`
- Scope: public API only (classes and public members). Omit private/protected unless essential.
- Drafts/proposals: use `docs/uml/class/draft/` and add a `README.md` describing intent.
- Ignore internals: anything under `detail/` or in a `detail` namespace unless publicly aliased.
- Format: PlantUML (`.pu`). Commit sources only.
- Update diagrams in the same PR when public APIs change, or state that no update is needed.

## Tooling and environment

- Prefer the provided dev container (`Dockerfile`) for consistent LLVM/xmake tooling.
- Record any generators, formatters, or analysis tools invoked while preparing changes.
