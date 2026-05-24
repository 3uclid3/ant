#include <ant/detail/env/env_registry.hpp>

#include <ant/detail/component/component_index.hpp>

namespace ant::detail {

env_registry::env_registry(const schema& sch, std::pmr::memory_resource* resource)
    : _schema(sch)
    , _dense(resource)
    , _sparse(resource)
    , _resource(resource)
{
    _sparse.resize(sch.range(), component_npos);
}

env_registry::~env_registry()
{
    for (auto& var : _dense)
    {
        if (var.meta->vtable.destroy)
        {
            var.meta->vtable.destroy(var.ptr);
        }

        _resource->deallocate(var.ptr, var.meta->size, var.meta->alignment);
    }
}

auto env_registry::at_raw(size_type index) const noexcept -> const void*
{
    ANT_ASSERT(index < _sparse.size(), "index out of bounds");
    const size_type dense_index = _sparse[index];
    return dense_index != component_npos ? _dense[dense_index].ptr : nullptr;
}

auto env_registry::at_raw(size_type index) noexcept -> void*
{
    return const_cast<void*>(std::as_const(*this).at_raw(index));
}

auto env_registry::unset(const component_meta& meta) -> void
{
    ANT_ASSERT(_schema.get().is_defined(meta.index), "component undefined");

    const std::size_t dense_index = _sparse[meta.index];

    if (dense_index == component_npos)
    {
        return;
    }

    if (dense_index + 1 != _dense.size())
    {
        _sparse[_dense.back().meta->index] = std::exchange(_sparse[meta.index], component_npos);
        std::swap(_dense[dense_index], _dense.back());
    }
    else
    {
        _sparse[meta.index] = component_npos;
    }

    if (meta.vtable.destroy != nullptr)
    {
        meta.vtable.destroy(_dense.back().ptr);
    }

    _resource->deallocate(_dense.back().ptr, meta.size, meta.alignment);

    _dense.pop_back();
}

} // namespace ant::detail
