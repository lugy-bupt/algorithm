func findErrorNums(nums []int) []int {
    n := len(nums)
    cache := make(map[int]int)
    
    rs := []int{0,0}
    for i := 1; i <= n; i++ {
        cache[i] = 1
    }
    
    for i := 0; i < n; i++{
        if _, ok := cache[nums[i]]; ok {
            delete(cache, nums[i])
        } else{
            rs[0] = nums[i]
        }
    }
    
    for k, _ := range cache {
        rs[1] = k
    }
    
    return rs
}
