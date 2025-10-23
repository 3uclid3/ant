add_requires("benchmark")

target("tpl-cpp.benchmark")
    set_kind("phony")
    set_group("tests.utility")
    set_default(false)

    add_packages("benchmark", {public = true})
