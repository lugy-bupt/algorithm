func subsets(nums []int) [][]int {
    rs := make([][]int, 0)
    temp := make([]int, 0)
    rs = append(rs, temp)
    
    if(len(nums) == 0) {
        return rs
    }
    
    for i := 0; i < len(nums); i++ {
        tempRs := make([][]int, 0)
        
        for j := 0; j < len(rs); j++ {
            temp1 := make([]int, len(rs[j]))
            copy(temp1, rs[j])        
            
            temp1 = append(temp1, nums[i])
            tempRs = append(tempRs, temp1)
        }
        
        rs = append(rs, tempRs...)
    } 
    
    return rs
}
