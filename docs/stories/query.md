# Query API Documentation

A type-safe iterator over entities matching a component signature. Compile-time parameters expose only valid accessors for required and optional columns, enabling efficient reads and updates.

## Classes

```cpp
// decorator
template<typename... T>
struct exclude {}; // exclude entities having any of the components T...

// Signature tag — bundles Parameters... into a single type
template<typename... Parameters>
class query_signature;

// Convenience aliases
template<typename... Parameters>
using query_of = query<query_signature<Parameters...>>;

template<typename... Parameters>
using query_row_of = query_row<query_signature<Parameters...>>;

// Query
template<typename Signature>
class query
{
public:
    using row_type = query_row<Signature>;
    using iterator = /* some iterator type over row_type */;

    auto begin() -> iterator;
    auto end() -> iterator;

    auto row(ant::entity e) -> std::optional<row_type>;
    auto count_rows() const -> std::size_t;
};

// Query Row
template<typename Signature>
class query_row
{
public:
    // entity associated with this row
    auto entity() const noexcept -> ant::entity;

    // available only to required parameters (T or const T in the signature)
    template<typename T>
    auto get() const noexcept -> const T&;

    template<typename T>
    auto get() noexcept -> T&;

    // available only to optional parameters (T* or const T* in the signature)
    template<typename T>
    auto has() const noexcept -> bool;

    template<typename T>
    auto try_get() const noexcept -> const T*;

    template<typename T>
    auto try_get() noexcept -> T*;
};
```

## Usage

How to use a query to iterate over entities with `position` and `velocity` components, and optionally a `weapon` component.

```cpp
// Obtain a query from the database
ant::query_of<position, const velocity, weapon*> select =
    database.query<ant::query_signature<position, const velocity, weapon*>>();

// execute the query and iterate over the results
for (ant::query_row_of<position, const velocity, weapon*> row : select)
{
    const velocity& vel = row.get<velocity>();
    position& pos = row.get<position>();

    float fx = 1.0f;
    float fy = 1.0f;
    if (const weapon* weap = row.try_get<weapon>())
    {
        // do something with the weapon, fx and fy
        fx = weap->x_factor;
        fy = weap->y_factor;
    }

    // update position based on velocity and factors
    pos.x += vel.x * fx;
    pos.y += vel.y * fy;
}
```

### Note

See also the [System API](./system.md) for how to use queries within systems.
