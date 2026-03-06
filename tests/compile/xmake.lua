for _, testfile in ipairs(os.files("src/**.compile.pass.cpp")) do
    local name = path.basename(testfile):gsub("%.compile.pass$", "")
    target("ant." .. name .. ".compile.pass")
        set_kind("object")
        set_default(false)
        set_group("compile")
        add_tests("compile", {build_should_pass = true})

        add_deps("ant")

        add_files(testfile)
end

for _, testfile in ipairs(os.files("src/**.compile.fail.cpp")) do
    local name = path.basename(testfile):gsub("%.compile.fail$", "")
    target("ant." .. name .. ".compile.fail")
        set_kind("object")
        set_default(false)
        set_group("compile")
        add_tests("compile", {build_should_fail = true})

        set_warnings("none")

        add_deps("ant")

        add_files(testfile)
end
