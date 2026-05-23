#include <ant/database/schema.hpp>

#include <algorithm>

#include <ant/core/assert.hpp>

namespace ant {

schema::schema(std::pmr::memory_resource* resource) noexcept
    : _dense(resource)
    , _sparse(resource)
{
}

schema::builder::builder(std::pmr::memory_resource* resource) noexcept
    : _metas(resource)
    , _resource(resource)
{
}

auto schema::builder::define_impl(const component_options& options, meta_type&& meta) -> void
{
    ANT_ASSERT(std::ranges::none_of(_metas, [&meta](const meta_type& m) { return m.index == meta.index; }), "Component already defined");

    if (options.stride_per_block)
    {
        meta.stride_per_block = *options.stride_per_block;
    }

    _metas.emplace_back(std::move(meta));
}

auto schema::builder::build() -> schema
{
    std::ranges::sort(_metas, [](const meta_type& a, const meta_type& b) {
        return a.index < b.index;
    });
    _metas.shrink_to_fit();

    schema result(_resource);
    result._dense = std::move(_metas);

    if (!result._dense.empty())
    {
        result._sparse.resize(result._dense.back().index + 1, nullptr);

        for (meta_type& meta : result._dense)
        {
            result._sparse[meta.index] = &meta;
        }
    }

    return result;
}

auto schema::is_defined(size_type index) const noexcept -> bool
{
    return index < _sparse.size() && _sparse[index] != nullptr;
}

auto schema::meta_of(size_type index) const noexcept -> const meta_type&
{
    ANT_ASSERT(is_defined(index), "Component undefined");
    return *_sparse[index];
}

} // namespace ant
