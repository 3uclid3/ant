set_project("ant")
set_version("v0.1.0")
set_license("MIT")

set_languages("cxx23")
set_exceptions("no-cxx")
set_warnings("allextra", "error")

set_toolchains("llvm")

if is_plat("windows") then
    set_runtimes("MT")
elseif is_plat("linux") then 
    set_runtimes("c++_static")
end

add_rules("mode.debug", "mode.release", "mode.coverage")
add_rules("plugin.compile_commands.autoupdate", { outputdir = "$(builddir)" })

option("junit_report")
    set_default(false)
    set_showmenu(true)
    set_description("Enable JUnit XML report generation for tests")

option("benchmarks")
    set_default(false)
    set_showmenu(true)
    set_description("Enable Benchmark test targets")

target("ant")
    set_kind("headeronly")

    add_includedirs("include", { public = true })
    add_headerfiles("include/**.hpp")
    
includes("tests")
