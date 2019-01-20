func wordSubsets(A []string, B []string) []string {
    rs := make([]string, 0)
    
    aMap := make([]map[byte]int, len(A))
    for i, str := range A {aMap[i] = word2Map(str)}
    
    bMap := make(map[byte]int)
    for _, str := range B {
        b := word2Map(str)
        for k, v := range b {
            if num, ok := bMap[k]; !ok || num < v { bMap[k] = v } 
        }
    }
    
    for i := 0; i < len(aMap); i++ {
        if(isSubStr(aMap[i], bMap)){ rs = append(rs, A[i]) }
    }
    
    return rs
}

func isSubStr(a map[byte]int, b map[byte]int) bool {
    for k,v := range b{
        if num, ok := a[k]; ok {
            if(v > num) {return false}
        }else{
            return false
        }
    }
    
    return true
}

func word2Map(s string) map[byte]int {
    rs := make(map[byte]int)
    
    for _, r := range s{
        b := byte(r)
        if num, ok := rs[b]; ok{
            rs[b] = num + 1
        }else{
            rs[b] = 1
        }
    }
    
    return rs
}
