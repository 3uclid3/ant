#pragma once

#include <array>
#include <limits>
#include <memory_resource>
#include <unordered_map>
#include <vector>

#include <ant/config.hpp>
#include <ant/core/dynamic_bitset.hpp>
#include <ant/database/detail/table.hpp>
#include <ant/database/schema.hpp>

namespace ant::detail {

class catalog
{
public:
    static constexpr std::size_t npos = std::numeric_limits<std::size_t>::max();

    catalog() = default;
    catalog(const schema& schema, std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource());

    catalog(const catalog&) = delete;
    auto operator=(const catalog&) -> catalog& = delete;

    catalog(catalog&&) noexcept = default;
    auto operator=(catalog&&) noexcept -> catalog& = default;

    [[nodiscard]] auto empty() const noexcept -> bool;
    [[nodiscard]] auto size() const noexcept -> std::size_t;

    // returns npos if not found
    [[nodiscard]] auto index_of(const dynamic_bitset& components) const noexcept -> std::size_t;

    // returns existing index or inserts new table
    [[nodiscard]] auto ensure_of(const dynamic_bitset& components) -> std::size_t;

    // assert if index is npos or out of bounds
    [[nodiscard]] auto at(std::size_t index) const -> const table&;
    [[nodiscard]] auto at(std::size_t index) -> table&;

    template<typename F>
    auto for_each(const dynamic_bitset& components, F&& f) noexcept -> void;

private:
    // bitset used for matching tables
    auto find_seed_component(const dynamic_bitset& required) const noexcept -> std::size_t;
    auto find_matches(const dynamic_bitset& required, std::size_t seed_index) const noexcept -> dynamic_bitset;

    auto emplace_table(const dynamic_bitset& components) -> std::size_t;

    std::pmr::memory_resource* _memory_resource{std::pmr::get_default_resource()};

    std::pmr::vector<table> _tables;
    std::pmr::unordered_map<dynamic_bitset, std::size_t> _table_signatures;
    std::pmr::vector<dynamic_bitset> _component_tables; // indexed by component index, bits are table indices

    const schema* _schema{nullptr};
};

template<typename F>
auto catalog::for_each(const dynamic_bitset& components, F&& f) noexcept -> void
{
    // early out: no required components means all tables match
    if (components.none())
    {
        for (std::size_t i = 0; i < size(); ++i)
        {
            f(i, at(i));
        }
        return;
    }

    // find a seed component
    const std::size_t seed_index = find_seed_component(components);
    if (seed_index == npos)
    {
        return; // no components found in required components
    }

    // build matching bitset
    dynamic_bitset matches = find_matches(components, seed_index);
    matches.for_each_set([this, &f](std::size_t table_index) {
        f(table_index, at(table_index));
    });
}

} // namespace ant::detail
