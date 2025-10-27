# Repository Guidelines

## Project Structure & Module Organization

- `include/`: Header-only ECS implementation exposed to consumers.
- `tests/`: Split into `unit/`, `compile/`, `benchmark/`, and `shared/` helpers; each folder has its own `xmake.lua`.
- `build/`: Generated artifacts and reports. On Windows the tree is `build/windows/x64/{debug,release,coverage}/`. When enabled, JUnit XML test reports are emitted under `build/`.
- `docs/`: Project documentation. UML diagrams live under `docs/uml/` (e.g., `.pu` PlantUML sources).
- `xmake.lua`: Root build configuration; references submodules under `tests/`.
- `Dockerfile`: Development container image to ensure a consistent LLVM/xmake toolchain.
- `codecov.yml`: Coverage reporting configuration.
- `README.md`, `LICENSE`: Repository overview and licensing.
- `CHANGELOG.md`: Human-maintained change history. See “Versioning & Changelog” below.

## Build, Test, and Development Commands

- Options (root `xmake.lua`): `--junit_report=y|n` (JUnit XML), `--benchmarks=y|n` (enable benchmarks)
- Modes: `debug` | `release` | `coverage`
- Configure: `xmake f -m <MODE> <OPTIONS>`
- Build: `xmake build` (no default target; builds configured targets)
- Tests (by group):
  - `xmake test */unit`
  - `xmake test */compile`  (only proper way to run compile tests)
  - `xmake test */bench`    (requires `--benchmarks=y`)
- Run a specific target (full output): `xmake run ant.test.unit`

## Coding Style & Naming Conventions

- C++23 with Clang/LLVM toolchain; warnings are errors (`-Wall -Wextra` via xmake).
- Four-space indentation; avoid tabs.
- Use `snake_case` for all identifiers (files, directories, namespaces, types, functions, variables); reserve `UPPER_SNAKE_CASE` for macros. Template parameter identifiers are the exception and should use `PascalCase` without a leading `T` prefix (e.g., `Value`, `Index`).
- Always use trailing return types for free functions, member functions, and lambdas.
- Separate declarations (headers) from definitions (sources) for every class and function, even when inline definitions seem shorter.
- Document rationale, not implementation; keep public headers self-explanatory.

## Testing Guidelines

- Unit tests rely on doctest; add new suites under `tests/unit`.
- Compile tests live in `tests/compile/` and should be isolated per feature.
- Benchmarks belong in `tests/benchmark/` and require the `benchmarks` option enabled.
- Run `xmake test` before pushing; capture manual notes if automation cannot cover a change.

## Versioning & Changelog

- Maintain `CHANGELOG.md` following Conventional Commits and a Keep a Changelog-style structure with an `Unreleased` section.
- For every user-visible change, add an entry under `Unreleased` with a concise description. Group by Added, Changed, Fixed, Removed, etc.
- When cutting a release:
  - Bump the version in `include/ant/version.hpp`.
  - Move items from `Unreleased` into a new version section with the release date (YYYY-MM-DD).
  - Create a tag matching the version.
  - Ensure CI and coverage checks pass; publish artifacts/reports as needed.

## Commit & Pull Request Guidelines

- Follow Conventional Commits (`feat:`, `fix:`, `build:`, etc.); keep commits focused.
- All changes to `main` require a pull request; do not push directly.
- Include verification steps and tool usage notes in every PR description.
- Update `CHANGELOG.md` in the same PR when applicable.
- AI-assisted contributions must be prepared via the Codex CLI and reviewed by a human maintainer before merge.

## Branch Naming

- Format: `type/short-description`. `type` must be a Conventional Commits type: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`. Examples: `feat/new-login`, `fix/header-styling`.
- Lowercase and hyphen-separated: use lowercase and hyphens for words (e.g., `feat/new-login`).
- Alphanumeric characters: only letters, numbers, and hyphens. Avoid spaces, punctuation, and underscores.
- No continuous hyphens: avoid sequences like `feature--new-login`.
- No trailing hyphens: do not end names with a hyphen (e.g., `feature-new-login-`).
- Descriptive: keep the description concise and reflective of the change.

## Documentation: UML Class Diagrams

- Location: `docs/uml/class/**`
- Keep diagrams in sync with the public API: classes and their public members only (omit private/protected unless essential).
- Exempt: `docs/uml/class/proposition/**` does not need to stay in sync.
- Ignore internals: omit anything under `detail/` folders or in any `detail` namespace (e.g., `ant::core::detail`).
- Format: PlantUML (`.pu`). Commit updated sources; rendered assets are optional.
- Update diagrams in the same PR when public APIs change, or note that no diagram change is needed.

## Agent-Specific Notes

- Prefer working inside the provided container image (`Dockerfile`) for consistent LLVM/xmake tooling.
- Record any generators, formatters, or analysis tools invoked while preparing a change.
