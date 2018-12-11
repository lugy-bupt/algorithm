func strStr(haystack string, needle string) int {
    if len(needle) == 0 {return 0}
    if len(haystack) == 0 {return -1}
    
    for i := 0; i < len(haystack); i++ {
        allSame := true
        for j := 0; j < len(needle); j++ {
            if(i + j >= len(haystack)){
                return -1
            } else if(haystack[i + j] != needle[j]){
                allSame = false
                break;
            }
        }
        
        if(allSame) {return i}
    }
    
    return -1
}
