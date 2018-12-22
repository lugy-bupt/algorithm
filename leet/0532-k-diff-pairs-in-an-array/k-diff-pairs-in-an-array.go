func findPairs(nums []int, k int) int {
    if k < 0 { return 0 }
    if len(nums) < 2 {return 0}

    sort.Ints(nums)
    ca := make(map[int]int)
    
    for i := 0; i < len(nums); i++ {
        if v, ok := ca[nums[i] - k]; ok{
            ca[nums[i]] = v + 1
        }else{
            ca[nums[i]] = 1
        }
        
    }
    
    rs := 0
    
    if k == 0 {
        for _, v := range ca {
            if v > 1 {
                rs += 1
            }
        }
    } else {
    
        for i := len(nums) - 1; i >=0 ; i-- {
            if _, ok := ca[nums[i] - k]; ok{
                rs += 1
            }

            for i - 1 >= 0 && nums[i] == nums[i - 1] { i-- }
        }
    }
    
    return rs
}
