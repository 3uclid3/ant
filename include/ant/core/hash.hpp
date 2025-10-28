#pragma once

#include <cstdint>
#include <string_view>

namespace ant::hash {

constexpr auto crc32(std::string_view str) noexcept -> std::uint32_t;
consteval auto compile_crc32(std::string_view str) noexcept -> std::uint32_t;

inline namespace literals {
constexpr auto operator""_crc32(const char* str, std::size_t size) noexcept -> std::uint32_t;
} // namespace literals

constexpr auto crc32(std::string_view str) noexcept -> std::uint32_t
{
    constexpr std::uint32_t initial_crc = 0xFFFF'FFFFU;
    constexpr std::uint32_t polynomial = 0xEDB88320U;

    std::uint32_t crc = initial_crc;
    for (unsigned char ch : str)
    {
        crc ^= ch;
        for (int i = 0; i < 8; ++i)
        {
            const std::uint32_t mask = -(crc & 1U);
            crc = (crc >> 1) ^ (polynomial & mask);
        }
    }
    return ~crc;
}

consteval auto compile_crc32(std::string_view str) noexcept -> std::uint32_t
{
    return crc32(str);
}

inline namespace literals {
constexpr auto operator""_crc32(const char* str, std::size_t size) noexcept -> std::uint32_t
{
    return crc32(std::string_view{str, size});
}
} // namespace literals

} // namespace ant::hash