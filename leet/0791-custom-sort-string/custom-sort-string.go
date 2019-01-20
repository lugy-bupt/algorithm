var cp map[byte]int

func customSortString(S string, T string) string {
    if(len(S) == 0) {return T}
    
    cp = make(map[byte]int)
    for i, num := range S { cp[byte(num)] = i }
    
    rs := []byte(T)
    sort.Sort(sortSlice(rs))
    return string(rs)
}

type sortSlice []byte

func (s sortSlice) Len() int {return len(s)}
func (s sortSlice) Swap(i,j int) {s[i], s[j] = s[j], s[i]}
func (s sortSlice) Less(i,j int) bool {
    numi, oki := cp[s[i]]
    numj, okj := cp[s[j]]
    
    if(!oki) { return true }
    if(!okj) { return false}
    
    return numi < numj
}
