#include <ant/database/detail/env/env_registry.hpp>

#include <ant/database/detail/component/component_index.hpp>

namespace ant::detail {

env_registry::env_registry(const schema& sch)
    : _schema{sch}
{
    _sparse.resize(sch.range(), component_npos);
}

auto env_registry::at_raw(size_type index) const noexcept -> const void*
{
    ANT_ASSERT(index < _sparse.size(), "index out of bounds");
    const size_type dense_index = _sparse[index];
    return dense_index != component_npos ? _dense[dense_index].ptr.get() : nullptr;
}

auto env_registry::at_raw(size_type index) noexcept -> void*
{
    return const_cast<void*>(std::as_const(*this).at_raw(index));
}

auto env_registry::unset_at(size_type index) -> void
{
    const auto dense_index = _sparse[index];

    if (dense_index != component_npos)
    {
        const bool is_last = dense_index + 1 == _dense.size();
        if (!is_last)
        {
            _dense[dense_index] = std::move(_dense.back());
            _sparse[_dense[dense_index].index] = dense_index;
        }

        _dense.pop_back();
        _sparse[index] = component_npos;
    }
}

} // namespace ant::detail
