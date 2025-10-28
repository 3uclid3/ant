# Copilot Instructions

This file provides concise guidance for GitHub Copilot usage and expectations when contributing to the repository. It complements the project's Contribution Guide and ensures generated changes are safe, reviewable, and follow project conventions.

## Purpose
- Describe what Copilot (AI) is allowed to do in this repository.
- Provide reviewers and maintainers a checklist to validate AI-generated changes.
- Make sure generated code follows repository standards and the Contribution Guide.

## Allowed actions for Copilot
- Suggest small, self-contained fixes (typos, formatting, small refactors) that follow the project's style.
- Propose unit tests for small, well-understood behaviors.
- Draft documentation, README updates, and changelog entries that are later reviewed by a human.
- Create or update compile tests and benchmark scaffolding when clearly scoped.

## Disallowed or restricted actions
- Do not merge AI-generated pull requests without a human reviewer verifying correctness.
- Avoid making large API or ABI changes without an explicit human-approved design and tests.
- Do not update UML diagrams automatically—diagram changes must be reviewed and committed by a human.
- Do not modify licensing, contributor agreements, or other legal files without human approval.

## Commit and PR conventions
- Use Conventional Commits: feat:, fix:, docs:, style:, refactor:, perf:, test:, chore:, ci:, etc.
- Use the repository's branch naming format: type/short-description (e.g., feat/new-parser).
- Include a clear PR description describing purpose, scope, and tests added.
- Add a changelog entry for any user-visible change in CHANGELOG.md under `Unreleased`.

## Pull Request Reviews
- Ensure version bump consistency:
  - If a PR includes features or bug fixes (`feat:` or `fix:` commits), check that `xmake.lua` have updated version numbers.
  - If not, request an update comment like:  
    “Version number not updated. Please adjust set_version() and version constants before merge.”

## Testing and CI
- Run the project's configured tests locally before pushing:
  - Configure: `xmake f -m <debug|release|coverage> [--junit_report=y|n] [--benchmarks=y|n]`
  - Build: `xmake build`
  - Unit tests: `xmake test */unit`
  - Compile tests: `xmake test */compile` (required for compile-time checks)
  - Benchmarks: `xmake test */bench` (requires `--benchmarks=y`)
- Ensure CI passes, including clang-format, static analysis, and unit tests.

## Code style and formatting
- C++23 with Clang/LLVM toolchain; warnings are treated as errors.
- Apply `.clang-format` before committing.
- Use snake_case for symbols, UPPER_SNAKE_CASE for macros, PascalCase for template parameters.
- Prefer header declarations with separate source definitions and trailing return types for functions and lambdas.

## Reviewing AI-generated code
- Verify semantic correctness — ensure behavior matches intent and there are no edge-case regressions.
- Ensure tests adequately cover changes, including compile tests when appropriate.
- Confirm no secrets, credentials, or large binary blobs are introduced.
- Confirm changes to public API are reflected in CHANGELOG.md and UML diagrams (or explicitly note no diagram change is required).

## Documentation and changelog
- Any user-visible change must include a concise entry in CHANGELOG.md under `Unreleased` grouped by Added/Changed/Fixed/etc.
- When public APIs change, update UML class diagrams under `docs/uml/class/` or state explicitly that no diagram update is necessary.

## When in doubt
- Ask for a human review. Tag maintainers or open an issue describing the suggested change if it is non-trivial.
- Record in the PR description that the change was generated or assisted by AI and list the exact prompts, tools, and formatters used.

## Example reviewer checklist (quick)
- [ ] Branch name follows conventions
- [ ] Commits follow Conventional Commits
- [ ] Version bumped if needed (xmake.lua)
- [ ] CHANGELOG.md updated for user-visible changes
- [ ] Tests added/updated and pass locally
- [ ] clang-format applied
- [ ] CI green
- [ ] Human review completed for AI contributions
