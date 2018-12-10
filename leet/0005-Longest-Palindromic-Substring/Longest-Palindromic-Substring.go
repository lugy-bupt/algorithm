func longestPalindrome(s string) string {
    if len(s) < 2 {return s}
    
    resultStr := ""
    result := 0
    length := len(s)
    
    i := 0
    
    for i < length {
        j := 1
        for i - j >= 0 && i + j < length {
            if s[i - j] == s[i + j] { 
                j++ 
            } else { break }
        }
        
        tempLength := 2 * (j - 1) + 1
        
        if tempLength >= result {
            result = tempLength
            resultStr = s[i - (j - 1) : i + (j - 1) + 1]
        }
        
        if i < length - 1 && s[i] == s[i + 1] {
            k := 1
            for i - k >= 0 && i + 1 + k < length {
                if s[i - k] == s[i + 1 + k] { 
                    k++ 
                } else { break }
            }
            
            tempLength1 := 2 * k
            
            if tempLength1 >= result {
                result = tempLength1
                resultStr = s[i - (k - 1) : i + (k - 1) + 1 + 1]
            }
        }
        
        i++
    }
    
    return resultStr
    
}
