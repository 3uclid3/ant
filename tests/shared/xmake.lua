target("ant.test.shared")
    set_kind("static")
    set_group("tests/shared")
    set_default(false)

    add_deps("ant")

    add_includedirs(".", { public = true })
    add_headerfiles("ant.test.shared/**.hpp")
    add_files("ant.test.shared/**.cpp")

