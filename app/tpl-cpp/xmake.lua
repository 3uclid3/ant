target("tpl-cpp")
    set_kind("binary")
    set_group("app")

    add_deps(
        "tpl-cpp.core"
    )

    add_files("main.cpp")
