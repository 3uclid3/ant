# ant

[![Build](https://github.com/3uclid3/ant/actions/workflows/build.yml/badge.svg)](https://github.com/3uclid3/ant/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/3uclid3/ant/graph/badge.svg?token=PP05M010VK)](https://codecov.io/gh/3uclid3/ant)

A database-oriented Entity Component System framework for C++.

`ant` models your game or simulation world the way a database models data: entities are rows, components are columns, and the catalog is your schema-aware store. This makes queries, mutations, and change tracking feel natural rather than bolted on.

> **API is unstable and actively evolving.**

## Features

- Database-inspired vocabulary: `catalog`, `schema`, `entity`, `changeset`
- PMR-backed flush-time allocations, no heap pressure during updates
- C++26, zero dependencies

## Requirements

- GCC 16+ (or any C++26-conformant compiler)
- CMake 3.28+

## Getting Started

### FetchContent

```cmake
include(FetchContent)

FetchContent_Declare(
    ant
    GIT_REPOSITORY https://github.com/3uclid3/ant.git
    GIT_TAG        main
)

FetchContent_MakeAvailable(ant)

target_link_libraries(your_target PRIVATE ant::ant)
```

### Quick Example

Systems declare exactly what they read, write, and mutate through typed signatures. The framework wires everything up at dispatch time.

```cpp
using env_signature = ant::env_signature<const clock>;
using query_signature = ant::query_signature<position, const velocity*>;
using changeset_signature = ant::changeset_signature<
    ant::create_entity,
    ant::attach<position, velocity>,
    ant::detach<weapon>
>;

auto my_system(
    ant::env<env_signature> env,
    ant::query<query_signature> query,
    ant::changeset<changeset_signature> changeset) -> void
{
    const clock& clk = env.get<clock>();

    for (auto& row : query)
    {
        const position& pos = row.get<position>();
        const velocity* vel = row.try_get<velocity>(); // optional component

        if (vel && (pos.x + vel->x > 10.0f * clk.delta_time))
        {
            pos.x += vel->x;
            changeset.detach<weapon>(row.entity());
        }
    }

    ant::entity e = changeset.create_entity();
    changeset.attach<position>(e, 0.0f, 0.0f, 0.0f);
    changeset.attach<velocity>(e, 5.0f, 0.0f, 0.0f);
}
```

## Design

**Signatures are the core contract.**
Systems declare exactly what they access and mutate through typed signatures: `env` for global resources, `query` for component iteration, `changeset` for structural mutations. The framework enforces these boundaries at the type level, making system dependencies explicit and machine-readable.

**A foundation for smarter scheduling.**
Explicit, typed access declarations are the groundwork for automatic task graph construction and lockless parallel dispatch. Whether that proves straightforward in practice remains to be seen, but the architecture is built with that goal in mind.

## License

[MIT](LICENSE)
