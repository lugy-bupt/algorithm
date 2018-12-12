lengthOfLastWord(s string) int {
    
    if len(s) == 0 {return 0}
    
    length := len(s)
    lastResult := 0
    result := 0
    
    for i := 0; i < length; i++ {
        if s[i] == ' ' {
            if result != 0 {
                lastResult = result
                result = 0
            }
        } else {
            result += 1
        }
    }
    
    if result == 0 {return lastResult}
    return result
}
