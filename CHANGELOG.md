# Changelog

All notable changes to this project will be documented here.  
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

<!-- Add new changes here under the appropriate section (Added/Internal/Docs/etc.) -->

## [0.1.0] - 2025-11-03

### Added
- Core modules for ECS and database foundation (`core`, `database`).
- Allocator-aware containers, runtime schema system, and entity registry prototypes.
- Compile-time utilities, CRC32 hashing, and type information helpers.
- Tagged opaque index utilities and `dynamic_bitset` implementation.
- UML diagrams, contribution guide, CI workflows, and dependabot configuration.
- Version API, macros, and repository metadata.
- README quick start and test/benchmark documentation.

### Internal
- Multiple architecture refactors and reorganizations to stabilize module boundaries.
- Iterative redesigns of schema, table, and allocator layers.
- Simplification and cleanup of database types, indices, and column storage.
- Renames, removals, and reworks of early prototypes and deprecated headers.
- Performance improvements to `dynamic_bitset` and index lookup paths.
- Early documentation and CI refinements aligned with repository structure.
