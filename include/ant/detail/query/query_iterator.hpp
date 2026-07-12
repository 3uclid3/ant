#pragma once

#include <ant/detail/query/query_cursor.hpp>
#include <ant/detail/query/query_mapping.hpp>
#include <ant/query_fwd.hpp>

namespace ant { namespace detail {

template<typename Signature>
class query_iterator
{
public:
    using row_type = query_row<Signature>;

public:
    query_iterator(query_cursor cursor, query_mapping_view mapping) noexcept;

    auto operator==(const query_iterator& other) const noexcept -> bool;
    auto operator!=(const query_iterator& other) const noexcept -> bool = default;

    auto operator++() noexcept -> query_iterator&;
    auto operator++(int) noexcept -> query_iterator;

    auto operator*() const noexcept -> row_type;

private:
    query_cursor _cursor;
    query_mapping_view _mapping;
};

template<typename Signature>
query_iterator<Signature>::query_iterator(query_cursor cursor, query_mapping_view mapping) noexcept
    : _cursor(std::move(cursor))
    , _mapping(std::move(mapping))
{
}

template<typename Signature>
auto query_iterator<Signature>::operator==(const query_iterator& other) const noexcept -> bool
{
    return _cursor == other._cursor;
}

template<typename Signature>
auto query_iterator<Signature>::operator++() noexcept -> query_iterator&
{
    _cursor.advance();

    return *this;
}

template<typename Signature>
auto query_iterator<Signature>::operator++(int) noexcept -> query_iterator
{
    query_iterator temp = *this;
    ++(*this);
    return temp;
}

template<typename Signature>
auto query_iterator<Signature>::operator*() const noexcept -> row_type
{
    return row_type(_cursor, _mapping);
}

}} // namespace ant::detail
