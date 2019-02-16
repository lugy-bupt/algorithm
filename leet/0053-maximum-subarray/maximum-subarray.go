func maxSubArray(nums []int) int {
    
    rs := nums[0]
    mLocal := nums[0]
    
    for i := 1; i < len(nums); i++ {
        mLocal = max(nums[i], nums[i] + mLocal)
        rs = max(rs, mLocal)
    }
    
    return rs
}

func max (i, j int) int {
    if (i > j) {return i}
    return j
}
