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
    ensure_capacity(_size + 1);

    const std::size_t index = _size++;

    if (_meta->vtable.default_construct)
    {
        _meta->vtable.default_construct(row(index));
    }

    return index;
}

auto table_column::splice_back(table_column& source, std::size_t source_index) -> std::size_t
{
    ANT_ASSERT(_meta == source._meta, "Mismatched component_meta");

    ensure_capacity(_size + 1);

    // move from source
    const std::size_t index = _size++;
    relocate(row(index), source.row(source_index));

    // if source is not last, move last to source_index
    // source_index is already destroyed/moved-from
    const std::size_t last_source_index = --source._size;
    if (source_index != last_source_index)
    {
        source.relocate(source.row(source_index), source.row(last_source_index));
    }

    return index;
}

auto table_column::swap_and_pop(std::size_t index) noexcept -> void
{
    ANT_ASSERT(index < _size, "Out of bounds");

    const std::size_t last_index = _size - 1;

    if (index != last_index)
    {
        relocate(row(index), row(last_index));
    }
    else if (_meta->vtable.destroy)
    {
        _meta->vtable.destroy(row(index));
    }

    --_size;
}

auto table_column::row(std::size_t index) const noexcept -> const void*
{
    const std::size_t block_index = index / _meta->block_size;
    const std::size_t block_offset = (index % _meta->block_size) * _meta->size;

    ANT_ASSERT(block_index < _blocks.size());
    return _blocks[block_index].get() + block_offset;
}

auto table_column::row(std::size_t index) noexcept -> void*
{
    return const_cast<void*>(std::as_const(*this).row(index));
}

auto table_column::empty() const noexcept -> bool
{
    return size() == 0;
}

auto table_column::size() const noexcept -> std::size_t
{
    return _size;
}

auto table_column::meta() const noexcept -> const component_meta&
{
    return *_meta;
}

auto table_column::ensure_capacity(std::size_t capacity) -> void
{
    const std::size_t current_capacity = _blocks.size() * _meta->block_size;

    if (capacity > current_capacity)
    {
        _blocks.emplace_back(std::make_unique<std::byte[]>(_meta->block_size * _meta->size));
    }
}

auto table_column::relocate(void* dst, void* src) noexcept -> void
{
    if (_meta->vtable.relocate)
    {
        _meta->vtable.relocate(dst, src);
    }
    else
    {
        std::memcpy(dst, src, _meta->size);
    }
}

} // namespace ant::detail
