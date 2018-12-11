searchInsert(nums []int, target int) int {
    if nums == nil || len(nums) == 0 {return 0}
    
    start := 0
    end := len(nums) - 1
    
    for start < end {
        mid := (start + end) / 2
        
        if target == nums[mid] {
            return mid
        } else if target > nums[mid] {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    
    if target > nums[start] { return start + 1 }
    return start   
}
