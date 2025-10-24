add_requires("doctest")

function get_tests_runargs(name)
    if has_config("junit_report") then
        return {
            "--reporters=junit",
            "--out=" .. path.join(os.projectdir(), "build", string.format("%s.junit.xml", name))
        }
    else 
        return {}
    end
end

includes(
    "benchmark",
    "compile",
    "shared", 
    "unit"
)