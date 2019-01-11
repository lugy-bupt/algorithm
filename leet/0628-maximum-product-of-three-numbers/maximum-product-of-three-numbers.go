func maximumProduct(nums []int) int {
    if len(nums) == 3 {return nums[0] * nums[1] * nums[2]}
    
    sort.Ints(nums)
    
    rs0 := nums[0] * nums[1] * nums[len(nums) - 1]
    rs1 := nums[len(nums) - 1] * nums[len(nums) - 2] * nums[len(nums) - 3]
    
    if(rs0 > rs1) {return rs0}
    return rs1
}
