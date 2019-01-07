func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
    length := len(nums)
    
    if(length < 2) {return false}
     
    for i := 0; i < length; i++ {        
        for j := 1; j <= k && i + j < length; j++ {
            r := nums[i + j] - nums[i]
            if(r >= (0 - t) && r <= t){
                return true
            }
        }
    }
    
    return false
}
