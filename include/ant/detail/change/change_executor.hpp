#pragma once

namespace ant {

class change_accumulator;

}

namespace ant::detail {

class lifecycle_registry;
struct store;

struct coalesced_changes;

class change_executor
{
public:
    change_executor(store& store, lifecycle_registry& lifecycle_registry) noexcept;

    auto execute(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void;

private:
    auto execute_envs(coalesced_changes& changes) -> void;
    auto execute_destroy_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void;
    auto execute_entities(coalesced_changes& changes, change_accumulator& lifecycle_accumulator) -> void;

    store& _store;
    lifecycle_registry& _lifecycle_registry;
};

} // namespace ant::detail
