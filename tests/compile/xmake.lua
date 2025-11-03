for _, testfile in ipairs(os.files("ant.test.compile/**.compile.pass.cpp")) do
    local name = path.basename(testfile):gsub("%.compile.pass$", "")
    target("ant." .. name .. ".test.compile.pass")
        set_kind("object")
        set_default(false)
        set_group("tests/compile")
        add_tests("compile", {build_should_pass = true})

        add_deps("ant", "ant.test.shared")

        add_files(testfile)
end

-- Ensure that they can compile without their problematic line(s)
for _, testfile in ipairs(os.files("ant.test.compile/**.compile.fail.cpp")) do
    local name = path.basename(testfile):gsub("%.compile.fail$", "")
    target("ant." .. name .. ".test.compile.force-pass")
        set_kind("object")
        set_default(false)
        set_group("tests/compile")
        add_tests("compile", {build_should_pass = true})

        set_warnings("none")
        add_defines("ANT_COMPILE_TEST_FORCE_PASS")

        add_deps("ant", "ant.test.shared")

        add_files(testfile)
end

for _, testfile in ipairs(os.files("ant.test.compile/**.compile.fail.cpp")) do
    local name = path.basename(testfile):gsub("%.compile.fail$", "")
    target("ant." .. name .. ".test.compile.fail")
        set_kind("object")
        set_default(false)
        set_group("tests/compile")
        add_tests("compile", {build_should_fail = true})

        set_warnings("none")

        add_deps("ant", "ant.test.shared")

        add_files(testfile)
end
