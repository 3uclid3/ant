#pragma once

#include <cstdint>
#include <string_view>

namespace ant::hash {

constexpr std::uint32_t crc32(std::string_view s) noexcept;
consteval std::uint32_t compile_crc32(std::string_view s) noexcept;

inline namespace literals {
constexpr std::uint32_t operator""_crc32(const char* s, std::size_t n) noexcept;
} // namespace literals

constexpr std::uint32_t crc32(std::string_view s) noexcept
{
    std::uint32_t crc = 0xFFFF'FFFFu;
    for (unsigned char b : s)
    {
        crc ^= b;
        for (int i = 0; i < 8; ++i)
        {
            const std::uint32_t mask = -(crc & 1u);
            crc = (crc >> 1) ^ (0xEDB88320u & mask);
        }
    }
    return ~crc;
}

consteval std::uint32_t compile_crc32(std::string_view s) noexcept
{
    return crc32(s);
}

inline namespace literals {
constexpr std::uint32_t operator""_crc32(const char* s, std::size_t n) noexcept
{
    return crc32(std::string_view{s, n});
}
} // namespace literals

} // namespace ant::hash