func firstMissingPositive(nums []int) int {
    if(len(nums) == 0) {return 1}
    
    sort.Ints(nums)
    
    rs := 1
    for i := 0; i < len(nums); i++{
        if(nums[i] > 0){
            if(nums[i] > rs){
                break
            }else{
                for i + 1 < len(nums) && nums[i] == nums[i + 1] {i++}
                rs++
            }
        }
    }
    
    return rs
}
