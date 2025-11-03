#include <ant/database/detail/table_column.hpp>

#include <ant/core/assert.hpp>

namespace ant::detail {

table_column::table_column(const component_meta& meta) noexcept
    : _meta(&meta)
{
}

table_column::~table_column()
{
    if (_meta->vtable.destroy)
    {
        for (std::size_t i = 0; i < _size; ++i)
        {
            _meta->vtable.destroy(row(i));
        }
    }
}

auto table_column::emplace_back() -> std::size_t
{
    if (_size >= _blocks.size() * _meta->block_size)
    {
        _blocks.emplace_back(std::make_unique<std::byte[]>(_meta->block_size * _meta->size));
    }

    const std::size_t index = _size++;

    if (_meta->vtable.default_construct)
    {
        const std::size_t block_index = index / _meta->block_size;
        const std::size_t block_offset = (index % _meta->block_size) * _meta->size;

        _meta->vtable.default_construct(_blocks[block_index].get() + block_offset);
    }

    return index;
}

auto table_column::swap_and_pop(std::size_t index) noexcept -> void
{
    ANT_ASSERT(index < _size, "Row index out of bounds");

    const auto last_index = _size - 1;

    if (index != last_index)
    {
        if (_meta->vtable.relocate)
        {
            _meta->vtable.relocate(row(index), row(last_index));
        }
        else
        {
            std::memcpy(row(index), row(last_index), _meta->size);
        }
    }
    else if (_meta->vtable.destroy)
    {
        _meta->vtable.destroy(row(index));
    }

    --_size;
}

auto table_column::row(std::size_t index) const noexcept -> const void*
{
    const auto block_index = index / _meta->block_size;
    const auto block_offset = (index % _meta->block_size) * _meta->size;
    return _blocks[block_index].get() + block_offset;
}

auto table_column::row(std::size_t index) noexcept -> void*
{
    const auto block_index = index / _meta->block_size;
    const auto block_offset = (index % _meta->block_size) * _meta->size;
    return _blocks[block_index].get() + block_offset;
}

auto table_column::empty() const noexcept -> bool
{
    return size() == 0;
}

auto table_column::size() const noexcept -> std::size_t
{
    return _size;
}

} // namespace ant::detail
