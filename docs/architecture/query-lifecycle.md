# Query lifecycle

## Compilation

A `query` must require at least one component. A `compiled_query` is tied to one
database and stores matching tables and the column mapping for each component
parameter.

A `query` reads live table contents; it is not a snapshot. Changes to rows in
already selected tables are visible without recompilation. Deferred structural
changes become visible to subsequent query use after `database::flush` applies
them. Their accumulation and application are specified by
[Structural mutation](structural-mutation.md). Newly created matching tables
require recompilation. A stale `compiled_query` remains usable but omits those
tables and their entities. A `compiled_query` does not refresh itself;
constructing or using a `query` does not request recompilation.

## Use and lifetime

Retain the `compiled_query` and construct a transient `query` for each use.
Before constructing a `query`, direct callers request
`database::recompile_query` when they need an up-to-date table selection.
Bindings request recompilation before supplying a `query` and keep the
`compiled_query` alive throughout invocation.

The database must outlive the `compiled_query`. A `query`, its iterators, and rows
borrow from the `compiled_query`, which must remain alive and must not be
recompiled or replaced through assignment while they are in use. These objects
do not extend their dependencies' lifetimes.

`query::row(entity)` returns an empty optional when the entity is absent from
the selected tables. An `entity` value alone does not imply a queryable row.

## Flush and invalidation

`query` use must finish before `database::flush`; no other work against the
database may overlap flush.

Do not retain `query`, `query_row`, iterators, or component pointers or references
across flush. Retain the `compiled_query`; after flush, request recompilation
when an up-to-date table selection is required, then construct a fresh `query`
and reacquire its rows, iterators, and component access. Recompilation
invalidates previously borrowed views.
