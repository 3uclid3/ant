# Access semantics 

In Ant, access semantics define how components are accessed within queries, changesets, and systems. The access semantics are determined by the type qualifiers used in the component type declarations.

## Universal grammar

The following grammar defines how to interpret component types in queries, changesets and systems:

- Type → required, present, read and write fields.
- const Type → required, present, read only.
- Type* → optional, may be present, read and write if present.
- const Type* → optional, may be present, read only if present.
  