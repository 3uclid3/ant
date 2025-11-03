# Changeset API Documentation

A compact, type-safe interface to stage and apply entity/component mutations. By declaring a `changeset_signature`, only allowed operations (create/destroy entities, attach/detach components) are available at compile time, enabling batch-friendly, predictable updates.

## Classes

```cpp
// decorators
struct create_entity { };
struct destroy_entity { };

template<typename... Components>
struct attach { };

template<typename... Components>
struct detach { };

// typelist of changes
template<typename... Changes> 
class changeset_signature;

template<typename Entity, typename Signature> 
class basic_changeset
{
public:
    using entity_type = Entity;

    requires(in_signature<create_entity, Signature>)
    auto create_entity() -> entity_type;

    requires(in_signature<destroy_entity, Signature>)
    auto destroy_entity(entity_type) -> void;

    template<typename Component, typename... Args>
    requires(in_signature<attach<Component>, Signature>)
    auto attach(entity_type, Args&&...) -> void;

    template<typename Component>
    requires(in_signature<detach<Component>, Signature>)
    auto detach(entity_type) -> void;
};
```

## Usage 

How to use a changeset to create an entity, attach `position` and `velocity` components, and detach a `weapon` component from an existing entity.

```cpp
// declare as signature of changeset
using my_signature = ant::changeset_signature<
    ant::create_entity,
    ant::attach<position, velocity>,
    ant::detach<weapon>
>;

ant::basic_changeset changeset = ant::make_changeset<my_signature>(database);

ant::entity a = /* existing entity */;
ant::entity e = changeset.create_entity();

changeset.attach<position>(e, 0.0f, 0.0f, 0.0f);
changeset.attach<velocity>(e, 1.0f, 0.0f, 0.0f);
changeset.detach<weapon>(a);
```

### Note

See also the [System API](./system.md) for how to use changesets within systems.
