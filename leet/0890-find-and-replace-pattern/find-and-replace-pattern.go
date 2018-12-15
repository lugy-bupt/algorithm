func findAndReplacePattern(words []string, pattern string) []string {
    if len(words) == 0 {return words}
    
    result := make([]string, 0)
    
    for i := 0; i < len(words); i++ {
        if (matchPattern(words[i], pattern)) {
            result = append(result, words[i])
        }
    }
    
    return result
}

func matchPattern(word string, pattern string) bool {
    dict := make(map[byte]byte, 0)
    dict1 := make(map[byte]byte, 0)
    
    wordLen := len(word)
    patLen := len(pattern)
    
    if patLen == wordLen {
        for i := 0; i < patLen; i++{
            b, ok := dict[pattern[i]]
            c, ok1 := dict1[word[i]]
            
            if ok != ok1 {return false}
            
            if ok && b != word[i]  { 
                return false 
            }
            if ok1 && (c != pattern[i]){
                return false
            }
            if (!ok && !ok1) { 
                dict[pattern[i]] = word[i] 
                dict1[word[i]] = pattern[i]
            }
        }
        return true
    } else {
        return false
    }
}
