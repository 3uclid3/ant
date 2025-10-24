#pragma once

#include <cstdint>
#include <type_traits>

namespace ant {

template<std::size_t Bits>
struct uint_for_bits
{
    // clang-format off
    using type = 
        std::conditional_t<Bits <= 8, std::uint_least8_t, 
        std::conditional_t<Bits <= 16, std::uint_least16_t, 
        std::conditional_t<Bits <= 32, std::uint_least32_t, 
        std::conditional_t<Bits <= 64, std::uint_least64_t,
        void>>>>;
    // clang-format on
};

template<std::size_t Bits>
using uint_for_bits_t = typename uint_for_bits<Bits>::type;

template<typename Integral>
constexpr auto compute_mask(std::size_t bits, std::size_t shift = 0) -> Integral
{
    static_assert(std::is_integral_v<Integral> && std::is_unsigned_v<Integral>, "Integral must be an unsigned integral type");
    return (bits >= (sizeof(Integral) * 8 - shift)) ? (~Integral{0} << shift) : (((Integral{1} << bits) - 1) << shift);
}

} // namespace ant
