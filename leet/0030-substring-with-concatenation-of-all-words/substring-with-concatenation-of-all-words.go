func findSubstring(s string, words []string) []int {
    rs := make([]int, 0)

    if len(s) == 0 || len(words) == 0 || len(s) < len(words) * len(words[0]) {return rs}
    
    lens := len(s)
    lenw := len(words)
    lenws := len(words[0])
    
    for i := 0; i < lens; i++ {
        if (lens - i < lenw * lenws) {
            break
        }
        
        stackLength := 0
        list := make([]int, 0)
        start := i
        
        for stackLength < lenw {
            found := false
            for j := 0; j < lenw; j++{
                if (contains(list, j)){
                    continue
                } else if (compare(words[j], s, start)){
                    list = append(list, j)
                    stackLength += 1
                    found = true
                    break
                } 
            }
            
            if (found){
                start += lenws
            } else {
                break
            }
        }
        
        if stackLength == lenw {rs = append(rs, i)}
    }
    
    return rs
}

func contains(list []int, n int) bool {
    for _, x := range list {
        if (x == n) {return true}
    }
    return false
}

func compare(word string, s string, start int) bool{
    for i := 0; i < len(word); i++ {
        if word[i] != s[start + i] {return false}
    }
    return true
}
