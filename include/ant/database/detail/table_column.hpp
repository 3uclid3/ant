#pragma once

#include <cstring>
#include <memory>
#include <vector>

#include <ant/core/assert.hpp>
#include <ant/core/type_info.hpp>
#include <ant/database/detail/component_meta.hpp>

namespace ant::detail {

class table_column
{
public:
    explicit table_column(const component_meta& meta) noexcept;
    ~table_column();

    table_column(const table_column& other) = delete;
    auto operator=(const table_column& other) -> table_column& = delete;

    table_column(table_column&& other) noexcept = default;
    auto operator=(table_column&& other) noexcept -> table_column& = default;

    auto emplace_back() -> std::size_t;
    auto splice_back(table_column& source, std::size_t source_index) -> std::size_t;
    auto swap_and_pop(std::size_t index) noexcept -> void;

    auto row(std::size_t index) const noexcept -> const void*;
    auto row(std::size_t index) noexcept -> void*;

    template<typename T>
    auto row_as(std::size_t index) const noexcept -> const T&;

    template<typename T>
    auto row_as(std::size_t index) noexcept -> T&;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

    auto meta() const noexcept -> const component_meta&;

private:
    auto ensure_capacity(std::size_t capacity) -> void;
    auto relocate(void* dst, void* src) noexcept -> void;

    std::vector<std::unique_ptr<std::byte[]>> _blocks;
    std::size_t _size{0};

    const component_meta* _meta{nullptr};
};

template<typename T>
auto table_column::row_as(std::size_t index) const noexcept -> const T&
{
    ANT_ASSERT(_meta->hash == type_hash<T>::value(), "Mismatched component type");
    return *static_cast<const T*>(row(index));
}

template<typename T>
auto table_column::row_as(std::size_t index) noexcept -> T&
{
    ANT_ASSERT(_meta->hash == type_hash<T>::value(), "Mismatched component type");
    return *static_cast<T*>(row(index));
}

} // namespace ant::detail
