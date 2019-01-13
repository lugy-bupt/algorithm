func findDuplicate(nums []int) int {
    if(len(nums) < 2) {return -1}
    
    sort.Ints(nums)
    
    last := nums[0]
    
    for i := 1; i < len(nums); i++ {
        if(nums[i] == last){
            return nums[i]
        }else {
            last = nums[i]
        }
    }
    
    return -1
}
