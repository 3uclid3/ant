import gdb
import gdb.printing


class BasicDynamicBitsetPrinter:
    """Pretty-printer for ant::detail::basic_dynamic_bitset<InplaceCapacity, Allocator>."""

    def __init__(self, val):
        self._val = val.cast(val.type.strip_typedefs())
        self._u64 = gdb.lookup_type("unsigned long long")

    def _blocks_size(self, size_bits):
        return (size_bits + 63) // 64

    def _read_u64(self, field):
        # Field types are nested typedefs (size_type) that GDB sometimes
        # fails to resolve when extracting the value; cast to a concrete
        # integer type first.
        return int(self._val[field].cast(self._u64))

    def _data_ptr(self):
        is_heap = bool(self._val["_is_heap"])
        if is_heap:
            return self._val["_heap"]
        else:
            return self._val["_inplace"][0].address

    def _bit_string(self, size):
        if size == 0:
            return ""
        ptr = self._data_ptr().cast(self._u64.pointer())
        bits = []
        for i in range(self._blocks_size(size)):
            block = int(ptr[i])
            width = min(size - i * 64, 64)
            for b in range(width):
                bits.append("1" if (block >> b) & 1 else "0")
        return "".join(bits)

    def to_string(self):
        size = self._read_u64("_size")
        capacity = self._read_u64("_capacity")
        is_heap = bool(self._val["_is_heap"])
        storage = "heap" if is_heap else "inplace"
        if size == 0:
            return f"[] (empty, capacity={capacity}, {storage})"
        return f"{self._bit_string(size)} (size={size}, capacity={capacity}, {storage})"

    def children(self):
        size = self._read_u64("_size")
        capacity = self._read_u64("_capacity")
        is_heap = bool(self._val["_is_heap"])

        if size == 0:
            yield ("size", size)
            yield ("capacity", capacity)
            yield ("is_heap", is_heap)
            return

        yield ("bits", self._bit_string(size))
        yield ("size", size)
        yield ("capacity", capacity)
        yield ("is_heap", is_heap)

    def display_hint(self):
        return None


def build_pretty_printer():
    pp = gdb.printing.RegexpCollectionPrettyPrinter("ant")
    pp.add_printer(
        "basic_dynamic_bitset",
        r"^ant::detail::basic_dynamic_bitset<",
        BasicDynamicBitsetPrinter,
    )
    return pp


gdb.printing.register_pretty_printer(
    gdb.current_objfile(),
    build_pretty_printer(),
    replace=True,
)
