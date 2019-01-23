func numJewelsInStones(J string, S string) int {
    if len(J) == 0 || len(S) == 0 {return 0}
    
    jMap := make(map[byte]int)
    for i := 0; i < len(J); i++ {
        jMap[J[i]] = 1
    }
    
    rs := 0
    
    for i := 0; i < len(S); i++ {
        if _, ok := jMap[S[i]]; ok {
            rs += 1
        }
    }
    
    return rs;
}
