target("tpl-cpp.core")
    set_kind("static")
    set_group("lib")

    add_includedirs(".", { public = true })

    add_headerfiles("**.hpp")
    add_files("**.cpp")
    