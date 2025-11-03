#pragma once

#include <cstddef>
#include <cstdint>
#include <limits>
#include <string_view>

#include <ant/core/type_info.hpp>
#include <ant/database/detail/component_vtable.hpp>

namespace ant::detail {

struct component_meta
{
    // T components per block
    static constexpr std::size_t default_block_size = 32;

    std::uint32_t hash;
    component_vtable vtable{};
    std::size_t size{0};
    std::size_t alignment{0};
    std::size_t block_size{default_block_size};
    std::size_t index{std::numeric_limits<std::size_t>::max()};
    std::string_view name{};
    std::uint16_t version{0};
};

template<typename T>
constexpr auto make_meta(std::string_view name, std::uint16_t version = 0) noexcept -> component_meta
{
    component_meta meta;

    meta.hash = type_hash<T>::value();
    meta.vtable = component_vtable::of<T>();
    meta.size = sizeof(T);
    meta.alignment = alignof(T);
    meta.name = name;
    meta.version = version;

    return meta;
}

} // namespace ant::detail