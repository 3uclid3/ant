# Structural mutation

Structural mutation is collected during concurrent work and applied at an
exclusive synchronization point. Except for creating an entity identity,
changes requested through a `changeset` are deferred until `database::flush`.

## Mutation model

`changeset::create` immediately returns a valid entity identity. Creating the
identity does not place the entity in a table. The identity may be shared
immediately, but the entity has no queryable row until a deferred attachment is
applied by flush. Query visibility and invalidation are specified by
[Query lifecycle](query-lifecycle.md).

The following operations are deferred:

- destroying an entity;
- attaching or detaching a component;
- setting or unsetting an environment component.

Recording a deferred operation does not change database state and provides no
read-your-writes view. Deferred changes become visible only as flush applies
them. Direct mutation of an existing component value is not a structural
change; this document does not otherwise specify component access.

## Changesets and accumulators

A `changeset` is a typed, capability-restricted interface for requesting
changes. Its signature determines which operations it exposes. It borrows its
change accumulator and database state; both must outlive it.

A `change_accumulator` is a database-specific buffer of pending intentions. It
is not a snapshot, a transaction, or a view of future database state. Each
worker thread owns one accumulator exclusively; an accumulator is not
thread-safe and must not be written by multiple threads concurrently. Separate
threads may record deferred changes concurrently into separate accumulators.

An accumulator must be created for, used with, and flushed by the same database.
The database must outlive the accumulator. Violating this association is invalid
and must be caught by an assertion.

Flush consumes and empties every supplied accumulator. Some changes own
temporary construction data that is moved into the database when applied, so an
accumulator is not a replayable log. An emptied accumulator may be reused by its
owning thread after flush returns.

## Coalescing

Flush consumes accumulators in their span order and changes in their order
within each accumulator. Repeating the same ordered input from the same database
state must produce the same result. This order is deterministic input order; it
does not represent wall-clock time or an implicit priority among systems.

Coalescing resolves repeated or conflicting intentions with the least-work rule:

- destruction dominates every other change for the same entity;
- detachment dominates attachment of the same component on the same entity;
- unsetting an environment component dominates setting it;
- the first attachment of the same component to the same entity wins;
- the first set of the same environment component wins;
- equivalent repeated destructive changes are idempotent.

Discarded constructors are never invoked, and their captured values never enter
database storage. Applications should not use accumulator order to coordinate
competing structural ownership. Ownership of a component's attachment and
detachment should normally be centralized.

Attaching a component that the entity already has replaces its value. Because
membership does not change, this replacement invokes neither an attach nor a
detach callback. Detaching a component that the entity does not have is a no-op
and invokes no callback.

The behavior of changes targeting stale or otherwise invalid entity identities
is not yet specified. Callers must not rely on any particular result for such a
request.

## Flush

`database::flush` is an exclusive synchronization point. Before it begins, work
using the supplied accumulators must have finished. No other work against the
database may overlap flush, and supplied accumulators must not be accessed until
it returns.

Within each internal execution round, change types have this order:

1. Environment components are unset, then set.
2. Entities are destroyed; detach callbacks run before their components and
   identities are removed.
3. Detach callbacks run for effective removals from surviving entities.
4. Entity component-set transitions are applied.
5. Attach callbacks run for effective additions.

Entity order within a phase is unspecified. Component order is also unspecified.
Code must not infer ordering between different entities or components from
accumulator order or from a current implementation's iteration order.

Flush is not a transaction and provides no rollback guarantee. Exceptions from
component construction or lifecycle callbacks are unsupported; code invoked by
flush must not throw.

## Lifecycle callbacks

An attach callback runs only for an effective absent-to-present transition. It
runs after the component exists and receives mutable access to that component.
A detach callback runs only for an effective present-to-absent transition. It
runs before the component is removed and receives const access to it.

Callbacks registered for the same component event run in registration order.
No registration order is implied across different components or event types.

A lifecycle callback runs only when its binding is ready at the time of the
event. In particular, a binding is not ready when one of its required
environment components is absent. An unready callback is skipped; it is not
queued or retried if the binding becomes ready later in the flush.

Changes requested by callbacks cannot alter the already coalesced round being
executed. They are collected into the next internal round of the same flush.
Flush immediately coalesces and executes successive callback-generated rounds
until no changes remain, so a callback cascade completes within one flush rather
than being delayed to later flush.

Lifecycle callbacks must converge. A callback cycle that continually requests
effective changes can prevent flush from returning; there is currently no round
limit.

## Concurrency boundary

Concurrent mutation is limited to recording deferred changes in distinct,
thread-owned accumulators and creating entity identities through distinct
changesets. Immediate entity creation is required to be thread-safe even though
the current implementation has not yet completed that work.

Coalescing, execution, lifecycle callbacks, and visibility changes occur only
inside the exclusive flush. Flush itself is not concurrent with database work.
