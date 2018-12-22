func grayCode(n int) []int {
    if n == 0 {return []int{0}}   
    
    rs := [][]int{[]int{0}, []int{1}}
    
    for i := 2; i <= n; i++ {
        tempRs := make([][]int, 0)
        
        for j := 0; j < len(rs); j++ {
            rsj := make([]int, len(rs[j]))
            copy(rsj, rs[j])
            rsj = append(rsj, 0)
            tempRs = append(tempRs, rsj)
        }
        for j := len(rs) - 1; j >=0 ; j-- {
            rsj := make([]int, len(rs[j]))
            copy(rsj, rs[j])
            rsj = append(rsj, 1)
            tempRs = append(tempRs, rsj)
        }
        
        rs = tempRs
    }
    
    result := make([]int, len(rs))
    for j := 0; j < len(rs); j++ {
        result[j] = binaryInt(rs[j])
    }
    
    return result
}

func binaryInt(arr []int) int {
    rs := 0
    for i := 0; i < len(arr); i++ {
        rs = rs * 2 + arr[i]
    }
    return rs
}
