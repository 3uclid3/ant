# Relationships

A relationship type defines a bidirectional association between two distinct
entity roles. Each link connects two different entities, with no intermediary
entity, independent identity, or payload. The relationship type distinguishes
one kind of association from another.

## Definition

A relationship type must directly inherit from exactly one `ant::rel` whose two
endpoints have distinct role types:

```cpp
struct parent;
struct child;

struct parenthood : ant::rel<ant::one<parent>, ant::many<child>>
{};
```

Indirect inheritance from `ant::rel` is not a relationship declaration. The two
roles must be distinct because a role identifies an endpoint and its opposite.

`one<Role>` represents one related entity in membership storage;
`many<Role>` represents a collection of related entities. The role names the
related endpoint, so this storage belongs to the opposite endpoint. Stored
memberships are never empty: removing the final link removes the membership.

`schema::builder::define<Relationship>()` registers a relationship by defining
the hidden membership component for each endpoint. Using an unregistered
relationship is invalid and has undefined behavior. An assertion may diagnose
some invalid uses, but callers must not rely on that diagnosis.

## Representation and integrity

Each link is represented on both participating entities by internal
`detail::rel_member` components. `rel_traits` selects one of two membership
representations from the opposite endpoint's cardinality: a single related
entity for `one`, or a collection of related entities for `many`. In the
parenthood example, each parent stores a collection of children, while each
child stores a single parent.

The two memberships are one bidirectional link. They must be created, changed,
and removed together; a half-link must never be observable. There can be at
most one link of a given relationship type between the same pair of entities.
Repeating that link is idempotent.

Relationship membership is implementation detail. Applications must not name,
query, attach, detach, or otherwise access `detail::rel_member` directly.
Relationships are mutated through `link` and `unlink` and observed through
query joins.

Self-links are invalid, even when the endpoint roles differ. A relationship may
be defined only between two different entities.

## Structural mutation

Linking and unlinking are typed changeset capabilities:

```cpp
ant::changeset_of<ant::link<parenthood>, ant::unlink<parenthood>> changes;

changes.link<parenthood, parent, child>(parent_entity, child_entity);
changes.unlink<parenthood, parent, child>(parent_entity, child_entity);
changes.unlink<parenthood, child>(child_entity);
```

The role arguments associate each entity argument with an endpoint. A call with
an invalid relationship, a role outside that relationship, repeated roles, or
roles that do not cover the supplied endpoints must not compile. Link and
unlink are independent capabilities.

Except for entity identity creation, changeset operations are deferred. Calling
`link` or `unlink` records an intention and provides no read-your-writes view.
Relationship changes become visible only when `database::flush` applies them,
under the synchronization, ordering, exception, and invalidation rules in
[Structural mutation](structural-mutation.md).

### Linking

Linking attaches or updates the hidden membership on both endpoints as one
operation. Before attaching a `one` membership, flush must verify that it will
not overwrite a different existing link. Such an overwrite would break the
bidirectional invariant and must trigger `ANT_ASSERT`; it is not component
replacement.

Coalescing uses the same deterministic least-work model as other structural
changes:

- repeated identical links are idempotent;
- among links that conflict with one another for the same `one` membership in
  the same flush, the first accepted link wins and later competitors are
  discarded;
- discarding a link discards the complete bidirectional operation, so it cannot
  leave either endpoint modified;
- distinct links at a `many` endpoint are retained.

### Unlinking

The two-entity overload identifies an edge to unlink; the cardinality rules
below can cause additional edges to be removed. The one-entity overload removes
the named entity from the relationship in the specified role.

Removing an entity that occupies a `one` endpoint removes all of its links
in that role. Removing an entity from a `many` endpoint removes only that
entity's participation. Memberships whose final link disappears are removed. For example, given
`rel<one<A>, many<B>>` with `a1` linked to `b1`, `b2`, and `b3`:

- `unlink<Rel, A, B>(a1, b1)` removes all three links from `a1` because the
  edge removal involves its `one<A>` endpoint;
- `unlink<Rel, A>(a1)` removes all three links from `a1`;
- `unlink<Rel, B>(b1)` removes only `a1` to `b1`, leaving `a1` linked to `b2`
  and `b3`.

Unlink intentions are applied before link intentions. Unlinking an old `one`
link and linking a different entity therefore replaces the existing link
within one flush. If unlink and link target the same pair, unlink dominates and
the pair remains absent.

Each subsequent flush starts from the database state produced by previous
flushes; already applied changes are not pending intentions to coalesce again.

Destroying an entity removes it from every counterpart during the same flush.
Counterpart memberships whose final link disappears are detached. Destruction
must not leave dangling or half-present links.

## Query joins

A query signature declares a join with a relationship type, the endpoint role
to observe, and the joined entity's component filters and nested joins:

```cpp
ant::join<parenthood, child, const position, ant::exclude<sleeping>>
```

The role names the related endpoint. A `(Relationship, Role)` pair may occur at
most once among the direct joins of the same signature. A nested signature has
its own independent set of direct joins.

Every join is required. A parent row qualifies only when every direct join has
at least one related entity that satisfies its complete joined signature. This
check is recursive: a candidate joined entity that fails one of its own
required joins is omitted, while other successful candidates may still qualify
the parent. `query::row(entity)` returns no row when the entity fails any
required join.

Sibling joins are an AND of existential conditions, not an implicit Cartesian
product. A root entity is emitted once. Each direct join exposes its own matches
through `query_row::join<Relationship, Role>()`; callers form combinations
explicitly by nesting iteration over sibling join results.

A `one<Role>` join returns one `query_row<JoinedSignature>`. It is not optional:
the parent row could not have been constructed without that specifically linked
entity satisfying the complete joined signature. A `many<Role>` join returns a
non-empty `query_rows<JoinedSignature>` range containing only directly related,
complete matches. Its iteration order is unspecified.

`query_rows::row(entity)` returns a row only when the entity is both in the
borrowed relationship membership and a complete match for the joined
signature.

For a parent row whose signature joins children, iterate the matching children:

```cpp
for (auto child_row : parent_row.join<parenthood, child>()) {
    // Access this child's requested components.
}
```

For a child row whose signature joins its parent, access the single matching row:

```cpp
auto parent_row = child_row.join<parenthood, parent>();
```

## Compilation

A `compiled_query` owns a fixed-size, flat preorder array of compiled query
parts. The first part describes the root signature; each join occurrence then
contributes its part followed by the parts for its nested joins.

A `query`, `query_row`, or `query_rows` holds a view over the part for its
current signature and all descendant parts. Index zero of every such view is
the current signature's part. `query_row::join` passes the selected child's
subtree as a subspan, making that child's part index zero without copying or
independent ownership.

Each part contains the matching tables and component-column mapping for its
signature. Archetype matching establishes that a parent has the hidden
membership required by a join. Row qualification then reads that membership,
locates each related entity in the child part's tables, and recursively verifies
the child's nested joins. Compilation does not capture a snapshot of particular
links or joined rows.

After flush, changing links while an entity remains in an already selected
archetype is observed by a freshly constructed query. Adding the first link or
removing the final link attaches or detaches hidden membership and can move an
entity to another table. Newly matching tables require recompilation; the
compiled query does not refresh itself. Bindings request recompilation before
supplying a query, while direct callers request it explicitly, as specified by
[Query lifecycle](query-lifecycle.md).

## Lifetime and invalidation

Joined rows and ranges are borrowed views. `query_row` and `query_rows` borrow
compiled-part views, and `query_rows` additionally borrows the related-entity
storage in a hidden membership component. They do not extend any dependency's
lifetime.

The lifetime and invalidation rules in [Query lifecycle](query-lifecycle.md)
apply to joined rows and ranges as well as root queries and rows.
