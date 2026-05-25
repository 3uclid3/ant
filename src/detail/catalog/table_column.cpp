#include <ant/detail/catalog/table_column.hpp>

#include <cstring>

namespace ant::detail {

table_column::table_column(const component_meta& meta, std::pmr::memory_resource* memory_resource) noexcept
    : _memory_resource(memory_resource)
    , _blocks(memory_resource)
    , _meta(&meta)
{
}

table_column::table_column(table_column&& other) noexcept
    : _memory_resource(other._memory_resource)
    , _blocks(std::move(other._blocks))
    , _size(std::exchange(other._size, 0))
    , _meta(other._meta)
{
}

auto table_column::operator=(table_column&& other) noexcept -> table_column&
{
    if (this != &other)
    {
        if (_meta->vtable.destroy)
        {
            for (std::size_t i = 0; i < _size; ++i)
            {
                _meta->vtable.destroy(at_raw(i));
            }
        }
        for (std::byte* block : _blocks)
        {
            _memory_resource->deallocate(block, _meta->stride * _meta->stride_per_block, _meta->alignment);
        }

        _memory_resource = other._memory_resource;
        _blocks = std::move(other._blocks);
        _size = std::exchange(other._size, 0);
        _meta = other._meta;
    }
    return *this;
}

table_column::~table_column()
{
    if (_meta->vtable.destroy)
    {
        for (std::size_t i = 0; i < _size; ++i)
        {
            _meta->vtable.destroy(at_raw(i));
        }
    }

    for (std::byte* block : _blocks)
    {
        _memory_resource->deallocate(block, _meta->stride * _meta->stride_per_block, _meta->alignment);
    }
}

auto table_column::emplace_back() -> std::size_t
{
    return emplace_back(component_construct{.meta = *_meta});
}

auto table_column::emplace_back(component_construct ctor) -> std::size_t
{
    ANT_ASSERT(&ctor.meta.get() == _meta, "mismatched component_meta");

    ensure_capacity(_size + 1);

    const std::size_t index = _size++;

    if (ctor.fn)
    {
        ctor.fn(at_raw(index));
    }
    else if (_meta->vtable.default_construct)
    {
        _meta->vtable.default_construct(at_raw(index));
    }

    return index;
}

auto table_column::splice_back(table_column& source, std::size_t source_index) -> std::size_t
{
    ANT_ASSERT(_meta == source._meta, "Mismatched component_meta");

    ensure_capacity(_size + 1);

    // move from source
    const std::size_t index = _size++;
    relocate(at_raw(index), source.at_raw(source_index));

    // if source is not last, move last to source_index
    // source_index is already destroyed/moved-from
    const std::size_t last_source_index = --source._size;
    if (source_index != last_source_index)
    {
        source.relocate(source.at_raw(source_index), source.at_raw(last_source_index));
    }

    return index;
}

auto table_column::swap_and_pop(std::size_t index) noexcept -> void
{
    ANT_ASSERT(index < _size, "Out of bounds");

    const std::size_t last_index = _size - 1;

    if (_meta->vtable.destroy)
    {
        _meta->vtable.destroy(at_raw(index));
    }
    if (index != last_index)
    {
        relocate(at_raw(index), at_raw(last_index));
    }

    --_size;
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
    const std::size_t current_capacity = _blocks.size() * _meta->stride_per_block;

    if (capacity > current_capacity)
    {
        _blocks.push_back(static_cast<std::byte*>(_memory_resource->allocate(_meta->stride * _meta->stride_per_block, _meta->alignment)));
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

auto table_column::at_raw(std::size_t index) const noexcept -> const void*
{
    const std::size_t block_index = index / _meta->stride_per_block;
    const std::size_t block_offset = (index % _meta->stride_per_block) * _meta->stride;

    ANT_ASSERT(block_index < _blocks.size());

    return _blocks[block_index] + block_offset;
}

auto table_column::at_raw(std::size_t index) noexcept -> void*
{
    return const_cast<void*>(std::as_const(*this).at_raw(index));
}

} // namespace ant::detail
