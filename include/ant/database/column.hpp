#pragma once

#include <cstring>
#include <memory>

#include <ant/core/assert.hpp>
#include <ant/core/container.hpp>
#include <ant/core/memory.hpp>
#include <ant/database/component_index.hpp>
#include <ant/database/detail/component_meta.hpp>
#include <ant/database/table_index.hpp>

namespace ant {

template<typename Database>
class basic_column
{
public:
    using allocator_type = rebind_alloc_t<std::byte, typename Database::allocator_type>;
    using component_meta_type = detail::component_meta;

    explicit basic_column(const component_meta_type& meta, const allocator_type& allocator = allocator_type{}) noexcept;
    ~basic_column();

    basic_column(const basic_column& other) = delete;
    auto operator=(const basic_column& other) -> basic_column& = delete;

    basic_column(basic_column&& other) noexcept = default;
    auto operator=(basic_column&& other) noexcept -> basic_column& = default;

    auto emplace_back() -> row_index;
    auto swap_and_pop(row_index idx) noexcept -> void;

    auto row(row_index idx) const noexcept -> const void*;
    auto row(row_index idx) noexcept -> void*;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

private:
    using block = std::byte*;

    struct block_loc
    {
        std::size_t idx;
        std::size_t off;
    };

    auto to_loc(row_index idx) const noexcept -> block_loc;

    allocator_type _allocator;

    vector<block, allocator_type> _blocks;
    std::size_t _size{0};

    const component_meta_type* _meta{nullptr};
};

template<typename Database>
basic_column<Database>::basic_column(const component_meta_type& meta, const allocator_type& allocator) noexcept
    : _allocator(allocator)
    , _meta(&meta)
{
}

template<typename Database>
basic_column<Database>::~basic_column()
{
    if (_meta->vtable.destroy)
    {
        for (std::size_t i = 0; i < _size; ++i)
        {
            const block_loc loc = to_loc(row_index::cast(i));

            _meta->vtable.destroy(_blocks[loc.idx] + loc.off);
        }
    }

    for (auto& block_ptr : _blocks)
    {
        _allocator.deallocate(block_ptr, _meta->block_size * _meta->size);
    }
}

template<typename Database>
auto basic_column<Database>::emplace_back() -> row_index
{
    if (_size >= _blocks.size() * _meta->block_size)
    {
        // allocate bytes: elements_per_block * element_size
        _blocks.emplace_back(_allocator.allocate(_meta->block_size * _meta->size));
    }

    const block_loc loc = to_loc(row_index::cast(_size++));
    if (_meta->vtable.default_construct)
    {
        _meta->vtable.default_construct(_blocks[loc.idx] + loc.off);
    }

    return row_index::cast(_size - 1);
}

template<typename Database>
auto basic_column<Database>::swap_and_pop(row_index idx) noexcept -> void
{
    ANT_ASSERT(static_cast<std::size_t>(idx) < _size, "Row index out of bounds");

    const auto last_idx = row_index::cast(_size - 1);

    if (idx != last_idx)
    {
        const block_loc src_loc = to_loc(last_idx);
        const block_loc dst_loc = to_loc(idx);

        void* dst_ptr = _blocks[dst_loc.idx] + dst_loc.off;
        void* src_ptr = _blocks[src_loc.idx] + src_loc.off;

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

        _meta->vtable.destroy(_blocks[loc.idx] + loc.off);
    }

    --_size;
}

template<typename Database>
auto basic_column<Database>::row(row_index idx) const noexcept -> const void*
{
    const block_loc loc = to_loc(idx);
    return _blocks[loc.idx] + loc.off;
}

template<typename Database>
auto basic_column<Database>::row(row_index idx) noexcept -> void*
{
    const block_loc loc = to_loc(idx);
    return _blocks[loc.idx] + loc.off;
}

template<typename Database>
auto basic_column<Database>::empty() const noexcept -> bool
{
    return size() == 0;
}

template<typename Database>
auto basic_column<Database>::size() const noexcept -> std::size_t
{
    return _size;
}

template<typename Database>
auto basic_column<Database>::to_loc(row_index idx) const noexcept -> block_loc
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

} // namespace ant
