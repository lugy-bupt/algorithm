func numDecodings(s string) int {
    if len(s) > 0 && s[0] == '0' {return 0}
    if len(s) < 2 {return 1}
    
    if (s[0] > '2') {
        return numDecodings(s[1:])
    } else {        
        if (s[0] == '1'){
            return numDecodings(s[1:]) + numDecodings(s[2:])
        } else {
            if (s[1] > '6') {return numDecodings(s[1:])}
            return numDecodings(s[1:]) + numDecodings(s[2:])
        }
    }
}
