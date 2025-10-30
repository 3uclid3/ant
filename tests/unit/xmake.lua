target("ant.test.unit")
    set_kind("binary")
    set_default(false)
    set_group("tests/unit")

    add_tests("unit", {runargs = get_tests_runargs("ant.test.unit") })

    add_deps("ant", "ant.test.shared")
    add_packages("doctest")

    if is_plat("windows") then
        set_runtimes("MD")
    end
    
    add_defines("DOCTEST_CONFIG_USE_STD_HEADERS")

    add_includedirs(".")
    add_files("ant.test.unit/**.cpp")
    