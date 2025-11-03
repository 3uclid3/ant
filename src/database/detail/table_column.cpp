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
            const block_loc loc = to_loc(row_index::cast(i));

            _meta->vtable.destroy(_blocks[loc.idx].get() + loc.off);
        }
    }
}

auto table_column::emplace_back() -> row_index
{
    if (_size >= _blocks.size() * _meta->block_size)
    {
        _blocks.emplace_back(std::make_unique<std::byte[]>(_meta->block_size * _meta->size));
    }

    const block_loc loc = to_loc(row_index::cast(_size++));
    if (_meta->vtable.default_construct)
    {
        _meta->vtable.default_construct(_blocks[loc.idx].get() + loc.off);
    }

    return row_index::cast(_size - 1);
}

auto table_column::swap_and_pop(row_index idx) noexcept -> void
{
    ANT_ASSERT(static_cast<std::size_t>(idx) < _size, "Row index out of bounds");

    const auto last_idx = row_index::cast(_size - 1);

    if (idx != last_idx)
    {
        const block_loc src_loc = to_loc(last_idx);
        const block_loc dst_loc = to_loc(idx);

        void* dst_ptr = _blocks[dst_loc.idx].get() + dst_loc.off;
        void* src_ptr = _blocks[src_loc.idx].get() + src_loc.off;

        if (_meta->vtable.relocate)
        {
            _meta->vtable.relocate(dst_ptr, src_ptr);
        }
        else
        {
            std::memcpy(dst_ptr, src_ptr, _meta->size);
        }
    }
    else if (_meta->vtable.destroy)
    {
        const block_loc loc = to_loc(idx);

        _meta->vtable.destroy(_blocks[loc.idx].get() + loc.off);
    }

    --_size;
}

auto table_column::row(row_index idx) const noexcept -> const void*
{
    const block_loc loc = to_loc(idx);
    return _blocks[loc.idx].get() + loc.off;
}

auto table_column::row(row_index idx) noexcept -> void*
{
    const block_loc loc = to_loc(idx);
    return _blocks[loc.idx].get() + loc.off;
}

auto table_column::empty() const noexcept -> bool
{
    return size() == 0;
}

auto table_column::size() const noexcept -> std::size_t
{
    return _size;
}

auto table_column::to_loc(row_index idx) const noexcept -> block_loc
{
    ANT_ASSERT(static_cast<std::size_t>(idx) < _size, "Row index out of bounds");
    const std::size_t uidx = static_cast<std::size_t>(idx);

    // Compute byte offset within blocks. Each block holds block_size elements.
    const std::size_t elements_per_block = _meta->block_size;
    ANT_ASSERT(elements_per_block > 0, "Invalid block size");

    const std::size_t block_idx = uidx / elements_per_block;
    const std::size_t off_elements = uidx % elements_per_block;
    const std::size_t off_bytes = off_elements * _meta->size;

    return {block_idx, off_bytes};
}

} // namespace ant::detail
