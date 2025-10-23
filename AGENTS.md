# AGENTS Contribution Guide

This template repository welcomes code and documentation authored by humans or AI assistants. The expectations below keep the project tidy, reviewable, and predictable.

## Purpose

- Make every contribution easy to understand, test, and maintain.
- Capture repository conventions in one discoverable place.
- Highlight the extra diligence expected when AI tooling is involved.

## Scope and Expectations

- Follow these rules for all pull requests, branches, and direct pushes.
- AI-generated changes must be reviewed by a human maintainer before merging.
- Document any limitations of automated tools used during development.
- Prefer working inside the provided devcontainer definitions so every contribution uses the curated LLVM/xmake toolchain.
- When acting as an AI assistant, run through the Codex CLI with the repository’s mounted credentials (`~/.codex`) to maintain auditability.

## Workflow

- Discuss significant work in an issue before opening a pull request.
- Develop on topic branches named with `snake_case` words separated by hyphenated scopes (example: `feat-parser_refactor`).
- Keep commits focused; prefer several small commits over one large change.
- Rebase against `main` before opening or updating a pull request.

## Code Style

### Language Level

- Target modern C++ (C++23 or project default) with warnings treated as errors when possible.
- Prefer explicit, intention-revealing code; avoid magic numbers and hidden coupling.

### Naming Conventions

- Files and directories: `snake_case`
- Types, functions, variables: follow project-specific headers; default to `snake_case` unless the surrounding code base dictates otherwise.
- Macros: `UPPER_SNAKE_CASE`
- Enumeration values: `UpperCamelCase` unless inherited code requires alternatives.

### File Layout and Includes

#### Header files

1. Standard library headers
2. Third-party library headers
3. Project headers

#### Source files

1. Corresponding header file
2. Standard library headers
3. Third-party library headers
4. Project headers

#### Test files

1. `doctest.h`
2. Header of the unit under test
3. Standard library headers
4. Third-party library headers
5. Project headers

### Formatting and Idioms

- Use trailing return types for free functions and lambdas that are not obvious.
- Maintain consistent indentation (four spaces unless otherwise configured).
- Prefer `auto` only when the type is obvious from the right-hand side.
- Group related functions logically; keep translation units focused on a single responsibility.

### Comments and Documentation

- Write concise comments that explain rationale, not restate the code.
- Keep public headers self-documenting; supplement with brief doc comments where intent is non-obvious.
- Update `README.md` or dedicated docs when adding features or changing behavior.

## Testing

- Add or update tests under `tests/` for every meaningful change.
- Keep doctest cases isolated; avoid inter-test coupling through shared mutable state.
- Run the project test suite locally before requesting review.
- Provide manual verification notes when automated tests cannot cover the change.

## Tooling Discipline

- Record any formatter, static analyzer, or generation tool used in the pull request description.
- Verify generated code compiles cleanly and matches repository conventions.
- Never commit unchecked tool output; always review diffs line by line.
- Ensure the Codex CLI is active for AI-authored work; note the agent identity inside the pull request or commit body when applicable.

## Commit Guidelines

### Message Structure

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Allowed Types

1. **fix:** patches a bug (maps to PATCH in SemVer).
2. **feat:** introduces a new feature (maps to MINOR in SemVer).
3. **BREAKING CHANGE:** footer `BREAKING CHANGE: ...` or `type!` signals a breaking API shift (maps to MAJOR).
4. **build:** affects the build system or external dependencies.
5. **chore:** repository maintenance that does not touch `src/` or `tests/`.
6. **ci:** changes to continuous integration configuration or scripts.
7. **docs:** documentation-only changes.
8. **style:** formatting changes that do not alter behavior.
9. **refactor:** code changes that neither fix a bug nor add a feature.
10. **perf:** performance improvements.
11. **test:** add missing tests or correct existing ones.

Example:

```text
feat(parser): add ability to parse arrays
```

## Review Readiness Checklist

- [ ] Code matches style and naming conventions above.
- [ ] New functionality is covered by automated tests.
- [ ] Build passes locally (`xmake` or other project build scripts).
- [ ] Documentation, changelog, and examples updated when applicable.
- [ ] Pull request description includes verification steps and tool notes.

## References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
