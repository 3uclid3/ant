# System API Documentation

A system is a plain function that declares read access via a typed query, write operations via a typed changeset, and optional environment access via `env<T>` for values stored in the environment registry (singleton-like). Its signature defines what it can access and mutate. See the [Query API](./query.md) and [Changeset API](./changeset.md).

## Classes

```cpp
// decorator
template<typename Signature>
struct env
{
};

template<typename... Components>
using env_of = env<env_signature<Components...>>;
```

## Usage

How to use a query and changeset within a system to process entities with `position` and optional `velocity` components, detach a `weapon` component based on some logic, and create a new entity with `position` and `velocity` components.

```cpp
using query_signature = ant::query_signature<position, const velocity*>;
using changeset_signature = ant::changeset_signature<
    ant::create_entity,
    ant::attach<position, velocity>,
    ant::detach<weapon>
>;

auto my_complex_system(ant::env_of<const clock> env, ant::query<query_signature> query, ant::changeset<changeset_signature> changeset) -> void
{
    const clock& clk = env.get<clock>();
    for (auto& row : query)
    {
        const position& pos = row.get<position>();
        const velocity* vel = row.get<velocity>();

        // process entity based on position and velocity
        if (vel && (pos.x + vel->x > 10.0f * clk.delta_time))
        {
            pos.x += vel->x;

            ant::entity e = row.entity();
            changeset.detach<weapon>(e);
        }
    }

    ant::entity new_entity = changeset.create_entity();
    changeset.attach<position>(new_entity, 0.0f, 0.0f, 0.0f);
    changeset.attach<velocity>(new_entity, 5.0f, 0.0f, 0.0f);
}
```
