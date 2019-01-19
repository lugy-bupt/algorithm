func maxProduct(words []string) int {
    if(len(words) < 2) {return 0}
    
    //sort.Sort(wordSlice(words))
    
    rs := 0
    
    for i := 0; i < len(words); i++ {
        chars := make(map[byte]int)
        for j := 0; j < len(words[i]); j++ {
            chars[words[i][j]] = 1
        }
        
        for k := i + 1; k < len(words); k++ {
            found := false
            for m := 0; m < len(words[k]); m++ {
                if _, ok := chars[words[k][m]]; ok {
                    found = true
                    break;
                }
            }
            
            if(!found) {
                temp := len(words[i]) * len(words[k])
                
                if(rs < temp) {rs = temp}
            }
        }
    }
    
    return rs
}
