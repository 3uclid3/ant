set_project("ant")
set_version("0.6.0")
set_license("MIT")

set_languages("cxx23")
set_warnings("allextra", "error")

add_rules("mode.debug", "mode.release", "mode.coverage")
add_rules("plugin.compile_commands.autoupdate", { outputdir = "build" })

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

    if is_mode("coverage") then
        add_defines("ANT_ASSERT_ENABLED=0", { public = true })
    end

    on_load(function(t)
        import("core.project.project")
        import("core.base.semver")

        local v = semver.new(project.version())

        t:add("defines", string.format("ANT_VERSION_MAJOR=%d", v:major()), { public = true })
        t:add("defines", string.format("ANT_VERSION_MINOR=%d", v:minor()), { public = true })
        t:add("defines", string.format("ANT_VERSION_PATCH=%d", v:patch()), { public = true })
        t:add("defines", string.format("ANT_VERSION_SEMVER=\"%s\"", tostring(v)), { public = true })
    end)
includes("tests")
