func getRow(rowIndex int) []int {
    rs := make([]int, 1)
    rs[0] = 1
    if (rowIndex == 0){return rs}
    
    for i := 1; i <= rowIndex; i++ {
        temp := make([]int, 1)
		temp[0] = 1
        
        for j := 0; j < len(rs) - 1; j++ {
			temp = append(temp, rs[j] + rs[j +1])
		}
        
        temp = append(temp, 1)
        rs = temp
    }
    
    return rs
}
