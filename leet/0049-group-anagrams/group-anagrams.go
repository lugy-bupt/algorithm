func groupAnagrams(strs []string) [][]string {
    rs := make([][]string, 0)
    if len(strs) == 0 {return rs}
    
    maps := make([]Word, 1)
    maps[0] = Word{m : str2map(strs[0]), length : len(strs[0])}
    list0 := make([]string, 1)
    list0[0] = strs[0]
    rs = append(rs, list0)
    
    for i := 1; i < len(strs); i++ {
        found := false
        for j := 0; j < len(maps); j++ {
            if (isAnagrams(maps[j], strs[i])) {
                rs[j] = append(rs[j], strs[i])
                found = true
                break;
            } 
        }
        
        if(!found){
            m := Word{m : str2map(strs[i]), length : len(strs[i])}
            maps = append(maps, m)
            l := make([]string, 1)
            l[0] = strs[i]
            rs = append(rs, l)
        }
    }
    
    return rs
}

func str2map(str string) map[byte]int{
    rs := make(map[byte]int)
    
    for i:= 0; i < len(str); i++ {
        b := str[i]
        if num, ok := rs[b]; (ok) {
            rs[b] = num + 1
        } else {
            rs[b] = 1
        }
    }
    
    return rs
}

func isAnagrams(word Word, str string) bool{
    
    if word.length == len(str) {
        rs := make(map[byte]int)
        for k,v := range word.m {
          rs[k] = v
        }
        
        for i:= 0; i < len(str); i++ {
            b := str[i]
            if num, ok := rs[b]; (ok) {
                rs[b] = num - 1
                
                if(num == 1) {delete(rs, b)}
                
            } else {
                return false
            }
        }
        
        return true
    } 
    
    return false
}


type Word struct {
    m map[byte]int
    length int
}
