#include <ant/database/detail/catalog.hpp>

namespace ant::detail {

catalog::catalog(const schema& schema, std::pmr::memory_resource* memory_resource)
    : _memory_resource(memory_resource)
    , _tables(memory_resource)
    , _table_signatures(memory_resource)
    , _component_tables(memory_resource)
    , _schema(&schema)
{
    _component_tables.resize(schema.size(), dynamic_bitset(dynamic_bitset::inplace_capacity));
}

auto catalog::empty() const noexcept -> bool
{
    return size() == 0;
}

auto catalog::size() const noexcept -> std::size_t
{
    return _tables.size();
}

auto catalog::index_of(const dynamic_bitset& components) const noexcept -> std::size_t
{
    const auto it = _table_signatures.find(components);
    return it != _table_signatures.end() ? it->second : npos;
}

auto catalog::ensure_of(const dynamic_bitset& components) -> std::size_t
{
    auto [it, inserted] = _table_signatures.try_emplace(components, npos);

    if (inserted)
    {
        it->second = emplace_table(components);

        const std::size_t new_size = _table_signatures.size();

        if (new_size > dynamic_bitset::inplace_capacity)
        {
            for (dynamic_bitset& bitset : _component_tables)
            {
                bitset.resize(new_size);
            }
        }

        components.for_each_set([this, table_index = it->second](std::size_t component_index) {
            _component_tables[component_index].set(table_index);
        });
    }

    return it->second;
}

auto catalog::at(std::size_t idx) const -> const table&
{
    ANT_ASSERT(idx < size(), "table index out of range");
    return _tables[idx];
}

auto catalog::at(std::size_t idx) -> table&
{
    return const_cast<table&>(std::as_const(*this).at(idx));
}

auto catalog::find_seed_component(const dynamic_bitset& required) const noexcept -> std::size_t
{
    std::span blocks = required.blocks_view();

    std::size_t best = npos;
    std::size_t best_count = std::numeric_limits<std::size_t>::max();

    for (std::size_t i = 0; i < blocks.size(); ++i)
    {
        const std::uint64_t block = blocks[i];

        if (block == 0)
        {
            continue;
        }

        const std::size_t bit = std::countr_zero(block);
        const std::size_t current = i * 64U + bit;
        const std::size_t count = _component_tables[current].count();

        if (count > 0 && count < best_count)
        {
            best = current;
            best_count = count;
        }
    }

    return best;
}

// use the seed component's list of tables and filter down to matches
auto catalog::find_matches(const dynamic_bitset& required, std::size_t seed_index, pmr::dynamic_bitset& matches) const noexcept -> void
{
    matches = _component_tables[seed_index];

    required.for_each_set([this, &matches](std::size_t index) {
        matches &= _component_tables[index];
    });
}

auto catalog::emplace_table(const dynamic_bitset& components) -> std::size_t
{
    const std::size_t index = _tables.size();
    _tables.emplace_back(components, *_schema, _memory_resource);
    return index;
}

} // namespace ant::detail
