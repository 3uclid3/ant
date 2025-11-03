# Query API Documentation

A type-safe iterator over entities matching a component signature. Compile-time parameters expose only valid accessors for required and optional columns, enabling efficient reads and updates.
  
## Classes

```cpp
// decorator
template<typename... T>
struct exclude {}; // exclude entity having any of the components T...

// Select Query
template<typename Entity, typename... Parameters>
class basic_select_query
{
public:
    using entity_type = Entity;
    using row_type = basic_select_query_row<Entity, Parameters...>;
    using iterator = /* some iterator type over row_type */;

    auto begin() const -> iterator;
    auto end() const -> iterator;
};

// Select Query Row
template<typename Entity, typename... Parameters>
class basic_select_query_row
{
public:
    using entity_type = Entity;

    // entity associated with this row
    auto entity() const -> entity_type;

    // available only to required parameters
    template<typename T>
    requires(column_in_query<const T, Parameters...>)
    auto get() const -> const T&;

    template<typename T>
    requires(column_in_query<T, Parameters...>)
    auto get() -> T&;

    // available only to optional parameters
    template<typename T>
    requires(column_in_query<const T*, Parameters...>)
    auto has() const -> bool;

    template<typename T>
    requires(column_in_query<const T*, Parameters...>)
    auto get() const -> const T*;

    template<typename T>
    requires(column_in_query<T*, Parameters...>)
    auto get() -> T*;
};
```

## Usage 

How to use a query to iterate over entities with `position` and `velocity` components, and optionally a `weapon` component.

```cpp
ant::select_query select = ant::make_query<position, const velocity, weapon*>(database);

// execute the query and iterate over the results
for (ant::row row : select)
{
    const velocity& vel = row.get<const velocity>();
    position& pos = row.get<position>();
    
    float fx = 1.0f;
    float fy = 1.0f;
    if (const weapon* weap = row.get<weapon*>())
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