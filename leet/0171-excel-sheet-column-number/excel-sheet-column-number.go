func titleToNumber(s string) int {
    if len(s) == 0 {return 0}
    
    rs := 0
    for i := 0; i < len(s); i++ {
        rs = rs * 26 + int(s[i] - 'A') + 1
    }
    
    return rs
}
