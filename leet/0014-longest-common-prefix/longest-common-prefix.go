func longestCommonPrefix(strs []string) string {
    
    if len(strs) == 0 {return ""}
    if len(strs) == 1 {return strs[0]}
    
    result := ""
    str := strs[0]
    
    for i := 0; i < len(str); i++ {
        char := str[i]
        for ii := 1; ii < len(strs) ; ii++ {
            s := strs[ii]
            if len(s) <= i { return result }
            if s[i] != char { return result }
        }
        result += string(char)
    }
    
    return result
}
