set_project("ant")
set_version("0.1.0")
set_license("MIT")

set_languages("cxx23")
set_warnings("allextra", "error")

add_rules("mode.debug", "mode.release", "mode.coverage")
add_rules("plugin.compile_commands.autoupdate", { outputdir = get_config("builddir") })

add_requires("doctest")
if has_config("benchmarks") then
    add_requires("benchmark")
end

option("junit_report")
    set_default(false)
    set_showmenu(true)
    set_description("Enable JUnit XML report generation for tests")

option("benchmarks")
    set_default(false)
    set_showmenu(true)
    set_description("Enable Benchmark test targets")
   
target("ant")
    set_kind("static")
    set_default(true)

    -- version
    set_configdir("$(builddir)/include/ant")
    add_configfiles("include/ant/version.hpp.in", { filename = "version.hpp" })
    add_includedirs("include", { public = true })
    add_headerfiles("$(builddir)/include/(**.hpp)")
    
    -- include
    add_includedirs("$(builddir)/include", { public = true })
    add_headerfiles("include/(**.hpp)")
    add_files("src/**.cpp")

    if is_mode("coverage") then
        add_defines("ANT_ASSERT_ENABLED=0", { public = true })
    end

    on_config(function(target)
        import("core.project.project")
        import("core.base.semver")
        local v = semver.new(project.version())
        target:set("configvar", "VERSION", tostring(v))
        target:set("configvar", "VERSION_MAJOR", v:major())
        target:set("configvar", "VERSION_MINOR", v:minor())
        target:set("configvar", "VERSION_PATCH", v:patch())
    end)
    
includes("tests")
