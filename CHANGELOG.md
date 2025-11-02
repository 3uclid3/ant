# Changelog

All notable changes to this project will be documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Changed

- **BREAKING**: Removed the database template parameter and simplified the public database API. Schemas and related types no longer parameterize on the database type; downstream code will need to update includes and type aliases accordingly. (PR: remove-database-template-parameter)

## [0.9.0] - 2025-11-01

### Changed

- core: Simplified `dynamic_bitset` implementation for smaller, clearer code while preserving public API. (#53)

### Performance

- Reduced allocations and improved common-path bit operations for `dynamic_bitset`. (#53)

## [0.8.0] - 2025-10-30

### Changed

- **BREAKING**: Renamed `basic_entity_index` to `basic_entity_registry`; downstream code must include the new header and update type aliases accordingly.

## [0.7.0] - 2025-10-29

### Changed

- `dynamic_bitset` now stores up to 256 bits in place, eliminating heap traffic for small signatures and improving iteration locality.

### Fixed

- Clearing a table signature no longer trims higher-index components when removing lower ones.

## [0.6.0] - 2025-10-28

### Added

- New PlantUML class diagrams under `docs/uml/class/` for `core` and `database`.
- Draft/aspirational database diagram under `docs/uml/class/draft/`.
- Contribution guide overhaul in `AGENTS.md` (concise, human/AI-friendly); formatting aligned to repository `.clang-format`.
- Dependabot configuration for GitHub Actions and Docker; PRs labeled `build` and `deps`, with minor/patch updates grouped.
- Bitset iteration helpers to visit set/unset bits with optional early exit. (#33)
- Bulk operations to set or clear all logical bits in bitset. (#33)

### Changed

- README simplified with a quick start, small layout overview, and a link to `AGENTS.md`.
- Documented verbose test/benchmark output via `xmake test -v …` in README and `AGENTS.md`.
- CI workflows now also trigger on documentation changes (`docs/**`).
- CI: ignore `.github/dependabot.yml` on push; PR checks still run.
- **BREAKING**: Bitset `size()` now returns the exact logical size instead of rounding to block boundaries. (#33)
- **BREAKING**: Bitset constructors and `resize()` no longer round to block boundaries. (#33)
- **BREAKING**: Setting a bitset bit beyond the current end now grows the logical size automatically. (#33)
- Bitset operations (`all`, `none`, `count`) now correctly ignore unused tail bits. (#33)

### Removed

- Obsolete UML diagrams removed: `docs/uml/database.pu`, `docs/uml/attach-structural-migration.pu` (superseded by `docs/uml/class/**`).

## [0.5.0] - 2025-10-27

### Added

- Introduced table-oriented database storage with block columns and typed indices for the database module. (#25)

### Changed

- Marked existing schema and entity integrations as breaking due to the new table layout requirements. (#25)

## [0.4.0] - 2025-10-27

### Changed

- Replaced raw table index values with strongly typed enumerations, requiring downstream schema updates. (#24)

## [0.3.2] - 2025-10-27

### Added

- Added a tagged opaque index utility to model strongly typed identifiers across modules. (#23)

## [0.3.1] - 2025-10-26

### Added

- Added an allocator-aware dynamic bitset implementation for core utilities. (#22)

## [0.3.0] - 2025-10-26

### Changed

- Unified allocator rebind helpers under the core module, introducing breaking adjustments for custom allocators. (#21)

## [0.2.2] - 2025-10-26

### Added

- Added versioned entity index helpers and allocator convenience utilities. (#20)

## [0.2.1] - 2025-10-26

### Added

- Added a schema-driven environment store to the database module. (#19)

## [0.2.0] - 2025-10-26

### Changed

- Switched schema templates to parameterize on the database type rather than allocators, breaking existing schema definitions. (#18)

## [0.1.8] - 2025-10-25

### Added

- Added component schema metadata and declarative descriptors for database entities. (#14)

## [0.1.7] - 2025-10-25

### Added

- Added compile-time type information utilities and CRC32 support. (#12)

## [0.1.6] - 2025-10-24

### Changed

- Moved entity layout and trait logic into the database module to simplify integration points. (#11)

## [0.1.5] - 2025-10-24

### Added

- Added entity layout definitions, trait registration, and version tracking. (#10)

## [0.1.4] - 2025-10-24

### Added

- Added core bit utilities and constexpr mask helpers. (#6)

## [0.1.3] - 2025-10-24

### Added

- Added a configurable assert facility in the core module. (#5)

## [0.1.2] - 2025-10-24

### Added

- Added version API endpoints and generated version macros. (#4)

## [0.1.1] - 2025-10-23

### Changed

- Rebranded the project to Ant and overhauled the header-only ECS with updated tests and CI. (#1)
