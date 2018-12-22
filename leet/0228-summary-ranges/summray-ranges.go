func summaryRanges(nums []int) []string {
    rs := make([]string, 0)
    
    if len(nums) == 0 {return rs}
    
    for i := 0; i < len(nums); i++ {
        startIndex := i
        for i + 1 < len(nums) && nums[i + 1] == nums[i] + 1 {
            i++
        } 
        
        if startIndex == i {
            rs = append(rs, strconv.Itoa(nums[i]))
        }else{
            rs = append(rs, strconv.Itoa(nums[startIndex]) + "->" + strconv.Itoa(nums[i]))
        }
    }
    
    return rs
}
