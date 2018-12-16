func searchRange(nums []int, target int) []int {
    result := make([]int, 2)
    result[0] = -1
    result[1] = -1
    
    if (nums == nil || len(nums) == 0) {return result}
    
    start := 0
    end := len(nums) - 1
    for start < end {
        mid := (start + end) / 2
        
        if nums[mid] == target {
            // found 
            mid1 := mid
            for mid > start && nums[mid] == nums[mid - 1] { mid-- }
            for mid1 < end && nums[mid1] == nums[mid1 + 1] { mid1++ }
            result[0] = mid
            result[1] = mid1
            return result
        } else if nums[mid] > target {
            // get next +
            for mid > start && nums[mid] == nums[mid - 1] { mid-- }
            if mid == start { return result }
            end = mid - 1
        } else {
            // get next -
            for mid < end && nums[mid] == nums[mid + 1] { mid++ }
            if mid == end { return result }
            start = mid + 1
        }
    }
    
    if nums[start] == target {
        result[0] = start
        result[1] = end
    }
    
    return result
}
