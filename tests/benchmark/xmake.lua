if has_config("benchmarks") then
    local function get_runargs(name)
        return {
            "--benchmark_format=json",
            "--benchmark_out=" .. path.join(os.projectdir(), "build", string.format("%s.bench.json", name))
        }
    end

    for _, testfile in ipairs(os.files("src/**.bench.cpp")) do
        local name = path.basename(testfile):gsub("%.bench$", "")
        target("ant." .. name .. ".bench")
            set_kind("binary")
            set_default(false)
            set_group("bench")
            add_tests("bench", {runargs = get_runargs(name)})

            add_deps("ant")
            add_packages("benchmark")

            if is_plat("windows") then
                set_runtimes("MD")
            end

            add_files(testfile)
    end
end
