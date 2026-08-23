#pragma once

namespace ant {

struct component_vtable
{
    using default_construct_fn = void (*)(void* src);
    using relocate_fn = void (*)(void* dst, void* src) noexcept;
    using clone_fn = void (*)(void* dst, const void* src);
    using destroy_fn = void (*)(void* src) noexcept;

    default_construct_fn default_construct{nullptr};
    relocate_fn relocate{nullptr};
    clone_fn clone{nullptr};
    destroy_fn destroy{nullptr};
};

} // namespace ant
