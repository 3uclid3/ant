#pragma once

#include <ant/detail/core/containers.hpp>
#include <ant/detail/store/catalog.hpp>
#include <ant/detail/store/table.hpp>
#include <ant/signature/query_join_signature_traits.hpp>
#include <ant/signature/query_signature_traits.hpp>
#include <ant/type_list.hpp>

namespace ant::detail {

template<typename Join>
struct query_join_member
{
    using traits = query_join_signature_traits<Join>;
    using type = rel_member<typename traits::rel, typename traits::role>;
};

template<typename Signature>
using query_join_members_t = type_list_transform_t<query_join_member, typename query_signature_traits<Signature>::joined>;

struct query_layout_part
{
    vector<table*> tables;
    vector<std::size_t> columns;
};

template<typename Signature, typename Joined>
static constexpr std::size_t query_layout_part_index_of = 1 + query_signature_traits<Signature>::template joined_index_of<typename query_join_signature_traits<Joined>::rel, typename query_join_signature_traits<Joined>::role>;

template<typename Signature>
static constexpr std::size_t query_layout_part_count_of = 1 + type_list_size_v<typename query_signature_traits<Signature>::flatten_joined>;

template<typename PartSignature>
using query_layout_ordered_types_t = type_list_transform_t<
    std::remove_const,
    type_list_concat_t<
        typename query_signature_traits<PartSignature>::required,
        typename query_signature_traits<PartSignature>::optional,
        query_join_members_t<PartSignature>>>;

template<typename Signature>
class query_layout_view
{
public:
    explicit query_layout_view(std::span<const query_layout_part, query_layout_part_count_of<Signature>> parts) noexcept;

    auto table(std::size_t index) const noexcept -> const ant::detail::table*;

    template<typename Type>
    auto column(std::size_t table_index) const noexcept -> std::size_t;

    template<typename Rel, typename Role>
    auto sublayout() const noexcept -> query_layout_view<typename query_signature_traits<Signature>::template joined_signature_of<Rel, Role>>;

private:
    std::span<const query_layout_part, query_layout_part_count_of<Signature>> _parts;
};

template<typename Signature>
class query_layout
{
public:
    auto build(catalog& c) -> void;

    auto view() const noexcept -> query_layout_view<Signature>;

private:
    template<typename PartSignature, typename... T>
    auto build_part(query_layout_part& part, catalog& c, type_list<T...>) -> void;

    template<typename... J>
    auto build_joined(catalog& c, type_list<J...>) -> void;

    std::array<query_layout_part, query_layout_part_count_of<Signature>> _parts;
};

template<typename Signature>
auto query_layout<Signature>::build(catalog& c) -> void
{
    build_part<Signature>(_parts[0], c, query_layout_ordered_types_t<Signature>{});
    build_joined(c, typename query_signature_traits<Signature>::flatten_joined{});
}

template<typename Signature>
auto query_layout<Signature>::view() const noexcept -> query_layout_view<Signature>
{
    return query_layout_view<Signature>(_parts);
}

template<typename Signature>
template<typename PartSignature, typename... T>
auto query_layout<Signature>::build_part(query_layout_part& part, catalog& c, type_list<T...>) -> void
{
    using signature_traits = query_signature_traits<PartSignature>;

    using required_types = type_list_concat_t<
        type_list_transform_t<std::remove_const, typename signature_traits::required>,
        query_join_members_t<PartSignature>>;
    using excluded_types = typename signature_traits::excluded;

    part.columns.clear();
    part.tables.clear();

    c.for_each(component_bitset_of<required_types>(), [&part, excluded = component_bitset_of<excluded_types>()](auto, table& table) {
        const bool is_excluded = (table.components() & excluded).any();

        if (is_excluded)
            return;

        part.tables.push_back(&table);
    });

    part.columns.reserve(part.tables.size() * sizeof...(T));

    for (std::size_t i = 0; i < part.tables.size(); ++i)
    {
        const table& t = *part.tables[i];
        (part.columns.push_back(t.column_of<T>()), ...);
    }
}

template<typename Signature>
template<typename... J>
auto query_layout<Signature>::build_joined(catalog& c, type_list<J...>) -> void
{
    [[maybe_unused]] std::size_t i = 1;
    ([this, &i, &c] {
        using part_signature = query_join_signature_traits<J>::signature;
        build_part<part_signature>(_parts[i++], c, query_layout_ordered_types_t<part_signature>{});
    }(),
     ...);
}

template<typename Signature>
query_layout_view<Signature>::query_layout_view(std::span<const query_layout_part, query_layout_part_count_of<Signature>> parts) noexcept
    : _parts(parts)
{
}

template<typename Signature>
auto query_layout_view<Signature>::table(std::size_t index) const noexcept -> const ant::detail::table*
{
    return _parts[0].tables[index];
}

template<typename Signature>
template<typename Type>
auto query_layout_view<Signature>::column(std::size_t table_index) const noexcept -> std::size_t
{
    using ordered_types = query_layout_ordered_types_t<Signature>;
    return _parts[0].columns[table_index * type_list_size_v<ordered_types> + type_list_index_of_v<Type, ordered_types>];
}

template<typename Signature>
template<typename Rel, typename Role>
auto query_layout_view<Signature>::sublayout() const noexcept -> query_layout_view<typename query_signature_traits<Signature>::template joined_signature_of<Rel, Role>>
{
    using joined = typename query_signature_traits<Signature>::template joined_of<Rel, Role>;
    using signature = typename query_signature_traits<Signature>::template joined_signature_of<Rel, Role>;

    return query_layout_view<signature>(_parts.template subspan<query_layout_part_index_of<Signature, joined>, query_layout_part_count_of<signature>>());
}

} // namespace ant::detail
