#pragma once

#include <cstddef>
#include <limits>

#include <ant/detail/catalog/table.hpp>
#include <ant/detail/containers.hpp>
#include <ant/detail/memory.hpp>
#include <ant/detail/schema/component_bitset.hpp>
#include <ant/detail/schema/schema.hpp>

namespace ant::detail {

class catalog
{
public:
    static constexpr std::size_t npos = std::numeric_limits<std::size_t>::max();

    explicit catalog(const schema& schema);

    catalog(const catalog&) = delete;
    auto operator=(const catalog&) -> catalog& = delete;

    catalog(catalog&&) = default;
    auto operator=(catalog&&) -> catalog& = default;

    [[nodiscard]] auto empty() const noexcept -> bool;
    [[nodiscard]] auto size() const noexcept -> std::size_t;

    // returns npos if not found
    [[nodiscard]] auto index_of(const component_bitset& components) const noexcept -> std::size_t;

    // returns existing index or inserts new table
    [[nodiscard]] auto ensure_of(const component_bitset& components) -> std::size_t;

    // assert if index is npos or out of bounds
    [[nodiscard]] auto at(std::size_t index) const noexcept -> const table&;
    [[nodiscard]] auto at(std::size_t index) noexcept -> table&;

    template<typename F>
    auto for_each(const component_bitset& components, F&& f) -> void;

private:
    using table_bitset = dynamic_bitset<512>;

    // bitset used for matching tables
    auto find_seed_component(const component_bitset& required) const noexcept -> std::size_t;

    auto find_matches(const component_bitset& required, std::size_t seed_index, table_bitset& matches) const noexcept -> void;

    auto emplace_table(const component_bitset& components) -> std::size_t;

    deque<table> _tables;
    unordered_map<component_bitset, std::size_t> _table_signatures; // component_bitset -> table index
    vector<table_bitset> _component_tables;                         // component_index -> associated tables where bits are table indexes

    const schema* _schema{nullptr};
};

template<typename F>
auto catalog::for_each(const component_bitset& components, F&& f) -> void
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
        return; // no component found in required components
    }

    // build matching bitset
    table_bitset table_matches;
    find_matches(components, seed_index, table_matches);

    table_matches.for_each_set([this, &f](std::size_t table_index) {
        f(table_index, at(table_index));
    });
}

} // namespace ant::detail
