add_requires("doctest")

-- Helper to build JUnit output path for a target
function junit_out(targetname)
    return path.join(os.projectdir(), "build", string.format("%s.junit.xml", targetname))
end

target("tpl-cpp.doctest")
    set_kind("static")
    set_group("tests.utility")
    set_default(false)
    
    add_packages("doctest", {public = true})
    
    add_defines("DOCTEST_CONFIG_USE_STD_HEADERS", {public = true})
    
    add_files("main.cpp")
