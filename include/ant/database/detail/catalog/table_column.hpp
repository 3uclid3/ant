#pragma once

#include <memory_resource>
#include <vector>

#include <ant/core/type_info.hpp>

namespace ant::detail {

struct component_meta;

class table_column
{
public:
    explicit table_column(const component_meta& meta, std::pmr::memory_resource* memory_resource = std::pmr::get_default_resource()) noexcept;
    ~table_column();

    table_column(const table_column& other) = delete;
    auto operator=(const table_column& other) -> table_column& = delete;

    table_column(table_column&& other) noexcept = default;
    auto operator=(table_column&& other) noexcept -> table_column& = default;

    auto emplace_back() -> std::size_t;
    auto splice_back(table_column& source, std::size_t source_index) -> std::size_t;
    auto swap_and_pop(std::size_t index) noexcept -> void;

    template<typename T>
    auto at(std::size_t index) const noexcept -> const T&;

    template<typename T>
    auto at(std::size_t index) noexcept -> T&;

    auto empty() const noexcept -> bool;
    auto size() const noexcept -> std::size_t;

    auto meta() const noexcept -> const component_meta&;

private:
    auto ensure_capacity(std::size_t capacity) -> void;
    auto relocate(void* dst, void* src) noexcept -> void;

    auto at_raw(std::size_t index, std::uint32_t type_hash) const noexcept -> const void*;
    auto at_raw(std::size_t index) const noexcept -> const void*;

    auto at_raw(std::size_t index, std::uint32_t type_hash) noexcept -> void*;
    auto at_raw(std::size_t index) noexcept -> void*;

    std::pmr::memory_resource* _memory_resource{nullptr};
    std::pmr::vector<std::byte*> _blocks;
    std::size_t _size{0};

    const component_meta* _meta{nullptr};
};

template<typename T>
auto table_column::at(std::size_t index) const noexcept -> const T&
{
    return *static_cast<const T*>(at_raw(index, type_hash<T>::value()));
}

template<typename T>
auto table_column::at(std::size_t index) noexcept -> T&
{
    return *static_cast<T*>(at_raw(index, type_hash<T>::value()));
}

} // namespace ant::detail
