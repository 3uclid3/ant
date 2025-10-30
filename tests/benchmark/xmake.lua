local function get_runargs(name)
    return {
        "--benchmark_format=json",
        "--benchmark_out=" .. path.join(os.projectdir(), "build", string.format("%s.bench.json", name))
    }
end

if has_config("benchmarks") then
    add_requires("benchmark")

    for _, testfile in ipairs(os.files("ant.test.bench/**.bench.cpp")) do
        local name = path.basename(testfile):gsub("%.bench$", "")
        target("ant." .. name .. ".test.bench")
            set_kind("binary")
            set_default(false)
            set_group("tests/bench")
            add_tests("bench", {runargs = get_runargs(name)})

            add_deps("ant", "ant.test.shared")
            add_packages("benchmark")

            if is_plat("windows") then
                set_runtimes("MD")
            end

            add_files(testfile)
    end
end
