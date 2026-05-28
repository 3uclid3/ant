#include <ant/detail/catalog/catalog.hpp>

namespace ant::detail {

catalog::catalog(const schema& schema, std::pmr::memory_resource* memory_resource)
    : _memory_resource(memory_resource)
    , _tables(memory_resource)
    , _table_signatures(memory_resource)
    , _component_tables(memory_resource)
    , _schema(&schema)
{
    _component_tables.resize(schema.range());
}

auto catalog::empty() const noexcept -> bool
{
    return size() == 0;
}

auto catalog::size() const noexcept -> std::size_t
{
    return _tables.size();
}

auto catalog::index_of(const component_bitset& components) const noexcept -> std::size_t
{
    const auto it = _table_signatures.find(components);
    return it != _table_signatures.end() ? it->second : npos;
}

auto catalog::ensure_of(const component_bitset& components) -> std::size_t
{
    auto [it, inserted] = _table_signatures.try_emplace(components, npos);

    if (inserted)
    {
        it->second = emplace_table(components);

        components.for_each_set([this, table = it->second](std::size_t c) {
            _component_tables[c].push(table);
        });
    }

    return it->second;
}

auto catalog::at(std::size_t idx) const noexcept -> const table&
{
    ANT_ASSERT(idx < size(), "table index out of range");
    return _tables[idx];
}

auto catalog::at(std::size_t idx) noexcept -> table&
{
    return const_cast<table&>(std::as_const(*this).at(idx));
}

auto catalog::find_seed_component(const component_bitset& required) const noexcept -> std::size_t
{
    std::size_t best = npos;
    std::size_t best_count = std::numeric_limits<std::size_t>::max();

    required.for_each_set([&](std::size_t index) {
        const std::size_t count = _component_tables[index].count();

        if (count > 0 && count < best_count)
        {
            best = index;
            best_count = count;
        }
    });

    return best;
}

// use the seed component's list of tables and filter down to matches
auto catalog::find_matches(const component_bitset& required, std::size_t seed_index, table_bitset& table_matches) const noexcept -> void
{
    table_matches = _component_tables[seed_index];
    required.for_each_set([this, &table_matches](std::size_t index) {
        table_matches &= _component_tables[index];
    });
}

auto catalog::emplace_table(const component_bitset& components) -> std::size_t
{
    const std::size_t index = _tables.size();
    _tables.emplace_back(components, *_schema, _memory_resource);
    return index;
}

} // namespace ant::detail
