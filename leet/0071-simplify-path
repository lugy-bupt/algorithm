func simplifyPath(path string) string {
    if (len(path) == 0) {return path}
    
    strs := strings.Split(path, "/")
    rs := make([]string, 0)
    for _, str := range strs {
        if(str == "..") {
            if len(rs) > 0 { rs = rs[0: len(rs) - 1] }
        } else if(str != "" && str != "."){
            rs = append(rs, str)
        }
    }
    
    if(len(rs) == 0) {return "/"}
    
    result := ""
    for _, r := range rs {
        result = result + "/" + r 
    }
    
    return result
}
