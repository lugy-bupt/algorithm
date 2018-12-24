func generate(numRows int) [][]int {
    rs := make([][]int, 0)
    if (numRows == 0 ){return rs}
	
    if( numRows >= 1) {
        rs0 := []int{1}
        rs = append(rs, rs0)
    }
    if (numRows >= 2) {
        rs1 := []int{1,1}
        rs = append(rs, rs1)
    }
	
	for i := 2; i < numRows; i++ {
		last := rs[i - 1]
		
		temp := make([]int, 1)
		temp[0] = 1

		for j := 0; j < len(last) - 1; j++ {
			temp = append(temp, last[j] + last[j +1])
		}
		
		temp = append(temp, 1)
        rs = append(rs, temp)
	}
	
	return rs
}
