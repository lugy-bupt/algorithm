func removeElement(nums []int, val int) int {
    result := 0
    
    if nums == nil || len(nums) == 0 {return result}
    length := len(nums)
    last := length - 1
    for i := 0; i <= last; i++ {
        if nums[i] == val {
            for last > i && nums[last] == val { last -- }
            if last == i {
                break
            } else {
                nums[i] = nums[last]
                last--
                result += 1
            }
        } else{
            result += 1
        }
    }
    
    return result
}
