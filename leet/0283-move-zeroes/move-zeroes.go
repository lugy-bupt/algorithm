func moveZeroes(nums []int)  {
    if nums == nil || len(nums) == 0 {return}
    
    length := len(nums)
    for (true) {
        swap := false
        
        for i := 0; i < length; i++ {
            if i + 1 < length && nums[i] == 0 && nums[i + 1] != 0{
                temp := nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
                swap = true
            }
        }
        
        if (!swap) {break;}
    }
}
