#pragma once

#include <optional>

#include <ant/detail/containers.hpp>
#include <ant/detail/schema/component_meta.hpp>

namespace ant::detail {

struct component_options
{
    std::optional<std::size_t> stride_per_block;
};

inline constexpr component_options default_component_options{};

class schema
{
public:
    using meta_type = component_meta;
    using size_type = component_index;

    class builder
    {
    public:
        builder() noexcept = default;

        builder(builder&&) noexcept = default;
        builder(const builder&) = delete;

        auto operator=(builder&&) noexcept -> builder& = default;
        auto operator=(const builder&) -> builder& = delete;

        template<typename T>
        auto define(const component_options& options = default_component_options) -> builder&;

        auto build() -> schema;

    private:
        auto define_impl(const component_options& options, meta_type&& meta) -> void;

        vector<meta_type> _metas;
    };

public:
    schema(const schema&) = delete;
    schema& operator=(const schema&) = delete;

    schema(schema&&) noexcept = default;
    schema& operator=(schema&&) noexcept = default;

    template<typename T>
    [[nodiscard]] auto is_defined() const noexcept -> bool;
    [[nodiscard]] auto is_defined(size_type index) const noexcept -> bool;

    template<typename T>
    [[nodiscard]] auto meta_of() const noexcept -> const meta_type&;
    [[nodiscard]] auto meta_of(size_type index) const noexcept -> const meta_type&;

    [[nodiscard]] auto empty() const noexcept -> bool;
    [[nodiscard]] auto count() const noexcept -> size_type;
    [[nodiscard]] auto range() const noexcept -> size_type; // max component_index + 1

private:
    schema() noexcept = default;

    vector<meta_type> _dense;
    vector<meta_type*> _sparse;
};

template<typename T>
inline auto schema::builder::define(const component_options& options) -> builder&
{
    define_impl(options, detail::component_meta_of<T>());
    return *this;
}

template<typename T>
inline auto schema::is_defined() const noexcept -> bool
{
    return is_defined(detail::component_index_of<T>());
}

template<typename T>
inline auto schema::meta_of() const noexcept -> const meta_type&
{
    return meta_of(detail::component_index_of<T>());
}

inline auto schema::empty() const noexcept -> bool
{
    return count() == 0;
}

inline auto schema::count() const noexcept -> size_type
{
    return _dense.size();
}

inline auto schema::range() const noexcept -> size_type
{
    return _dense.empty() ? 0 : _dense.back().index + 1;
}

} // namespace ant::detail
