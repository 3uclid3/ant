add_requires("benchmark")

for _, testfile in ipairs(os.files("ant.test.bench/**.bench.cpp")) do
    local name = path.basename(testfile):gsub("%.bench$", "")
    target("ant." .. name .. ".test.bench")
        set_kind("binary")
        set_default(false)
        set_group("tests/bench")
        add_tests("bench")

        add_deps("ant", "ant.test.shared")
        add_packages("benchmark")

        add_files(testfile)
end
