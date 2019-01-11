func matrixReshape(nums [][]int, r int, c int) [][]int {
    m := len(nums)
    m1 := len(nums[0])
    
    if(m * m1 != r * c) {return nums}
    
    rs := make([][]int, 0)
    row := make([]int, 0)
    
    for _, ns := range nums {
        for _, n := range ns {
            row = append(row, n)
            if(len(row) == c){
                rs = append(rs, row)
                row = make([]int, 0)
            }
        }
    }
    
    return rs
}
