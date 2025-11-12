#pragma once

#include <ostream>
#include <vector>

#include <doctest/doctest.h>

#include <ant.test.shared/doctest/check.hpp>

namespace std {

template<typename T>
ostream& operator<<(ostream& stream, const vector<T>& in)
{
    stream << "[";
    for (size_t i = 0; i < in.size(); ++i)
    {
        if (i != 0) { stream << ", "; }
        stream << in[i];
    }
    stream << "]";
    return stream;
}

} // namespace std
