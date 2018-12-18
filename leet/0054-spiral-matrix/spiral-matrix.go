func spiralOrder(matrix [][]int) []int {
    rs := make([]int, 0)

    if len(matrix) == 0 { return rs }
	
	i, j := 0, 0
    ic, jc := 0, 1
	is, ie, js, je := 0, len(matrix) - 1, 0, len(matrix[0]) - 1
	
    for len(rs) < len(matrix) * len(matrix[0]) {
		rs = append(rs, matrix[i][j])
		if (j == je && ic == 0 && jc == 1){
			ic = 1
			jc = 0
			is += 1
		}
        if (i == ie && ic == 1 && jc == 0) {
			ic = 0
			jc = -1
			je -= 1
        }
        if (j == js && ic == 0 && jc == -1){
			ic = -1
			jc = 0
            ie -= 1
		}

        if(i == is && ic == -1 && jc == 0){
		    ic = 0
			jc = 1
            js += 1
		}
        
		i = i + ic
		j = j + jc
	}
	
	return rs
}
